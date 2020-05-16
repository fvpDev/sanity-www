import '../styles/index.css'
import withSecureHeaders from "next-secure-headers";

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />
}

export default withSecureHeaders({
  contentSecurityPolicy: {
    directives: {
      defaultSrc: "'self'",
      styleSrc: ["'self'", "https://cdn.sanity.io"],
    },
  },
  forceHTTPSRedirect: [true, { maxAge: 60 * 60 * 24 * 4, includeSubDomains: true }],
  // frameGuard: "deny", // default
  // nosniff: "nosniff", // default
  // xssProtection: "sanitize", // default
  referrerPolicy: "same-origin",
})(MyApp);
