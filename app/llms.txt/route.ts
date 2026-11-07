import { getMenuCategories, getMenuPricing } from "@/lib/pricing"
import { buildLlmsTxt } from "@/lib/llms"

export async function GET() {
  const [menus, pricing] = await Promise.all([getMenuCategories(), getMenuPricing()])
  return new Response(buildLlmsTxt(menus, pricing), {
    headers: { "Content-Type": "text/plain; charset=utf-8" },
  })
}
