import Head from 'next/head'
import { BRAND_NAME, BRAND_TAGLINE } from '../../../../lib/constants/brand'

export default function SEOHead({
  /* Search Engine Optimization */
  isHome = false,
  title = '',
  page = '',
  subPage = '',
  isSubPage = false,
  pageDivider = '»', // », -, |
  titleDivider = '|', // », -, |
  keywords = 'keywords',
  description = 'A statically generated blog example using Next.js and Sanity.'
}) {
  return (
    <Head>
      <title>{!!title ? title : (isHome
        ? `${BRAND_NAME} ${titleDivider} ${BRAND_TAGLINE}`
        : `${page + (isSubPage && ` ${pageDivider} ${subPage}`)} ${titleDivider} ${BRAND_NAME}`)
      }</title>
      <meta name='keywords' content={keywords} />
      <meta name="description" content={description} />
    </Head>
  )
}
