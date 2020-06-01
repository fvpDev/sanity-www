import Link from 'next/link'

import PostDate from '../_post/post-date'
import PostAvatar from '../_post/post-avatar'
import PostPreviewImage from '../_post/post-preview-image'

export default function PostPreview({
  title,
  previewImage,
  date,
  excerpt,
  author,
  slug,
}) {
  return (
    <div>
      <div className="mb-5">
        <PostPreviewImage slug={slug} title={title} url={previewImage} />
      </div>
      <h3 className="text-3xl mb-3 leading-snug">
        <Link as={`/posts/${slug}`} href="/posts/[slug]">
          <a className="hover:underline">{title}</a>
        </Link>
      </h3>
      <div className="text-lg mb-4">
        <PostDate dateString={date} />
      </div>
      <p className="text-lg leading-relaxed mb-4">{excerpt}</p>
      <PostAvatar name={author.name} picture={author.picture} />
    </div>
  )
}
