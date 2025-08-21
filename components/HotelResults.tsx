'use client'
import { useEffect, useState } from 'react'
import HotelCard from './HotelCard'
interface Hotel { name: string; stars?: number; price: number; currency: string; location: string; thumbnail?: string; deepLink: string }
export default function HotelResults() {
  const [hotels, setHotels] = useState<Hotel[]>([])
  const [loading] = useState(false)
  const [showWidget, setShowWidget] = useState(false)
  useEffect(() => {
    setShowWidget(true) // until TP creds available
    setHotels([
      { name:'فندق الريتز كارلتون', stars:5, price:2500, currency:'SAR', location:'الرياض', deepLink:'#' },
      { name:'فندق هيلتون',        stars:4, price:1200, currency:'SAR', location:'جدة',   deepLink:'#' },
      { name:'فندق موفنبيك',       stars:4, price:980,  currency:'SAR', location:'المدينة المنورة', deepLink:'#' },
    ])
  }, [])
  return (
    <div>
      {showWidget && (
        <div className="mb-6 rounded-lg bg-blue-50 p-4">
          <p className="mb-4 text-sm text-blue-800">للحصول على نتائج البحث الكاملة، يمكنك استخدام محرك البحث أدناه:</p>
          <div className="rounded-lg border-2 border-dashed border-blue-300 bg-white p-8 text-center">
            <p className="text-muted-foreground">مكان ويدجت Travelpayouts Hotels</p>
          </div>
        </div>
      )}
      <div className="mb-6 flex items-center justify-between">
        <h2 className="text-2xl font-semibold">{hotels.length>0?`${hotels.length} فندق متاح`:'ابحث عن فنادق'}</h2>
        {hotels.length>0 && (<select className="rounded-lg border border-input px-3 py-2"><option>ترتيب حسب: الأقل سعراً</option><option>ترتيب حسب: الأعلى تقييماً</option><option>ترتيب حسب: الأقرب للمركز</option></select>)}
      </div>
      {loading ? (
        <div className="py-12 text-center"><div className="inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-primary border-r-transparent"></div><p className="mt-4 text-muted-foreground">جاري البحث عن فنادق...</p></div>
      ) : hotels.length>0 ? (
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">{hotels.map((h,i)=>(<HotelCard key={i} hotel={h} />))}</div>
      ) : (
        <div className="rounded-lg border-2 border-dashed border-muted p-12 text-center"><p className="text-muted-foreground">استخدم نموذج البحث أعلاه للعثور على فنادق</p></div>
      )}
    </div>
  )
}