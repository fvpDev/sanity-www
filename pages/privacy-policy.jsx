import cn from 'classnames'
import Head from 'next/head'
import Link from 'next/link'
import Main from '../components/_layout/02_main'
import { BRAND_NAME, BRAND_ENTITY_NAME } from '../lib/constants/brand'
import { SITE_HOSTNAME, SITE_BASE_URL } from '../lib/constants/site'

export default function PrivacyPolicy() {
  return (
    <>
      <Head>
        <title>Privacy Policy | {BRAND_NAME}</title>
      </Head>
      <Main className={cn('w-full flex flex-col items-center justify-between', {
        'landscape:px-162': true
      })}>
        <article className={cn('mx-auto w-full max-w-content font-normal', {
          'portrait:px-30 portrait:text-18': true,
          'landscape:text-clamp-18': true,
        })}>
          <h1 className="text-center font-bold text-24 py-30">Privacy Policy</h1>

          <section className="mb-25">
            <p className="mb-20">This privacy policy is for {BRAND_ENTITY_NAME}, <Link href='/'><a className="border-b border-black hover:border-tc-gold">{SITE_HOSTNAME}</a></Link>, and will be referred to as “{BRAND_ID}” in the rest of this document. {BRAND_ID} is a fully remote based business, currently being operated from Shenandoah, IA. Your privacy is very important to {BRAND_ID} and it is policy to respect your privacy regarding any information that may be collected while operating this website.</p>
            <p className="mb-20">{BRAND_ID} is committed to protecting personally identifiable information you may provide through this website. This privacy policy will explain what information may be collected on this website, how this information will be used, and under what circumstances it may be disclosed to third parties. This policy applies only to information we collect through the website and does not apply to our collection of information from other sources. Depending on your activities when visiting this website, you may be required to agree to additional terms and conditions.</p>
          </section>

          <h2 className="font-medium font-italic underline mb-10">Website Visitors</h2>
          <section className="mb-25">
            <p className="mb-20">Like most website operators, {BRAND_ID} collects non-personally-identifying information of the sort that web browsers and servers typically make available, such as the browser type, language preference, referring site, and the date and time of each visitor request. The purpose in collecting non-personally identifying information is to better understand how visitors use this website.</p>
          </section>

          <h2 className="font-medium font-italic underline mb-10">Gathering of Personally-Identifying Information</h2>
          <section className="mb-25">
            <p className="mb-20">Certain visitors to this website may choose to interact in ways that require {BRAND_ID} to gather personally-identifying information. The amount and type of information that is gathered depends on the nature of the interaction. For instance, the use of a contact form.</p>
            <p className="mb-20">{BRAND_ID} is a sole operation that contracts out to well vetted professionals from time to time to offer things like web development, video production, and other potential services. Each professional is required to sign a confidentiality agreement to work with {BRAND_ID} on client projects, so your data is safe.</p>
          </section>

          <h2 className="font-medium font-italic underline mb-10">Security</h2>
          <section className="mb-25">
            <p className="mb-20">The security of your personal information is important to us, but remember that no method of transmission over the internet, or method of electronic storage is 100% secure. While we strive to use commercially acceptable means to protect your personal information, we cannot guarantee its absolute security. Secure Sockets Layer (SSL) encryption is in use on this site to help keep your information secure. Invisible reCAP{BRAND_ID}HA is also in use on this website to help determine if a user is a robot and to help prevent spam.</p>
          </section>

          <h2 className="font-medium font-italic underline mb-10">Links to External SItes</h2>
          <section className="mb-25">
            <p className="mb-20">This site may contain links to external sites that are not operated by {BRAND_ID}. These sites could be but are not limited to: social media sites such as Facebook or Instagram, websites or social media sites for companies or clients that we work with or are endorsed by, or softwares or services that are recommended by {BRAND_ID}.</p>
            <p className="mb-20">If you click on a third party link, you will be directed to that third party's site. We strongly advise you to review the privacy policy and terms and conditions of every site you visit. We have no control over, and assume no responsibility for the content, privacy policies or practices of any third party sites, products or services.</p>
          </section>


          <h2 className="font-medium font-italic underline mb-10">Aggregated Statistics & Analytics</h2>
          <section className="mb-25">
            <p className="mb-20">This site may collect statistics about the behavior of visitors and/or personally-identifying information. {BRAND_ID} will not display this information publicly or provide it to others unless they have signed a confidentiality agreement. This information will NEVER be sold to a third party. {BRAND_ID} may use services to collect analytic data such as (but not limited to) Google Analytics in order to improve the user experience of the website.</p>
          </section>

          <h2 className="font-medium font-italic underline mb-10">Cookies</h2>
          <section className="mb-25">
            <p className="mb-20">To enrich and perfect your online experience, {BRAND_ID} uses "Cookies", similar technologies and services provided by others to display personalized content, appropriate advertising and store your preferences on your computer.</p>
            <p className="mb-20">A cookie is a string of information that a website stores on a visitor's computer, and that the visitor's browser provides to the website each time the visitor returns. {BRAND_ID} uses cookies to help identify and track visitors, their usage of <Link href='/'><a className="border-b border-black hover:border-tc-gold">{SITE_BASE_URL}/</a></Link>, and their website access preferences. Visitors who do not wish to have cookies placed on their computers should set their browsers to refuse cookies before using this website, with the drawback that certain features of this website may not function properly without the aid of cookies.</p>
            <p className="mb-20">By continuing to navigate our website without changing your cookie settings, you hereby acknowledge and agree to Thundarius Creative, LLC's use of cookies.</p>
          </section>

          <h2 className="font-medium font-italic underline mb-10">Privacy Policy Changes</h2>
          <section className="mb-25">
            <p className="mb-20">Although most changes are likely to be minor, {BRAND_ID} may change its privacy policy from time to time, and at {BRAND_ID}’s sole discretion. {BRAND_ID} encourages visitors to frequently check this page for any changes to its privacy policy. Your continued use of this site after any change in this privacy policy will constitute your acceptance of such change.</p>
          </section>
        </article>
      </Main>
    </>
  )
}
