import { BRAND_NAME, BRAND_TAGLINE, BRAND_DOMAIN } from './brand'

/* Site Identity */
export const SITE_IS_PWA = false
export const SITE_VERSION = "0.0.1"
export const SITE_NAME = BRAND_NAME
export const SITE_PROTOCOL = 'https://'
export const SITE_SUBDOMAIN = 'sanity-www'
export const SITE_DOMAIN = BRAND_DOMAIN
export const SITE_HOSTNAME = `${SITE_SUBDOMAIN}.${SITE_DOMAIN}`
export const SITE_BASE_URL = `${SITE_PROTOCOL}${SITE_HOSTNAME}`

/* SSO: SEO & SMO */
export const SSO_PAGE_DIVIDER = '»' // », -, |
export const SSO_TITLE_DIVIDER = '|' // », -, |
export const SSO_DEFAULT_TITLE = ``
export const SSO_DEFAULT_DESCRIPTION = ``
