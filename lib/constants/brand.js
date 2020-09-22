/* Basic Info */
export const BRAND_ID = "ABC"
export const BRAND_NAME = "ABC Brand"
export const BRAND_TAGLINE = ""

/* Legal Entity */
export const BRAND_ENTITY_TYPE = "LLC" // LLC | Inc | null
export const BRAND_ENTITY_IS_LLC = BRAND_ENTITY_TYPE == "LLC"
export const BRAND_ENTITY_IS_INC = BRAND_ENTITY_TYPE == "Inc"
export const BRAND_ENTITY_NAME = `${BRAND_NAME}${BRAND_ENTITY_TYPE ? `${BRAND_ENTITY_IS_LLC ? ',' : ''} ${BRAND_ENTITY_TYPE}${BRAND_ENTITY_IS_INC ? '.' : ''}` : ''}`

/* Site Domain & Email */
export const BRAND_DOMAIN = "now.sh"
export const BRAND_EMAIL_NAME = "Email Name"
export const BRAND_EMAIL_ADDRESS = `alias@${BRAND_DOMAIN}`
export const BRAND_CONTACTFORM_EMAIL_NAME = `${BRAND_ID} Website`
export const BRAND_CONTACTFORM_EMAIL_ADDRESS = `contactform@${BRAND_DOMAIN}`
