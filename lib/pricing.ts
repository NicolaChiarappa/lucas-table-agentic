import { cache } from "react"
import { prisma } from "@/lib/prisma"

/**
 * Single source of truth for menu prices: the MenuCategory table managed from /admin/menu.
 * Every price shown in copy, metadata, FAQ, JSON-LD and llms.txt must come from here.
 */

export const getMenuCategories = cache(async () =>
  prisma.menuCategory.findMany({
    include: { items: { orderBy: { sortOrder: "asc" } } },
    orderBy: { sortOrder: "asc" },
  })
)

export type MenuPricing = {
  min: number
  max: number
  /** "CHF 150–220" (or "CHF 150" when all menus cost the same) */
  range: string
  /** "CHF 150 a persona per il menu vegetariano, CHF 200 per il menu di carne e CHF 220 per il menu di pesce" */
  sentence: string
  /** Price of the vegetarian menu, if one exists */
  vegetarian: number | null
}

function menuLabel(title: string): string {
  const t = title.toLowerCase()
  if (t.includes("veget")) return "il menu vegetariano"
  if (t.includes("carne")) return "il menu di carne"
  if (t.includes("mare") || t.includes("pesce")) return "il menu di pesce"
  return `il menu ${title}`
}

export const chf = (amount: number) => `CHF ${amount}`

export const getMenuPricing = cache(async (): Promise<MenuPricing> => {
  const menus = [...(await getMenuCategories())].sort((a, b) => a.price - b.price)

  if (menus.length === 0) {
    return { min: 0, max: 0, range: "", sentence: "", vegetarian: null }
  }

  const prices = menus.map((m) => m.price)
  const min = Math.min(...prices)
  const max = Math.max(...prices)

  const parts = menus.map((m, i) =>
    i === 0 ? `${chf(m.price)} a persona per ${menuLabel(m.title)}` : `${chf(m.price)} per ${menuLabel(m.title)}`
  )
  const sentence =
    parts.length === 1 ? parts[0] : `${parts.slice(0, -1).join(", ")} e ${parts[parts.length - 1]}`

  const veg = menus.find((m) => m.title.toLowerCase().includes("veget"))

  return {
    min,
    max,
    range: min === max ? chf(min) : `${chf(min)}–${max}`,
    sentence,
    vegetarian: veg ? veg.price : null,
  }
})

/** Replaces {{min}}, {{max}} and {{range}} placeholders in static SEO strings. */
export function fillPrices(text: string, pricing: MenuPricing): string {
  return text
    .replaceAll("{{min}}", String(pricing.min))
    .replaceAll("{{max}}", String(pricing.max))
    .replaceAll("{{range}}", pricing.range)
}
