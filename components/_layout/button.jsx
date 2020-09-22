import cn from 'classnames'

export default function Button({ className, children, href, onClick, bgWhite = false, bgGradient = false, bgTransparent = false, newTab = false }) {
  return <a href={href} className={cn('button inline-block text-normal uppercase hover:cursor-pointer hover:bg-pink hover:text-white', {
    'bg-transparent border border-pink text-pink': bgTransparent,
    'bg-pink-gradient text-white': bgGradient,
    'bg-white text-pink': bgWhite,
    'bg-pink text-white': !bgWhite && !bgGradient && !bgTransparent,
    [className]: !!className,
  })} onClick={onClick} target={newTab ? '_blank' : '_self'}>
    {children}
  </a>
}
