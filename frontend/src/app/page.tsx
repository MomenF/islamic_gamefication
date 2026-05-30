"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { 
  Sparkles, 
  Search, 
  Lightbulb, 
  Swords, 
  Globe, 
  Smartphone, 
  WifiOff, 
  Zap, 
  Download, 
  User, 
  Settings, 
  BookOpen, 
  ChevronLeft,
  Trophy,
  Award,
  Users
} from "lucide-react";

export default function Home() {
  const [deferredPrompt, setDeferredPrompt] = useState<any>(null);
  const [isInstallable, setIsInstallable] = useState(false);
  const [activeTab, setActiveTab] = useState<"modes" | "about">("modes");

  useEffect(() => {
    const handleBeforeInstallPrompt = (e: Event) => {
      e.preventDefault();
      setDeferredPrompt(e);
      setIsInstallable(true);
    };

    window.addEventListener("beforeinstallprompt", handleBeforeInstallPrompt);

    // Check if already installed
    if (window.matchMedia("(display-mode: standalone)").matches) {
      setIsInstallable(false);
    }

    return () => {
      window.removeEventListener("beforeinstallprompt", handleBeforeInstallPrompt);
    };
  }, []);

  const handleInstallClick = async () => {
    if (!deferredPrompt) return;
    deferredPrompt.prompt();
    const { outcome } = await deferredPrompt.userChoice;
    if (outcome === "accepted") {
      setIsInstallable(false);
      setDeferredPrompt(null);
    }
  };

  const gameModes = [
    {
      id: "spy",
      title: "وضع المتخفي",
      englishTitle: "Game Spy",
      icon: <Search className="w-8 h-8 text-teal-400" />,
      description: "يدخل أحد اللاعبين كمتخفي دون علم بسورة الجولة، بينما يعرفها بقية اللاعبين. يطرح الجميع أسئلة ذكية لكشف المتخفي، بينما يسعى المتخفي لتخمين اسم السورة من خلال الحوار الدائر.",
      badge: "تحليل وذكاء",
      gradient: "from-teal-950/40 via-slate-900/60 to-cyan-950/40 hover:border-teal-500/50 border-teal-500/10",
      glowColor: "rgba(13, 148, 136, 0.2)",
      badgeColor: "bg-teal-500/10 text-teal-300 border-teal-500/30",
    },
    {
      id: "researchers",
      title: "وضع الباحثين",
      englishTitle: "Game Researchers",
      icon: <Lightbulb className="w-8 h-8 text-amber-400" />,
      description: "تحدٍ معرفي وثقافي شيق حول معلومات سور القرآن الكريم. يطرح النظام صفات وأسرار سورة معينة، ويتسابق اللاعبون لتخمين السورة الصحيحة من بين قائمة الـ 114 سورة كاملة.",
      badge: "ثقافة قرآنية",
      gradient: "from-amber-950/30 via-slate-900/60 to-orange-950/30 hover:border-amber-500/50 border-amber-500/10",
      glowColor: "rgba(245, 158, 11, 0.2)",
      badgeColor: "bg-amber-500/10 text-amber-300 border-amber-500/30",
    },
    {
      id: "challenge",
      title: "المواجهة الكبرى",
      englishTitle: "Game Challenge",
      icon: <Swords className="w-8 h-8 text-rose-400" />,
      description: "قسّم اللاعبين إلى فريقين متنافسين، وانطلق في جولات حماسية للإجابة على أسئلة الاختيار من متعدد التنافسية مع احتساب فوري للنقاط ولوحة شرف متكاملة للمنافسة الجسورة.",
      badge: "تنافس جماعي",
      gradient: "from-rose-950/35 via-slate-900/60 to-red-950/35 hover:border-rose-500/50 border-rose-500/10",
      glowColor: "rgba(244, 63, 94, 0.2)",
      badgeColor: "bg-rose-500/10 text-rose-300 border-rose-500/30",
    },
    {
      id: "online",
      title: "الساحة العالمية",
      englishTitle: "Online Matchmaking",
      icon: <Globe className="w-8 h-8 text-emerald-400" />,
      description: "تنافس مع متسابقين من شتى أنحاء العالم الإسلامي عبر الغرف العامة، أو أنشئ غرفتك الخاصة لمنافسة أصدقائك عبر الإنترنت في بث حي متكامل وتواصل لحظي فوري.",
      badge: "أونلاين",
      gradient: "from-emerald-950/30 via-slate-900/60 to-emerald-950/40 hover:border-emerald-500/50 border-emerald-500/10",
      glowColor: "rgba(16, 185, 129, 0.2)",
      badgeColor: "bg-emerald-500/10 text-emerald-300 border-emerald-500/30",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col relative bg-[#060a13] selection:bg-teal-500 selection:text-slate-950">
      
      {/* 8-Point Islamic Star Geometric Background (Arabesque Pattern) */}
      <div className="absolute inset-0 opacity-[0.035] pointer-events-none mix-blend-overlay z-0" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='80' height='80' viewBox='0 0 80 80' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M40 0 L47 27 L74 34 L47 41 L40 68 L33 41 L6 34 L33 27 Z M40 12 L44 28 L60 32 L44 36 L40 52 L36 36 L20 32 L36 28 Z' fill='%230d9488' fill-rule='evenodd'/%3E%3C/svg%3E")`,
        backgroundRepeat: 'repeat'
      }} />

      {/* Futuristic Radial Glows */}
      <div className="absolute top-[-15%] right-[-15%] w-[60%] h-[60%] rounded-full bg-teal-500/10 blur-[130px] pointer-events-none z-0" />
      <div className="absolute bottom-[-15%] left-[-15%] w-[60%] h-[60%] rounded-full bg-amber-500/5 blur-[130px] pointer-events-none z-0" />
      <div className="absolute top-[35%] left-[20%] w-[35%] h-[35%] rounded-full bg-cyan-500/5 blur-[110px] pointer-events-none z-0" />

      {/* PWA Smart Notification Banner */}
      {isInstallable && (
        <div className="w-full bg-gradient-to-r from-teal-950/95 to-slate-950/95 backdrop-blur-xl border-b border-teal-500/25 px-4 py-3 flex items-center justify-between gap-4 z-50 animate-slide-down">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-teal-500/10 rounded-xl border border-teal-500/20 shadow-inner">
              <Download className="w-5 h-5 text-teal-400" />
            </div>
            <div>
              <p className="text-sm font-bold text-slate-200">تثبيت التطبيق على جهازك</p>
              <p className="text-xs text-slate-400">يدعم التشغيل دون اتصال بالشبكة وسرعة استجابة مذهلة كالتطبيقات الرسمية.</p>
            </div>
          </div>
          <button 
            onClick={handleInstallClick}
            className="px-4 py-2 bg-gradient-to-r from-teal-500 to-teal-600 hover:from-teal-600 hover:to-teal-700 text-slate-950 font-bold rounded-lg text-xs transition duration-200 shadow-lg shadow-teal-500/10 hover:shadow-teal-500/20 cursor-pointer"
          >
            تثبيت التطبيق
          </button>
        </div>
      )}

      {/* Navigation Header */}
      <header className="w-full max-w-6xl mx-auto px-4 py-6 flex items-center justify-between border-b border-slate-900/60 z-10">
        <div className="flex items-center gap-3">
          {/* AI-Generated App Logo Frame */}
          <div className="relative w-12 h-12 rounded-xl bg-gradient-to-tr from-teal-500 via-amber-500 to-teal-400 p-[1px] shadow-lg shadow-teal-500/10">
            <div className="w-full h-full bg-slate-950 rounded-[11px] overflow-hidden flex items-center justify-center">
              <Image 
                src="/icons/icon-512x512.png" 
                alt="Logo" 
                width={48} 
                height={48}
                className="object-cover"
                priority
              />
            </div>
          </div>
          <div>
            <h1 className="text-xl font-extrabold tracking-tight bg-gradient-to-r from-teal-300 via-amber-200 to-teal-400 bg-clip-text text-transparent">
              سورُ القُرآنِ
            </h1>
            <p className="text-[10px] text-slate-500 uppercase tracking-widest font-semibold">Islamic Gamification</p>
          </div>
        </div>

        <div className="flex items-center gap-4">
          <button className="p-2 hover:bg-slate-900/60 rounded-xl text-slate-400 hover:text-slate-200 transition border border-transparent hover:border-slate-800 cursor-pointer">
            <Settings className="w-5 h-5" />
          </button>
          <div className="h-6 w-[1px] bg-slate-900" />
          <button className="flex items-center gap-2 px-4 py-2 hover:bg-slate-900/60 rounded-xl text-sm text-slate-300 hover:text-slate-100 transition border border-slate-900/80 cursor-pointer">
            <User className="w-4 h-4 text-teal-400" />
            <span className="font-semibold">بوابة الحساب</span>
          </button>
        </div>
      </header>

      {/* Hero & Branding Section */}
      <section className="w-full max-w-4xl mx-auto px-4 pt-16 pb-8 text-center z-10">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-gradient-to-r from-teal-500/5 to-amber-500/5 border border-teal-500/20 rounded-full text-xs text-teal-300 mb-8 font-semibold">
          <Sparkles className="w-3.5 h-3.5 text-amber-400" />
          <span>تطبيق إسلامي تفاعلي بمواصفات تقنية عالمية</span>
        </div>

        {/* Large Centered 3D AI Logo Display with Royal Halo */}
        <div className="relative w-28 h-28 mx-auto mb-8 flex items-center justify-center">
          <div className="absolute inset-0 rounded-3xl bg-gradient-to-tr from-teal-500 to-amber-500 opacity-20 blur-xl animate-pulse" />
          <div className="w-full h-full rounded-3xl bg-gradient-to-tr from-teal-500 via-amber-500 to-cyan-400 p-[1.5px] shadow-2xl shadow-teal-500/20">
            <div className="w-full h-full bg-slate-950 rounded-[22.5px] overflow-hidden p-1 flex items-center justify-center">
              <Image 
                src="/icons/icon-512x512.png" 
                alt="Quran Game Core Art" 
                width={100} 
                height={100}
                className="object-cover rounded-2xl transform hover:scale-105 transition-transform duration-300"
              />
            </div>
          </div>
        </div>

        <h2 className="text-4xl md:text-5xl font-extrabold leading-tight text-slate-100 mb-6 font-sans tracking-tight">
          ارتقِ بمعلوماتك في <br />
          <span className="text-gold-gradient font-black">سور الكتاب الكريم</span>
        </h2>
        <p className="text-base text-slate-400 max-w-2xl mx-auto mb-10 leading-relaxed font-medium">
          مفهوم مبتكر يجمع بين أساليب اللعب الحديثة وتثبيت وحفظ سور القرآن الكريم. منصة ممتعة مصممة للعائلات والمجموعات للتنافس العلمي الهادف والتكامل المعرفي الشامل.
        </p>

        {/* Menu Tab Selectors */}
        <div className="inline-flex p-1 bg-slate-950/80 backdrop-blur-xl border border-slate-900 rounded-xl mb-12 shadow-2xl">
          <button 
            onClick={() => setActiveTab("modes")}
            className={`px-8 py-2.5 rounded-lg text-sm font-bold transition duration-300 cursor-pointer ${
              activeTab === "modes" 
                ? "bg-gradient-to-r from-teal-500 to-teal-600 text-slate-950 shadow-md font-extrabold" 
                : "text-slate-400 hover:text-slate-200"
            }`}
          >
            بوابة أنماط اللعب
          </button>
          <button 
            onClick={() => setActiveTab("about")}
            className={`px-8 py-2.5 rounded-lg text-sm font-bold transition duration-300 cursor-pointer ${
              activeTab === "about" 
                ? "bg-gradient-to-r from-teal-500 to-teal-600 text-slate-950 shadow-md font-extrabold" 
                : "text-slate-400 hover:text-slate-200"
            }`}
          >
            المواصفات التقنية الفائقة
          </button>
        </div>
      </section>

      {/* Main Interactive Content */}
      <main className="w-full max-w-6xl mx-auto px-4 pb-24 flex-grow z-10">
        {activeTab === "modes" ? (
          /* Gaming Dashboard Grid */
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {gameModes.map((mode) => (
              <div 
                key={mode.id}
                style={{ boxShadow: `0 10px 40px -15px ${mode.glowColor}` }}
                className={`group relative p-8 rounded-2xl border bg-slate-900/20 backdrop-blur-xl transition-all duration-300 cursor-pointer overflow-hidden flex flex-col justify-between ${mode.gradient}`}
              >
                {/* Subtle Inner Arabesque Glow */}
                <div className="absolute -top-16 -left-16 w-32 h-32 rounded-full bg-teal-500/5 blur-2xl group-hover:scale-150 transition-all duration-500" />
                
                <div className="flex items-start gap-5">
                  {/* Icon Wrapper */}
                  <div className="p-3.5 bg-slate-950/90 rounded-xl border border-slate-800 group-hover:scale-110 transition duration-300 shadow-md group-hover:border-teal-500/25">
                    {mode.icon}
                  </div>
                  
                  <div className="flex-grow">
                    <div className="flex items-center justify-between mb-3">
                      <div>
                        <h3 className="text-xl font-bold text-slate-100 group-hover:text-teal-300 transition duration-200">
                          {mode.title}
                        </h3>
                        <p className="text-[10px] text-slate-500 uppercase tracking-widest font-semibold">{mode.englishTitle}</p>
                      </div>
                      <span className={`px-3 py-1 rounded-full text-xs font-semibold border ${mode.badgeColor}`}>
                        {mode.badge}
                      </span>
                    </div>
                    
                    <p className="text-sm text-slate-400 leading-relaxed font-medium mb-6">
                      {mode.description}
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-2 text-xs text-teal-400 font-bold group-hover:gap-3 transition-all duration-300 mt-4 border-t border-slate-900/60 pt-4">
                  <span>انطلق الآن في الجولة</span>
                  <ChevronLeft className="w-4 h-4" />
                </div>
              </div>
            ))}
          </div>
        ) : (
          /* PWA / Tech Features Showroom */
          <div className="max-w-4xl mx-auto glass-panel rounded-2xl p-8 md:p-12 border-slate-900/80 shadow-2xl relative overflow-hidden">
            {/* Islamic Star Accent */}
            <div className="absolute top-4 left-4 w-12 h-12 opacity-[0.05] pointer-events-none" style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 24 24' fill='%230d9488' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M12 0l3 9 9 3-9 3-3 9-3-9-9-3 9-3z'/%3E%3C/svg%3E")`,
              backgroundSize: 'contain'
            }} />

            <h3 className="text-2xl font-extrabold text-slate-100 mb-8 text-center bg-gradient-to-r from-teal-300 to-amber-200 bg-clip-text text-transparent">
              خصائص متكاملة للعمل بدون اتصال وبأعلى كفاءة
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Feature 1 */}
              <div className="p-6 bg-slate-950/50 rounded-2xl border border-slate-900/60 text-center hover:border-teal-500/25 transition">
                <div className="w-14 h-14 rounded-2xl bg-teal-500/5 border border-teal-500/10 flex items-center justify-center mx-auto mb-5 shadow-inner">
                  <WifiOff className="w-6 h-6 text-teal-400" />
                </div>
                <h4 className="text-lg font-bold text-slate-200 mb-3">دعم غير متصل بالكامل</h4>
                <p className="text-xs text-slate-400 leading-relaxed font-medium">
                  يتم تخزين الـ 114 سورة والأسئلة كاملة محلياً على جهازك، مما يتيح لك اللعب مع الأصدقاء والعائلة في أي مكان دون الحاجة للاتصال بالشبكة.
                </p>
              </div>

              {/* Feature 2 */}
              <div className="p-6 bg-slate-950/50 rounded-2xl border border-slate-900/60 text-center hover:border-amber-500/25 transition">
                <div className="w-14 h-14 rounded-2xl bg-amber-500/5 border border-amber-500/10 flex items-center justify-center mx-auto mb-5 shadow-inner">
                  <Smartphone className="w-6 h-6 text-amber-400" />
                </div>
                <h4 className="text-lg font-bold text-slate-200 mb-3">تطبيق متكامل الأركان</h4>
                <p className="text-xs text-slate-400 leading-relaxed font-medium">
                  ثبّت المنصة مباشرة على هاتفك الذكي أو حاسوبك الشخصي بلمسة زر واحدة. سيعمل كأي تطبيق محلي مع تفعيل ملء الشاشة الفخم.
                </p>
              </div>

              {/* Feature 3 */}
              <div className="p-6 bg-slate-950/50 rounded-2xl border border-slate-900/60 text-center hover:border-rose-500/25 transition">
                <div className="w-14 h-14 rounded-2xl bg-rose-500/5 border border-rose-500/10 flex items-center justify-center mx-auto mb-5 shadow-inner">
                  <Zap className="w-6 h-6 text-rose-400" />
                </div>
                <h4 className="text-lg font-bold text-slate-200 mb-3">استجابة فائقة السرعة</h4>
                <p className="text-xs text-slate-400 leading-relaxed font-medium">
                  تطوير وبناء مبني على معمارية Next.js 16 مع إدارات الكاش المتقدمة، لضمان تشغيل الألعاب بأعلى معدل إطارات ووقاية من البطء.
                </p>
              </div>
            </div>
            
            {/* Tech Stats Info Panel */}
            <div className="mt-10 pt-8 border-t border-slate-900/60 grid grid-cols-1 sm:grid-cols-3 gap-6 text-center">
              <div className="flex flex-col items-center gap-1">
                <span className="text-2xl font-black text-teal-400">114</span>
                <span className="text-[10px] text-slate-500 uppercase tracking-widest font-bold">سورة مدمجة</span>
              </div>
              <div className="flex flex-col items-center gap-1 border-y sm:border-y-0 sm:border-x border-slate-900/80 py-4 sm:py-0">
                <span className="text-2xl font-black text-amber-400">100%</span>
                <span className="text-[10px] text-slate-500 uppercase tracking-widest font-bold">خالٍ من الإعلانات</span>
              </div>
              <div className="flex flex-col items-center gap-1">
                <span className="text-2xl font-black text-rose-400">PWA</span>
                <span className="text-[10px] text-slate-500 uppercase tracking-widest font-bold">تثبيت ذكي متكامل</span>
              </div>
            </div>
          </div>
        )}
      </main>

      {/* Modern Royal Footer */}
      <footer className="w-full border-t border-slate-900/80 bg-slate-950/60 backdrop-blur-md py-10 z-10">
        <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-teal-500/10 flex items-center justify-center border border-teal-500/20">
              <Award className="w-4 h-4 text-teal-400" />
            </div>
            <p className="text-xs text-slate-500 font-semibold">
              جميع الحقوق محفوظة © {new Date().getFullYear()} — لعبة سور القرآن الكريم
            </p>
          </div>
          
          <div className="flex justify-center gap-8 text-xs font-semibold text-slate-500">
            <a href="#" className="hover:text-teal-400 transition duration-200">الشروط والأحكام</a>
            <a href="#" className="hover:text-teal-400 transition duration-200">سياسة الخصوصية</a>
            <a href="#" className="hover:text-teal-400 transition duration-200">الدعم الفني</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
