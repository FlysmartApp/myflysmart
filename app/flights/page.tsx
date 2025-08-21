import { Metadata } from 'next'
import FlightSearch from '@/components/FlightSearch'
import FlightResults from '@/components/FlightResults'

export const metadata: Metadata = {
  title: 'حجز الطيران - MyFlySmart',
  description: 'ابحث واحجز أفضل رحلات الطيران بأسعار منافسة',
}

export default function FlightsPage() {
  return (
    <div className="container py-8">
      <h1 className="mb-8 text-4xl font-bold">البحث عن رحلات الطيران</h1>
      <div className="mb-12">
        <FlightSearch />
      </div>
      <FlightResults />
    </div>
  )
}