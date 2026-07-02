function PageFrame({ children, className = '', ariaLabel }) {
  return (
    <div
      className={`relative isolate h-full w-full overflow-hidden rounded-[7px] border-[4px] border-[#1a1a1a] ${className}`}
      aria-label={ariaLabel}
    >
      {children}
    </div>
  )
}

export default PageFrame