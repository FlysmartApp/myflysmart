import { Star, MapPin, ExternalLink } from 'lucide-react'
interface HotelCardProps { hotel: { name: string; stars?: number; price: number; currency: string; location: string; thumbnail?: string; deepLink: string } }
export default function HotelCard({ hotel }: HotelCardProps) {
  return (
    <div className="overflow-hidden rounded-lg border bg-card transition-shadow hover:shadow-lg">
      {hotel.thumbnail && (
        <div className="aspect-video bg-muted">
          <img src={hotel.thumbnail} alt={hotel.name} className="h-full w-full object-cover" />
        </div>
      )}
      <div className="p-4">
        <h3 className="mb-2 text-lg font-semibold">{hotel.name}</h3>
        {hotel.stars && (
          <div className="mb-2 flex items-center gap-1">
            {Array.from({ length: 5 }).map((_, i) => (
              <Star key={i} className={`h-4 w-4 ${i < (hotel.stars ?? 0) ? 'fill-yellow-400 text-yellow-400' : 'text-gray-300'}`} />
            ))}
          </div>
        )}
        <div className="mb-3 flex items-center gap-1 text-sm text-muted-foreground">
          <MapPin className="h-4 w-4" /><span>{hotel.location}</span>
        </div>
        <div className="flex items-end justify-between">
          <div>
            <p className="text-2xl font-bold text-primary">{hotel.price} <span className="text-sm">{hotel.currency}</span></p>
            <p className="text-xs text-muted-foreground">لليلة الواحدة</p>
          </div>
          <a href={hotel.deepLink} target="_blank" rel="nofollow sponsored noopener" className="flex items-center gap-1 rounded-lg bg-primary px-3 py-2 text-sm font-medium text-primary-foreground hover:bg-primary/90">احجز<ExternalLink className="h-3 w-3" /></a>
        </div>
      </div>
    </div>
  )
}