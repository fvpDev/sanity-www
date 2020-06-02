import Link from 'next/link'

import Alert from './_layout/alert'

export default function Header() {
  return (
    <header>
      <Alert preview={preview} />
      <nav className="flex justify-center mx-auto max-w-md text-black">
        <Link href="/">
          <a className="flex-1 text-center hover:underline">Home</a>
        </Link>
        <span className="mx-12">|</span>
        <Link href="/posts">
          <a className="flex-1 text-center hover:underline">Blog</a>
        </Link>
      </nav>
    <header/>
  )
}
