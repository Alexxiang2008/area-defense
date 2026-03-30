'use client';

import Link from 'next/link';
import { useTranslations } from 'next-intl';

export default function HomePage() {
  const t = useTranslations();

  return (
    <main className="min-h-screen bg-atd-black text-white">

      {/* ==========================================
           SCREEN 1 — ATTENTION (HERO)
           ========================================== */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Hero background placeholder */}
        {/* TODO: Hero背景图 - 战术无人机悬停在波斯湾油气平台上空，夕阳沙尘暴背景，热成像镜头发出红光 */}
        <div className="absolute inset-0 bg-gradient-to-br from-atd-slate via-atd-black to-atd-steel" />
        <div className="absolute inset-0 bg-gradient-to-t from-atd-black/80 via-atd-black/40 to-transparent" />

        {/* Navigation */}
        <nav className="absolute top-0 left-0 right-0 z-50 bg-atd-black/70 backdrop-blur-md border-b border-atd-steel/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center h-16">
              {/* Logo */}
              <div className="flex items-center gap-3">
                {/* TODO: ATD Logo */}
                <div className="w-8 h-8 bg-atd-amber rounded flex items-center justify-center">
                  <span className="text-atd-black font-bold text-sm">AT</span>
                </div>
                <span className="text-lg font-bold text-white tracking-wider">AEROTERRA</span>
              </div>

              {/* Nav Links */}
              <div className="hidden md:flex items-center gap-8">
                <Link href="/solutions" className="text-gray-300 hover:text-atd-amber transition text-sm tracking-wide">
                  {t('nav.solutions')}
                </Link>
                <Link href="/products" className="text-gray-300 hover:text-atd-amber transition text-sm tracking-wide">
                  {t('nav.products')}
                </Link>
                <Link href="/about" className="text-gray-300 hover:text-atd-amber transition text-sm tracking-wide">
                  {t('nav.about')}
                </Link>
                <Link href="/contact" className="text-gray-300 hover:text-atd-amber transition text-sm tracking-wide">
                  {t('nav.contact')}
                </Link>
              </div>

              {/* Right side: lang switch + CTA */}
              <div className="flex items-center gap-4">
                <div className="flex items-center gap-1 text-xs font-medium">
                  <Link href="/en" className="px-2 py-1 rounded text-white hover:text-atd-amber transition">EN</Link>
                  <span className="text-atd-steel">|</span>
                  <Link href="/ar" className="px-2 py-1 rounded text-gray-500 hover:text-atd-amber transition">AR</Link>
                </div>
                <Link href="/contact" className="bg-atd-amber text-atd-black px-4 py-2 rounded-lg font-semibold text-sm hover:bg-atd-gold transition">
                  {t('nav.getQuote')}
                </Link>
              </div>
            </div>
          </div>
        </nav>

        {/* Hero Content */}
        <div className="relative z-10 max-w-5xl mx-auto px-4 text-center">
          <p className="text-atd-amber text-sm font-semibold tracking-[0.3em] uppercase mb-6">
            AeroTerra Dynamics — Area Defense Division
          </p>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white leading-tight mb-6">
            {t('hero.title')}
          </h1>
          <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto mb-10 leading-relaxed">
            {t('hero.subtitle')}
          </p>
          <Link href="/contact" className="inline-block bg-atd-amber text-atd-black px-10 py-4 rounded-lg text-lg font-bold hover:bg-atd-gold transition shadow-lg shadow-atd-amber/20">
            {t('hero.cta')}
          </Link>
        </div>

        {/* Bottom fade */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-atd-black to-transparent" />
      </section>

      {/* ==========================================
           SCREEN 2 — INTEREST (Four Industry Cards)
           ========================================== */}
      <section className="py-24 px-4 bg-atd-slate">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-white mb-4">
            {t('interest.title')}
          </h2>
          <p className="text-gray-400 text-center mb-16 max-w-2xl mx-auto">
            专为中东关键基础设施打造的四大刚需场景
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

            {/* Card 1: Energy / Oil Field */}
            <div className="relative bg-atd-black rounded-2xl overflow-hidden border border-atd-steel/40 group hover:border-atd-amber/50 transition-colors">
              {/* TODO: 能源行业场景插图 - 油气管道热成像，无人机巡检沙漠油田 */}
              <div className="h-48 bg-gradient-to-br from-atd-steel to-atd-slate flex items-center justify-center">
                <div className="w-16 h-16 border-2 border-atd-amber/30 rounded-full flex items-center justify-center">
                  <div className="w-8 h-8 bg-atd-amber/20 rounded-full" />
                </div>
              </div>
              <div className="p-8">
                <h3 className="text-xl font-bold text-atd-amber mb-3">{t('interest.energy.title')}</h3>
                <p className="text-gray-400 leading-relaxed">{t('interest.energy.desc')}</p>
              </div>
            </div>

            {/* Card 2: Data Center */}
            <div className="relative bg-atd-black rounded-2xl overflow-hidden border border-atd-steel/40 group hover:border-atd-amber/50 transition-colors">
              {/* TODO: 数据中心场景插图 - 服务器机房，物理边界监控，冷却系统 */}
              <div className="h-48 bg-gradient-to-br from-atd-steel to-atd-slate flex items-center justify-center">
                <div className="w-16 h-16 border-2 border-atd-amber/30 rounded-full flex items-center justify-center">
                  <div className="w-8 h-8 bg-atd-amber/20 rounded-full" />
                </div>
              </div>
              <div className="p-8">
                <h3 className="text-xl font-bold text-atd-amber mb-3">{t('interest.datacenter.title')}</h3>
                <p className="text-gray-400 leading-relaxed">{t('interest.datacenter.desc')}</p>
              </div>
            </div>

            {/* Card 3: Port / Maritime */}
            <div className="relative bg-atd-black rounded-2xl overflow-hidden border border-atd-steel/40 group hover:border-atd-amber/50 transition-colors">
              {/* TODO: 港口海防场景插图 - 波斯湾港口，雷达光电联动，夜间监控 */}
              <div className="h-48 bg-gradient-to-br from-atd-steel to-atd-slate flex items-center justify-center">
                <div className="w-16 h-16 border-2 border-atd-amber/30 rounded-full flex items-center justify-center">
                  <div className="w-8 h-8 bg-atd-amber/20 rounded-full" />
                </div>
              </div>
              <div className="p-8">
                <h3 className="text-xl font-bold text-atd-amber mb-3">{t('interest.port.title')}</h3>
                <p className="text-gray-400 leading-relaxed">{t('interest.port.desc')}</p>
              </div>
            </div>

            {/* Card 4: Industrial Inspection */}
            <div className="relative bg-atd-black rounded-2xl overflow-hidden border border-atd-steel/40 group hover:border-atd-amber/50 transition-colors">
              {/* TODO: 工业巡检场景插图 - 工厂设备，AI预测性维护，机器人巡检 */}
              <div className="h-48 bg-gradient-to-br from-atd-steel to-atd-slate flex items-center justify-center">
                <div className="w-16 h-16 border-2 border-atd-amber/30 rounded-full flex items-center justify-center">
                  <div className="w-8 h-8 bg-atd-amber/20 rounded-full" />
                </div>
              </div>
              <div className="p-8">
                <h3 className="text-xl font-bold text-atd-amber mb-3">{t('interest.industrial.title')}</h3>
                <p className="text-gray-400 leading-relaxed">{t('interest.industrial.desc')}</p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ==========================================
           SCREEN 3 — DESIRE / TRUST (Engineering Specs)
           ========================================== */}
      <section className="py-24 px-4 bg-atd-black relative overflow-hidden">
        {/* Background texture */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: 'repeating-linear-gradient(0deg, transparent, transparent 50px, rgba(255,255,255,.05) 50px, rgba(255,255,255,.05) 51px), repeating-linear-gradient(90deg, transparent, transparent 50px, rgba(255,255,255,.05) 50px, rgba(255,255,255,.05) 51px)'
          }} />
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          {/* Section header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
              {t('trust.title')}
            </h2>
            <p className="text-gray-400 text-lg">{t('trust.subtitle')}</p>
          </div>

          {/* 3D Product Explosion Placeholder */}
          <div className="relative bg-atd-slate rounded-3xl overflow-hidden mb-16">
            {/* TODO: 产品3D爆炸图，展示云台摄像头内部结构，背景是沙尘弥漫的港口 */}
            <div className="aspect-video flex items-center justify-center">
              <div className="text-center">
                <div className="w-24 h-24 mx-auto mb-6 border-2 border-atd-amber/40 rounded-full flex items-center justify-center">
                  <div className="w-12 h-12 bg-atd-amber/10 rounded-full" />
                </div>
                <p className="text-gray-500 text-sm">PRODUCT 3D EXPLOSION VIEW — PENDING ASSET</p>
              </div>
            </div>
          </div>

          {/* Trust Grid — 4 engineering specs */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">

            {/* Spec 1: Material */}
            <div className="bg-atd-slate rounded-xl p-6 border border-atd-steel/50 hover:border-atd-amber/50 transition-colors">
              <div className="w-12 h-12 bg-atd-amber/10 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-atd-amber" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-atd-amber font-semibold text-sm mb-2 tracking-wide">{t('trust.material')}</h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                316L 军工级不锈钢（可选材质待确认）外壳，无惧高盐雾与沙暴
              </p>
            </div>

            {/* Spec 2: Temperature */}
            <div className="bg-atd-slate rounded-xl p-6 border border-atd-steel/50 hover:border-atd-amber/50 transition-colors">
              <div className="w-12 h-12 bg-atd-amber/10 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-atd-amber" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-atd-amber font-semibold text-sm mb-2 tracking-wide">{t('trust.temp')}</h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                支持 -40°C ~ +70°C 宽温运行（精确参数待确认）
              </p>
            </div>

            {/* Spec 3: IP Rating */}
            <div className="bg-atd-slate rounded-xl p-6 border border-atd-steel/50 hover:border-atd-amber/50 transition-colors">
              <div className="w-12 h-12 bg-atd-amber/10 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-atd-amber" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
              </div>
              <h3 className="text-atd-amber font-semibold text-sm mb-2 tracking-wide">{t('trust.ip')}</h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                IP68 + IK10 认证（设计标准，认证进行中）
              </p>
            </div>

            {/* Spec 4: Core Components */}
            <div className="bg-atd-slate rounded-xl p-6 border border-atd-steel/50 hover:border-atd-amber/50 transition-colors">
              <div className="w-12 h-12 bg-atd-amber/10 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-atd-amber" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
                </svg>
              </div>
              <h3 className="text-atd-amber font-semibold text-sm mb-2 tracking-wide">{t('trust.chip')}</h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                内置 Sony / Nvidia / Qualcomm 顶级供应链（具体型号待确认）
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* ==========================================
           SCREEN 4 — ACTION (CTA / War Room)
           ========================================== */}
      <section className="relative py-32 px-4 overflow-hidden">
        {/* Background placeholder */}
        {/* TODO: ATD控制台，豪华作战室War Room背景，大屏幕显示中东地图 */}
        <div className="absolute inset-0 bg-gradient-to-br from-atd-steel via-atd-slate to-atd-black" />
        <div className="absolute inset-0 bg-gradient-to-r from-atd-black/60 to-transparent" />

        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            {t('action.title')}
          </h2>
          <p className="text-xl text-gray-300 mb-4">
            {t('action.subtitle')}
          </p>
          <p className="text-gray-500 mb-12 text-sm">
            响应时间 &lt; 24h | 驻场工程师可选 | 多语言支持
          </p>
          <Link href="/contact" className="inline-block bg-atd-amber text-atd-black px-12 py-5 rounded-xl text-xl font-bold hover:bg-atd-gold transition shadow-2xl shadow-atd-amber/30">
            {t('action.cta')}
          </Link>
        </div>

        {/* Bottom grid overlay */}
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-atd-amber/20 to-transparent" />
      </section>

      {/* ==========================================
           FOOTER
           ========================================== */}
      <footer className="py-8 px-4 bg-atd-black border-t border-atd-steel/30">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-6 h-6 bg-atd-amber rounded flex items-center justify-center">
              <span className="text-atd-black font-bold text-xs">AT</span>
            </div>
            <span className="text-sm font-bold text-white tracking-wider">AEROTERRA DYNAMICS</span>
          </div>
          <p className="text-gray-600 text-xs">
            © 2026 AeroTerra Dynamics. All rights reserved.
          </p>
        </div>
      </footer>

    </main>
  );
}
