interface ErrorMessageProps {
  message?: string
}

export default function ErrorMessage({
  message = 'Something went wrong.',
}: ErrorMessageProps) {
  return (
    <div className="flex justify-center py-10">
      <div className="rounded-lg border border-red-200 bg-red-50 px-6 py-4 text-red-700">
        {message}
      </div>
    </div>
  )
}
