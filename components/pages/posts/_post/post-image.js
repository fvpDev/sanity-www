import cn from 'classnames'
import Link from 'next/link'
// import { Img } from 'react-progressive-loader'

import imageBuilder from '../../../../lib/cms/imageBuilder'

export default function PostImage({ title, url, slug }) {
  const image = (
    <img
      width={1240}
      height={620}
      alt={`Cover Image for ${title}`}
      className={cn('shadow-small', {
        'hover:shadow-medium transition-shadow duration-200': slug,
      })}
      src={imageBuilder
        .image(url)
        .width(1240)
        .height(620)
        .url()
      }
    />
  )

  return (
    <div className="-mx-5 sm:mx-0">
      {slug ? (
        <Link as={`/posts/${slug}`} href="/posts/[slug]">
          <a aria-label={title}>{image}</a>
        </Link>
      ) : (
        image
      )}
    </div>
  )
}
