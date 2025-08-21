import { Plane, Hotel, CreditCard, Shield } from 'lucide-react'
const features = [
  { icon: Plane,  title: 'رحلات متنوعة',  description: 'أكثر من 1000 شركة طيران حول العالم' },
  { icon: Hotel,  title: 'فنادق مميزة',    description: 'ملايين الفنادق بأسعار تنافسية' },
  { icon: CreditCard, title: 'دفع آمن',   description: 'طرق دفع متعددة وآمنة 100%' },
  { icon: Shield, title: 'ضمان أفضل سعر', description: 'نضمن لك الحصول على أفضل الأسعار' },
]
export default function QuickLinks() {
  return (
    <section className="py-16 bg-muted/50">
      <div className="container">
        <h2 className="mb-12 text-center text-3xl font-bold">لماذا MyFlySmart؟</h2>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {features.map((f, i) => (
            <div key={i} className="text-center">
              <div className="mb-4 flex justify-center"><f.icon className="h-12 w-12 text-primary" /></div>
              <h3 className="mb-2 text-lg font-semibold">{f.title}</h3>
              <p className="text-sm text-muted-foreground">{f.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}