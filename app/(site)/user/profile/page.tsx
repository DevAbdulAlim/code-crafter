import { getServerSession } from "next-auth/next"
import { authOptions } from "@/lib/auth"
import { redirect } from "next/navigation"
import prisma from "@/lib/prisma"
import ProfileContent from "./profile-content"

export default async function ProfilePage() {
  const session = await getServerSession(authOptions)

  if (!session?.user?.email) {
    redirect("/api/auth/signin?callbackUrl=/profile")
  }

  // Find the user by email
  const user = await prisma.user.findUnique({
    where: { email: session.user.email },
  })

  if (!user) {
    redirect("/api/auth/signin?callbackUrl=/profile")
  }

  return <ProfileContent user={user} />
}

