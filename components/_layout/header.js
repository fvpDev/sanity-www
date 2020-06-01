import Link from 'next/link'

export default function Header() {
  return (
    <>
      <nav className="flex justify-center mx-auto max-w-md text-black">
        <Link href="/">
          <a className="flex-1 text-center hover:underline">Home</a>
        </Link>
        <span className="mx-12">|</span>
        <Link href="/posts">
          <a className="flex-1 text-center hover:underline">Blog</a>
        </Link>
      </nav>
    </>
  )
}
