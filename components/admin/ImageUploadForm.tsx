"use client"

import { useState } from "react"
import { uploadImage } from "@/actions/images"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Card, CardContent } from "@/components/ui/card"
import { Upload } from "lucide-react"

export function ImageUploadForm() {
  const [isUploading, setIsUploading] = useState(false)
  const [message, setMessage] = useState<{ type: "success" | "error"; text: string } | null>(null)

  async function handleSubmit(formData: FormData) {
    setIsUploading(true)
    setMessage(null)

    const result = await uploadImage(formData)

    if (result?.error) {
      setMessage({ type: "error", text: result.error })
    } else {
      setMessage({ type: "success", text: "Immagine caricata con successo!" })
    }
    setIsUploading(false)
  }

  return (
    <Card>
      <CardContent className="pt-6">
        <form action={handleSubmit} className="grid gap-4 md:grid-cols-4 items-end">
          <div className="space-y-2">
            <Label htmlFor="file">File</Label>
            <Input
              id="file"
              name="file"
              type="file"
              accept="image/jpeg,image/png,image/webp,image/gif"
              required
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="altText">Testo alternativo</Label>
            <Input
              id="altText"
              name="altText"
              placeholder="Descrizione immagine"
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="section">Sezione</Label>
            <Select name="section" defaultValue="general">
              <SelectTrigger>
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="general">Generale</SelectItem>
                <SelectItem value="hero">Hero</SelectItem>
                <SelectItem value="menu">Menu</SelectItem>
                <SelectItem value="gallery">Galleria</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <Button type="submit" disabled={isUploading}>
            <Upload className="h-4 w-4 mr-2" />
            {isUploading ? "Caricamento..." : "Carica"}
          </Button>
        </form>
        {message && (
          <p className={`mt-3 text-sm ${message.type === "error" ? "text-red-500" : "text-green-600"}`}>
            {message.text}
          </p>
        )}
      </CardContent>
    </Card>
  )
}
