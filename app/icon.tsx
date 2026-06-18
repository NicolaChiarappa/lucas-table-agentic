import { ImageResponse } from 'next/og'
import { readFileSync } from 'fs'
import { join } from 'path'

// Route segment config
export const runtime = 'nodejs'

// Image metadata — 48×48 is Google's recommended minimum for SERP favicons
export const size = {
  width: 48,
  height: 48,
}
export const contentType = 'image/png'

// Image generation
export default function Icon() {
  const fontDataAllison = readFileSync(join(process.cwd(), 'public/assets/Allison-Regular.ttf'))

  return new ImageResponse(
    (
      <div
        style={{
          background: '#07211a',
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          borderRadius: 8,
        }}
      >
        <div style={{ color: '#c9a84c', fontSize: 46, fontFamily: 'Allison', lineHeight: 1 }}>
          L
        </div>
      </div>
    ),
    {
      ...size,
      fonts: [
        {
          name: 'Allison',
          data: fontDataAllison,
          style: 'normal',
        },
      ],
    }
  )
}
