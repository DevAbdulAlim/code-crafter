"use server";

import prisma from "@/config/prisma";
import { revalidatePath, revalidateTag } from "next/cache";

// const getAllCourses = async (page: number, pageSize: number) => {
//   try {
//     const skip = (page - 1) * pageSize;
//     const take = pageSize;
//     const data = await prisma.course.findMany({
//         skip,
//         take,
//     });
//     console.log(data);
//     revalidateTag('/')
//     return data;
//   } catch (err) {
//     console.error("Oh no, something went wrong!", err);
//   }
// };


const getAllCourses = async (prevState: any, formData: FormData) => {
    const data = await prisma.course.findMany();
    revalidatePath('/')
    return data;
}

export default getAllCourses;
