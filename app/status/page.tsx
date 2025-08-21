import { Metadata } from 'next'
import StatusChecker from '@/components/StatusChecker'

export const metadata: Metadata = {
  title: 'حالة النظام - MyFlySmart',
  description: 'تحقق من حالة خدمات MyFlySmart',
}

export default function StatusPage() {
  return (
    <div className="container py-12">
      <div className="mx-auto max-w-4xl">
        <h1 className="mb-8 text-4xl font-bold">حالة النظام</h1>
        <StatusChecker />
      </div>
    </div>
  )
}