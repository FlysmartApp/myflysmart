'use client'
import { useEffect, useState } from 'react'
import { CheckCircle, XCircle, AlertCircle } from 'lucide-react'
interface HealthStatus { status: string; services: { website: string; flightSearch: string; hotelSearch: string; timestamp: string }; version: string }
export default function StatusChecker() {
  const [health, setHealth] = useState<HealthStatus | null>(null)
  const [loading, setLoading] = useState(true)
  useEffect(() => { checkHealth() }, [])
  const checkHealth = async () => {
    try { const res = await fetch('/api/health'); const data = await res.json(); setHealth(data) } catch(e) { console.error(e) } finally { setLoading(false) }
  }
  const icon = (s:string) => s==='operational' ? <CheckCircle className="h-5 w-5 text-green-500" /> : s==='degraded' ? <AlertCircle className="h-5 w-5 text-yellow-500" /> : <XCircle className="h-5 w-5 text-red-500" />
  const text = (s:string) => s==='operational' ? 'يعمل بشكل طبيعي' : s==='degraded' ? 'أداء منخفض' : 'متوقف'
  if (loading) return (<div className="py-8 text-center"><div className="inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-primary border-r-transparent"></div></div>)
  if (!health) return (<div className="rounded-lg bg-red-50 p-4 text-red-800">فشل في التحقق من حالة النظام</div>)
  return (
    <div className="space-y-4">
      <div className="rounded-lg bg-green-50 p-4"><div className="flex items-center gap-2"><CheckCircle className="h-6 w-6 text-green-500" /><span className="text-lg font-semibold text-green-800">جميع الأنظمة تعمل بشكل طبيعي</span></div></div>
      <div className="space-y-3">
        <div className="flex items-center justify-between rounded-lg border p-4"><span className="font-medium">الموقع الإلكتروني</span><div className="flex items-center gap-2">{icon(health.services.website)}<span className="text-sm text-muted-foreground">{text(health.services.website)}</span></div></div>
        <div className="flex items-center justify-between rounded-lg border p-4"><span className="font-medium">بحث الرحلات</span><div className="flex items-center gap-2">{icon(health.services.flightSearch)}<span className="text-sm text-muted-foreground">{text(health.services.flightSearch)}</span></div></div>
        <div className="flex items-center justify-between rounded-lg border p-4"><span className="font-medium">بحث الفنادق</span><div className="flex items-center gap-2">{icon(health.services.hotelSearch)}<span className="text-sm text-muted-foreground">{text(health.services.hotelSearch)}</span></div></div>
      </div>
      <div className="text-sm text-muted-foreground"><p>آخر تحديث: {new Date(health.services.timestamp).toLocaleString('ar-SA')}</p><p>الإصدار: {health.version}</p></div>
    </div>
  )
}