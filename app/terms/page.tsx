import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'الشروط والأحكام - MyFlySmart',
  description: 'شروط وأحكام استخدام موقع MyFlySmart',
}

export default function TermsPage() {
  return (
    <div className="container py-12">
      <div className="mx-auto max-w-4xl">
        <h1 className="mb-8 text-4xl font-bold">الشروط والأحكام</h1>
        <div className="prose prose-lg max-w-none">
          <p className="mb-6">آخر تحديث: يناير 2025</p>
          <h2 className="mb-4 mt-8 text-2xl font-semibold">1. القبول بالشروط</h2>
          <p className="mb-6">باستخدامك للموقع فأنت توافق على الشروط.</p>
        </div>
      </div>
    </div>
  )
}