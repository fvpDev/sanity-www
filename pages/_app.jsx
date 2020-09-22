import '../styles/index.css'

import App from 'next/app';
import { GoogleReCaptchaProvider } from 'react-google-recaptcha-v3'

import AnalyticsUtility from '../components/_utils/analytics'

export default class MistfulApp extends App {
  render() {
    const { Component, pageProps, router } = this.props
    const needReCaptcha = false //router.pathname == '/contact'
    return (
      <>
        <AnalyticsUtility />
        {needReCaptcha ? (
          <GoogleReCaptchaProvider reCaptchaKey={process.env.GOOGLE_RECAPTCHA_SITEKEY}>
            <Component {...pageProps} />
          </GoogleReCaptchaProvider>
        ) : (
          <Component {...pageProps} />
        )}
      </>
    );
  }
}

// export default function MyApp({ Component, pageProps }) {
//   return <Component {...pageProps} />
// }
