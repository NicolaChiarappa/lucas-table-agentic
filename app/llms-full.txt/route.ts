import { getMenuCategories, getMenuPricing } from "@/lib/pricing"
import { buildLlmsFullTxt } from "@/lib/llms"

export async function GET() {
  const [menus, pricing] = await Promise.all([getMenuCategories(), getMenuPricing()])
  return new Response(buildLlmsFullTxt(menus, pricing), {
    headers: { "Content-Type": "text/plain; charset=utf-8" },
  })
}
