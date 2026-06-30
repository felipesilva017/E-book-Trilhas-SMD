import { forwardRef } from 'react'

const FlipPage = forwardRef(function FlipPage({ children, className = '' }, ref) {
  return (
    <article ref={ref} className={`relative h-full w-full overflow-hidden rounded-[6px] bg-[#f8f8f8] ${className}`}>
      {children}
    </article>
  )
})

export default FlipPage
