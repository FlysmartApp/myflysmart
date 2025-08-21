export const runtime = 'edge';
import { NextResponse } from 'next/server'

export async function GET() {
  const services = {
    website: 'operational',
    flightSearch: process.env.TEQUILA_API_KEY ? 'operational' : 'degraded',
    hotelSearch: process.env.TP_TOKEN ? 'operational' : 'degraded',
    timestamp: new Date().toISOString(),
  }
  return NextResponse.json({ status: 'healthy', services, version: '1.0.0' })
}