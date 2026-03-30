'use client';

import Link from 'next/link';
import { useTranslations } from 'next-intl';

export default function ContactPage() {
  const t = useTranslations('contact');

  return (
    <main className="min-h-screen">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <Link href="/" className="text-2xl font-bold text-primary-600">
              Area Defense
            </Link>
            <div className="flex items-center gap-4">
              <div className="flex gap-2">
                <Link href="/en" className="px-2 py-1 text-sm text-gray-600 hover:text-primary-600">EN</Link>
                <Link href="/ar" className="px-2 py-1 text-sm text-gray-600 hover:text-primary-600">عربي</Link>
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* Contact Form */}
      <section className="pt-32 pb-20 px-4">
        <div className="max-w-2xl mx-auto">
          <h1 className="text-4xl font-bold text-center mb-4">{t('title')}</h1>
          <p className="text-gray-600 text-center mb-12">{t('subtitle')}</p>
          
          <form className="bg-white p-8 rounded-2xl shadow-sm border">
            <div className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">{t('name')}</label>
                <input type="text" required className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">{t('company')}</label>
                <input type="text" required className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">{t('email')}</label>
                <input type="email" required className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">{t('phone')}</label>
                <input type="tel" className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">{t('message')}</label>
                <textarea rows={5} required className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"></textarea>
              </div>
              <button type="submit" className="w-full bg-primary-600 text-white py-3 rounded-lg font-semibold hover:bg-primary-700 transition">
                {t('submit')}
              </button>
            </div>
          </form>
        </div>
      </section>
    </main>
  );
}
