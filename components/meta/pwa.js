import Head from 'next/head'

export default function PWAMeta() {
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
      <meta name="msapplication-TileImage" content="/favicon/144.png" />
      <meta name="msapplication-config" content="/browserconfig.xml" />

      // Pinned Sites
      <meta name="application-name" content="Application Name" />
      <meta name="msapplication-tooltip" content="Tooltip Text" />
      <meta name="msapplication-starturl" content="/" />

      // Tap highlighting
      <meta name="msapplication-tap-highlight" content="no" />

      <link rel="mask-icon" href="/favicon/safari-pinned-tab.svg" color="#000000" />
      <link rel="apple-touch-icon" href="/favicon/57.png" sizes="57x57" />
      <link rel="apple-touch-icon" href="/favicon/60.png" sizes="60x60" />
      <link rel="apple-touch-icon" href="/favicon/72.png" sizes="72x72" />
      <link rel="apple-touch-icon" href="/favicon/76.png" sizes="76x76" />
      <link rel="apple-touch-icon" href="/favicon/114.png" sizes="114x114" />
      <link rel="apple-touch-icon" href="/favicon/120.png" sizes="120x120" />
      <link rel="apple-touch-icon" href="/favicon/144.png" sizes="144x144" />
      <link rel="apple-touch-icon" href="/favicon/152.png" sizes="152x152" />
      <link rel="apple-touch-icon" href="/favicon/180.png" sizes="180x180" />
      <link rel="icon" type="image/png" sizes="16x16" href="/favicon/16.png" />
      <link rel="icon" type="image/png" sizes="32x32" href="/favicon/32.png" />
      <link rel="icon" type="image/png" sizes="96x96" href="/favicon/96.png" />
      <link rel="icon" type="image/png" sizes="192x192"  href="/favicon/192.png" />
      <link rel="shortcut icon" href="/favicon/favicon.ico" />
      <link rel="manifest" href="/site.webmanifest" />
    </Head>
  )
}
