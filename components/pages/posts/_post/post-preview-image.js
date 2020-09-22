import cn from 'classnames'
import Link from 'next/link'
import { Img } from 'react-progressive-loader'

import imageBuilder from '../../../../lib/cms/imageBuilder'

export default function PreviewImage({ title, url, slug }) {
  const image = (
    <Img
      width={556}
      height={278}
      alt={`Cover Image for ${title}`}
      className={cn('shadow-small', {
        'hover:shadow-medium transition-shadow duration-200': slug,
      })}
      bgColor='#CCCCCC'
      src={imageBuilder
        .image(url)
        .width(556)
        .height(278)
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
