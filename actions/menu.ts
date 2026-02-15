"use server"

import { prisma } from "@/lib/prisma"
import { auth } from "@/lib/auth"
import { revalidatePath } from "next/cache"

async function requireAuth() {
  const session = await auth()
  if (!session?.user) throw new Error("Non autorizzato")
  return session
}

export async function getMenuCategories() {
  return prisma.menuCategory.findMany({
    include: { items: { orderBy: { sortOrder: "asc" } } },
    orderBy: { sortOrder: "asc" },
  })
}

export async function createMenuCategory(formData: FormData) {
  await requireAuth()
  const title = formData.get("title") as string
  const price = parseInt(formData.get("price") as string)
  const maxSort = await prisma.menuCategory.aggregate({ _max: { sortOrder: true } })

  await prisma.menuCategory.create({
    data: {
      title,
      price,
      sortOrder: (maxSort._max.sortOrder ?? -1) + 1,
    },
  })
  revalidatePath("/admin/menu")
  revalidatePath("/")
}

export async function updateMenuCategory(formData: FormData) {
  await requireAuth()
  const id = formData.get("id") as string
  const title = formData.get("title") as string
  const price = parseInt(formData.get("price") as string)

  await prisma.menuCategory.update({
    where: { id },
    data: { title, price },
  })
  revalidatePath("/admin/menu")
  revalidatePath("/")
}

export async function deleteMenuCategory(id: string) {
  await requireAuth()
  await prisma.menuCategory.delete({ where: { id } })
  revalidatePath("/admin/menu")
  revalidatePath("/")
}

export async function createMenuItem(formData: FormData) {
  await requireAuth()
  const categoryId = formData.get("categoryId") as string
  const course = formData.get("course") as string
  const dish = formData.get("dish") as string
  const maxSort = await prisma.menuItem.aggregate({
    where: { categoryId },
    _max: { sortOrder: true },
  })

  await prisma.menuItem.create({
    data: {
      course,
      dish,
      categoryId,
      sortOrder: (maxSort._max.sortOrder ?? -1) + 1,
    },
  })
  revalidatePath("/admin/menu")
  revalidatePath("/")
}

export async function updateMenuItem(formData: FormData) {
  await requireAuth()
  const id = formData.get("id") as string
  const course = formData.get("course") as string
  const dish = formData.get("dish") as string

  await prisma.menuItem.update({
    where: { id },
    data: { course, dish },
  })
  revalidatePath("/admin/menu")
  revalidatePath("/")
}

export async function deleteMenuItem(id: string) {
  await requireAuth()
  await prisma.menuItem.delete({ where: { id } })
  revalidatePath("/admin/menu")
  revalidatePath("/")
}
