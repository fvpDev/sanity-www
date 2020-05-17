import '../styles/index.css'
import { AppProps } from 'next/app'
import withSecureHeaders from "next-secure-headers";

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}

export default withSecureHeaders({
  contentSecurityPolicy: {
    directives: {
      defaultSrc: "'self'",
      imgSrc: ["'self'", "https://cdn.sanity.io"],
      scriptSrc: ["'self'", "'unsafe-eval'"],
      styleSrc: ["'self'", "'unsafe-inline'"],
    },
  },
  forceHTTPSRedirect: [true, { maxAge: 60 * 60 * 24 * 4, includeSubDomains: true }],
  // frameGuard: "deny", // default
  // nosniff: "nosniff", // default
  // xssProtection: "sanitize", // default
  referrerPolicy: "same-origin",
})(MyApp);
