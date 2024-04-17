import NextAuth from "next-auth";
import GitHub from "next-auth/providers/github";
import Credentials from "next-auth/providers/credentials";
import { connectToDb } from "./utils";
import { User } from "./model";
import bcrypt from "bcryptjs";
import { authConfig } from "./auth.config";

const login = async (credentials) => {
    try {
      connectToDb();
      const user = await User.findOne({ email: credentials.email });
  
      if (!user) throw new Error("Wrong credentials!");
  
      const isPasswordCorrect = await bcrypt.compare(
        credentials.password,
        user.password
      );
  
      if (!isPasswordCorrect) throw new Error("Wrong credentials!");
  
      return user;
    } catch (err) {
      console.log(err);
      throw new Error("Failed to login!");
    }
  };
  
 
export const { handlers, signIn, signOut, auth } = NextAuth({
  ...authConfig,
  providers: [
    GitHub({
        clientId: process.env.GITHUB_CLIENT_ID,
        clientSecret: process.env.GITHUB_CLIENT_SECRET,
    }),
    Credentials({
        async authorize(credentials) {
          try {
            const user = await login(credentials);
            return user;
          } catch (error) {
            console.log(error);
            return null;
          }
        },
      }),
  ],
  callbacks: {
    async signIn({user, account, profile}) {
        console.log(profile);
        if(account.provider === "github") {
            connectToDb();
            try {
                const user = await User.findOne({email: profile.email});

                if(!user) {
                    const newUser = new User({
                        username: profile.login,
                        email: profile.email,
                        image: profile.avatar_url,
                    });

                    await newUser.save();
                };
            } catch (error) {
                console.log(error);
                return false
            }
        }
        return true
    },
    ...authConfig.callbacks,
  }
});