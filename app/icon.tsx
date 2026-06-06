import { ImageResponse } from 'next/og'
import { readFileSync } from 'fs'
import { join } from 'path'

// Route segment config
export const runtime = 'nodejs'

// Image metadata
export const size = {
  width: 32,
  height: 32,
}
export const contentType = 'image/png'

// Image generation
export default function Icon() {
  const fontDataAllison = readFileSync(join(process.cwd(), 'public/assets/Allison-Regular.ttf'))

  return new ImageResponse(
    (
      <div
        style={{
          background: 'transparent',
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <div style={{ color: '#0a2e24', fontSize: 38, fontFamily: 'Allison' }}>
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
