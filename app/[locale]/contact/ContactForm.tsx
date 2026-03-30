'use client';

import Link from 'next/link';
import { useTranslations } from 'next-intl';

const COUNTRIES = [
  'Saudi Arabia / السعودية',
  'UAE / الإمارات',
  'Qatar / قطر',
  'Kuwait / الكويت',
  'Bahrain / البحرين',
  'Oman / عُمان',
  'Iraq / العراق',
  'Egypt / مصر',
  'Jordan / الأردن',
  'Turkey / تركيا',
  'Other',
];

const BUSINESS_TYPES = [
  'Government / 政府机构',
  'Energy / 能源行业',
  'Data Center / 数据中心',
  'Port / 港口物流',
  'Industrial / 工业制造',
  'Other / 其他',
];

export default function ContactForm() {
  const t = useTranslations('contact');

  return (
    <main className="min-h-screen bg-atd-black text-white">

      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-atd-black/80 backdrop-blur-md border-b border-atd-steel/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <Link href="/" className="flex items-center gap-3">
              <div className="w-8 h-8 bg-atd-amber rounded flex items-center justify-center">
                <span className="text-atd-black font-bold text-sm">AT</span>
              </div>
              <span className="text-lg font-bold text-white tracking-wider">AEROTERRA</span>
            </Link>
            <div className="flex items-center gap-1 text-xs font-medium">
              <Link href="/en" className="px-2 py-1 rounded text-white hover:text-atd-amber transition">EN</Link>
              <span className="text-atd-steel">|</span>
              <Link href="/ar" className="px-2 py-1 rounded text-gray-500 hover:text-atd-amber transition">AR</Link>
            </div>
          </div>
        </div>
      </nav>

      {/* RFQ Form */}
      <section className="pt-28 pb-20 px-4 min-h-screen flex items-center">
        <div className="max-w-2xl mx-auto w-full">
          <div className="text-center mb-10">
            <h1 className="text-4xl font-bold text-white mb-3">{t('title')}</h1>
            <p className="text-atd-amber text-sm font-medium tracking-wider uppercase">{t('subtitle')}</p>
          </div>

          <form className="bg-atd-slate rounded-2xl p-8 border border-atd-steel/50 space-y-6">

            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">{t('name')} *</label>
              <input type="text" required placeholder="John Smith"
                className="w-full px-4 py-3 bg-atd-black border border-atd-steel rounded-lg text-white placeholder-gray-600 focus:outline-none focus:border-atd-amber transition" />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">{t('company')} *</label>
              <input type="text" required placeholder="Acme Energy Corp."
                className="w-full px-4 py-3 bg-atd-black border border-atd-steel rounded-lg text-white placeholder-gray-600 focus:outline-none focus:border-atd-amber transition" />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">{t('email')} *</label>
              <input type="email" required placeholder="john@acme-energy.com"
                className="w-full px-4 py-3 bg-atd-black border border-atd-steel rounded-lg text-white placeholder-gray-600 focus:outline-none focus:border-atd-amber transition" />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">{t('phone')}</label>
              <input type="tel" placeholder="+971 50 123 4567"
                className="w-full px-4 py-3 bg-atd-black border border-atd-steel rounded-lg text-white placeholder-gray-600 focus:outline-none focus:border-atd-amber transition" />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">{t('country')} *</label>
              <select required defaultValue=""
                className="w-full px-4 py-3 bg-atd-black border border-atd-steel rounded-lg text-white focus:outline-none focus:border-atd-amber transition appearance-none">
                <option value="" disabled className="text-gray-600">— Select Country —</option>
                {COUNTRIES.map((c) => <option key={c} value={c} className="bg-atd-black">{c}</option>)}
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">{t('businessType')} *</label>
              <select required defaultValue=""
                className="w-full px-4 py-3 bg-atd-black border border-atd-steel rounded-lg text-white focus:outline-none focus:border-atd-amber transition appearance-none">
                <option value="" disabled className="text-gray-600">— Select Business Type —</option>
                {BUSINESS_TYPES.map((b) => <option key={b} value={b} className="bg-atd-black">{b}</option>)}
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">{t('requirements')} *</label>
              <textarea rows={5} required placeholder="Please describe your perimeter defense requirements, site conditions, and any specific technical needs..."
                className="w-full px-4 py-3 bg-atd-black border border-atd-steel rounded-lg text-white placeholder-gray-600 focus:outline-none focus:border-atd-amber transition resize-none" />
            </div>

            <button type="submit"
              className="w-full bg-atd-amber text-atd-black py-4 rounded-lg font-bold text-base hover:bg-atd-gold transition shadow-lg shadow-atd-amber/20">
              {t('submit')}
            </button>
          </form>
        </div>
      </section>

    </main>
  );
}
