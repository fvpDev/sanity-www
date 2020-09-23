import Head from 'next/head'

import Layout from '../../components/_layout'
import Main from '../../components/_layout/02_main'
import Posts from '../../components/pages/posts/posts'
import HeroPost from '../../components/pages/posts/hero-post'
import BlogIntro from '../../components/pages/posts/blog-intro'

import { getAllPostsForHome } from '../../lib/api/preview-post'

export default function Index({ allPosts, preview }) {
  const heroPost = allPosts[0]
  const morePosts = allPosts.slice(1)
  return (
    <>
      <Head>
        <title>Next.js Blog Example with Sanity.io and gFonts</title>
      </Head>
      <Layout preview={preview}>
        <Main>
          <BlogIntro />
          {heroPost && (
            <HeroPost
              date={heroPost.date}
              slug={heroPost.slug}
              title={heroPost.title}
              author={heroPost.author}
              excerpt={heroPost.excerpt}
              coverImage={heroPost.coverImage}
            />
          )}
          {morePosts.length > 0 && <Posts posts={morePosts} all={false} />}
        </Main>
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
