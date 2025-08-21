import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'من نحن - MyFlySmart',
  description: 'تعرف على MyFlySmart - منصتك الموثوقة لحجز الطيران والفنادق',
}

export default function AboutPage() {
  return (
    <div className="container py-12">
      <div className="mx-auto max-w-4xl">
        <h1 className="mb-8 text-4xl font-bold">من نحن</h1>
        <div className="prose prose-lg max-w-none">
          <p className="mb-6 text-lg leading-relaxed">
            MyFlySmart هي منصة رائدة لحجز الطيران والفنادق في المملكة العربية السعودية ومنطقة الخليج.
          </p>
          <h2 className="mb-4 mt-8 text-2xl font-semibold">مهمتنا</h2>
          <p className="mb-6 leading-relaxed">
            نهدف إلى جعل السفر أسهل وأكثر متعة من خلال توفير منصة سهلة الاستخدام تجمع بين أفضل عروض الطيران والفنادق في مكان واحد.
          </p>
          <h2 className="mb-4 mt-8 text-2xl font-semibold">لماذا MyFlySmart؟</h2>
          <ul className="mb-6 list-disc pr-6">
            <li className="mb-2">أسعار تنافسية مع ضمان أفضل سعر</li>
            <li className="mb-2">واجهة سهلة الاستخدام باللغة العربية</li>
            <li className="mb-2">خيارات دفع آمنة ومتعددة</li>
            <li className="mb-2">دعم عملاء على مدار الساعة</li>
            <li className="mb-2">شراكات مع أفضل شركات الطيران والفنادق</li>
          </ul>
          <h2 className="mb-4 mt-8 text-2xl font-semibold">التزامنا</h2>
          <p className="leading-relaxed">
            نلتزم بتوفير خدمة موثوقة وشفافة. جميع الأسعار المعروضة شاملة وواضحة، ونحرص على حماية بيانات عملائنا وخصوصيتهم.
          </p>
        </div>
      </div>
    </div>
  )
}