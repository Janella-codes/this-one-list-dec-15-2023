'use server'

import { PrismaClient } from "@prisma/client";
import { revalidatePath } from "next/cache";

export const addPost = async (formData: FormData) => {
    
    const prisma = new PrismaClient();
    const content = formData.get('content');

    
    try { 
      
      await prisma.post.create({
      data: {
        content: content as string,
      },
    });
  } catch (e) {

  }

    revalidatePath("/postContent")
  };