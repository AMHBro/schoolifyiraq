import { useState } from 'react'
import { TEACHERS } from './data/teachers.js'

function App() {
  const [showTrial, setShowTrial] = useState(false)

  return (
    <div className="min-h-screen bg-gradient-to-b from-sf-glow via-white to-amber-50/80">
      {/* Header with Logos */}
      <header className="py-8 px-4 border-b border-sf-soft/40 bg-white/70 backdrop-blur-sm">
        <div className="max-w-5xl mx-auto flex flex-col sm:flex-row items-center justify-center gap-8">
          <div className="flex items-center gap-4">
            <img src="/sodan-logo.png" alt="معهد السوداني" className="h-20 w-auto object-contain" />
            <span className="text-xl font-bold text-amber-900">معهد السوداني</span>
          </div>
          <div className="text-sf-muted text-3xl font-light">×</div>
          <div className="flex items-center gap-4">
            <img src="/schoolify-logo.png" alt="منصة سكولي فاي" className="h-20 w-auto object-contain" />
            <span className="text-xl font-bold text-sf-primary">منصة سكولي فاي</span>
          </div>
        </div>
      </header>

      <main className="max-w-4xl mx-auto px-4 py-12 space-y-16">
        {/* Hero / Introduction */}
        <section className="text-center">
          <h1 className="text-3xl md:text-4xl font-bold text-sf-deep mb-6 leading-relaxed">
            مبادرة تعليمية خاصة لطلبة السادس الإعدادي
          </h1>
          <p className="text-lg text-gray-700 leading-loose max-w-3xl mx-auto">
            تعلن إدارة معهد السوداني وبالتعاون مع منصة سكولي فاي عن إطلاق مبادرة تعليمية خاصة لطلبة السادس الإعدادي، 
            تهدف إلى توفير محاضرات شاملة ومتكاملة تغطي المنهج الكامل بطريقة مبسطة ومنظمة.
          </p>
        </section>

        {/* Teachers — مرتبون حسب المادة */}
        <section>
          <h2 className="text-2xl font-bold text-sf-deep mb-2 text-center">كادر التدريس</h2>
          <p className="text-center text-gray-600 mb-8 max-w-2xl mx-auto text-sm md:text-base">
            برنامج متكامل يهدف إلى العملية التعليمية للطلاب والأهالي والمدارس في مكان واحد بطريقة سهلة وفعالة.
          </p>
          <div className="grid sm:grid-cols-2 gap-6">
            {TEACHERS.map((t) => (
              <article
                key={t.id}
                className={`group relative overflow-hidden rounded-2xl border-2 bg-white shadow-lg shadow-sf-primary/10 transition hover:shadow-xl hover:shadow-sf-muted/20 ${t.borderClass}`}
              >
                <div className="flex flex-col sm:flex-row sm:items-stretch">
                  <div className="relative sm:w-[42%] shrink-0 overflow-hidden bg-gradient-to-br from-sf-deep/20 to-sf-muted/10">
                    <img
                      src={t.photo}
                      alt={t.name}
                      className="h-56 w-full object-cover object-top sm:h-full sm:min-h-[220px]"
                      loading="lazy"
                    />
                  </div>
                  <div className="flex flex-1 flex-col justify-center p-5 sm:p-6">
                    <p className="text-xs font-semibold uppercase tracking-wide text-sf-muted">نرحب بانضمام</p>
                    <h3 className="mt-1 text-lg font-bold text-sf-deep leading-tight">{t.name}</h3>
                    <p className={`mt-3 inline-flex rounded-lg bg-gradient-to-l px-3 py-1.5 text-sm font-semibold text-white ${t.accentClass}`}>
                      {t.subject}
                    </p>
                  </div>
                </div>
              </article>
            ))}
          </div>
          <p className="mt-6 text-center text-sm text-sf-muted">
            <span className="rounded-full bg-sf-banner/25 px-4 py-1.5 font-medium text-sf-deep">@schoolify_academ</span>
          </p>
        </section>

        {/* What does the student get? */}
        <section className="bg-white rounded-3xl shadow-xl shadow-sf-primary/10 p-8 md:p-12 border border-sf-soft/60">
          <h2 className="text-2xl font-bold text-sf-deep mb-6 text-center">
            📚 ماذا تشمل المبادرة؟
          </h2>
          <ul className="space-y-4">
            {[
              'محاضرات السادس الإعدادي كاملة',
              'شرح مفصل ومبسط لجميع الوحدات',
              'متابعة مستمرة للطلبة',
              'حساب خاص لكل طالب (اسم مستخدم وكلمة مرور)',
              'إمكانية الدخول من خلال تطبيق المنصة',
              'دعم فني وخدمة طلابية',
            ].map((item, i) => (
              <li key={i} className="flex items-center gap-3 text-gray-700">
                <span className="flex-shrink-0 w-6 h-6 rounded-full bg-sf-muted text-white flex items-center justify-center text-sm">✓</span>
                <span className="text-lg">{item}</span>
              </li>
            ))}
          </ul>
        </section>

        {/* Download App */}
        <section className="bg-white rounded-3xl shadow-xl p-8 md:p-12 border border-sf-soft/60">
          <h2 className="text-2xl font-bold text-sf-deep mb-6 text-center">
            📲 حمل تطبيق سكولي فاي
          </h2>
          <p className="text-center text-gray-600 mb-8">ادخل إلى منصتك الدراسية من أي مكان</p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="https://apps.apple.com/us/app/schoolify-student/id6753227545"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 px-6 py-4 bg-black hover:bg-gray-800 text-white rounded-2xl font-bold transition shadow-lg"
            >
              <span>App Store</span>
              <span>🍎</span>
            </a>
            <a
              href="https://play.google.com/store/apps/details?id=academy.schoolify.student"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 px-6 py-4 bg-green-600 hover:bg-green-700 text-white rounded-2xl font-bold transition shadow-lg"
            >
              <span>Google Play</span>
              <span>▶</span>
            </a>
          </div>
          <div className="mt-8 flex flex-col items-center">
            <button
              onClick={() => setShowTrial(!showTrial)}
              className="px-8 py-4 bg-sf-primary hover:bg-sf-muted text-white rounded-2xl font-bold transition shadow-lg flex items-center gap-2"
            >
              تسجيل تجريبي
              <span className="text-lg">{showTrial ? '▲' : '▼'}</span>
            </button>
            {showTrial && (
              <div className="mt-4 p-6 bg-sf-glow rounded-2xl border border-sf-soft/80 w-full max-w-md">
                <div className="space-y-2 text-center">
                  <p><span className="text-gray-600">رمز الطالب:</span> <code className="bg-white px-3 py-1 rounded font-mono">STUSC0001</code></p>
                  <p><span className="text-gray-600">كلمة المرور:</span> <code className="bg-white px-3 py-1 rounded font-mono">ZZZZZZZZ</code></p>
                </div>
              </div>
            )}
          </div>
        </section>

        {/* Registration Steps */}
        <section>
          <h2 className="text-2xl font-bold text-sf-deep mb-8 text-center">
            خطوات التسجيل
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { step: 1, title: 'التواصل معنا', desc: 'اتصل أو راسلنا عبر واتساب' },
              { step: 2, title: 'تسجيل البيانات', desc: 'أرسل بياناتك للتسجيل' },
              { step: 3, title: 'استلام الحساب', desc: 'ستحصل على حسابك الشخصي' },
            ].map(({ step, title, desc }) => (
              <div
                key={step}
                className="bg-white rounded-2xl p-6 shadow-lg border border-sf-soft/50 text-center"
              >
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-sf-primary to-sf-muted text-white flex items-center justify-center text-xl font-bold mx-auto mb-4">
                  {step}
                </div>
                <h3 className="font-bold text-sf-deep mb-2">{title}</h3>
                <p className="text-gray-600 text-sm">{desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Price */}
        <section className="bg-gradient-to-l from-sf-primary via-sf-muted to-purple-800 rounded-3xl p-8 md:p-12 text-white text-center shadow-xl shadow-sf-deep/25">
          <h2 className="text-2xl font-bold mb-4">السعر</h2>
          <p className="text-lg opacity-90">للاستفسار عن الأسعار والتسجيل، تواصل معنا</p>
        </section>

        {/* Contact */}
        <section className="bg-white rounded-3xl shadow-xl p-8 md:p-12 border border-sf-soft/60">
          <h2 className="text-2xl font-bold text-sf-deep mb-6 text-center">
            معلومات التواصل
          </h2>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <a
              href="https://wa.me/9647835062764"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 px-6 py-4 bg-green-500 hover:bg-green-600 text-white rounded-2xl font-bold transition shadow-lg"
            >
              <span className="text-2xl">📱</span>
              <span>964 783 506 2764</span>
            </a>
            <a
              href="tel:+9647736602112"
              className="flex items-center gap-3 px-6 py-4 bg-sf-primary hover:bg-sf-muted text-white rounded-2xl font-bold transition shadow-lg"
            >
              <span className="text-2xl">📞</span>
              <span>0773 660 2112</span>
            </a>
          </div>
        </section>
      </main>

      <footer className="py-8 text-center border-t border-sf-soft/40 bg-sf-glow/40">
        <div className="mb-4">
          <p className="text-sf-deep font-bold mb-2">📱 امسح للوصول للموقع</p>
          <img
            src="https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=https://schoolifyiraq.vercel.app/"
            alt="QR Code للموقع"
            className="mx-auto rounded-xl bg-white p-2 shadow"
          />
        </div>
        <p className="text-gray-500 text-sm">© معهد السوداني × سكولي فاي — مبادرة تعليمية لطلبة السادس الإعدادي</p>
      </footer>
    </div>
  )
}

export default App
