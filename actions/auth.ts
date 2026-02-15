"use server"

import { signIn, signOut } from "@/lib/auth"
import { AuthError } from "next-auth"

export async function loginAction(
  prevState: { error: string } | undefined,
  formData: FormData
) {
  try {
    await signIn("credentials", {
      email: formData.get("email") as string,
      password: formData.get("password") as string,
      redirectTo: "/admin",
    })
  } catch (error) {
    if (error instanceof AuthError) {
      switch (error.type) {
        case "CredentialsSignin":
          return { error: "Email o password non validi." }
        default:
          return { error: "Si è verificato un errore. Riprova." }
      }
    }
    throw error
  }
}

export async function logoutAction() {
  await signOut({ redirectTo: "/admin/login" })
}
