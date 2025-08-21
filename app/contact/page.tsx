import { Metadata } from 'next'
import { Mail, Phone, MapPin } from 'lucide-react'

export const metadata: Metadata = {
  title: 'اتصل بنا - MyFlySmart',
  description: 'تواصل معنا للحصول على المساعدة والدعم',
}

export default function ContactPage() {
  return (
    <div className="container py-12">
      <div className="mx-auto max-w-4xl">
        <h1 className="mb-8 text-4xl font-bold">اتصل بنا</h1>
        <div className="grid gap-8 md:grid-cols-2">
          <div>
            <h2 className="mb-4 text-2xl font-semibold">معلومات التواصل</h2>
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <Mail className="h-5 w-5 text-primary" />
                <span>support@myflysmart.com</span>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="h-5 w-5 text-primary" />
                <span dir="ltr">+966 50 123 4567</span>
              </div>
              <div className="flex items-center gap-3">
                <MapPin className="h-5 w-5 text-primary" />
                <span>الرياض، المملكة العربية السعودية</span>
              </div>
            </div>
          </div>
          <div>
            <h2 className="mb-4 text-2xl font-semibold">أرسل لنا رسالة</h2>
            <form className="space-y-4">
              <div>
                <label className="mb-2 block text-sm font-medium">الاسم</label>
                <input type="text" className="w-full rounded-lg border border-input px-3 py-2" placeholder="اسمك الكامل" />
              </div>
              <div>
                <label className="mb-2 block text-sm font-medium">البريد الإلكتروني</label>
                <input type="email" className="w-full rounded-lg border border-input px-3 py-2" placeholder="email@example.com" dir="ltr" />
              </div>
              <div>
                <label className="mb-2 block text-sm font-medium">الموضوع</label>
                <input type="text" className="w-full rounded-lg border border-input px-3 py-2" placeholder="موضوع الرسالة" />
              </div>
              <div>
                <label className="mb-2 block text-sm font-medium">الرسالة</label>
                <textarea className="w-full rounded-lg border border-input px-3 py-2" rows={4} placeholder="اكتب رسالتك هنا..." />
              </div>
              <button type="submit" className="w-full rounded-lg bg-primary px-4 py-2 text-white hover:bg-primary/90">إرسال الرسالة</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}