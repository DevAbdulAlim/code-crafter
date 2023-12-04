"use server";

import prisma from "@/config/prisma";
import { revalidatePath } from "next/cache";
import { z } from "zod";



export async function createCourse(prevState: any, formData: FormData) {
  const schema = z.object({
    title: z.string().min(1),
    description: z.string().min(1),
  });
  const parse = schema.safeParse({
    title: formData.get("title"),
    description: formData.get("description"),
  });

  if (!parse.success) {
    return { message: "Failed to create todo" };
  }

  const data = parse.data;

  const result = await prisma.course.create({
    data: {
        title: data.title,
        description: data.description,
        categoryId: '1', 
    }
  })

  revalidatePath('/')
  return result;
}
