'use client';

import Link from 'next/link';
import { useTranslations } from 'next-intl';

export default function HomePage() {
  const t = useTranslations();

  return (
    <main className="min-h-screen">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center gap-8">
              <Link href="/" className="text-2xl font-bold text-primary-600">
                Area Defense
              </Link>
              <div className="hidden md:flex gap-6">
                <Link href="/solutions" className="text-gray-700 hover:text-primary-600">
                  {t('nav.solutions')}
                </Link>
                <Link href="/products" className="text-gray-700 hover:text-primary-600">
                  {t('nav.products')}
                </Link>
                <Link href="/cases" className="text-gray-700 hover:text-primary-600">
                  {t('nav.cases')}
                </Link>
                <Link href="/about" className="text-gray-700 hover:text-primary-600">
                  {t('nav.about')}
                </Link>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <Link href="/contact" className="bg-primary-600 text-white px-4 py-2 rounded-lg hover:bg-primary-700">
                {t('nav.contact')}
              </Link>
              <div className="flex gap-2">
                <Link href="/en" className="px-2 py-1 text-sm text-gray-600 hover:text-primary-600">EN</Link>
                <Link href="/ar" className="px-2 py-1 text-sm text-gray-600 hover:text-primary-600">عربي</Link>
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 bg-gradient-to-br from-primary-50 to-white">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
            {t('hero.title')}
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            {t('hero.subtitle')}
          </p>
          <Link href="/contact" className="inline-block bg-primary-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-primary-700 transition">
            {t('hero.cta')}
          </Link>
        </div>
      </section>

      {/* Solutions Grid */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">{t('solutions.title')}</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-2xl shadow-sm border hover:shadow-md transition">
              <h3 className="text-xl font-semibold mb-4">{t('solutions.energy.title')}</h3>
              <p className="text-gray-600">{t('solutions.energy.description')}</p>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-sm border hover:shadow-md transition">
              <h3 className="text-xl font-semibold mb-4">{t('solutions.datacenter.title')}</h3>
              <p className="text-gray-600">{t('solutions.datacenter.description')}</p>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-sm border hover:shadow-md transition">
              <h3 className="text-xl font-semibold mb-4">{t('solutions.port.title')}</h3>
              <p className="text-gray-600">{t('solutions.port.description')}</p>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-sm border hover:shadow-md transition">
              <h3 className="text-xl font-semibold mb-4">{t('solutions.industrial.title')}</h3>
              <p className="text-gray-600">{t('solutions.industrial.description')}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">{t('products.title')}</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-2xl shadow-sm border">
              <h3 className="text-xl font-semibold mb-4">{t('products.areaDefense.title')}</h3>
              <p className="text-gray-600">{t('products.areaDefense.description')}</p>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-sm border">
              <h3 className="text-xl font-semibold mb-4">{t('products.inspection.title')}</h3>
              <p className="text-gray-600">{t('products.inspection.description')}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 border-t">
        <div className="max-w-7xl mx-auto text-center text-gray-500">
          {t('footer.copyright')}
        </div>
      </footer>
    </main>
  );
}
