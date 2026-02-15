import { getAllImages } from "@/actions/images"
import { ImageUploadForm } from "@/components/admin/ImageUploadForm"
import { ImageGrid } from "@/components/admin/ImageGrid"

export default async function AdminImagesPage() {
  const images = await getAllImages()

  return (
    <div>
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-2xl font-bold text-gray-900">Gestione Immagini</h1>
      </div>
      <ImageUploadForm />
      <div className="mt-8">
        <ImageGrid images={images} />
      </div>
    </div>
  )
}
