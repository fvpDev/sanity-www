import cn from 'classnames'
import { useRouter } from 'next/router'
import { Scrollbars } from 'react-custom-scrollbars'

import Mounter from '../../_hooks/mounter'
import Layout from '../'
import Footer from '../03_footer'

export default function Main({ className, children, isFlex = false }) {
  const router = useRouter()
  const isHome = router.pathname == '/'
  const adjustHeights = (toShrink) => {
    let classes = document.querySelector('header').classList
    if(toShrink && !classes.contains('shrunken')) classes.add('shrunken')
    else if(!toShrink && classes.contains('shrunken')) classes.remove('shrunken')
  }
  const handleOnScrollFrame = (v) => {
    if(v.scrollTop > 92) adjustHeights(true) // shrink
    else adjustHeights(false) // grow
  }
  return (
    <Layout>
      <main className={className}>
        {isFlex ? (
          <>
            {children}
          </>
        ) : (
          <Scrollbars universal hideTracksWhenNotNeeded onScrollFrame={handleOnScrollFrame}>
            {children}
            <Footer className="landscape:hidden px-30" />
          </Scrollbars>
        )}
      </main>
    </Layout>
  )
}
