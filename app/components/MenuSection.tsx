import { prisma } from "@/lib/prisma"
import { MenuSectionClient } from "./MenuSectionClient"

export async function MenuSection() {
  const categories = await prisma.menuCategory.findMany({
    include: { items: { orderBy: { sortOrder: "asc" } } },
    orderBy: { sortOrder: "asc" },
  })

  const menus = categories.map((cat) => ({
    id: cat.id,
    title: cat.title,
    price: cat.price,
    items: cat.items.map((item) => ({
      id: item.id,
      course: item.course,
      dish: item.dish,
    })),
  }))

  return <MenuSectionClient menus={menus} />
}
