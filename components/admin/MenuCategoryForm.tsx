"use client"

import { useState } from "react"
import { createMenuCategory, updateMenuCategory, deleteMenuCategory } from "@/actions/menu"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
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
import { Plus, Pencil, Trash2 } from "lucide-react"

interface MenuCategoryFormProps {
  category?: {
    id: string
    title: string
    price: number
  }
}

export function MenuCategoryForm({ category }: MenuCategoryFormProps) {
  const [open, setOpen] = useState(false)
  const isEditing = !!category

  async function handleSubmit(formData: FormData) {
    if (isEditing) {
      formData.set("id", category.id)
      await updateMenuCategory(formData)
    } else {
      await createMenuCategory(formData)
    }
    setOpen(false)
  }

  async function handleDelete() {
    if (category) {
      await deleteMenuCategory(category.id)
    }
  }

  return (
    <div className="flex gap-2">
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogTrigger asChild>
          {isEditing ? (
            <Button variant="outline" size="sm">
              <Pencil className="h-4 w-4 mr-1" />
              Modifica
            </Button>
          ) : (
            <Button>
              <Plus className="h-4 w-4 mr-1" />
              Nuova Categoria
            </Button>
          )}
        </DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>
              {isEditing ? "Modifica Categoria" : "Nuova Categoria"}
            </DialogTitle>
          </DialogHeader>
          <form action={handleSubmit} className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="title">Nome</Label>
              <Input
                id="title"
                name="title"
                defaultValue={category?.title}
                placeholder="es. La Carne"
                required
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="price">Prezzo (CHF a persona)</Label>
              <Input
                id="price"
                name="price"
                type="number"
                defaultValue={category?.price}
                placeholder="150"
                required
              />
            </div>
            <Button type="submit" className="w-full">
              {isEditing ? "Salva Modifiche" : "Crea Categoria"}
            </Button>
          </form>
        </DialogContent>
      </Dialog>

      {isEditing && (
        <AlertDialog>
          <AlertDialogTrigger asChild>
            <Button variant="outline" size="sm" className="text-red-600 hover:text-red-700">
              <Trash2 className="h-4 w-4" />
            </Button>
          </AlertDialogTrigger>
          <AlertDialogContent>
            <AlertDialogHeader>
              <AlertDialogTitle>Elimina Categoria</AlertDialogTitle>
              <AlertDialogDescription>
                Sei sicuro di voler eliminare &quot;{category.title}&quot;? Tutti i piatti associati verranno eliminati. Questa azione non può essere annullata.
              </AlertDialogDescription>
            </AlertDialogHeader>
            <AlertDialogFooter>
              <AlertDialogCancel>Annulla</AlertDialogCancel>
              <AlertDialogAction onClick={handleDelete} className="bg-red-600 hover:bg-red-700">
                Elimina
              </AlertDialogAction>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialog>
      )}
    </div>
  )
}
