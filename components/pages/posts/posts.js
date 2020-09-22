import PostPreview from './_posts/post-preview'

export default function Posts({ posts, all = true, layout = 'grid' }) {
  return (
    <section>
      <h2 className="mb-8 text-6xl md:text-7xl font-bold tracking-tighter leading-tight">
        {all ? 'All Posts' : 'More Posts'}
      </h2>
      {layout == 'grid' && (
        <div className="grid grid-cols-1 md:grid-cols-2 md:col-gap-16 lg:col-gap-32 row-gap-20 md:row-gap-32 mb-32">
          {posts.map(post => (
            <PostPreview
              key={post.slug}
              title={post.title}
              previewImage={post.coverImage}
              date={post.date}
              author={post.author}
              slug={post.slug}
              excerpt={post.excerpt}
            />
          ))}
        </div>
      )}
    </section>
  )
}
