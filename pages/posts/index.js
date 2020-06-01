import Head from 'next/head'

import Layout from '../../components/layout'
import Container from '../../components/_layout/container'
import Posts from '../../components/pages/posts/posts'
import HeroPost from '../../components/pages/posts/hero-post'
import BlogIntro from '../../components/pages/posts/blog-intro'

import { CMS_NAME } from '../../lib/constants'
import { getAllPostsForHome } from '../../lib/api'

export default function Index({ allPosts, preview }) {
  const heroPost = allPosts[0]
  const morePosts = allPosts.slice(1)
  return (
    <>
      <Layout preview={preview}>
        <Head>
          <title>Next.js Blog Example with {CMS_NAME} and gFonts</title>
        </Head>
        <Container>
          <BlogIntro />
          {heroPost && (
            <HeroPost
              title={heroPost.title}
              coverImage={heroPost.coverImage}
              date={heroPost.date}
              author={heroPost.author}
              slug={heroPost.slug}
              excerpt={heroPost.excerpt}
            />
          )}
          {morePosts.length > 0 && <Posts posts={morePosts} all={false} />}
        </Container>
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
