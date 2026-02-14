interface BadgeProps {
  children: React.ReactNode
}

export default function Badge({ children }: BadgeProps) {
  return (
    <span className="inline-flex items-center rounded-md bg-neutral-100 px-2.5 py-1 text-xs font-medium text-neutral-700">
      {children}
    </span>
  )
}
