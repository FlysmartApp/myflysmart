import Link from 'next/link'
export default function Footer() {
  return (
    <footer className="mt-auto border-t bg-muted/50">
      <div className="container py-8">
        <div className="grid gap-8 md:grid-cols-4">
          <div>
            <h3 className="mb-4 text-lg font-semibold">MyFlySmart</h3>
            <p className="text-sm text-muted-foreground">منصتك الموثوقة لحجز الطيران والفنادق بأفضل الأسعار</p>
          </div>
          <div>
            <h4 className="mb-3 font-semibold">روابط سريعة</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="/flights" className="hover:text-primary">رحلات الطيران</Link></li>
              <li><Link href="/hotels" className="hover:text-primary">الفنادق</Link></li>
              <li><Link href="/about" className="hover:text-primary">من نحن</Link></li>
              <li><Link href="/contact" className="hover:text-primary">اتصل بنا</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="mb-3 font-semibold">قانوني</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="/privacy" className="hover:text-primary">سياسة الخصوصية</Link></li>
              <li><Link href="/terms" className="hover:text-primary">الشروط والأحكام</Link></li>
              <li><Link href="/affiliate-disclosure" className="hover:text-primary">إفصاح الشراكة</Link></li>
              <li><Link href="/status" className="hover:text-primary">حالة النظام</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="mb-3 font-semibold">تنويه</h4>
            <p className="text-xs text-muted-foreground">الأسعار تقديرية وقد تتغير. الحجز النهائي يتم عبر شركائنا. قد تحتوي روابطنا على روابط تابعة دون أي تكلفة إضافية عليك.</p>
          </div>
        </div>
        <div className="mt-8 border-t pt-4 text-center text-sm text-muted-foreground">
          <p>© 2025 MyFlySmart. جميع الحقوق محفوظة.</p>
        </div>
      </div>
    </footer>
  )
}