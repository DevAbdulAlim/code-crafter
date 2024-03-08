"use client";
import { Button } from "@/components/ui/button";
import { signOut } from "next-auth/react";

export default function SignOut() {
  const handleLogout = async () => {
    try {
      await signOut();
    } catch (error) {
      console.error(error);
    }
  };
  return <Button onClick={handleLogout}>Logout</Button>;
}
