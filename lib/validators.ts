import { z } from 'zod'
export const flightSearchSchema = z.object({
  from: z.string().min(3).max(3),
  to: z.string().min(3).max(3),
  dateFrom: z.string(),
  dateTo: z.string().optional(),
  adults: z.number().min(1).max(9).default(1),
  currency: z.string().default('SAR'),
})
export const hotelSearchSchema = z.object({
  city: z.string().min(2),
  checkIn: z.string(),
  checkOut: z.string(),
  guests: z.number().min(1).max(10).default(2),
  maxPrice: z.number().optional(),
  currency: z.string().default('SAR'),
})
export type FlightSearchInput = z.infer<typeof flightSearchSchema>
export type HotelSearchInput = z.infer<typeof hotelSearchSchema>