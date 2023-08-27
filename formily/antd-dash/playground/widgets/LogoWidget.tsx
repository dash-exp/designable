import React from 'react'
import { useTheme } from '@designable/react'

const logo = {
  dark: '/dist/img/dash-logo.png',
  light:
    '/dist/img/dash-logo.png',
}

export const LogoWidget: React.FC = () => {
  const url = logo[useTheme()]
  return (
    <div style={{ display: 'flex', alignItems: 'center', fontSize: 14 }}>
      <img
        src={url}
        style={{ margin: '8px 8px', height: 24, width: 'auto' }}
      />
    </div>
  )
}
