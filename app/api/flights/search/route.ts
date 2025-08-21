import { NextRequest, NextResponse } from 'next/server'
import { z } from 'zod'

const searchSchema = z.object({
  from: z.string().length(3),
  to: z.string().length(3),
  dateFrom: z.string(),
  dateTo: z.string().optional(),
  adults: z.number().min(1).max(9).default(1),
  currency: z.string().default('SAR'),
})

const mockFlights = [
  { from: 'RUH', to: 'DXB', airline: 'طيران السعودية', direct: true,  departLocal: '2025-02-15T08:00:00', arriveLocal: '2025-02-15T11:30:00', price: 1250, currency: 'SAR', deepLink: '#' },
  { from: 'RUH', to: 'DXB', airline: 'طيران الإمارات', direct: true,  departLocal: '2025-02-15T14:00:00', arriveLocal: '2025-02-15T17:30:00', price: 1450, currency: 'SAR', deepLink: '#' },
  { from: 'RUH', to: 'DXB', airline: 'فلاي دبي',       direct: false, departLocal: '2025-02-15T22:00:00', arriveLocal: '2025-02-16T03:30:00', price: 950,  currency: 'SAR', deepLink: '#' },
]

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const validated = searchSchema.parse(body)

    const apiKey = process.env.TEQUILA_API_KEY
    const affiliateId = process.env.KIWI_AFFILIATE_ID

    if (!apiKey) {
      return NextResponse.json({ success: true, data: mockFlights, mock: true })
    }

    const formatDate = (date: string) => {
      const d = new Date(date)
      return `${d.getDate().toString().padStart(2, '0')}/${(d.getMonth()+1).toString().padStart(2, '0')}/${d.getFullYear()}`
    }

    const params = new URLSearchParams({
      fly_from: validated.from,
      fly_to: validated.to,
      date_from: formatDate(validated.dateFrom),
      date_to: formatDate(validated.dateTo ?? validated.dateFrom),
      adults: String(validated.adults),
      curr: validated.currency,
      locale: 'ar',
      limit: '20',
    })

    const res = await fetch(`https://tequila-api.kiwi.com/v2/search?${params}`, {
      headers: { apikey: apiKey as string },
    })

    if (!res.ok) throw new Error(`Kiwi API status ${res.status}`)

    const data = await res.json()
    const flights = (data.data ?? []).map((f: any) => ({
      from: f.flyFrom,
      to: f.flyTo,
      airline: f.airlines?.[0] || 'Unknown',
      direct: (f.route?.length ?? 0) <= 1,
      departLocal: new Date(f.dTime * 1000).toISOString(),
      arriveLocal: new Date(f.aTime * 1000).toISOString(),
      price: f.price,
      currency: data.currency || validated.currency,
      deepLink: `https://www.kiwi.com/deep?from=${f.flyFrom}&to=${f.flyTo}&departure=${validated.dateFrom}&adults=${validated.adults}&currency=${validated.currency}${affiliateId ? `&affilid=${affiliateId}` : ''}`,
    }))

    return NextResponse.json({ success: true, data: flights, mock: false })
  } catch (e) {
    console.error('Flight search error', e)
    return NextResponse.json({ success: true, data: mockFlights, mock: true, error: 'fallback' })
  }
}