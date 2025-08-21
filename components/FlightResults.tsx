'use client'
import { useEffect, useState } from 'react'
import FlightCard from './FlightCard'
interface Flight { from: string; to: string; airline: string; direct: boolean; departLocal: string; arriveLocal: string; price: number; currency: string; deepLink: string }
export default function FlightResults() {
  const [flights, setFlights] = useState<Flight[]>([])
  const [loading] = useState(false)
  const [mock, setMock] = useState(false)
  useEffect(() => { setMock(true); setFlights([
    { from:'RUH', to:'DXB', airline:'طيران السعودية', direct:true,  departLocal:'2025-02-15T08:00:00', arriveLocal:'2025-02-15T11:30:00', price:1250, currency:'SAR', deepLink:'#' },
    { from:'RUH', to:'JED', airline:'طيران ناس',     direct:true,  departLocal:'2025-02-15T14:00:00', arriveLocal:'2025-02-15T15:30:00', price:450,  currency:'SAR', deepLink:'#' },
    { from:'RUH', to:'CAI', airline:'مصر للطيران',     direct:false, departLocal:'2025-02-15T22:00:00', arriveLocal:'2025-02-16T03:30:00', price:1850, currency:'SAR', deepLink:'#' },
  ]) }, [])
  return (
    <div>
      {mock && (<div className="mb-4 rounded-lg bg-yellow-50 p-4 text-sm text-yellow-800">هذه بيانات تجريبية. قم بإعداد مفاتيح API للحصول على نتائج حقيقية.</div>)}
      <div className="mb-6 flex items-center justify-between">
        <h2 className="text-2xl font-semibold">{flights.length>0?`${flights.length} رحلة متاحة`:'ابحث عن رحلات'}</h2>
        {flights.length>0 && (<select className="rounded-lg border border-input px-3 py-2"><option>ترتيب حسب: الأرخص</option><option>ترتيب حسب: الأسرع</option><option>ترتيب حسب: الأفضل</option></select>)}
      </div>
      {loading ? (
        <div className="py-12 text-center"><div className="inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-primary border-r-transparent"></div><p className="mt-4 text-muted-foreground">جاري البحث عن رحلات...</p></div>
      ) : flights.length>0 ? (
        <div className="space-y-4">{flights.map((f,i)=>(<FlightCard key={i} flight={f} />))}</div>
      ) : (
        <div className="rounded-lg border-2 border-dashed border-muted p-12 text-center"><p className="text-muted-foreground">استخدم نموذج البحث أعلاه للعثور على رحلات</p></div>
      )}
    </div>
  )
}