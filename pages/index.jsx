import Head from 'next/head'

import LINKSHead from '../components/_layout/_heads/links'
import SEOHead from '../components/_layout/_heads/sso/seo'
import SMOHead from '../components/_layout/_heads/sso/smo'

import Layout from '../components/_layout'
import Main from '../components/_layout/02_main'

import { getAllPostsForHome } from '../lib/api/preview-post'

export default function Index({ allPosts, preview }) {
  const heroPost = allPosts[0]
  const morePosts = allPosts.slice(1)
  return (
    <>
      <SEOHead isHome={true} title="Next.js Blog Example with Sanity and gFonts" />
      <SMOHead />
      <LINKSHead />

      <Layout preview={preview}>
        <Main></Main>
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
