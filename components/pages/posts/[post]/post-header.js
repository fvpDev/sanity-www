import PostDate from '../_post/post-date'
import PostTitle from '../_post/post-title'
import PostImage from '../_post/post-image'
import PostAvatar from '../_post/post-avatar'

export default function PostHeader({ title, coverImage, date, author }) {
  return (
    <>
      <PostTitle>{title}</PostTitle>
      <div className="hidden md:block md:mb-12">
        <PostAvatar name={author.name} picture={author.picture} />
      </div>
      <div className="mb-8 md:mb-16 -mx-5 sm:mx-0">
        <PostImage title={title} url={coverImage} />
      </div>
      <div className="max-w-2xl mx-auto">
        <div className="block md:hidden mb-6">
          <PostAvatar name={author.name} picture={author.picture} />
        </div>
        <div className="mb-6 text-lg">
          <PostDate dateString={date} />
        </div>
      </div>
    </>
  )
}
