import Container from '@/components/ui/Container'
import Loader from '@/components/ui/Loader'
import ErrorMessage from '@/components/ui/ErrorMessage'
import EmptyState from '@/components/ui/EmptyState'
import { error } from 'console'

export default function Home() {
  if (loading) return <Loader />

  if (error) return <ErrorMessage message={error} />

  if (!products.length) return <EmptyState />

  return (
    <Container>
      <ProductList products={products} />
    </Container>
  )

  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main className="flex min-h-screen w-full max-w-3xl flex-col items-center justify-between py-32 px-16 bg-white dark:bg-black sm:items-start">
        <h1>Products</h1>
      </main>
    </div>
  )
}
