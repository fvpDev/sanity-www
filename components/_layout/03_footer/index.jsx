import cn from 'classnames'
import Link from 'next/link'
import { useRouter } from 'next/router'

import Separator from '../separator'

import { BRAND_NAME } from '../../../lib/constants/brand'

export default function Footer({ className }) {
  const router = useRouter()
  const isHome = router.pathname == '/'
  return (
    <footer className={cn('', {
        'landscape:py-12 portrait:pb-12': !isHome,
        'landscape:pb-54 portrait:pb-25': isHome,
        [className]: !!className,
      })}>
      {isHome ? (
        <h1 className="slogan w-full text-center uppercase font-thin tracking-slogan text-22 landscape:text-clamp-22">
          Finding The Creative<br className="md:hidden" />{' '}
          Within The Chaos</h1>
      ) : (
        <>
          <Separator className="landscape:hidden w-full border-black pt-12" />
          <p className="text-center text-15 pb-6 portrait:leading-15">
            Copyright 2020 {BRAND_NAME}, LLC<br className="landscape:hidden" />
            <span className="portrait:hidden px-12">|</span>
            <Link href="/privacy-policy">
              <a className={cn('border-b-2 border-transparent hover:border-tc-gold', {'border-tc-gold active': router.pathname === '/privacy-policy'})}>
                Privacy Policy
              </a>
            </Link>
            <span className="px-12">|</span>
            <Link href="/terms-of-use">
              <a className={cn('border-b-2 border-transparent hover:border-tc-gold', {'border-tc-gold active': router.pathname === '/terms-of-use'})}>
                Terms of Use
              </a>
            </Link>
          </p>
          <p className="text-center text-15 landscape:h-24 pt-6 overflow-y-hidden">
            This site is fully custom built from design to code. No site builders.{' '}<br className="landscape:hidden" />No WordPress. No Bloatware. Pure Design. Pure Performance.
          </p>
        </>
      )}
    </footer>
  )
}
