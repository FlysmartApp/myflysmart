'use client'
import { useState } from 'react'
import { Search } from 'lucide-react'
export default function HotelSearch() {
  const [city, setCity] = useState('')
  const [checkIn, setCheckIn] = useState('')
  const [checkOut, setCheckOut] = useState('')
  const [guests, setGuests] = useState(2)
  const handleSearch = async (e: React.FormEvent) => { e.preventDefault(); console.log('Searching hotels...', { city, checkIn, checkOut, guests }) }
  return (
    <div className="rounded-lg border bg-card p-6">
      <form onSubmit={handleSearch} className="space-y-4">
        <div><label className="mb-2 block text-sm font-medium">المدينة أو الفندق</label><input type="text" value={city} onChange={e=>setCity(e.target.value)} placeholder="أدخل اسم المدينة أو الفندق" className="w-full rounded-lg border border-input px-3 py-2" required /></div>
        <div className="grid gap-4 md:grid-cols-3">
          <div><label className="mb-2 block text-sm font-medium">تاريخ الوصول</label><input type="date" value={checkIn} onChange={e=>setCheckIn(e.target.value)} className="w-full rounded-lg border border-input px-3 py-2" required /></div>
          <div><label className="mb-2 block text-sm font-medium">تاريخ المغادرة</label><input type="date" value={checkOut} onChange={e=>setCheckOut(e.target.value)} className="w-full rounded-lg border border-input px-3 py-2" required /></div>
          <div><label className="mb-2 block text-sm font-medium">عدد النزلاء</label><select value={guests} onChange={e=>setGuests(Number(e.target.value))} className="w-full rounded-lg border border-input px-3 py-2">{[1,2,3,4,5,6,7,8,9,10].map(n=>(<option key={n} value={n}>{n} {n==1?'نزيل':'نزلاء'}</option>))}</select></div>
        </div>
        <button type="submit" className="flex w-full items-center justify-center gap-2 rounded-lg bg-primary px-4 py-3 font-medium text-primary-foreground hover:bg-primary/90"><Search className="h-5 w-5" />البحث عن فنادق</button>
      </form>
    </div>
  )
}