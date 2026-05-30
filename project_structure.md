# 🗂️ Project Structure — لعبة سور القرآن الكريم

---

## 📁 frontend/ — تطبيق الويب التقدمي (Next.js PWA)

```
frontend/
├── package.json
├── tsconfig.json
├── next.config.ts                         # إعدادات الـ PWA والتخزين المؤقت
├── postcss.config.mjs
├── tailwind.config.ts
│
├── public/
│   ├── favicon.ico
│   ├── sw.js                              # ملف الـ Service Worker المُولد تلقائياً
│   ├── workbox-*.js                       # محرك Workbox للتخزين المؤقت أوفلاين
│   ├── icons/
│   │   ├── icon-192x192.png               # أيقونة PWA الأساسية
│   │   ├── icon-512x512.png               # أيقونة PWA للشاشات الكبيرة
│   │   ├── icon-maskable-192x192.png      # أيقونة PWA قابلة للتكيف
│   │   └── icon-maskable-512x512.png      # أيقونة PWA قابلة للتكيف
│   └── data/
│       ├── surahs.json                    # 114 سورة كاملة للعمل دون اتصال (offline data)
│       └── surah_questions.json           # أسئلة الألعاب المخزنة محلياً
│
└── src/
    └── app/
        ├── layout.tsx                     # الهيكل العام والتخاطب مع PWA Viewport
        ├── page.tsx                       # لوحة التحكم الرئيسية واختيار الألعاب
        ├── manifest.ts                    # مولد الـ PWA Manifest الديناميكي
        ├── globals.css                    # استيراد Tailwind + المؤثرات الحركية الفخمة
        │
        ├── (auth)/                        # ميزات المصادقة والتسجيل
        │   ├── login/
        │   │   └── page.tsx
        │   └── register/
        │       └── page.tsx
        │
        ├── game/                          # مسارات الألعاب المختلفة
        │   ├── spy/                       # وضع المتخفي (أوفلاين)
        │   │   ├── page.tsx
        │   │   └── reveal/
        │   │       └── page.tsx
        │   │
        │   ├── researchers/               # وضع الباحثون (أوفلاين)
        │   │   ├── page.tsx
        │   │   └── guessing/
        │   │       └── page.tsx
        │   │
        │   ├── challenge/                 # وضع التحدي (أوفلاين + أونلاين)
        │   │   ├── page.tsx
        │   │   └── score/
        │   │       └── page.tsx
        │   │
        │   └── online/                    # اللعب أونلاين عبر WebSocket
        │       ├── page.tsx
        │       └── lobby/
        │           └── page.tsx
        │
        ├── core/                          # المكونات والخدمات المشتركة
        │   ├── components/                # Reusable UI Components
        │   │   ├── GlassPanel.tsx         # لوحة زجاجية فخمة
        │   │   ├── AppButton.tsx          # الأزرار التفاعلية
        │   │   ├── InstallPWA.tsx         # زر تثبيت التطبيق الذكي
        │   │   └── ScoreBoard.tsx         # لوحة عرض النقاط
        │   │
        │   ├── hooks/                     # Custom React Hooks
        │   │   ├── usePWA.ts              # خطاف التحكم بحالة التثبيت
        │   │   └── useWebSocket.ts        # خطاف الاتصال المباشر بالسيرفر
        │   │
        │   ├── utils/                     # المساعدون والدوال البرمجية
        │   │   ├── randomizer.ts          # تقسيم الفرق العشوائي واختيار المتخفي
        │   │   └── timer.ts               # عداد الوقت التنازلي التفاعلي
        │   │
        │   └── types/                     # أنواع TypeScript المشتركة
        │       └── index.ts
```� models/
    │   │   │   │   └── online_session_model.dart
    │   │   │   └── repositories/
    │   │   │       └── matchmaking_repository_impl.dart
    │   │   ├── domain/
    │   │   │   ├── entities/
    │   │   │   │   └── online_session_entity.dart
    │   │   │   ├── repositories/
    │   │   │   │   └── matchmaking_repository.dart
    │   │   │   └── usecases/
    │   │   │       ├── join_matchmaking_queue.dart
    │   │   │       ├── create_private_session.dart
    │   │   │       └── join_by_code.dart
    │   │   └── presentation/
    │   │       ├── providers/
    │   │       │   └── online_provider.dart       # WebSocket state
    │   │       ├── screens/
    │   │       │   ├── online_menu_screen.dart    # Matchmaking أو بكود
    │   │       │   └── matchmaking_waiting_screen.dart
    │   │       └── widgets/
    │   │           ├── waiting_players_row.dart   # X/8 أو X/16
    │   │           └── session_code_display.dart
    │   │
    │   ├── results/                            # نتائج نهاية الجولة
    │   │   ├── domain/
    │   │   │   ├── entities/
    │   │   │   │   └── game_result_entity.dart
    │   │   │   └── usecases/
    │   │   │       └── save_game_result.dart
    │   │   └── presentation/
    │   │       ├── providers/
    │   │       │   └── results_provider.dart
    │   │       ├── screens/
    │   │       │   └── results_screen.dart
    │   │       └── widgets/
    │   │           ├── winner_banner.dart
    │   │           ├── scores_list.dart
    │   │           └── did_you_know_card.dart     # هل تعلم؟
    │   │
    │   └── subscription/                       # الاشتراكات
    │       ├── data/
    │       │   ├── datasources/
    │       │   │   └── subscription_remote_datasource.dart
    │       │   ├── models/
    │       │   │   └── subscription_model.dart
    │       │   └── repositories/
    │       │       └── subscription_repository_impl.dart
    │       ├── domain/
    │       │   ├── entities/
    │       │   │   └── subscription_entity.dart
    │       │   ├── repositories/
    │       │   │   └── subscription_repository.dart
    │       │   └── usecases/
    │       │       ├── get_current_tier.dart
    │       │       ├── purchase_plan.dart
    │       │       └── restore_purchases.dart
    │       └── presentation/
    │           ├── providers/
    │           │   └── subscription_provider.dart
    │           ├── screens/
    │           │   ├── paywall_screen.dart
    │           │   └── subscription_settings_screen.dart
    │           └── widgets/
    │               └── plan_card.dart
```

---

## 📁 backend/ — Go Server

```
backend/
├── go.mod
├── go.sum
├── .env                          # gitignored
├── .env.example
├── Makefile                      # run, build, migrate, test
├── Dockerfile
│
├── cmd/
│   └── server/
│       └── main.go               # entry point — wire everything
│
├── config/
│   └── config.go                 # load .env → typed Config struct
│
├── internal/
│   │
│   ├── domain/                   # pure business logic — zero dependencies
│   │   ├── entity/
│   │   │   ├── user.go
│   │   │   ├── surah.go
│   │   │   ├── question.go
│   │   │   ├── subscription.go
│   │   │   ├── game_session.go   # online session state
│   │   │   └── game_result.go
│   │   └── repository/           # interfaces (contracts)
│   │       ├── user_repository.go
│   │       ├── surah_repository.go
│   │       ├── question_repository.go
│   │       ├── subscription_repository.go
│   │       ├── session_repository.go
│   │       └── result_repository.go
│   │
│   ├── usecase/                  # business rules — depends on domain only
│   │   ├── auth_usecase.go
│   │   ├── surah_usecase.go
│   │   ├── question_usecase.go
│   │   ├── matchmaking_usecase.go
│   │   ├── session_usecase.go    # game flow logic
│   │   ├── subscription_usecase.go
│   │   └── result_usecase.go
│   │
│   ├── delivery/                 # HTTP + WebSocket handlers
│   │   ├── http/
│   │   │   ├── middleware/
│   │   │   │   ├── auth_middleware.go      # JWT validation
│   │   │   │   ├── rate_limiter.go
│   │   │   │   └── logger_middleware.go
│   │   │   ├── handler/
│   │   │   │   ├── auth_handler.go         # POST /auth/login, /auth/register
│   │   │   │   ├── surah_handler.go        # GET  /surahs, /surahs/:id
│   │   │   │   ├── question_handler.go     # GET  /questions
│   │   │   │   ├── matchmaking_handler.go  # POST /matchmaking/join
│   │   │   │   ├── subscription_handler.go # GET  /subscription
│   │   │   │   ├── webhook_handler.go      # POST /webhook/revenuecat
│   │   │   │   └── admin_handler.go        # /admin/* (protected)
│   │   │   └── router.go                   # Fiber routes registration
│   │   │
│   │   └── websocket/
│   │       ├── ws_handler.go               # WebSocket upgrade + dispatch
│   │       ├── session_manager.go          # in-memory sessions map (sync.Map)
│   │       ├── matchmaking_queue.go        # 4v4 / 8v8 queues
│   │       └── events/
│   │           ├── event.go                # Event struct + type constants
│   │           ├── incoming_events.go      # client → server event handlers
│   │           └── outgoing_events.go      # server → client broadcast helpers
│   │
│   ├── repository/               # implementations (depends on infra)
│   │   ├── postgres/
│   │   │   ├── user_repo.go
│   │   │   ├── surah_repo.go
│   │   │   ├── question_repo.go
│   │   │   ├── subscription_repo.go
│   │   │   └── result_repo.go
│   │   └── redis/
│   │       └── session_repo.go   # online session state in Redis
│   │
│   └── infra/                    # external services setup
│       ├── postgres/
│       │   └── postgres.go       # GORM connection + ping
│       ├── redis/
│       │   └── redis.go          # go-redis client
│       └── logger/
│           └── logger.go         # zap setup (dev pretty / prod JSON)
│
├── pkg/                          # reusable, project-agnostic helpers
│   ├── jwt/
│   │   └── jwt.go                # sign / parse / validate tokens
│   ├── password/
│   │   └── password.go           # bcrypt hash + compare
│   ├── validator/
│   │   └── validator.go          # go-playground/validator wrapper
│   ├── response/
│   │   └── response.go           # unified JSON response {ok, data, error}
│   └── timer/
│       └── timer.go              # goroutine-based countdown broadcaster
│
└── migrations/
    ├── 001_create_users.sql
    ├── 002_create_surahs.sql
    ├── 003_create_questions.sql
    ├── 004_create_subscriptions.sql
    ├── 005_create_game_results.sql
    └── 006_seed_surahs.sql       # 114 سورة initial data
```

---

## 📐 قواعد Clean Architecture

### Flutter
| القاعدة | التطبيق |
|--------|---------|
| Zero widget duplication | كل widget مشترك في `core/widgets/` |
| Zero TextStyle duplication | كل style في `app_text_styles.dart` فقط |
| Zero color duplication | كل لون في `app_colors.dart` فقط |
| dependency direction | `presentation → domain ← data` |
| No business logic in UI | كل المنطق في `usecase` + `provider` |
| Feature-first folders | كل feature معزول تمامًا |

### Go
| القاعدة | التطبيق |
|--------|---------|
| dependency direction | `delivery → usecase → domain ← repository` |
| No framework in domain | `domain/` لا يعرف Fiber ولا GORM |
| Single responsibility | كل file مسؤول عن حاجة واحدة |
| Interfaces everywhere | كل dependency عبر interface |
| Errors are values | لا `panic` في business logic |
| pkg/ = zero project deps | الـ helpers في pkg مش بيعرفوا internal/ |