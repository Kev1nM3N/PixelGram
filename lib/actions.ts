'use server'

import prisma from "@/lib/prisma";
import { getUserId } from "@/lib/utils";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { z } from "zod";
import {
  BookmarkSchema,
  CreateComment,
  CreatePost,
  DeleteComment,
  DeletePost,
  FollowUser,
  LikeSchema,
  UpdatePost,
  UpdateUser,
} from "./schemas";

//6:03:08

export async function getPosts (values: z.infer<typeof CreatePost>){
    const userId = await getUserId();

    const validatedFields = CreatePost.safeParse(values);

    if (!validatedFields.success){
        return {
            errors: validatedFields.error.flatten().fieldErrors,
            message: "Missing fields. Failed to create post."
        }
    }

    const {fileUrl, caption} = validatedFields.data
}