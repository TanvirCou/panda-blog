import { Post, User } from "./model";
import { connectToDb } from "./utils";
import { unstable_noStore as noStore } from "next/cache";

export const getPosts = async() => {
    try {
        connectToDb();
        const posts = await Post.find();
        return posts;
    } catch(err) {
        console.log(err);
    }
};

export const getSinglePost = async(slug) => {
    try {
        connectToDb();
        const posts = await Post.findOne({slug});
        return posts;
    } catch(err) {
        console.log(err);
    }
};

export const getUsers = async() => {
    try {
        connectToDb();
        const users = await User.find();
        return users;
    } catch(err) {
        console.log(err);
    }
};

export const getSingleUser = async(id) => {
    noStore();
    try {
        connectToDb();
        const user = await User.findById(id);
        return user;
    } catch(err) {
        console.log(err);
    }
};
