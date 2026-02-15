"use server"

import { prisma } from "@/lib/prisma"
import { auth } from "@/lib/auth"
import { revalidatePath } from "next/cache"
import { writeFile, unlink } from "fs/promises"
import path from "path"

const ALLOWED_TYPES = ["image/jpeg", "image/png", "image/webp", "image/gif"]
const UPLOAD_DIR = path.join(process.cwd(), "public/uploads")

async function requireAuth() {
  const session = await auth()
  if (!session?.user) throw new Error("Non autorizzato")
  return session
}

export async function getAllImages() {
  return prisma.siteImage.findMany({
    orderBy: { sortOrder: "asc" },
  })
}

export async function uploadImage(formData: FormData) {
  await requireAuth()

  const file = formData.get("file") as File
  const altText = (formData.get("altText") as string) || ""
  const section = (formData.get("section") as string) || "general"

  if (!file || file.size === 0) {
    return { error: "Nessun file selezionato." }
  }

  if (!ALLOWED_TYPES.includes(file.type)) {
    return { error: "Tipo di file non supportato. Usa JPG, PNG, WebP o GIF." }
  }

  const ext = file.name.split(".").pop()
  const filename = `${Date.now()}-${Math.random().toString(36).substring(2, 8)}.${ext}`
  const filepath = path.join(UPLOAD_DIR, filename)

  const bytes = await file.arrayBuffer()
  await writeFile(filepath, Buffer.from(bytes))

  const maxSort = await prisma.siteImage.aggregate({
    _max: { sortOrder: true },
  })

  await prisma.siteImage.create({
    data: {
      filename,
      path: `/uploads/${filename}`,
      altText,
      section,
      sortOrder: (maxSort._max.sortOrder ?? -1) + 1,
    },
  })

  revalidatePath("/admin/images")
  return { success: true }
}

export async function deleteImage(id: string) {
  await requireAuth()

  const image = await prisma.siteImage.findUnique({ where: { id } })
  if (!image) return { error: "Immagine non trovata." }

  // Delete file from disk
  try {
    const filepath = path.join(UPLOAD_DIR, image.filename)
    await unlink(filepath)
  } catch {
    // File may not exist, continue with DB cleanup
  }

  await prisma.siteImage.delete({ where: { id } })
  revalidatePath("/admin/images")
  return { success: true }
}
