'use client'
import { useState } from 'react'
import { Search } from 'lucide-react'
export default function SearchForm() {
  const [searchType, setSearchType] = useState<'flights' | 'hotels'>('flights')
  return (
    <div className="rounded-lg border bg-card p-6">
      <div className="mb-6 flex justify-center gap-4">
        <button onClick={() => setSearchType('flights')} className={`rounded-lg px-6 py-2 font-medium ${searchType==='flights'?'bg-primary text-primary-foreground':'bg-muted hover:bg-muted/80'}`}>رحلات الطيران</button>
        <button onClick={() => setSearchType('hotels')} className={`rounded-lg px-6 py-2 font-medium ${searchType==='hotels'?'bg-primary text-primary-foreground':'bg-muted hover:bg-muted/80'}`}>الفنادق</button>
      </div>
      {searchType==='flights' ? (
        <form className="space-y-4">
          <div className="grid gap-4 md:grid-cols-2">
            <div><label className="mb-2 block text-sm font-medium">تاريخ المغادرة</label><input type="date" className="w-full rounded-lg border border-input px-3 py-2" /></div>
            <div><label className="mb-2 block text-sm font-medium">تاريخ العودة</label><input type="date" className="w-full rounded-lg border border-input px-3 py-2" /></div>
          </div>
          <button type="submit" className="flex w-full items-center justify-center gap-2 rounded-lg bg-primary px-4 py-3 font-medium text-primary-foreground hover:bg-primary/90"><Search className="h-5 w-5" />البحث عن رحلات</button>
        </form>
      ) : (
        <form className="space-y-4">
          <div><label className="mb-2 block text-sm font-medium">المدينة</label><input type="text" placeholder="أدخل اسم المدينة" className="w-full rounded-lg border border-input px-3 py-2" /></div>
          <div className="grid gap-4 md:grid-cols-2">
            <div><label className="mb-2 block text-sm font-medium">تاريخ الوصول</label><input type="date" className="w-full rounded-lg border border-input px-3 py-2" /></div>
            <div><label className="mb-2 block text-sm font-medium">تاريخ المغادرة</label><input type="date" className="w-full rounded-lg border border-input px-3 py-2" /></div>
          </div>
          <button type="submit" className="flex w-full items-center justify-center gap-2 rounded-lg bg-primary px-4 py-3 font-medium text-primary-foreground hover:bg-primary/90"><Search className="h-5 w-5" />البحث عن فنادق</button>
        </form>
      )}
    </div>
  )
}