"use server"

import { signIn, signOut } from "./auth";
import { Post, User } from "./model";
import { connectToDb } from "./utils";
import { revalidatePath } from 'next/cache';
import bcrypt from "bcryptjs";

export const addPost = async(prevState, formData) => {
    const { title, desc, userId, slug} = Object.fromEntries(formData);

    try {
        connectToDb();

        const newPost = new Post({title, desc, userId, slug});
        await newPost.save();
        console.log("Saved to db");
        revalidatePath("/blogs");
        revalidatePath("/admin");
    } catch (error) {
        console.log(error);
    }
}

export const deletePost = async(formData) => {
    const id = formData.get("id");

    try {
        connectToDb();
        await Post.findByIdAndDelete(id);
        console.log("deleted from db");
        revalidatePath("/blogs");
    } catch (error) {
        console.log(error);
    }
};

export const addUser = async(prevState, formData) => {
  const { username, email, password, img, confirmPassword, isAdmin } = Object.fromEntries(formData);
  console.log(isAdmin);
  
    if (password !== confirmPassword) {
      return { error: "Passwords do not match" };
    }

    try {
      connectToDb();
  
      const user = await User.findOne({ username });
  
      if (user) {
        return { error: "Username already exists" };
      }
  
      const salt = await bcrypt.genSalt(10);
      const hashedPassword = await bcrypt.hash(password, salt);
  
      const newUser = new User({
        username,
        email,
        password: hashedPassword,
        img,
        isAdmin
      });
  
      await newUser.save();
      console.log("saved to db");
      revalidatePath("/admin");
      return { success: true };
    } catch (err) {
      console.log(err);
      return { error: "Something went wrong!" };
    }
}

export const deleteUser = async(formData) => {
  const id = formData.get("id");
  console.log(id);

  try {
      connectToDb();
      await Post.deleteMany({ userId: id });
      await User.findByIdAndDelete(id);
      console.log("deleted from db");
      revalidatePath("/admin");
  } catch (error) {
      console.log(error);
  }
};

export const handleGithubLogin = async() => {
    await signIn("github");
};

export const handleLogout = async() => {
    await signOut();
};

export const handleRegister = async (prevState, formData) => {
    const { username, email, password, img, confirmPassword } = Object.fromEntries(formData);
  
    if (password !== confirmPassword) {
      return { error: "Passwords do not match" };
    }
  
    try {
      connectToDb();
  
      const user = await User.findOne({ username });
  
      if (user) {
        return { error: "Username already exists" };
      }
  
      const salt = await bcrypt.genSalt(10);
      const hashedPassword = await bcrypt.hash(password, salt);
  
      const newUser = new User({
        username,
        email,
        password: hashedPassword,
        img,
      });
  
      await newUser.save();
      console.log("saved to db");
  
      return { success: true };
    } catch (err) {
      console.log(err);
      return { error: "Something went wrong!" };
    }
  };

export const handleLogin = async (prevState, formData) => {
    const { email, password } = Object.fromEntries(formData);
  
    try {
      await signIn("credentials", { email, password });
    } catch (err) {
      console.log(err);
      // return { error: "Invalid username or password" };
      if (err.message.includes("CredentialsSignin")) {
        return { error: "Invalid username or password" };
      }
      throw err;
    }
  };
