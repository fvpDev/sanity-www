import Head from 'next/head'
import { CMS_NAME, HOME_OG_IMAGE_URL } from '../../lib/constants'

export default function SEOMeta() {
  return (
    <Head>
      <meta charSet='utf-8' />
      <meta httpEquiv='X-UA-Compatible' content='IE=edge' />
      <meta name='viewport' content='width=device-width,initial-scale=1,minimum-scale=1,maximum-scale=1,user-scalable=no' />
      <meta
        name="description"
        content={`A statically generated blog example using Next.js and ${CMS_NAME}.`}
      />
      <meta name='keywords' content='Keywords' />
      <meta name="" content={HOME_OG_IMAGE_URL} />
      <meta property="og:image" content={HOME_OG_IMAGE_URL} />

      // <link rel="alternate" type="application/rss+xml" href="/feed.xml" />
    </Head>
  )
}
