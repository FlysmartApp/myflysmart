import { Plane, Clock, ExternalLink } from 'lucide-react'
interface FlightCardProps { flight: { from: string; to: string; airline: string; direct: boolean; departLocal: string; arriveLocal: string; price: number; currency: string; deepLink: string } }
export default function FlightCard({ flight }: FlightCardProps) {
  const formatTime = (s: string) => new Date(s).toLocaleTimeString('ar-SA', { hour: '2-digit', minute: '2-digit' })
  const formatDate = (s: string) => new Date(s).toLocaleDateString('ar-SA')
  const duration = (d: string, a: string) => { const diff = new Date(a).getTime() - new Date(d).getTime(); const h = Math.floor(diff/3600000); const m = Math.floor((diff%3600000)/60000); return `${h}س ${m}د` }
  return (
    <div className="rounded-lg border bg-card p-6 transition-shadow hover:shadow-lg">
      <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <div className="flex-1">
          <div className="mb-2 flex items-center gap-2">
            <span className="text-sm font-medium text-muted-foreground">{flight.airline}</span>
            {flight.direct ? <span className="rounded bg-green-100 px-2 py-1 text-xs text-green-800">مباشر</span> : <span className="rounded bg-orange-100 px-2 py-1 text-xs text-orange-800">توقف</span>}
          </div>
          <div className="flex items-center gap-4">
            <div className="text-center">
              <p className="text-2xl font-bold">{formatTime(flight.departLocal)}</p>
              <p className="text-sm text-muted-foreground">{flight.from}</p>
            </div>
            <div className="flex flex-1 items-center">
              <div className="h-px flex-1 bg-border"></div>
              <Plane className="mx-2 h-4 w-4 text-muted-foreground" />
              <div className="h-px flex-1 bg-border"></div>
            </div>
            <div className="text-center">
              <p className="text-2xl font-bold">{formatTime(flight.arriveLocal)}</p>
              <p className="text-sm text-muted-foreground">{flight.to}</p>
            </div>
          </div>
          <div className="mt-2 flex items-center gap-4 text-sm text-muted-foreground">
            <span className="flex items-center gap-1"><Clock className="h-4 w-4" />{duration(flight.departLocal, flight.arriveLocal)}</span>
            <span>{formatDate(flight.departLocal)}</span>
          </div>
        </div>
        <div className="flex flex-col items-end gap-2">
          <div className="text-right">
            <p className="text-3xl font-bold text-primary">{flight.price} <span className="text-base">{flight.currency}</span></p>
            <p className="text-sm text-muted-foreground">للشخص الواحد</p>
          </div>
          <a href={flight.deepLink} target="_blank" rel="nofollow sponsored noopener" className="flex items-center gap-2 rounded-lg bg-primary px-4 py-2 text-sm font-medium text-primary-foreground hover:bg-primary/90">
            احجز الآن <ExternalLink className="h-4 w-4" />
          </a>
        </div>
      </div>
    </div>
  )
}