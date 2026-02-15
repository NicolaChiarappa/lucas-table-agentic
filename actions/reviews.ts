"use server"

import { prisma } from "@/lib/prisma"
import { auth } from "@/lib/auth"
import { revalidatePath } from "next/cache"

async function requireAuth() {
  const session = await auth()
  if (!session?.user) throw new Error("Non autorizzato")
  return session
}

export async function getApprovedReviews() {
  return prisma.review.findMany({
    where: { approved: true },
    orderBy: { date: "desc" },
  })
}

export async function getAllReviews() {
  return prisma.review.findMany({
    orderBy: { date: "desc" },
  })
}

export async function submitReview(formData: FormData) {
  const name = formData.get("name") as string
  const rating = parseInt(formData.get("rating") as string)
  const comment = formData.get("comment") as string

  if (!name || !comment || !rating) {
    return { error: "Tutti i campi sono obbligatori." }
  }

  const now = new Date()
  const date = `${String(now.getDate()).padStart(2, "0")}/${String(now.getMonth() + 1).padStart(2, "0")}/${now.getFullYear()}`

  await prisma.review.create({
    data: {
      name,
      rating,
      comment,
      date,
      approved: false,
    },
  })

  revalidatePath("/")
  return { success: true }
}

export async function approveReview(id: string) {
  await requireAuth()
  await prisma.review.update({
    where: { id },
    data: { approved: true },
  })
  revalidatePath("/admin/reviews")
  revalidatePath("/")
}

export async function deleteReview(id: string) {
  await requireAuth()
  await prisma.review.delete({ where: { id } })
  revalidatePath("/admin/reviews")
  revalidatePath("/")
}
