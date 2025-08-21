import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'سياسة الخصوصية - MyFlySmart',
  description: 'سياسة الخصوصية وحماية البيانات',
}

export default function PrivacyPage() {
  return (
    <div className="container py-12">
      <div className="mx-auto max-w-4xl">
        <h1 className="mb-8 text-4xl font-bold">سياسة الخصوصية</h1>
        <div className="prose prose-lg max-w-none">
          <p className="mb-6">آخر تحديث: يناير 2025</p>
          <h2 className="mb-4 mt-8 text-2xl font-semibold">1. جمع المعلومات</h2>
          <p className="mb-6">نحن نجمع المعلومات التي تقدمها لنا مباشرة عند استخدام خدماتنا.</p>
          <h2 className="mb-4 mt-8 text-2xl font-semibold">2. استخدام المعلومات</h2>
          <p className="mb-6">نستخدم معلوماتك لمعالجة الحجوزات والتواصل وتحسين خدماتنا.</p>
          <h2 className="mb-4 mt-8 text-2xl font-semibold">3. مشاركة المعلومات</h2>
          <p className="mb-6">نشارك فقط حسب الضرورة مع مزودي الخدمة والدفع.</p>
        </div>
      </div>
    </div>
  )
}