interface EmptyStateProps {
  title?: string
  description?: string
}

export default function EmptyState({
  title = 'No data found',
  description = 'Try adjusting your filters or come back later.',
}: EmptyStateProps) {
  return (
    <div className="flex flex-col items-center justify-center py-16 text-center">
      <p className="text-lg font-medium">{title}</p>
      <p className="mt-2 text-sm text-gray-500 max-w-sm">{description}</p>
    </div>
  )
}
