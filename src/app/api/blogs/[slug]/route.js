import { Post } from "@/lib/model";
import { connectToDb } from "@/lib/utils"
import { NextResponse } from "next/server";

export const dynamic = 'force-dynamic' // defaults to auto
export async function GET(request, {params}) {
    const {slug} = params;
    try {
        connectToDb();
        const post = await Post.findOne({slug});
        return NextResponse.json({post});
    } catch (error) {
        console.log(error);
    }
}