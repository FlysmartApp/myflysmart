export default function Hero() {
  return (
    <section className="relative bg-gradient-to-b from-primary/10 to-background py-20">
      <div className="container">
        <div className="mx-auto max-w-3xl text-center">
          <h1 className="mb-6 text-5xl font-bold tracking-tight">احجز رحلتك بذكاء</h1>
          <p className="mb-8 text-xl text-muted-foreground">اكتشف أفضل عروض الطيران والفنادق في مكان واحد</p>
          <div className="flex justify-center gap-4">
            <a href="/flights" className="rounded-lg bg-primary px-6 py-3 text-lg font-medium text-primary-foreground hover:bg-primary/90">ابحث عن رحلات</a>
            <a href="/hotels" className="rounded-lg border border-input bg-background px-6 py-3 text-lg font-medium hover:bg-accent">ابحث عن فنادق</a>
          </div>
        </div>
      </div>
    </section>
  )
}