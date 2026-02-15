"use client"

import { deleteImage } from "@/actions/images"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
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
import Image from "next/image"

interface SiteImage {
  id: string
  filename: string
  path: string
  altText: string
  section: string
}

export function ImageGrid({ images }: { images: SiteImage[] }) {
  if (images.length === 0) {
    return (
      <p className="text-gray-500 text-center py-8">
        Nessuna immagine caricata.
      </p>
    )
  }

  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      {images.map((image) => (
        <div
          key={image.id}
          className="relative group bg-white rounded-lg border border-gray-200 overflow-hidden"
        >
          <div className="aspect-square relative">
            <Image
              src={image.path}
              alt={image.altText || image.filename}
              fill
              className="object-cover"
            />
          </div>
          <div className="p-3">
            <p className="text-xs text-gray-600 truncate">{image.filename}</p>
            <Badge variant="secondary" className="mt-1 text-xs">
              {image.section}
            </Badge>
          </div>
          <div className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity">
            <AlertDialog>
              <AlertDialogTrigger asChild>
                <Button size="sm" variant="destructive">
                  <Trash2 className="h-3 w-3" />
                </Button>
              </AlertDialogTrigger>
              <AlertDialogContent>
                <AlertDialogHeader>
                  <AlertDialogTitle>Elimina Immagine</AlertDialogTitle>
                  <AlertDialogDescription>
                    Sei sicuro di voler eliminare &quot;{image.filename}&quot;? Il file verrà rimosso dal server.
                  </AlertDialogDescription>
                </AlertDialogHeader>
                <AlertDialogFooter>
                  <AlertDialogCancel>Annulla</AlertDialogCancel>
                  <AlertDialogAction
                    className="bg-red-600 hover:bg-red-700"
                    onClick={() => deleteImage(image.id)}
                  >
                    Elimina
                  </AlertDialogAction>
                </AlertDialogFooter>
              </AlertDialogContent>
            </AlertDialog>
          </div>
        </div>
      ))}
    </div>
  )
}
