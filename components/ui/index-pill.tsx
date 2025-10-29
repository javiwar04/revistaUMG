import React from "react"

interface IndexPillProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  href: string
  active?: boolean
  children: React.ReactNode
}

export default function IndexPill({ href, active, children, ...rest }: IndexPillProps) {
  const base = "inline-flex items-center justify-center px-6 py-3 rounded-full text-base font-semibold ring-1 ring-border shadow-sm transition-shadow"
  const activeClasses = active ? "bg-primary text-primary-foreground ring-2 shadow-md" : "bg-white/10 text-foreground hover:bg-white/20"

  return (
    <a
      href={href}
      aria-current={active ? "true" : undefined}
      className={`${base} ${activeClasses}`}
      {...rest}
    >
      {children}
    </a>
  )
}
