import { Metadata } from 'next'
import HotelSearch from '@/components/HotelSearch'
import HotelResults from '@/components/HotelResults'

export const metadata: Metadata = {
  title: 'حجز الفنادق - MyFlySmart',
  description: 'احجز أفضل الفنادق بأسعار مميزة',
}

export default function HotelsPage() {
  return (
    <div className="container py-8">
      <h1 className="mb-8 text-4xl font-bold">البحث عن الفنادق</h1>
      <div className="mb-12">
        <HotelSearch />
      </div>
      <HotelResults />
    </div>
  )
}