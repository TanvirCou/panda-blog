import { Post } from "@/lib/model";
import { connectToDb } from "@/lib/utils"
import { NextResponse } from "next/server";

export const dynamic = 'force-dynamic' // defaults to auto
export async function GET(request) {
    try {
        connectToDb();

    const posts = await Post.find();
    return NextResponse.json({posts});
    } catch (error) {
        console.log(error);
    }
}