"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { logoutAction } from "@/actions/auth"
import { LayoutDashboard, UtensilsCrossed, Star, Image, LogOut, ChefHat } from "lucide-react"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"

const navItems = [
  { href: "/admin", label: "Dashboard", icon: LayoutDashboard },
  { href: "/admin/menu", label: "Menu", icon: UtensilsCrossed },
  { href: "/admin/reviews", label: "Recensioni", icon: Star },
  { href: "/admin/images", label: "Immagini", icon: Image },
]

export function AdminSidebar({ userName }: { userName: string }) {
  const pathname = usePathname()

  return (
    <aside className="w-64 bg-white border-r border-gray-200 flex flex-col">
      <div className="p-6">
        <div className="flex items-center gap-2">
          <ChefHat className="h-6 w-6 text-green-700" />
          <span className="font-semibold text-lg text-gray-900">Lucas Table</span>
        </div>
        <p className="text-sm text-gray-500 mt-1">{userName}</p>
      </div>
      <Separator />
      <nav className="flex-1 p-4 space-y-1">
        {navItems.map((item) => {
          const isActive = pathname === item.href
          return (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "flex items-center gap-3 px-3 py-2 rounded-md text-sm font-medium transition-colors",
                isActive
                  ? "bg-green-50 text-green-700"
                  : "text-gray-600 hover:bg-gray-100 hover:text-gray-900"
              )}
            >
              <item.icon className="h-4 w-4" />
              {item.label}
            </Link>
          )
        })}
      </nav>
      <Separator />
      <div className="p-4">
        <form action={logoutAction}>
          <Button variant="ghost" className="w-full justify-start text-gray-600 hover:text-red-600" type="submit">
            <LogOut className="h-4 w-4 mr-2" />
            Esci
          </Button>
        </form>
      </div>
    </aside>
  )
}
