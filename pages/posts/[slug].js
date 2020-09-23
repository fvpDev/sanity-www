import Head from 'next/head'
import ErrorPage from 'next/error'
import { useRouter } from 'next/router'

import Layout from '../../components/_layout'
import Main from '../../components/_layout/02_main'
import Separator from '../../components/_layout/separator'
import Posts from '../../components/pages/posts/posts'
import PostTitle from '../../components/pages/posts/_post/post-title'
import PostBody from '../../components/pages/posts/[post]/post-body'
import PostHeader from '../../components/pages/posts/[post]/post-header'
import BlogHeader from '../../components/pages/posts/[post]/blog-header'

import { getAllPostsWithSlug, getPostAndMorePosts } from '../../lib/api/preview-post'

export default function Post({ post, morePosts, preview }) {
  const router = useRouter()
  if (!router.isFallback && !post?.slug) {
    return <ErrorPage statusCode={404} />
  }
  return (
    <Layout preview={preview}>
      <Main>
        <BlogHeader />
        {router.isFallback ? (
          <PostTitle>Loading…</PostTitle>
        ) : (
          <>
            <article>
              <Head>
                <title>{post.title} | Next.js Blog Example with Sanity.io</title>
                {/* <meta property="og:image" content={post.ogImage.url} /> */}
              </Head>
              <PostHeader title={post.title} coverImage={post.coverImage} date={post.date} author={post.author} />
              <PostBody content={post.content} />
            </article>
            <Separator />
            {morePosts.length > 0 && <Posts posts={morePosts} all={false} />}
          </>
        )}
      </Main>
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
