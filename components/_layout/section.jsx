import cn from 'classnames'

export default function Section({ className, children }) {
  return (
    <section className={cn('', {
      'portrait:px-30 portrait:py-50': true,
      'landscape:py-100': true,
      [className]: !!className,
    })}>
      {children}
    </section>
  )
}
