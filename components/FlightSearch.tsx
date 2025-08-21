'use client'
import { useState } from 'react'
import { Search } from 'lucide-react'
export default function FlightSearch() {
  const [tripType, setTripType] = useState<'roundtrip' | 'oneway'>('roundtrip')
  const [from, setFrom] = useState('')
  const [to, setTo] = useState('')
  const [departDate, setDepartDate] = useState('')
  const [returnDate, setReturnDate] = useState('')
  const [adults, setAdults] = useState(1)
  const handleSearch = async (e: React.FormEvent) => {
    e.preventDefault()
    console.log('Searching flights...', { from, to, departDate, returnDate, adults })
  }
  return (
    <div className="rounded-lg border bg-card p-6">
      <div className="mb-6 flex gap-4">
        <button onClick={() => setTripType('roundtrip')} className={`rounded-lg px-4 py-2 text-sm font-medium ${tripType==='roundtrip'?'bg-primary text-primary-foreground':'bg-muted hover:bg-muted/80'}`}>ذهاب وعودة</button>
        <button onClick={() => setTripType('oneway')} className={`rounded-lg px-4 py-2 text-sm font-medium ${tripType==='oneway'?'bg-primary text-primary-foreground':'bg-muted hover:bg-muted/80'}`}>ذهاب فقط</button>
      </div>
      <form onSubmit={handleSearch} className="space-y-4">
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          <div><label className="mb-2 block text-sm font-medium">من</label><input type="text" value={from} onChange={e=>setFrom(e.target.value)} placeholder="RUH" className="w-full rounded-lg border border-input px-3 py-2" required /></div>
          <div><label className="mb-2 block text-sm font-medium">إلى</label><input type="text" value={to} onChange={e=>setTo(e.target.value)} placeholder="DXB" className="w-full rounded-lg border border-input px-3 py-2" required /></div>
          <div><label className="mb-2 block text-sm font-medium">عدد المسافرين</label><select value={adults} onChange={e=>setAdults(Number(e.target.value))} className="w-full rounded-lg border border-input px-3 py-2">{[1,2,3,4,5,6,7,8,9].map(n=>(<option key={n} value={n}>{n} {n===1?'مسافر':'مسافرين'}</option>))}</select></div>
        </div>
        <div className="grid gap-4 md:grid-cols-2">
          <div><label className="mb-2 block text-sm font-medium">تاريخ المغادرة</label><input type="date" value={departDate} onChange={e=>setDepartDate(e.target.value)} className="w-full rounded-lg border border-input px-3 py-2" required /></div>
          {tripType==='roundtrip' && (<div><label className="mb-2 block text-sm font-medium">تاريخ العودة</label><input type="date" value={returnDate} onChange={e=>setReturnDate(e.target.value)} className="w-full rounded-lg border border-input px-3 py-2" required /></div>)}
        </div>
        <button type="submit" className="flex w-full items-center justify-center gap-2 rounded-lg bg-primary px-4 py-3 font-medium text-primary-foreground hover:bg-primary/90"><Search className="h-5 w-5" />البحث عن رحلات</button>
      </form>
    </div>
  )
}