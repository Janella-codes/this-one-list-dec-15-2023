'use server'

import { PrismaClient } from "@prisma/client";
import { revalidatePath } from "next/cache";

export const addPost = async (formData: FormData) => {
    
    const prisma = new PrismaClient();
    const content = formData.get('content');

    const posts = await prisma.post.findMany({
        orderBy: {
          createdAt: "asc",
        },
      });
    
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

    export const GetPosts = async (formData: FormData) => {
        const prisma = new PrismaClient();
        const content = formData.get('content');
    
        try { 
       await prisma.post.findMany({
        orderBy: {
            createdAt: "desc",
        },
        select: {
            id: true,
            content: true,
            createdAt: true,
            updatedAt: true,
            // Add other properties here if needed
        },
        where: {
            content: content as string,
        },

    });
  } catch (e) {

  }

    revalidatePath("/postContent")
    };



const getUsersWithPosts = async () => {
    const prisma = new PrismaClient();
  
    const usersWithPosts = await prisma.post.findMany({
      orderBy: {
        createdAt: "desc",
      },
      select: {
        id: true,
        content: true,
        createdAt: true,
        updatedAt: true,
        // Add other properties here if needed
      },
    });
  
    return usersWithPosts;
  };
  
  getUsersWithPosts();