import Hero from '@/components/Hero'
import SearchForm from '@/components/SearchForm'
import QuickLinks from '@/components/QuickLinks'

export default function HomePage() {
  return (
    <div className="flex flex-col">
      <Hero />
      <section className="container py-12">
        <div className="mx-auto max-w-4xl">
          <h2 className="mb-8 text-center text-3xl font-bold">ابحث عن رحلتك أو فندقك</h2>
          <SearchForm />
        </div>
      </section>
      <QuickLinks />
    </div>
  )
}