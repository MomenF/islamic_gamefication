"use client";

import React, { useState, useEffect } from "react";
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
  ShieldCheck,
  LayoutGrid,
  Info
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
      icon: <Search className="w-7 h-7 text-teal-400" />,
      description: "لاعب واحد يختار عشوائياً كمتخفي لا يعلم السورة، بينما يعلمها بقية اللاعبين. يتنافس الجميع عبر طرح أسئلة ذكية ومحيرة لكشف المتخفي، بينما يحاول المتخفي معرفة السورة من إجاباتهم!",
      badge: "تفكير واستراتيجية",
      cardClass: "glass-card-teal",
      badgeColor: "bg-teal-500/10 text-teal-300 border-teal-500/30",
    },
    {
      id: "researchers",
      title: "وضع الباحثون",
      englishTitle: "Game Researchers",
      icon: <Lightbulb className="w-7 h-7 text-amber-400" />,
      description: "تحدي معرفي متقدم لمعلومات القرآن الكريم. يطرح النظام صفات ومميزات وإحصائيات دقيقة لسورة معينة، ويتسابق اللاعبون لتخمين السورة الصحيحة من قائمة الـ 114 سورة كاملة!",
      badge: "تحليل وتخمين",
      cardClass: "glass-card-amber",
      badgeColor: "bg-amber-500/10 text-amber-300 border-amber-500/30",
    },
    {
      id: "challenge",
      title: "وضع التحدي والمواجهة",
      englishTitle: "Game Challenge",
      icon: <Swords className="w-7 h-7 text-rose-400" />,
      description: "قسم اللاعبين إلى فرق متنافسة وواجهوا بعضكم في جولات سريعة وحماسية للإجابة على أسئلة الاختيار من متعدد مع إحصائيات ونقاط حية ومباشرة تعزز الحفظ والمراجعة الجماعية!",
      badge: "سرعة ومنافسة",
      cardClass: "glass-card-rose",
      badgeColor: "bg-rose-500/10 text-rose-300 border-rose-500/30",
    },
    {
      id: "online",
      title: "اللعب أونلاين عبر الشبكة",
      englishTitle: "Online Matchmaking",
      icon: <Globe className="w-7 h-7 text-emerald-400" />,
      description: "العب مع منافسين من مختلف دول العالم! ادخل في طابور البحث التلقائي السريع أو أنشئ غرفتك الخاصة لمشاركة الدخول مع أصدقائك للعب والتنافس المباشر عبر WebSocket!",
      badge: "اتصال مباشر",
      cardClass: "glass-card-emerald",
      badgeColor: "bg-emerald-500/10 text-emerald-300 border-emerald-500/30",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col relative overflow-hidden bg-slate-950/20">
      {/* PWA Install Banner */}
      {isInstallable && (
        <div className="w-full bg-gradient-to-r from-teal-950/95 to-slate-950/95 backdrop-blur-md border-b border-teal-500/30 px-4 py-3 flex items-center justify-between gap-4 z-50 animate-slide-down">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-teal-500/10 rounded-xl border border-teal-500/30">
              <Download className="w-5 h-5 text-teal-400" />
            </div>
            <div>
              <p className="text-xs md:text-sm font-semibold text-slate-100">ثبّت التطبيق على جهازك</p>
              <p className="text-[10px] md:text-xs text-slate-400">العب بدون اتصال بالإنترنت وبأعلى سرعة استجابة ممكنة</p>
            </div>
          </div>
          <button 
            onClick={handleInstallClick}
            className="px-3 py-1.5 bg-teal-500 hover:bg-teal-600 text-slate-950 font-bold rounded-lg text-xs transition duration-200 shadow-lg shadow-teal-500/20 cursor-pointer"
          >
            تثبيت التطبيق
          </button>
        </div>
      )}

      {/* Main Header */}
      <header className="w-full max-w-6xl mx-auto px-4 md:px-6 py-5 flex items-center justify-between border-b border-white/5 z-10">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-teal-500 to-amber-500 p-[1px] shadow-lg shadow-teal-500/10">
            <div className="w-full h-full bg-slate-950 rounded-[11px] flex items-center justify-center">
              <BookOpen className="w-5 h-5 text-teal-400" />
            </div>
          </div>
          <div>
            <h1 className="text-base md:text-lg font-black tracking-wide bg-gradient-to-r from-teal-300 via-amber-200 to-teal-400 bg-clip-text text-transparent">
              سُوَر القُرْآن الكَرِيم
            </h1>
            <p className="text-[9px] text-slate-500 uppercase tracking-widest font-semibold">Islamic Gamification</p>
          </div>
        </div>

        {/* Header Action Elements */}
        <div className="flex items-center gap-2 md:gap-3">
          <button className="p-2 hover:bg-slate-900/60 rounded-xl text-slate-400 hover:text-slate-100 transition border border-white/5 cursor-pointer">
            <Settings className="w-4 h-4" />
          </button>
          <div className="h-6 w-[1px] bg-white/5" />
          <button className="flex items-center gap-1.5 px-3 py-1.5 bg-slate-900/60 hover:bg-slate-900 rounded-xl text-xs text-slate-300 hover:text-slate-100 transition border border-white/5 cursor-pointer font-bold">
            <User className="w-3.5 h-3.5 text-teal-400" />
            <span>حسابي</span>
          </button>
        </div>
      </header>

      {/* Hero & Subtitle Description */}
      <section className="w-full max-w-4xl mx-auto px-4 pt-10 pb-6 text-center z-10">
        <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-amber-500/5 border border-amber-500/20 rounded-full text-[10px] md:text-xs text-amber-300 mb-6 font-bold shadow-inner">
          <Sparkles className="w-3.5 h-3.5 text-amber-400" />
          <span>تطبيق ويب إسلامي متقدم بمواصفات تقنية عالمية</span>
        </div>
        
        <h2 className="text-3xl md:text-5xl font-black leading-tight text-slate-100 mb-4 tracking-tight">
          منصة تفاعلية ممتعة <br />
          <span className="text-gold-gradient">لحفظ ومدارسة سور القرآن الكريم</span>
        </h2>
        
        <p className="text-sm md:text-base text-slate-400 max-w-xl mx-auto mb-8 leading-relaxed">
          اجمع عائلتك وأصدقاءك لتخوضوا معاً تحديات ومسابقات قرآنية تنمي المعرفة وتثبّت الحفظ في أجواء راقية وخالية تماماً من العشوائية.
        </p>

        {/* Premium Tabs */}
        <div className="inline-flex p-1 bg-slate-950/60 backdrop-blur-xl border border-white/5 rounded-2xl mb-10 shadow-lg">
          <button 
            onClick={() => setActiveTab("modes")}
            className={`flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs md:text-sm font-bold transition-all duration-300 cursor-pointer ${
              activeTab === "modes" 
                ? "bg-gradient-to-r from-teal-600 to-teal-700 text-slate-100 shadow-md shadow-teal-500/10" 
                : "text-slate-400 hover:text-slate-200"
            }`}
          >
            <LayoutGrid className="w-4 h-4" />
            <span>اختر نمط اللعب</span>
          </button>
          <button 
            onClick={() => setActiveTab("about")}
            className={`flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs md:text-sm font-bold transition-all duration-300 cursor-pointer ${
              activeTab === "about" 
                ? "bg-gradient-to-r from-teal-600 to-teal-700 text-slate-100 shadow-md shadow-teal-500/10" 
                : "text-slate-400 hover:text-slate-200"
            }`}
          >
            <Info className="w-4 h-4" />
            <span>حول تكنولوجيا PWA</span>
          </button>
        </div>
      </section>

      {/* Main Container */}
      <main className="w-full max-w-6xl mx-auto px-4 md:px-6 pb-20 flex-grow z-10">
        {activeTab === "modes" ? (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-6">
            {gameModes.map((mode) => (
              <div 
                key={mode.id}
                className={`group relative p-5 md:p-6 rounded-2xl cursor-pointer overflow-hidden ${mode.cardClass}`}
              >
                {/* Accent top gradient lines for premium design */}
                <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-white/10 to-transparent" />
                
                <div className="flex flex-col sm:flex-row items-start gap-4">
                  <div className="p-3 bg-slate-950/70 rounded-xl border border-white/5 group-hover:scale-105 transition duration-300 shadow-md flex-shrink-0">
                    {mode.icon}
                  </div>
                  <div className="flex-grow w-full">
                    <div className="flex items-center justify-between mb-2 gap-2">
                      <div>
                        <h3 className="text-lg md:text-xl font-extrabold text-slate-100 transition duration-200">
                          {mode.title}
                        </h3>
                        <p className="text-[9px] text-slate-500 uppercase tracking-widest font-semibold">{mode.englishTitle}</p>
                      </div>
                      <span className={`px-2.5 py-0.5 rounded-full text-[10px] font-bold border flex-shrink-0 ${mode.badgeColor}`}>
                        {mode.badge}
                      </span>
                    </div>
                    <p className="text-xs md:text-sm text-slate-400 leading-relaxed mb-5">
                      {mode.description}
                    </p>
                    <div className="flex items-center gap-1.5 text-xs text-teal-400 font-bold group-hover:gap-3 transition-all duration-300">
                      <span>ابدأ الجولة التنافسية</span>
                      <ChevronLeft className="w-4 h-4" />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="max-w-4xl mx-auto glass-panel rounded-2xl p-6 md:p-8 border-white/5">
            <h3 className="text-xl md:text-2xl font-black text-slate-100 mb-6 text-center tracking-wide">
              خصائص متطورة للتشغيل الكامل والمستقل (PWA)
            </h3>
            
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
              {/* Feature 1 */}
              <div className="p-5 bg-slate-950/40 rounded-xl border border-white/5 text-center transition hover:border-teal-500/20">
                <div className="w-11 h-11 rounded-full bg-teal-500/5 border border-teal-500/20 flex items-center justify-center mx-auto mb-4">
                  <WifiOff className="w-5 h-5 text-teal-400" />
                </div>
                <h4 className="text-base font-bold text-slate-200 mb-2">العمل بدون إنترنت</h4>
                <p className="text-xs text-slate-400 leading-relaxed">
                  تخزين كامل للـ 114 سورة والأسئلة محلياً، مما يسمح باللعب والمدارسة في أي مكان دون الحاجة لاتصال بالشبكة.
                </p>
              </div>

              {/* Feature 2 */}
              <div className="p-5 bg-slate-950/40 rounded-xl border border-white/5 text-center transition hover:border-amber-500/20">
                <div className="w-11 h-11 rounded-full bg-amber-500/5 border border-amber-500/20 flex items-center justify-center mx-auto mb-4">
                  <Smartphone className="w-5 h-5 text-amber-400" />
                </div>
                <h4 className="text-base font-bold text-slate-200 mb-2">تثبيت وتكامل أصيل</h4>
                <p className="text-xs text-slate-400 leading-relaxed">
                  يمكن تثبيت التطبيق على الشاشة الرئيسية لهاتفك أو حاسوبك، ليعمل بكامل كفاءته دون شريط أدوات المتصفح.
                </p>
              </div>

              {/* Feature 3 */}
              <div className="p-5 bg-slate-950/40 rounded-xl border border-white/5 text-center transition hover:border-rose-500/20">
                <div className="w-11 h-11 rounded-full bg-rose-500/5 border border-rose-500/20 flex items-center justify-center mx-auto mb-4">
                  <Zap className="w-5 h-5 text-rose-400" />
                </div>
                <h4 className="text-base font-bold text-slate-200 mb-2">سرعة استجابة مذهلة</h4>
                <p className="text-xs text-slate-400 leading-relaxed">
                  بفضل البرمجيات الحديثة لـ Next.js و Service Worker، تعمل الواجهات بمعدل تحديث سلس وخفيف على موارد المعالج.
                </p>
              </div>
            </div>
            
            <div className="mt-8 pt-6 border-t border-white/5 text-center flex items-center justify-center gap-2 text-[11px] text-slate-500">
              <ShieldCheck className="w-4 h-4 text-teal-500" />
              <span>محتوى تعليمي إسلامي آمن ومرشح ليتناسب مع كافة الفئات العمرية</span>
            </div>
          </div>
        )}
      </main>

      {/* Footer */}
      <footer className="w-full border-t border-white/5 bg-slate-950/30 backdrop-blur-md py-8 z-10 text-center">
        <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-slate-500 font-medium">
            جميع الحقوق محفوظة © {new Date().getFullYear()} — منصة سور القرآن الكريم التفاعلية
          </p>
          <div className="flex justify-center gap-6 text-[11px] text-slate-400 font-bold">
            <a href="#" className="hover:text-teal-400 transition">اتفاقية الخدمة</a>
            <a href="#" className="hover:text-teal-400 transition">سياسة الخصوصية</a>
            <a href="#" className="hover:text-teal-400 transition">اتصل بنا</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
