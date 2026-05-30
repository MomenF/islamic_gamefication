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
  ChevronLeft 
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
      description: "لاعب واحد يختار عشوائياً كمتخفي (لا يعرف السورة)، وباقي اللاعبين يعرفون السورة. يسألون بعضهم أسئلة ذكية لكشف المتخفي، بينما يحاول المتخفي معرفة السورة من كلامهم!",
      badge: "تفكير وذكاء",
      gradient: "from-teal-600/20 to-cyan-600/20 hover:from-teal-600/30 hover:to-cyan-600/30 border-teal-500/20",
      glowColor: "rgba(13, 148, 136, 0.15)",
      badgeColor: "bg-teal-500/10 text-teal-300 border-teal-500/30",
    },
    {
      id: "researchers",
      title: "وضع الباحثون",
      englishTitle: "Game Researchers",
      icon: <Lightbulb className="w-8 h-8 text-amber-400" />,
      description: "تحدي كلاسيكي رائع لمعلومات القرآن وسوره. يقوم السيرفر بطرح صفات ومعلومات عن سورة معينة، ويتنافس اللاعبون لتخمين السورة الصحيحة من بين قائمة الـ 114 سورة!",
      badge: "معلومات عامة",
      gradient: "from-amber-600/20 to-orange-600/20 hover:from-amber-600/30 hover:to-orange-600/30 border-amber-500/20",
      glowColor: "rgba(245, 158, 11, 0.15)",
      badgeColor: "bg-amber-500/10 text-amber-300 border-amber-500/30",
    },
    {
      id: "challenge",
      title: "وضع التحدي والمواجهة",
      englishTitle: "Game Challenge",
      icon: <Swords className="w-8 h-8 text-rose-400" />,
      description: "قسم اللاعبين لفرق (الفريق الأحمر والأزرق) وواجهوا بعضكم في جولات سريعة وحماسية للإجابة على أسئلة الاختيار من متعدد مع إحصائيات ونقاط حية لكل فريق!",
      badge: "حماسي جماعي",
      gradient: "from-rose-600/20 to-red-600/20 hover:from-rose-600/30 hover:to-red-600/30 border-rose-500/20",
      glowColor: "rgba(244, 63, 94, 0.15)",
      badgeColor: "bg-rose-500/10 text-rose-300 border-rose-500/30",
    },
    {
      id: "online",
      title: "اللعب أونلاين عبر الشبكة",
      englishTitle: "Online Matchmaking",
      icon: <Globe className="w-8 h-8 text-emerald-400" />,
      description: "العب مع مسلمين من جميع أنحاء العالم! ادخل في طابور البحث التلقائي أو أنشئ غرفتك الخاصة وأرسل كود الدخول لأصدقائك للعب سوياً مع شات وتواصل حي عبر WebSocket!",
      badge: "أونلاين (قريباً)",
      gradient: "from-emerald-600/20 to-emerald-800/20 hover:from-emerald-600/30 hover:to-emerald-800/30 border-emerald-500/20",
      glowColor: "rgba(16, 185, 129, 0.15)",
      badgeColor: "bg-emerald-500/10 text-emerald-300 border-emerald-500/30",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col relative overflow-hidden bg-slate-950">
      {/* Background Decorative Gradients */}
      <div className="absolute top-[-10%] right-[-10%] w-[50%] h-[50%] rounded-full bg-teal-500/5 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-[-10%] left-[-10%] w-[50%] h-[50%] rounded-full bg-amber-500/5 blur-[120px] pointer-events-none" />

      {/* PWA Install Banner */}
      {isInstallable && (
        <div className="w-full bg-gradient-to-r from-teal-900/90 to-slate-900/90 backdrop-blur-md border-b border-teal-500/30 px-4 py-3 flex items-center justify-between gap-4 z-50 animate-slide-down">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-teal-500/20 rounded-xl border border-teal-500/30">
              <Download className="w-5 h-5 text-teal-400" />
            </div>
            <div>
              <p className="text-sm font-semibold text-slate-100">ثبّت التطبيق على جهازك</p>
              <p className="text-xs text-slate-400">العب بدون إنترنت وبسرعة خيالية مثل التطبيقات المثبتة!</p>
            </div>
          </div>
          <button 
            onClick={handleInstallClick}
            className="px-4 py-1.5 bg-teal-500 hover:bg-teal-600 text-slate-950 font-bold rounded-lg text-xs transition duration-200 shadow-lg shadow-teal-500/20 cursor-pointer"
          >
            تثبيت الآن
          </button>
        </div>
      )}

      {/* Main Header */}
      <header className="w-full max-w-6xl mx-auto px-4 py-5 flex items-center justify-between border-b border-slate-900 z-10">
        <div className="flex items-center gap-2.5">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-teal-500 to-amber-500 p-[1px]">
            <div className="w-full h-full bg-slate-950 rounded-[11px] flex items-center justify-center">
              <BookOpen className="w-5 h-5 text-teal-400" />
            </div>
          </div>
          <div>
            <h1 className="text-lg font-extrabold tracking-tight bg-gradient-to-r from-teal-300 via-amber-200 to-teal-400 bg-clip-text text-transparent">
              سورُ القُرآنِ
            </h1>
            <p className="text-[10px] text-slate-400 uppercase tracking-widest">Interactive Game</p>
          </div>
        </div>

        {/* Action icons */}
        <div className="flex items-center gap-3">
          <button className="p-2 hover:bg-slate-900 rounded-lg text-slate-400 hover:text-slate-100 transition cursor-pointer">
            <Settings className="w-5 h-5" />
          </button>
          <div className="h-8 w-[1px] bg-slate-900" />
          <button className="flex items-center gap-2 px-3 py-1.5 hover:bg-slate-900 rounded-lg text-sm text-slate-300 hover:text-slate-100 transition border border-slate-900 cursor-pointer">
            <User className="w-4 h-4 text-teal-400" />
            <span>تسجيل الدخول</span>
          </button>
        </div>
      </header>

      {/* Hero & Intro Section */}
      <section className="w-full max-w-4xl mx-auto px-4 pt-12 pb-6 text-center z-10">
        <div className="inline-flex items-center gap-2 px-3 py-1 bg-amber-500/10 border border-amber-500/20 rounded-full text-xs text-amber-300 mb-6 animate-pulse">
          <Sparkles className="w-3.5 h-3.5" />
          <span>تطبيق ويب تقدمي (PWA) مع ميزات غير متصلة بالشبكة</span>
        </div>
        <h2 className="text-4xl md:text-5xl font-extrabold leading-tight text-slate-100 mb-4 font-sans tracking-tight">
          تحدَّ معلوماتك وتنافس في <br />
          <span className="text-gold-gradient">سُور القرآن الكريم</span>
        </h2>
        <p className="text-base text-slate-400 max-w-xl mx-auto mb-8 leading-relaxed">
          منصة تعليمية وترفيهية تفاعلية تلعبها مع أفراد العائلة أو الأصدقاء في جو إسلامي مليء بالحماس والتعلم وحفظ وفهم كتاب الله.
        </p>

        {/* Tab Selector */}
        <div className="inline-flex p-1 bg-slate-900/60 backdrop-blur border border-slate-900 rounded-xl mb-12">
          <button 
            onClick={() => setActiveTab("modes")}
            className={`px-6 py-2 rounded-lg text-sm font-semibold transition cursor-pointer ${
              activeTab === "modes" 
                ? "bg-gradient-to-r from-teal-600 to-teal-700 text-slate-100 shadow" 
                : "text-slate-400 hover:text-slate-200"
            }`}
          >
            اختر وضع اللعب
          </button>
          <button 
            onClick={() => setActiveTab("about")}
            className={`px-6 py-2 rounded-lg text-sm font-semibold transition cursor-pointer ${
              activeTab === "about" 
                ? "bg-gradient-to-r from-teal-600 to-teal-700 text-slate-100 shadow" 
                : "text-slate-400 hover:text-slate-200"
            }`}
          >
            عن ميزات الـ PWA
          </button>
        </div>
      </section>

      {/* Main Grid View */}
      <main className="w-full max-w-6xl mx-auto px-4 pb-20 flex-grow z-10">
        {activeTab === "modes" ? (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {gameModes.map((mode) => (
              <div 
                key={mode.id}
                style={{ boxShadow: `0 10px 30px -10px ${mode.glowColor}` }}
                className={`group relative p-6 rounded-2xl border bg-slate-900/40 backdrop-blur-md transition-all duration-300 cursor-pointer overflow-hidden ${mode.gradient}`}
              >
                {/* Decorative glow inside card */}
                <div className="absolute -top-12 -left-12 w-24 h-24 rounded-full bg-slate-100/5 blur-xl group-hover:scale-150 transition-all duration-500" />
                
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-slate-950/80 rounded-xl border border-slate-800 group-hover:scale-110 transition duration-300 shadow-inner">
                    {mode.icon}
                  </div>
                  <div className="flex-grow">
                    <div className="flex items-center justify-between mb-2">
                      <div>
                        <h3 className="text-xl font-bold text-slate-100 group-hover:text-teal-300 transition duration-200">
                          {mode.title}
                        </h3>
                        <p className="text-[10px] text-slate-500 uppercase tracking-widest">{mode.englishTitle}</p>
                      </div>
                      <span className={`px-2.5 py-0.5 rounded-full text-xs font-semibold border ${mode.badgeColor}`}>
                        {mode.badge}
                      </span>
                    </div>
                    <p className="text-sm text-slate-400 leading-relaxed mb-6">
                      {mode.description}
                    </p>
                    <div className="flex items-center gap-1.5 text-xs text-teal-400 font-bold group-hover:gap-3 transition-all duration-300">
                      <span>ابدأ اللعب الآن</span>
                      <ChevronLeft className="w-4 h-4" />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="max-w-4xl mx-auto glass-panel rounded-2xl p-8 border-slate-900">
            <h3 className="text-2xl font-bold text-slate-100 mb-6 text-center">
              ما الذي يجعل هذا التطبيق مميزاً كـ PWA؟
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* Feature 1 */}
              <div className="p-5 bg-slate-950/40 rounded-xl border border-slate-900 text-center">
                <div className="w-12 h-12 rounded-full bg-teal-500/10 border border-teal-500/20 flex items-center justify-center mx-auto mb-4">
                  <WifiOff className="w-6 h-6 text-teal-400" />
                </div>
                <h4 className="text-lg font-bold text-slate-200 mb-2">يدعم الأوفلاين 100%</h4>
                <p className="text-sm text-slate-400 leading-relaxed">
                  بمجرد التحميل، يمكنك لعب أوضاع (المتخفي، الباحثون، التحدي) بالكامل دون إنترنت، حيث يتم تخزين الـ 114 سورة والأسئلة محلياً.
                </p>
              </div>

              {/* Feature 2 */}
              <div className="p-5 bg-slate-950/40 rounded-xl border border-slate-900 text-center">
                <div className="w-12 h-12 rounded-full bg-amber-500/10 border border-amber-500/20 flex items-center justify-center mx-auto mb-4">
                  <Smartphone className="w-6 h-6 text-amber-400" />
                </div>
                <h4 className="text-lg font-bold text-slate-200 mb-2">تثبيت وتكامل كامل</h4>
                <p className="text-sm text-slate-400 leading-relaxed">
                  ثبته على شاشة هاتفك أو جهاز الكمبيوتر الخاص بك كأي تطبيق محلي (Native App) واستمتع بتجربة ملء الشاشة الفخمة بدون شريط المتصفح.
                </p>
              </div>

              {/* Feature 3 */}
              <div className="p-5 bg-slate-950/40 rounded-xl border border-slate-900 text-center">
                <div className="w-12 h-12 rounded-full bg-rose-500/10 border border-rose-500/20 flex items-center justify-center mx-auto mb-4">
                  <Zap className="w-6 h-6 text-rose-400" />
                </div>
                <h4 className="text-lg font-bold text-slate-200 mb-2">سرعة فائقة وخفة</h4>
                <p className="text-sm text-slate-400 leading-relaxed">
                  بفضل تقنيات Next.js 16 و Service Workers، يتم تحميل الصفحات والتنقلات بلمح البصر مع تقليل استهلاك البطارية والبيانات.
                </p>
              </div>
            </div>
            
            <div className="mt-8 pt-6 border-t border-slate-900 text-center">
              <p className="text-xs text-slate-500">
                صُنع هذا المشروع بكل حب وحرص لتقديم أفضل تجربة للمسلمين في دراسة وفهم وتثبيت حفظ كتاب الله بأسلوب عصري جذاب.
              </p>
            </div>
          </div>
        )}
      </main>

      {/* Elegant Footer */}
      <footer className="w-full border-t border-slate-950/80 bg-slate-950/40 backdrop-blur py-8 z-10 text-center">
        <div className="max-w-6xl mx-auto px-4">
          <p className="text-sm text-slate-500 mb-2">
            جميع الحقوق محفوظة © {new Date().getFullYear()} — لعبة سور القرآن الكريم
          </p>
          <div className="flex justify-center gap-6 text-xs text-slate-600">
            <a href="#" className="hover:text-teal-400 transition">الشروط والأحكام</a>
            <a href="#" className="hover:text-teal-400 transition">سياسة الخصوصية</a>
            <a href="#" className="hover:text-teal-400 transition">اتصل بنا</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
