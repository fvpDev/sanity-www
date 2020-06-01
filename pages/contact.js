import Head from 'next/head'

import Layout from '../components/layout'
import Container from '../components/container' // extra
import ContactForm from '../components/contact-form'

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
