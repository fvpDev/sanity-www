import React from 'react'
import { SITE_IS_PWA } from '../../lib/constants/site'

import BASEHead from './_heads/base'
import PWAHead from './_heads/pwa'
import Header from './01_header'
import Footer from './03_footer'

export default function Layout({ children, preview }) {
  return (
    <>
      <BASEHead />
      {SITE_IS_PWA && <PWAHead />}

      <Header preview={preview} />
      {children}
      <Footer />
    </>
  )
}
