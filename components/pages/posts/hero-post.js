import Link from 'next/link'
import PostDate from './_post/post-date'
import PostImage from './_post/post-image'
import PostAvatar from './_post/post-avatar'

export default function HeroPost({
  title,
  coverImage,
  date,
  excerpt,
  author,
  slug,
}) {
  return (
    <section>
      <div className="mb-8 md:mb-16">
        <PostImage slug={slug} title={title} url={coverImage} />
      </div>
      <div className="md:grid md:grid-cols-2 md:col-gap-16 lg:col-gap-8 mb-20 md:mb-28">
        <div>
          <h2 className="mb-4 text-4xl lg:text-6xl leading-tight">
            <Link as={`/posts/${slug}`} href="/posts/[slug]">
              <a className="hover:underline">{title}</a>
            </Link>
          </h2>
          <div className="mb-4 md:mb-0 text-lg">
            <PostDate dateString={date} />
          </div>
        </div>
        <div>
          <p className="styled-jsx-test text-lg leading-relaxed mb-4">{excerpt}</p>
          <PostAvatar name={author.name} picture={author.picture} />
        </div>
      </div>
      <style jsx>
        {`
          .styled-jsx-test {
              @apply bg-red;
           }
        `}
      </style>
    </section>
  )
}
