"use client"

import { deleteMenuItem } from "@/actions/menu"
import { MenuItemForm } from "@/components/admin/MenuItemForm"
import { Button } from "@/components/ui/button"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog"
import { Trash2 } from "lucide-react"

interface MenuItem {
  id: string
  course: string
  dish: string
  sortOrder: number
  categoryId: string
}

export function MenuItemsTable({ items }: { items: MenuItem[] }) {
  if (items.length === 0) {
    return (
      <p className="text-sm text-gray-500 text-center py-4">
        Nessun piatto aggiunto.
      </p>
    )
  }

  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead className="w-[180px]">Portata</TableHead>
          <TableHead>Piatto</TableHead>
          <TableHead className="w-[100px] text-right">Azioni</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {items.map((item) => (
          <TableRow key={item.id}>
            <TableCell className="font-medium">{item.course}</TableCell>
            <TableCell>{item.dish}</TableCell>
            <TableCell className="text-right">
              <div className="flex justify-end gap-1">
                <MenuItemForm categoryId={item.categoryId} item={item} />
                <AlertDialog>
                  <AlertDialogTrigger asChild>
                    <Button variant="ghost" size="sm" className="text-red-600 hover:text-red-700">
                      <Trash2 className="h-4 w-4" />
                    </Button>
                  </AlertDialogTrigger>
                  <AlertDialogContent>
                    <AlertDialogHeader>
                      <AlertDialogTitle>Elimina Piatto</AlertDialogTitle>
                      <AlertDialogDescription>
                        Sei sicuro di voler eliminare &quot;{item.dish}&quot;?
                      </AlertDialogDescription>
                    </AlertDialogHeader>
                    <AlertDialogFooter>
                      <AlertDialogCancel>Annulla</AlertDialogCancel>
                      <AlertDialogAction
                        onClick={() => deleteMenuItem(item.id)}
                        className="bg-red-600 hover:bg-red-700"
                      >
                        Elimina
                      </AlertDialogAction>
                    </AlertDialogFooter>
                  </AlertDialogContent>
                </AlertDialog>
              </div>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  )
}
