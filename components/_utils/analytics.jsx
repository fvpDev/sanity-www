import { useRouter } from 'next/router'
import Analytics from 'analytics'
import fullStory from '@analytics/fullstory'
import googleAnalytics from '@analytics/google-analytics'

import Mounter from '../_hooks/mounter'

import { SITE_VERSION } from '../../lib/constants/site'
import { isDev, isProd, GOOGLE_ANALYTICS_TRACKING_ID, FULLSTORY_ORG } from '../../lib/helpers/env'

export default function AnalyticsUtility() {
  const router = useRouter()
  const initAnalytics = () => {
    const analytics = Analytics({
      app: 'tc-website-www',
      version: SITE_VERSION,
      debug: isDev,
      plugins: [
        googleAnalytics({
          trackingId: GOOGLE_ANALYTICS_TRACKING_ID,
        }),
        fullStory({
          org: FULLSTORY_ORG,
        }),
      ]
    })
    analytics.ready(({ payload }) => {
      if(isDev) console.log('analytics.ready() called', payload)
      analytics.page(({ payload }) => {
        if(isDev) console.log('analytics.page() called', payload)
      })
    })
    router.events.on('routeChangeComplete', () => {
      analytics.page(({ payload }) => {
        if(isDev) console.log('analytics.page() called', payload)
      })
    })
  }
  return (
    <>
      {isProd && <Mounter onMount={initAnalytics} />}
    </>
  )
}
