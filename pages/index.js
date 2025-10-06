import Head from 'next/head'
import { useState } from 'react'

export default function Home() {
  const [lang, setLang] = useState('en');

  const t = {
    en: {
      titleLine1: 'We Create ',
      titleBold: 'Bold',
      titleLine2: ' Ideas that ',
      titleShine: 'Shine',
      desc: 'Creative Media — full-service digital agency. Brand strategy, creative campaigns, video production and performance marketing that convert.',
      services: 'Our Services',
      contactTitle: "Let's work together",
      payOnline: 'Pay Online',
      getStarted: 'Get Started',
      payStripe: 'Pay with Card (Stripe)',
      payTelecom: 'Pay via Telecom (Vodafone/Etisalat)',
      payPayPal: 'Pay with PayPal',
    },
    ar: {
      titleLine1: 'نبتكر ',
      titleBold: 'أفكار',
      titleLine2: ' جريئة ',
      titleShine: 'تلمع',
      desc: 'كرييتيف ميديا — وكالة متكاملة للخدمات الرقمية. استراتيجية علامة تجارية، حملات إبداعية، إنتاج فيديو وتسويق أداء.',
      services: 'خدماتنا',
      contactTitle: 'لنعمل معًا',
      payOnline: 'ادفع أونلاين',
      getStarted: 'ابدأ مشروع',
      payStripe: 'ادفع ببطاقة (Stripe)',
      payTelecom: 'ادفع عبر شركات الاتصالات',
      payPayPal: 'ادفع عبر PayPal',
    }
  };

  const langPack = t[lang];

  const initiate = async (provider) => {
    try {
      const res = await fetch('/api/pay/' + provider, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ amount: 5000, description: 'Creative Media - Deposit' })
      });
      const data = await res.json();
      if (data.url) {
        window.location.href = data.url;
      } else {
        alert(data.message || JSON.stringify(data));
      }
    } catch (err) {
      alert('Payment error: ' + err.message);
    }
  }

  return (
    <>
      <Head>
        <title>Creative Media — Agency</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <main className="min-h-screen">
        <nav className="max-w-6xl mx-auto px-6 py-6 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 bg-black/30 rounded-full flex items-center justify-center ring-2 ring-brand-orange">CM</div>
            <div>
              <div className="text-xl font-bold">Creative Media</div>
              <div className="text-xs text-gray-400">Agency · Advertising & Digital</div>
            </div>
          </div>
          <div className="flex gap-4 items-center">
            <div className="hidden md:flex gap-6 items-center text-gray-300">
              <a className="hover:text-white" href="#services">{lang === 'en' ? 'Services' : 'خدمات'}</a>
              <a className="hover:text-white" href="#portfolio">{lang === 'en' ? 'Portfolio' : 'أعمال'}</a>
              <a className="hover:text-white" href="#contact">{langPack.payOnline}</a>
            </div>
            <div className="flex items-center gap-2 ml-4">
              <button onClick={() => setLang('en')} className={`px-3 py-1 rounded ${lang==='en' ? 'bg-white text-black' : 'bg-transparent text-gray-300'}`}>EN</button>
              <button onClick={() => setLang('ar')} className={`px-3 py-1 rounded ${lang==='ar' ? 'bg-white text-black' : 'bg-transparent text-gray-300'}`}>AR</button>
            </div>
          </div>
        </nav>

        <header className="max-w-6xl mx-auto px-6 py-12 flex flex-col md:flex-row items-center gap-8">
          <div className="flex-1">
            <h1 className="text-4xl md:text-6xl leading-tight font-extrabold tracking-tight">
              {langPack.titleLine1}<span className="text-brand-orange">{langPack.titleBold}</span>{langPack.titleLine2}<span className="text-white">{langPack.titleShine}</span>
            </h1>
            <p className="mt-6 text-gray-300 max-w-xl">{langPack.desc}</p>
            <div className="mt-8 flex gap-4">
              <button className="px-6 py-3 rounded-md bg-brand-orange text-black font-semibold">{langPack.getStarted}</button>
              <a className="px-6 py-3 rounded-md border border-gray-700 text-gray-300">{lang === 'en' ? 'Our Work' : 'أعمالنا'}</a>
            </div>
          </div>

          <div className="flex-1">
            <div className="bg-gradient-to-br from-[#0f0f0f] to-[#151515] p-6 rounded-2xl shadow-2xl border border-[#222222]">
              <div className="w-full h-56 bg-black/60 rounded-md flex items-center justify-center text-gray-500">Portfolio Preview</div>
              <div className="mt-4 grid grid-cols-2 gap-4">
                <div className="h-24 bg-[#111] rounded-md border-2 border-[#2b2b2b] hover:border-brand-orange transition-all flex items-center justify-center">Ad 1</div>
                <div className="h-24 bg-[#111] rounded-md border-2 border-[#2b2b2b] hover:border-brand-orange transition-all flex items-center justify-center">Ad 2</div>
                <div className="h-24 bg-[#111] rounded-md border-2 border-[#2b2b2b] hover:border-brand-orange transition-all flex items-center justify-center">Ad 3</div>
                <div class_name="h-24 bg-[#111] rounded-md border-2 border-[#2b2b2b] hover:border-brand-orange transition-all flex items-center justify-center">Ad 4</div>
              </div>
            </div>
          </div>
        </header>

        <section id="services" className="max-w-6xl mx-auto px-6 py-12">
          <h2 className="text-3xl font-bold">{langPack.services}</h2>
          <p className="text-gray-400 mt-2 max-w-2xl">{lang === 'en' ? 'Full creative and digital stack — branding, video production, social media, UX/UI and performance campaigns.' : 'مجموعة متكاملة من الخدمات الإبداعية والرقمية — براندينج، إنتاج فيديو، سوشيال ميديا، UX/UI وحملات أداء.'}</p>

          <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
            {['Branding & Identity','Digital Marketing','Video Production','Social Media','UX/UI Design','Photography'].map((s, i) => (
              <div key={i} className="p-6 rounded-xl bg-[#0f0f0f] border border-[#222] hover:scale-[1.02] transition-transform">
                <div className="text-3xl">🎯</div>
                <h3 className="mt-4 font-semibold">{lang === 'en' ? s : ['العلامة التجارية','التسويق الرقمي','إنتاج فيديو','السوشيال ميديا','تصميم واجهات','التصوير'][i]}</h3>
                <p className="mt-2 text-gray-400 text-sm">{lang === 'en' ? 'Professional, strategic and creative execution to elevate your brand.' : 'تنفيذ احترافي واستراتيجي وإبداعي لرفع قيمة علامتك.'}</p>
              </div>
            ))}
          </div>
        </section>

        <section id="portfolio" className="max-w-6xl mx-auto px-6 py-12">
          <h2 className="text-3xl font-bold">{lang === 'en' ? 'Selected Work' : 'أعمال مختارة'}</h2>
          <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {Array.from({length:6}).map((_,i)=> (
              <div key={i} className="h-48 rounded-lg bg-gradient-to-br from-[#0b0b0b] to-[#151515] flex items-end p-4 border border-[#222] hover:ring-2 hover:ring-brand-orange transition">
                <div>
                  <div className="text-sm text-gray-400">{lang === 'en' ? 'Campaign' : 'حملة'}</div>
                  <div className="font-semibold">{lang === 'en' ? `Project #${i+1}` : `المشروع #${i+1}`}</div>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section id="contact" className="max-w-6xl mx-auto px-6 py-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
            <div>
              <h2 className="text-3xl font-bold">{langPack.contactTitle}</h2>
              <p className="text-gray-400 mt-2">{lang === 'en' ? 'Send us a message or choose a payment option below to pay for services or deposits.' : 'أرسل لنا رسالة أو اختر وسيلة الدفع أدناه لدفع قيمة الخدمات أو عربون.'}</p>

              <div className="mt-6 space-y-4">
                <input className="w-full p-3 rounded-md bg-[#0b0b0b] border border-[#222]" placeholder={lang === 'en' ? 'Your name' : 'الاسم'} />
                <input className="w-full p-3 rounded-md bg-[#0b0b0b] border border-[#222]" placeholder="Email" />
                <textarea className="w-full p-3 rounded-md bg-[#0b0b0b] border border-[#222]" placeholder={lang === 'en' ? 'Message' : 'رسالتك'} rows={5}></textarea>
                <div className="flex gap-3">
                  <button className="px-4 py-3 rounded-md bg-brand-orange text-black font-semibold">{lang === 'en' ? 'Send Message' : 'إرسال'}</button>
                  <button className="px-4 py-3 rounded-md border border-[#333]">{lang === 'en' ? 'Book Call' : 'احجز مكالمة'}</button>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-semibold">{langPack.payOnline}</h3>
              <p className="text-gray-400 text-sm mt-1">{lang === 'en' ? 'Multiple payment options — choose what\'s easiest for your clients.' : 'خيارات دفع متعددة — اختر الأسهل لعملائك.'}</p>

              <div className="mt-4 grid grid-cols-1 gap-3">
                <button className="w-full p-3 rounded-md bg-white text-black font-semibold" onClick={() => initiate('stripe')}>{langPack.payStripe}</button>
                <button className="w-full p-3 rounded-md bg-[#003087] text-white font-semibold" onClick={() => initiate('paypal')}>{langPack.payPayPal}</button>
                <button className="w-full p-3 rounded-md bg-[#1a1a1a] border border-[#ff6600] text-[#ff6600] font-semibold" onClick={() => initiate('paymob')}>{lang === 'en' ? 'Paymob (Egypt)' : 'بايموب (مصر)'}</button>
                <button className="w-full p-3 rounded-md bg-[#0b0b0b] border border-brand-orange text-brand-orange font-semibold" onClick={() => initiate('telecom')}>{langPack.payTelecom}</button>
              </div>

              <div className="mt-6 text-xs text-gray-500">
                <strong>Note:</strong> Buttons call corresponding API endpoints on the server: <code>/api/pay/stripe</code>, <code>/api/pay/paypal</code>, <code>/api/pay/paymob</code>, <code>/api/pay/telecom</code>.
              </div>
            </div>
          </div>
        </section>

        <footer className="border-t border-[#171717] mt-12 py-8">
          <div className="max-w-6xl mx-auto px-6 text-center text-gray-500">© {new Date().getFullYear()} Creative Media — All rights reserved.</div>
        </footer>
      </main>
    </>
  )
}
