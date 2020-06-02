import Head from 'next/head'

import Layout from '../components/layout'
import Container from '../components/_layout/container' // extra
import ContactForm from '../components/pages/contact/contact-form'

export default function Contact({ preview }) {
  return (
    <>
      <Head>
        <title>Contact sanity-www</title>
      </Head>
      <Layout preview={preview}>
        <Container>
          <ContactForm />
        </Container>
      </Layout>
    </>
  )
}
