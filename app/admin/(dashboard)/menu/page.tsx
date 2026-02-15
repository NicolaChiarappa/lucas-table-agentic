import { getMenuCategories } from "@/actions/menu"
import { MenuCategoryForm } from "@/components/admin/MenuCategoryForm"
import { MenuItemForm } from "@/components/admin/MenuItemForm"
import { MenuItemsTable } from "@/components/admin/MenuItemsTable"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default async function AdminMenuPage() {
  const categories = await getMenuCategories()

  return (
    <div>
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-2xl font-bold text-gray-900">Gestione Menu</h1>
        <MenuCategoryForm />
      </div>

      <div className="space-y-6">
        {categories.map((category) => (
          <Card key={category.id}>
            <CardHeader className="flex flex-row items-center justify-between">
              <div>
                <CardTitle>{category.title}</CardTitle>
                <p className="text-sm text-gray-500 mt-1">
                  CHF {category.price} a persona
                </p>
              </div>
              <div className="flex gap-2">
                <MenuItemForm categoryId={category.id} />
                <MenuCategoryForm category={category} />
              </div>
            </CardHeader>
            <CardContent>
              <MenuItemsTable items={category.items} />
            </CardContent>
          </Card>
        ))}

        {categories.length === 0 && (
          <p className="text-gray-500 text-center py-8">
            Nessuna categoria creata. Clicca &quot;Nuova Categoria&quot; per iniziare.
          </p>
        )}
      </div>
    </div>
  )
}
