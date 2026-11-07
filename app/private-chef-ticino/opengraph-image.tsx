import { ogSize, renderOgImage } from "@/lib/og-image"

export const runtime = "nodejs"
export const alt = "Luca Chiarappa - Private Chef a domicilio in Ticino"
export const size = ogSize
export const contentType = "image/png"

export default function Image() {
  return renderOgImage("Private Chef in Ticino")
}
