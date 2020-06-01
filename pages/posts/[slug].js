import Head from 'next/head'
import ErrorPage from 'next/error'
import { useRouter } from 'next/router'

import Layout from '../../components/layout'
import Header from '../../components/_layout/header'
import Container from '../../components/_layout/container'
import Separator from '../../components/_layout/separator'
import MoreStories from '../../components/pages/posts/more-stories'
import PostTitle from '../../components/pages/posts/_post/post-title'
import PostBody from '../../components/pages/posts/[post]/post-body'
import PostHeader from '../../components/pages/posts/[post]/post-header'

import { CMS_NAME } from '../../lib/constants'
import { getAllPostsWithSlug, getPostAndMorePosts } from '../../lib/api'

export default function Post({ post, morePosts, preview }) {
  const router = useRouter()
  if (!router.isFallback && !post?.slug) {
    return <ErrorPage statusCode={404} />
  }
  return (
    <Layout preview={preview}>
      <Container>
        <Header />
        {router.isFallback ? (
          <PostTitle>Loading…</PostTitle>
        ) : (
          <>
            <article>
              <Head>
                <title>{post.title} | Next.js Blog Example with {CMS_NAME}</title>
                {/* <meta property="og:image" content={post.ogImage.url} /> */}
              </Head>
              <PostHeader
                title={post.title}
                coverImage={post.coverImage}
                date={post.date}
                author={post.author}
              />
              <PostBody content={post.content} />
            </article>
            <Separator />
            {morePosts.length > 0 && <MoreStories posts={morePosts} />}
          </>
        )}
      </Container>
    </Layout>
  )
}

export async function getStaticProps({ params, preview = false }) {
  const data = await getPostAndMorePosts(params.slug, preview)
  return {
    props: {
      preview,
      post: data?.post || null,
      morePosts: data?.morePosts || null,
    },
  }
}

export async function getStaticPaths() {
  const allPosts = await getAllPostsWithSlug()
  return {
    paths:
      allPosts?.map(post => ({
        params: {
          slug: post.slug,
        },
      })) || [],
    fallback: true,
  }
}
