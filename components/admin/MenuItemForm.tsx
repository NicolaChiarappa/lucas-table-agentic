"use client"

import { useState } from "react"
import { createMenuItem, updateMenuItem } from "@/actions/menu"
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
import { Plus, Pencil } from "lucide-react"

interface MenuItemFormProps {
  categoryId: string
  item?: {
    id: string
    course: string
    dish: string
  }
}

export function MenuItemForm({ categoryId, item }: MenuItemFormProps) {
  const [open, setOpen] = useState(false)
  const isEditing = !!item

  async function handleSubmit(formData: FormData) {
    if (isEditing) {
      formData.set("id", item.id)
      await updateMenuItem(formData)
    } else {
      formData.set("categoryId", categoryId)
      await createMenuItem(formData)
    }
    setOpen(false)
  }

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        {isEditing ? (
          <Button variant="ghost" size="sm">
            <Pencil className="h-4 w-4" />
          </Button>
        ) : (
          <Button variant="outline" size="sm">
            <Plus className="h-4 w-4 mr-1" />
            Aggiungi Piatto
          </Button>
        )}
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>
            {isEditing ? "Modifica Piatto" : "Nuovo Piatto"}
          </DialogTitle>
        </DialogHeader>
        <form action={handleSubmit} className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="course">Portata</Label>
            <Input
              id="course"
              name="course"
              defaultValue={item?.course}
              placeholder="es. Antipasto"
              required
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="dish">Piatto</Label>
            <Input
              id="dish"
              name="dish"
              defaultValue={item?.dish}
              placeholder="es. Carpaccio di filetto..."
              required
            />
          </div>
          <Button type="submit" className="w-full">
            {isEditing ? "Salva Modifiche" : "Aggiungi Piatto"}
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  )
}
