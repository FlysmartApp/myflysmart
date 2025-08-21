import { NextRequest, NextResponse } from 'next/server'
import { z } from 'zod'

const searchSchema = z.object({
  city: z.string().min(2),
  checkIn: z.string(),
  checkOut: z.string(),
  guests: z.number().min(1).max(10).default(2),
  maxPrice: z.number().optional(),
  currency: z.string().default('SAR'),
})

const mockHotels = [
  { name: 'فندق الريتز كارلتون الرياض', stars: 5, price: 2500, currency: 'SAR', location: 'الرياض', thumbnail: '', deepLink: '#' },
  { name: 'فندق فيرمونت الرياض',       stars: 5, price: 1800, currency: 'SAR', location: 'الرياض', thumbnail: '', deepLink: '#' },
  { name: 'فندق هيلتون الرياض',        stars: 4, price: 1200, currency: 'SAR', location: 'الرياض', thumbnail: '', deepLink: '#' },
]

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const validated = searchSchema.parse(body)

    const token = process.env.TP_TOKEN
    const marker = process.env.TP_MARKER

    if (!token || !marker) {
      return NextResponse.json({ success: true, data: mockHotels, mock: true, widgetFallback: true })
    }

    const formatDate = (date: string) => new Date(date).toISOString().split('T')[0]

    const params = new URLSearchParams({
      location: validated.city,
      checkIn: formatDate(validated.checkIn),
      checkOut: formatDate(validated.checkOut),
      adults: String(validated.guests),
      currency: validated.currency,
      limit: '20',
      token: token as string,
    })

    const startRes = await fetch(`https://engine.hotellook.com/api/v2/search/start.json?${params}`)
    if (!startRes.ok) throw new Error('start failed')
    const startData = await startRes.json()

    await new Promise(r => setTimeout(r, 2000))

    const resultRes = await fetch(`https://engine.hotellook.com/api/v2/search/getResult.json?searchId=${startData.searchId}&limit=20&token=${token}`)
    if (!resultRes.ok) throw new Error('result failed')
    const results = await resultRes.json()

    const hotels = (results.result ?? []).map((h: any) => ({
      name: h.hotelName,
      stars: h.stars || 0,
      price: h.priceFrom,
      currency: validated.currency,
      location: h.location?.name || validated.city,
      thumbnail: h.photoUrl || '',
      deepLink: `https://www.hotellook.com/hotels/${h.hotelId}?checkIn=${validated.checkIn}&checkOut=${validated.checkOut}&adults=${validated.guests}${marker ? `&marker=${marker}` : ''}`,
    }))

    return NextResponse.json({ success: true, data: hotels.length ? hotels : mockHotels, mock: hotels.length === 0 })
  } catch (e) {
    console.error('Hotel search error', e)
    return NextResponse.json({ success: true, data: mockHotels, mock: true, widgetFallback: true, error: 'fallback' })
  }
}