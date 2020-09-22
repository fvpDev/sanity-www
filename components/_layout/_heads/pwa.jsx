import Head from 'next/head'

export default function PWAHead() {
  return (
    <Head>
      // Android
      <meta name="theme-color" content="#000" />
      <meta name="mobile-web-app-capable" content="yes" />

      // iOS
      <meta name="apple-mobile-web-app-title" content="Application Title" />
      <meta name="apple-mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-status-bar-style" content="default" />

      // Windows
      <meta name="msapplication-navbutton-color" content="#ffffff" />
      <meta name="msapplication-TileColor" content="#ffffff" />
      <meta name="msapplication-TileImage" content="/aso/icon/144.png" />
      <meta name="msapplication-config" content="/browserconfig.xml" />

      // Pinned Sites
      <meta name="application-name" content="Application Name" />
      <meta name="msapplication-tooltip" content="Tooltip Text" />
      <meta name="msapplication-starturl" content="/" />

      // Tap highlighting
      <meta name="msapplication-tap-highlight" content="no" />

      <link rel="manifest" href="/site.webmanifest" />
      <link rel="mask-icon" href="/aso/icon/maskable.svg" color="#000000" />
      <link rel="apple-touch-icon" href="/aso/icon/57.png" sizes="57x57" />
      <link rel="apple-touch-icon" href="/aso/icon/60.png" sizes="60x60" />
      <link rel="apple-touch-icon" href="/aso/icon/72.png" sizes="72x72" />
      <link rel="apple-touch-icon" href="/aso/icon/76.png" sizes="76x76" />
      <link rel="apple-touch-icon" href="/aso/icon/114.png" sizes="114x114" />
      <link rel="apple-touch-icon" href="/aso/icon/120.png" sizes="120x120" />
      <link rel="apple-touch-icon" href="/aso/icon/144.png" sizes="144x144" />
      <link rel="apple-touch-icon" href="/aso/icon/152.png" sizes="152x152" />
      <link rel="apple-touch-icon" href="/aso/icon/180.png" sizes="180x180" />
      <link rel="icon" type="image/png" sizes="16x16" href="/aso/icon/16.png" />
      <link rel="icon" type="image/png" sizes="32x32" href="/aso/icon/32.png" />
      <link rel="icon" type="image/png" sizes="96x96" href="/aso/icon/96.png" />
      <link rel="icon" type="image/png" sizes="192x192"  href="/aso/icon/192.png" />
    </Head>
  )
}
