import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'إفصاح الشراكة - MyFlySmart',
  description: 'معلومات حول الروابط التابعة والعمولات',
}

export default function AffiliateDisclosurePage() {
  return (
    <div className="container py-12">
      <div className="mx-auto max-w-4xl">
        <h1 className="mb-8 text-4xl font-bold">إفصاح الشراكة والروابط التابعة</h1>
        <div className="prose prose-lg max-w-none">
          <p className="mb-6">قد نحصل على عمولة عند الشراء عبر روابطنا دون تكلفة إضافية عليك.</p>
        </div>
      </div>
    </div>
  )
}