interface ContainerProps {
  children: React.ReactNode
  className?: string
}

export default function Container({ children, className }: ContainerProps) {
  return (
    <div
      className={`
        max-w-5xl mx-auto px-6 py-10
        ${className ?? ''}
      `}
    >
      {children}
    </div>
  )
}
