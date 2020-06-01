import Head from 'next/head'

import Layout from '../components/layout'
import Container from '../components/_layout/container'

import { CMS_NAME } from '../lib/constants'
import { getAllPostsForHome } from '../lib/api'

export default function Index({ allPosts, preview }) {
  const heroPost = allPosts[0]
  const morePosts = allPosts.slice(1)
  return (
    <>
      <Head>
        <title>Next.js Blog Example with {CMS_NAME} and gFonts</title>
      </Head>
      <Layout preview={preview}>
        <Container></Container>
      </Layout>
    </>
  )
}

export async function getStaticProps({ preview = false }) {
  const allPosts = await getAllPostsForHome(preview)
  return {
    props: { allPosts, preview },
  }
}
