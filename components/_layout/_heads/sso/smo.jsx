import _ from 'underscore'
import Head from 'next/head'
import { SITE_NAME, SITE_BASE_URL, SSO_DEFAULT_TITLE, SSO_DEFAULT_DESCRIPTION } from '../../../../lib/constants/site'

export default function SMOHead({
  /* Social Media Optimization */
  og = {
    locale: 'en_US',
    type: 'website',
    title: SSO_DEFAULT_TITLE,
    description: SSO_DEFAULT_DESCRIPTION,
    site_name: SITE_NAME,
    // updated_time: '',
    image: {
      url: `${SITE_BASE_URL}/img/smo/og-tw.png`,
      secure_url: `${SITE_BASE_URL}/img/smo/og-tw.png`,
      width: 1200,
      height: 630,
      alt: SITE_NAME,
      type: 'image/png',
    }
  },
  tw = {
    card: 'summary',
    title: SSO_DEFAULT_TITLE,
    description: SSO_DEFAULT_DESCRIPTION,
    image: `${SITE_BASE_URL}/img/smo/og-tw.png`,
  },
}) {
  return (
    <Head>
      {_.map(og, (val, key) => (
        <React.Fragment key={key}>
          {key !== 'image'
            ? <meta property={`og:${key}`} content={val} />
            : _.map(val, (imgVal, imgKey) => <meta property={`og:${imgKey == 'url' ? imgKey : `image:${imgKey}`}`} content={imgVal} />)}
        </React.Fragment>
      ))}
      {/*tw.map((prop) => <meta property={`twitter:${prop}`} content={tw[prop]} />)*/}
    </Head>
  )
}
