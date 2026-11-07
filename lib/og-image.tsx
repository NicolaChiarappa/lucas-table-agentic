import { ImageResponse } from 'next/og'
import { readFileSync } from 'fs'
import { join } from 'path'

export const ogSize = {
  width: 1200,
  height: 630,
}

export function renderOgImage(subtitle = 'Private Chef a Domicilio') {
  // Read the local TTF files
  const fontDataAllison = readFileSync(join(process.cwd(), 'public/assets/Allison-Regular.ttf'))
  const fontDataSpectral = readFileSync(join(process.cwd(), 'public/assets/Spectral-Regular.ttf'))

  return new ImageResponse(
    (
      <div
        style={{
          background: '#0a2e24', // ls-green-deep
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          flexDirection: 'column',
        }}
      >
        <div 
            style={{ 
                color: '#c5a059', // ls-gold
                fontSize: 260, 
                fontFamily: 'Allison',
                transform: 'translateY(-20px)'
            }}
        >
          Luca Chiarappa
        </div>
        <div style={{ color: '#d9d2c4', fontSize: 32, fontFamily: 'Spectral', letterSpacing: '0.15em', textTransform: 'uppercase' }}>
          {subtitle}
        </div>
      </div>
    ),
    {
      ...ogSize,
      fonts: [
        {
          name: 'Allison',
          data: fontDataAllison,
          style: 'normal',
        },
        {
          name: 'Spectral',
          data: fontDataSpectral,
          style: 'normal',
        },
      ],
    }
  )
}
