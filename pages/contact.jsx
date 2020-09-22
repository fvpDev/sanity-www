import Head from 'next/head'

import Layout from '../components/_layout'
import Main from '../components/_layout/02_main' // extra
import ContactForm from '../components/pages/contact/form'

export default function Contact({ preview }) {
  return (
    <>
      <Head>
        <title>Contact sanity-www</title>
      </Head>
      <Layout preview={preview}>
        <Main>
          <ContactForm />
        </Main>
      </Layout>
    </>
  )
}
