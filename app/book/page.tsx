import Link from "next/link";
import type { Metadata } from "next";
import {
  ArrowLeft,
  BookOpen,
  Code2,
  Layers,
  Sparkles,
  Shield,
  FileText,
  CheckCircle2,
  Hammer,
  Palette,
  Zap,
  Globe,
  ExternalLink,
  Award,
  Box,
  Compass,
  Cpu,
  BookmarkCheck,
  Bot,
  Gamepad2,
  Library,
  Target,
  Users,
} from "lucide-react";
import { Blocku } from "@/components/blocku/mascot";

export const metadata: Metadata = {
  title: "Project: Website (প্রজেক্ট: ওয়েবসাইট) - ফ্র্যাঞ্চাইজি সিরিজ ও কারিকুলাম | CFSBR",
  description:
    "জেনারেশন আলফার জন্য ডুয়াল-ইঞ্জিন কম্পিউটেশনাল আর্কিটেকচার ফিল্ড-ম্যানুয়াল ফ্র্যাঞ্চাইজি সিরিজ 'Project: Website'। আইডিয়া ও উদ্ভাবন: মোঃ গোলাম মুবাশশির রাফি। প্রাতিষ্ঠানিক প্ল্যাটফর্ম: CFSBR ও TixEdge Code।",
};

export default function BookPage() {
  return (
    <div className="min-h-screen bg-[#FCFAF6] dark:bg-zinc-950 text-slate-900 dark:text-zinc-100 flex flex-col font-sans">
      {/* Top Navigation */}
      <header className="h-14 border-b border-stone-200/80 dark:border-zinc-800 bg-[#FCFAF6]/90 dark:bg-zinc-950/80 backdrop-blur sticky top-0 z-40 px-4 sm:px-8 flex items-center justify-between">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-xs font-bold text-slate-800 dark:text-zinc-200 hover:text-orange-600 transition-colors"
        >
          <ArrowLeft className="h-4 w-4" />
          <span>হোমপেজে ফিরে যান</span>
        </Link>
        <div className="flex items-center gap-3 text-xs font-bold">
          <div className="hidden sm:flex items-center gap-1.5 text-stone-500 dark:text-zinc-400">
            <BookOpen className="h-3.5 w-3.5 text-orange-600" />
            <span>Project: [Topic] ফ্র্যাঞ্চাইজি লাইব্রেরি</span>
          </div>
          <Link
            href="/license"
            className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full border border-stone-300 dark:border-zinc-700 bg-white dark:bg-zinc-900 text-stone-700 dark:text-zinc-300 hover:text-orange-600 transition-colors text-[11px]"
          >
            <Shield className="h-3 w-3 text-orange-600" />
            <span>আইনি নোটিশ</span>
          </Link>
        </div>
      </header>

      {/* Main Container */}
      <main className="flex-1 max-w-5xl mx-auto w-full py-10 px-4 sm:px-6 md:px-8 space-y-12 text-left">
        {/* Hero Section with Original Animated Blocku Character */}
        <section className="space-y-6 border-b border-stone-300 dark:border-zinc-800 pb-8">
          <div className="flex flex-wrap items-center gap-2">
            <div className="inline-flex items-center gap-2 rounded-full border border-orange-200 dark:border-orange-950/60 bg-orange-50 dark:bg-orange-950/30 px-3 py-1 text-xs font-bold text-orange-800 dark:text-orange-300">
              <Sparkles className="h-3.5 w-3.5 text-orange-600" />
              <span>গ্লোবাল ফ্র্যাঞ্চাইজি ফিল্ড-ম্যানুয়াল সিরিজ</span>
            </div>
            <div className="inline-flex items-center gap-1.5 rounded-full border border-stone-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 px-3 py-1 text-xs font-semibold text-stone-600 dark:text-zinc-400">
              <Layers className="h-3.5 w-3.5 text-stone-500" />
              <span>Dual-Engine Ecosystem</span>
            </div>
            <div className="inline-flex items-center gap-1.5 rounded-full border border-stone-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 px-3 py-1 text-xs font-semibold text-stone-600 dark:text-zinc-400">
              <Users className="h-3.5 w-3.5 text-stone-500" />
              <span>বয়স-নিরপেক্ষ অডিয়েন্স ফ্রেমওয়ার্ক</span>
            </div>
          </div>

          <div className="flex flex-col-reverse md:flex-row items-start md:items-center justify-between gap-6">
            <div className="space-y-3 flex-1">
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-950 dark:text-white tracking-tight leading-tight">
                Project: Website (প্রজেক্ট: ওয়েবসাইট)
              </h1>
              <p className="text-base sm:text-lg text-slate-700 dark:text-zinc-300 font-medium leading-relaxed">
                জেনারেশন আলফার জন্য ডুয়াল-ইঞ্জিন কম্পিউটেশনাল আর্কিটেকচার ফিল্ড-ম্যানুয়াল সিরিজ। নিষ্ক্রিয় স্ক্রিন আসক্তি ও ভিডিও টিউটোরিয়ালের কপি-পেস্ট প্রবণতা ভেঙে শিক্ষার্থীদের বাস্তব ডিজিটাল স্রষ্টা ও সফটওয়্যার স্থপতিতে রূপান্তরের সমন্বিত পেডাগজি।
              </p>
            </div>

            {/* Blocku Mascot Hero Card */}
            <div className="shrink-0 p-4 rounded-2xl border-2 border-orange-300 dark:border-orange-900/60 bg-orange-50/70 dark:bg-orange-950/20 flex flex-col items-center justify-center text-center shadow-xs">
              <div className="relative">
                <Blocku size={76} mood="cheer" withHat={true} />
              </div>
              <span className="mt-2 text-xs font-extrabold text-slate-900 dark:text-white">
                ব্লকু (Blocku)
              </span>
              <span className="text-[10px] font-mono font-semibold text-orange-700 dark:text-orange-400">
                চিফ ইঞ্জিনিয়ার ও ফিল্ড গাইড
              </span>
            </div>
          </div>

          {/* Official Mission Briefing Quote Card */}
          <div className="p-5 rounded-2xl border border-orange-200 dark:border-orange-950/60 bg-gradient-to-r from-orange-50/80 via-white to-amber-50/60 dark:from-zinc-900 dark:via-zinc-900 dark:to-orange-950/20 space-y-2">
            <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-orange-700 dark:text-orange-400">
              <Compass className="h-4 w-4" />
              <span>মিশন ব্রিফিং ও স্বাগত বার্তা</span>
            </div>
            <blockquote className="text-sm sm:text-base font-semibold text-slate-900 dark:text-zinc-100 italic leading-relaxed pl-3 border-l-2 border-orange-500">
              &quot;ওয়েলকাম টু Project: Website। আজকের মিশন: কোড দিয়ে ইন্টারনেটে নিজের প্রথম বাড়ি তৈরি করা। এই প্রজেক্টে তুমি শুধু কোডার নও, তুমি একজন আর্কিটেক্ট। আর মাঠে তোমার চিফ ইঞ্জিনিয়ার হিসেবে থাকছে ব্লকু।&quot;
            </blockquote>
          </div>

          {/* Authorship & Legal Credential Card */}
          <div className="p-5 rounded-2xl border-2 border-stone-300 dark:border-zinc-800 bg-white dark:bg-zinc-900 shadow-xs">
            <div className="grid sm:grid-cols-3 gap-5 text-xs">
              <div className="space-y-1">
                <span className="text-stone-500 font-bold block uppercase text-[10px]">
                  সিরিজ প্রণেতা ও মূল লেখক (Series Creator & Author):
                </span>
                <p className="text-sm font-extrabold text-slate-950 dark:text-white">
                  মোঃ গোলাম মুবাশশির রাফি
                </p>
                <p className="text-stone-500 font-mono text-[11px]">
                  Md Golam Mubasshir Rafi
                </p>
                <p className="text-stone-600 dark:text-zinc-400 text-[11px]">
                  সিজন ১ (ভলিউম ১ ও ২) এর মূল রচয়িতা
                </p>
                <p className="text-stone-500 text-[11px]">
                  ইমেইল: rafi@gmrafi.com.bd
                </p>
              </div>

              <div className="space-y-1">
                <span className="text-stone-500 font-bold block uppercase text-[10px]">
                  স্থায়ী প্রাতিষ্ঠানিক প্ল্যাটফর্ম (Institutional Umbrella):
                </span>
                <p className="text-sm font-extrabold text-slate-950 dark:text-white">
                  CFSBR
                </p>
                <p className="text-stone-600 dark:text-zinc-400 text-[11px]">
                  Centre for Fintech &amp; Strategic Business Research
                </p>
                <p className="text-stone-500 text-[11px]">
                  Junior Computational Architecture Lab
                </p>
                <p className="text-stone-600 dark:text-zinc-400 text-[11px]">
                  ধারাবাহিক গবেষণা ও প্রকাশনা প্রতিষ্ঠান
                </p>
              </div>

              <div className="space-y-1">
                <span className="text-stone-500 font-bold block uppercase text-[10px]">
                  সহ-লেখক ও ভবিষ্যৎ সম্প্রসারণ ফ্রেমওয়ার্ক:
                </span>
                <p className="text-sm font-extrabold text-slate-950 dark:text-white">
                  Collaborative Editorial Model
                </p>
                <p className="text-stone-600 dark:text-zinc-400 text-[11px]">
                  পরবর্তী ভলিউমগুলোতে (Python, Game, AI) সিএফএসবিআরের অধীনে বিশেষায়িত ডোমেন বিশেষজ্ঞ ও গবেষক সহ-লেখক হিসেবে যুক্ত হওয়ার উন্মুক্ত সুযোগ।
                </p>
                <p className="text-orange-700 dark:text-orange-400 font-bold text-[11px]">
                  Copyright (c) 2026 Md Golam Mubasshir Rafi.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Section 1: The Franchise Architecture (সম্পূর্ণ সিরিজের নাম ও রোডম্যাপ) */}
        <section className="space-y-6">
          <div className="space-y-2">
            <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-orange-700 dark:text-orange-400">
              <Library className="h-4 w-4" />
              <span>অসীম স্কেলেবিলিটি ও ফ্র্যাঞ্চাইজি আর্কিটেকচার</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-950 dark:text-white">
              Project: [Topic] গ্লোবাল ফ্র্যাঞ্চাইজি লাইব্রেরি
            </h2>
            <p className="text-xs sm:text-sm text-slate-700 dark:text-zinc-300 leading-relaxed">
              একটি একক শিশুতোষ নাম দিয়ে পুরো টেকনোলজি শেখানো যায় না। &quot;Project: [Topic]&quot; হলো আন্তর্জাতিক ফ্র্যাঞ্চাইজি ফর্মুলা (যেমন বিশ্বখ্যাত ডামিজ সিরিজ বা অ’রিলির বইয়ের নিজস্ব আইকনিক স্বকীয়তা)। ভবিষ্যৎ গবেষণার সাথে সাথে এই পুরো সিরিজটি একটি পূর্ণাঙ্গ টেক-লাইব্রেরি হিসেবে সেলফে দাঁড়িয়ে যাবে:
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {/* Season 1 / Volume 1 */}
            <div className="p-5 rounded-2xl border-2 border-orange-300 dark:border-orange-800 bg-white dark:bg-zinc-900 shadow-xs space-y-3 relative overflow-hidden">
              <div className="absolute top-0 right-0 bg-orange-600 text-white font-mono text-[10px] font-bold px-2 py-0.5 rounded-bl-lg">
                ফ্ল্যাগশিপ ভলিউম
              </div>
              <div className="flex items-center gap-2 text-orange-700 dark:text-orange-400 text-xs font-mono font-bold">
                <Code2 className="h-4 w-4" />
                <span>Season 1 / Volume 1</span>
              </div>
              <h3 className="text-base font-extrabold text-slate-950 dark:text-white">
                Project: Website (HTML)
              </h3>
              <p className="text-xs font-semibold text-orange-800 dark:text-orange-300">
                Blueprint &amp; Skeleton (মিশন ১: ব্লুপ্রিন্ট ও কাঠামো)
              </p>
              <p className="text-xs text-slate-600 dark:text-zinc-400 leading-relaxed">
                ওয়েবের মৌলিক কাঠামোগত ভিত্তি, সেমান্টিক ট্যাগসমূহ, পেজ আর্কিটেকচার এবং ৯টি হ্যান্ডস-অন মিশনের সমন্বয়ে প্রথম সম্পূর্ণ ওয়েবসাইট তৈরি।
              </p>
            </div>

            {/* Season 1 / Volume 2 */}
            <div className="p-5 rounded-2xl border border-stone-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 space-y-3">
              <div className="flex items-center gap-2 text-blue-700 dark:text-blue-400 text-xs font-mono font-bold">
                <Palette className="h-4 w-4" />
                <span>Season 1 / Volume 2</span>
              </div>
              <h3 className="text-base font-extrabold text-slate-950 dark:text-white">
                Project: Website (CSS &amp; JS)
              </h3>
              <p className="text-xs font-semibold text-blue-800 dark:text-blue-300">
                Visuals &amp; Magic (মিশন ২: ভিজ্যুয়ালস ও ম্যাজিক)
              </p>
              <p className="text-xs text-slate-600 dark:text-zinc-400 leading-relaxed">
                সিএসএস বক্স মডেল, ফ্লেক্সবক্স ও গ্রিড লেআউট, জাভাস্ক্রিপ্ট ইভেন্ট হ্যান্ডলিং, ডায়নামিক DOM রিঅ্যাক্টিভিটি ও ক্লাউড ডেপ্লয়মেন্ট।
              </p>
            </div>

            {/* Season 2 / Volume 3 */}
            <div className="p-5 rounded-2xl border border-stone-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 space-y-3">
              <div className="flex items-center gap-2 text-emerald-700 dark:text-emerald-400 text-xs font-mono font-bold">
                <Cpu className="h-4 w-4" />
                <span>Season 2 / Volume 3</span>
              </div>
              <h3 className="text-base font-extrabold text-slate-950 dark:text-white">
                Project: Python
              </h3>
              <p className="text-xs font-semibold text-emerald-800 dark:text-emerald-300">
                The Automation Engine (মিশন ৩: অটোমেশন ইঞ্জিন)
              </p>
              <p className="text-xs text-slate-600 dark:text-zinc-400 leading-relaxed">
                কম্পিউটেশনাল অ্যালগরিদম, অটোমেশন স্ক্রিপ্ট, লুপ, ফাংশন ও বাস্তব জীবনের ডাটা সলভিং প্রজেক্ট।
              </p>
            </div>

            {/* Season 2 / Volume 4 */}
            <div className="p-5 rounded-2xl border border-stone-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 space-y-3">
              <div className="flex items-center gap-2 text-purple-700 dark:text-purple-400 text-xs font-mono font-bold">
                <Gamepad2 className="h-4 w-4" />
                <span>Season 2 / Volume 4</span>
              </div>
              <h3 className="text-base font-extrabold text-slate-950 dark:text-white">
                Project: Game
              </h3>
              <p className="text-xs font-semibold text-purple-800 dark:text-purple-300">
                Logic &amp; Physics (মিশন ৪: লজিক ও ফিজিক্স)
              </p>
              <p className="text-xs text-slate-600 dark:text-zinc-400 leading-relaxed">
                ২ডি গেম ইঞ্জিন মেকানিক্স, কলিশন ডিটেকশন, কোঅর্ডিনেট সিস্টেম ও ইন্টারঅ্যাক্টিভ গেম লুপ ডেভেলপমেন্ট।
              </p>
            </div>

            {/* Season 3 / Volume 5 */}
            <div className="p-5 rounded-2xl border border-stone-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 space-y-3 sm:col-span-2 lg:col-span-2">
              <div className="flex items-center gap-2 text-rose-700 dark:text-rose-400 text-xs font-mono font-bold">
                <Bot className="h-4 w-4" />
                <span>Season 3 / Volume 5</span>
              </div>
              <h3 className="text-base font-extrabold text-slate-950 dark:text-white">
                Project: AI
              </h3>
              <p className="text-xs font-semibold text-rose-800 dark:text-rose-300">
                Prompts &amp; Smart Models (মিশন ৫: প্রম্পটস ও স্মার্ট মডেলস)
              </p>
              <p className="text-xs text-slate-600 dark:text-zinc-400 leading-relaxed">
                লার্জ ল্যাঙ্গুয়েজ মডেল (LLM) ইনটুইশন, এআই প্রম্পট আর্কিটেকচার, এথিক্যাল কম্পিউটিং ও নিজস্ব স্মার্ট অ্যাপ বিল্ড।
              </p>
            </div>
          </div>

          {/* Spatial Orientation & Collaborative Authorship Card */}
          <div className="grid md:grid-cols-2 gap-4 pt-2">
            <div className="p-4 rounded-xl border border-stone-200 dark:border-zinc-800 bg-[#FCFAF6] dark:bg-zinc-950/60 space-y-2 text-xs">
              <span className="font-bold text-slate-950 dark:text-white flex items-center gap-1.5">
                <Compass className="h-4 w-4 text-orange-600" />
                <span>প্রথম ও দ্বিতীয় পৃষ্ঠার স্থানিক ওরিয়েন্টেশন (You Are Here)</span>
              </span>
              <p className="text-slate-700 dark:text-zinc-300 leading-relaxed">
                সিজন ১-এর উভয় বইয়ের মূল নামই &quot;Project: Website&quot;। ভলিউম ১-এ শিক্ষার্থী শেখে ওয়েবসাইটের কাঠামো (HTML) এবং ভলিউম ২-এ শেখে প্রাণ ও গতিশীলতা (CSS/JS)। বইয়ের প্রথম বা দ্বিতীয় পৃষ্ঠাতেই শিক্ষার্থীকে পরিচয় করিয়ে দেওয়া হবে সে বর্তমানে কোন ওয়েবসাইটে দাঁড়িয়ে আছে এবং তার ইন্টারফেসের রূপরেখা কী।
              </p>
            </div>

            <div className="p-4 rounded-xl border border-stone-200 dark:border-zinc-800 bg-[#FCFAF6] dark:bg-zinc-950/60 space-y-2 text-xs">
              <span className="font-bold text-slate-950 dark:text-white flex items-center gap-1.5">
                <Users className="h-4 w-4 text-orange-600" />
                <span>সহ-লেখক ও প্রাতিষ্ঠানিক ধারাবাহিকতা (Collaborative Model)</span>
              </span>
              <p className="text-slate-700 dark:text-zinc-300 leading-relaxed">
                সব ভলিউম এককভাবে একজনই লিখবেন এমন নয়। মূল উদ্ভাবক হিসেবে সিজন ১ এর ভলিউম ১ ও ২ লিখছেন মোঃ গোলাম মুবাশশির রাফি। পরবর্তী সিজনসমূহে সিএফএসবিআরের স্থায়ী প্রাতিষ্ঠানিক ছাতার অধীনে অন্যান্য অভিজ্ঞ গবেষক ও ডেভেলপার সহ-লেখক হিসেবে দায়িত্ব গ্রহণ করবেন।
              </p>
            </div>
          </div>
        </section>

        {/* Section 2: Audience Strategy & The Collector's Psychology */}
        <section className="space-y-6">
          <div className="space-y-2">
            <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-orange-700 dark:text-orange-400">
              <Target className="h-4 w-4" />
              <span>অডিয়েন্স স্ট্র্যাটেজি ও জেন-আলফার মনস্তত্ত্ব</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-950 dark:text-white">
              বয়সের কৃত্রিম দেয়াল ভেঙে ৩ গুণ বড় মার্কেট রিচ
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="p-6 rounded-2xl border border-stone-200 dark:border-zinc-800 bg-white dark:bg-zinc-900/60 space-y-4">
              <h3 className="text-base font-extrabold text-slate-950 dark:text-white flex items-center gap-2">
                <span className="text-orange-600 font-mono">ক.</span>
                <span>বয়স-নিরপেক্ষ সার্বজনীন আবেদন</span>
              </h3>
              <p className="text-xs sm:text-sm text-slate-700 dark:text-zinc-300 leading-relaxed">
                শিশুতোষ কোনো নাম থাকলে ক্লাস নাইন, টেন বা এইচএসসি আইসিটির শিক্ষার্থীরা পাবলিক বাসে বা ক্লাসরুমে বইটি হাতে নিতে চরম সংকোচ বোধ করত। কিন্তু <strong>&quot;Project: Website&quot;</strong> একটি অত্যন্ত পরিণত ও পেশাদার নাম:
              </p>
              <ul className="list-disc pl-5 space-y-2 text-xs text-slate-700 dark:text-zinc-300">
                <li>
                  <strong>৪র্থ-৫ম শ্রেণির শিক্ষার্থীর কাছে:</strong> এটি একটি রোমাঞ্চকর কোডিং গেমের মিশন ও লেভেল কমপ্লিশন।
                </li>
                <li>
                  <strong>৮ম-১০ম ও এইচএসসি আইসিটি শিক্ষার্থীর কাছে:</strong> এটি মুখস্থ জটিলতা মুক্ত একটি বাস্তব হ্যান্ডস-অন প্রজেক্ট বুক, যা দিয়ে প্র্যাক্টিক্যালে সর্বোচ্চ আত্মবিশ্বাস পাওয়া যায়।
                </li>
              </ul>
            </div>

            <div className="p-6 rounded-2xl border border-stone-200 dark:border-zinc-800 bg-white dark:bg-zinc-900/60 space-y-4">
              <h3 className="text-base font-extrabold text-slate-950 dark:text-white flex items-center gap-2">
                <span className="text-orange-600 font-mono">খ.</span>
                <span>কোয়েস্ট হান্টিং ও কালেক্টরস বক্স সাইকোলজি</span>
              </h3>
              <p className="text-xs sm:text-sm text-slate-700 dark:text-zinc-300 leading-relaxed">
                মাইনক্রাফট (Minecraft) ও রোবলক্স (Roblox) খেলে বড় হওয়া জেনারেশন আলফা কোনো কিছু মুখস্থ করার জন্য বই পড়ে না। তারা খোঁজে চিট-কোড, সিক্রেট ম্যাপ ও মিশন:
              </p>
              <ul className="list-disc pl-5 space-y-2 text-xs text-slate-700 dark:text-zinc-300">
                <li>
                  <strong>ট্যাকটাইল ফিল্ড-ম্যানুয়াল:</strong> ডেস্কে ১৮০ ডিগ্রি ফ্ল্যাট রাখা স্পাইরাল বাইন্ডিং ও পেন্সিল ট্রেসিং ব্লুপ্রিন্ট।
                </li>
                <li>
                  <strong>কালেক্টরস এডিশন:</strong> সেলফে ভলিউম অনুযায়ী সাজিয়ে রাখার মতো প্রিমিয়াম ফিল্ড-কিট, স্টিকার প্যাক ও ভেরিফায়েড প্রজেক্ট সার্টিফিকেট।
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Section 3: The Blocku Mascot & Pedagogical Role */}
        <section className="space-y-6">
          <div className="space-y-2">
            <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-orange-700 dark:text-orange-400">
              <Sparkles className="h-4 w-4" />
              <span>অফিশিয়াল মাসকট ও ক্যারেক্টার আইপি</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-950 dark:text-white">
              ব্লকু (Blocku): চিফ ইঞ্জিনিয়ার ও বৌদ্ধিক স্বত্ব
            </h2>
          </div>

          <div className="p-6 rounded-2xl border-2 border-stone-300 dark:border-zinc-800 bg-white dark:bg-zinc-900/60 space-y-6">
            <div className="flex flex-col sm:flex-row items-center gap-6 pb-6 border-b border-stone-200 dark:border-zinc-800">
              <div className="flex items-center gap-4 p-3 rounded-2xl bg-orange-100/60 dark:bg-orange-950/40 border border-orange-200 dark:border-orange-900">
                <Blocku size={64} mood="cheer" withHat={true} />
                <Blocku size={64} mood="thinking" withHat={true} />
                <Blocku size={64} mood="idle" withHat={false} />
              </div>
              <div className="space-y-1 text-center sm:text-left">
                <h3 className="text-lg font-bold text-slate-950 dark:text-white">
                  ব্লকুর মূল ভেক্টর রূপরেখা ও বহুমুখী অভিব্যক্তি
                </h3>
                <p className="text-xs text-stone-500 dark:text-zinc-400">
                  ইটের শরীর (Terracotta Brick), হলুদ ইঞ্জিনিয়ার হ্যাট, ব্লু লেগস এবং বন্ধুত্বপূর্ণ রাউন্ড আইজ।
                </p>
                <span className="inline-block px-2.5 py-0.5 rounded-full bg-orange-100 dark:bg-orange-950 text-orange-800 dark:text-orange-300 text-[10px] font-bold">
                  কপিরাইট আইন ২০২৩-এর ধারা ২(৪০) অনুসারে শিল্পকর্ম (Artistic Work)
                </span>
              </div>
            </div>

            <div className="grid sm:grid-cols-3 gap-4 text-xs">
              <div className="p-3 rounded-xl border border-stone-200 dark:border-zinc-800 bg-[#FCFAF6] dark:bg-zinc-950/50 space-y-1">
                <span className="font-bold text-slate-900 dark:text-white">ভুল সংশোধনের সাহস:</span>
                <p className="text-stone-600 dark:text-zinc-400 text-[11px]">
                  কোডে ভুল হলে লাল এরর দিয়ে ভয় না পাইয়ে ব্লকু চিন্তাশীল ভঙ্গিতে (thinking) গঠনমূলক ক্লু দেয়।
                </p>
              </div>

              <div className="p-3 rounded-lg border border-stone-200 dark:border-zinc-800 bg-[#FCFAF6] dark:bg-zinc-950/50 space-y-1">
                <span className="font-bold text-slate-900 dark:text-white">মিশন সেলিব্রেশন:</span>
                <p className="text-stone-600 dark:text-zinc-400 text-[11px]">
                  প্রতিটি কোড রান সফল হলে দুই হাত তুলে উল্লাস (cheer) করে শিক্ষার্থীর ডোপামিন বাড়ায়।
                </p>
              </div>

              <div className="p-3 rounded-lg border border-stone-200 dark:border-zinc-800 bg-[#FCFAF6] dark:bg-zinc-950/50 space-y-1">
                <span className="font-bold text-slate-900 dark:text-white">আইনি মালিকানা:</span>
                <p className="text-stone-600 dark:text-zinc-400 text-[11px]">
                  ব্লকু কেবল প্রতীক নয়, বরং মোঃ গোলাম মুবাশশির রাফির নিবন্ধিত বৌদ্ধিক স্বত্বাধিকারের অবিচ্ছেদ্য অংশ।
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Section 4: Construction Simulation Metaphor */}
        <section className="space-y-6">
          <div className="space-y-2">
            <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-orange-700 dark:text-orange-400">
              <Hammer className="h-4 w-4" />
              <span>পেডাগজিক্যাল মেটাফর</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-950 dark:text-white">
              ভবন নির্মাণ ও স্থাপত্যের রূপক
            </h2>
            <p className="text-xs sm:text-sm text-slate-700 dark:text-zinc-300">
              টাইটেল প্রজেক্ট-বেসড হলেও ভেতরের ম্যাজিক পুরোপুরি অক্ষুণ্ণ। বাইরে প্রফেশনাল মিশন প্যাকেজিং, আর ভেতরে সহজবোধ্য ট্যাকটাইল কনস্ট্রাকশন মেকানিক্স:
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            <div className="p-4 rounded-xl border border-stone-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 space-y-2">
              <div className="flex items-center gap-2 text-orange-700 dark:text-orange-400 text-xs font-bold">
                <Box className="h-4 w-4" />
                <span>জমি ও সীমানা (Land &amp; Boundary)</span>
              </div>
              <p className="font-mono text-xs font-bold text-slate-950 dark:text-white">
                &lt;!DOCTYPE&gt;, &lt;html&gt;, &lt;head&gt;, &lt;body&gt;
              </p>
              <p className="text-xs text-slate-600 dark:text-zinc-400">
                একটি খালি প্লটে সীমানা প্রাচীর নির্ধারণ ও ফাউন্ডেশন ঢালাইয়ের কাজ।
              </p>
            </div>

            <div className="p-4 rounded-xl border border-stone-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 space-y-2">
              <div className="flex items-center gap-2 text-amber-700 dark:text-amber-400 text-xs font-bold">
                <Layers className="h-4 w-4" />
                <span>ইট ও দেয়াল (Bricks &amp; Walls)</span>
              </div>
              <p className="font-mono text-xs font-bold text-slate-950 dark:text-white">
                &lt;h1&gt;-&lt;h6&gt;, &lt;p&gt;, &lt;div&gt;, &lt;ul&gt;, &lt;ol&gt;
              </p>
              <p className="text-xs text-slate-600 dark:text-zinc-400">
                ভবনের মূল কাঠামোগত কক্ষ, দেয়াল ও শিরোনাম সাইনবোর্ড স্থাপন।
              </p>
            </div>

            <div className="p-4 rounded-xl border border-stone-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 space-y-2">
              <div className="flex items-center gap-2 text-emerald-700 dark:text-emerald-400 text-xs font-bold">
                <Globe className="h-4 w-4" />
                <span>পোস্টার ও প্রবেশদ্বার (Portals)</span>
              </div>
              <p className="font-mono text-xs font-bold text-slate-950 dark:text-white">
                &lt;img&gt;, &lt;a href=&quot;...&quot;&gt;
              </p>
              <p className="text-xs text-slate-600 dark:text-zinc-400">
                কক্ষের দেয়ালে ছবির ফ্রেম সাজানো এবং অন্য কক্ষে প্রবেশের ম্যাজিকাল ডোর।
              </p>
            </div>

            <div className="p-4 rounded-xl border border-stone-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 space-y-2">
              <div className="flex items-center gap-2 text-purple-700 dark:text-purple-400 text-xs font-bold">
                <Palette className="h-4 w-4" />
                <span>রঙ ও নান্দনিক সজ্জা (Paint &amp; Decor)</span>
              </div>
              <p className="font-mono text-xs font-bold text-slate-950 dark:text-white">
                CSS inline style, color, background
              </p>
              <p className="text-xs text-slate-600 dark:text-zinc-400">
                ইটের দেয়ালে প্লাস্টার ও রঙ করা, টাইপোগ্রাফিক সৌন্দর্য ও নান্দনিক বিন্যাস।
              </p>
            </div>

            <div className="p-4 rounded-xl border border-stone-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 space-y-2 sm:col-span-2 lg:col-span-2">
              <div className="flex items-center gap-2 text-rose-700 dark:text-rose-400 text-xs font-bold">
                <Zap className="h-4 w-4" />
                <span>বিদ্যুৎ ও অটোমেশন (Electricity &amp; Automation)</span>
              </div>
              <p className="font-mono text-xs font-bold text-slate-950 dark:text-white">
                JavaScript logic, Event Listeners, State
              </p>
              <p className="text-xs text-slate-600 dark:text-zinc-400">
                সুইচ চাপলে লাইট জ্বলা বা পাখা ঘোরার মতো বাটনে ক্লিকের সাথে পেজের গতিশীল পরিবর্তন ও ইন্টারেকশন।
              </p>
            </div>
          </div>
        </section>

        {/* Section 5: Detailed Volume 1 Syllabus (৯টি মিশন ও ক্যাপস্টোন) */}
        <section className="space-y-6">
          <div className="space-y-2">
            <div className="flex items-center justify-between flex-wrap gap-2">
              <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-orange-700 dark:text-orange-400">
                <FileText className="h-4 w-4" />
                <span>ভলিউম ১ সিলেবাস ও অধ্যায়ভিত্তিক পাঠ্যক্রম</span>
              </div>
              <span className="text-xs font-mono font-bold text-stone-500">
                Project: Website - Volume 1 (HTML)
              </span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-950 dark:text-white">
              মিশন ১ থেকে মিশন ৯ এর সম্পূর্ণ কারিকুলাম
            </h2>
          </div>

          <div className="p-6 rounded-2xl border-2 border-orange-200 dark:border-orange-950/60 bg-white dark:bg-zinc-900 space-y-5">
            <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-3 text-xs">
              <div className="p-3 rounded-lg border border-stone-200 dark:border-zinc-800 bg-[#FCFAF6] dark:bg-zinc-950/50 space-y-1">
                <span className="font-mono text-orange-600 font-bold">মিশন ০১:</span>
                <p className="font-bold text-slate-900 dark:text-zinc-100">কম্পিউটার কীভাবে কথা শোনে?</p>
                <p className="text-stone-500 text-[11px]">কমেন্টস, নির্দেশের গুরুত্ব ও সিনট্যাক্স স্পষ্টতা</p>
              </div>

              <div className="p-3 rounded-lg border border-stone-200 dark:border-zinc-800 bg-[#FCFAF6] dark:bg-zinc-950/50 space-y-1">
                <span className="font-mono text-orange-600 font-bold">মিশন ০২:</span>
                <p className="font-bold text-slate-900 dark:text-zinc-100">যন্ত্রপাতির বাক্স ও প্রথম ইট</p>
                <p className="text-stone-500 text-[11px]">ট্যাগ পেয়ার, ওপেনিং ও ক্লোজিং ট্যাগ নিয়মাবলী</p>
              </div>

              <div className="p-3 rounded-lg border border-stone-200 dark:border-zinc-800 bg-[#FCFAF6] dark:bg-zinc-950/50 space-y-1">
                <span className="font-mono text-orange-600 font-bold">মিশন ০৩:</span>
                <p className="font-bold text-slate-900 dark:text-zinc-100">ব্লকের পরিচয়</p>
                <p className="text-stone-500 text-[11px]">আনঅর্ডারড ও অর্ডারড লিস্ট (ul, ol, li)</p>
              </div>

              <div className="p-3 rounded-lg border border-stone-200 dark:border-zinc-800 bg-[#FCFAF6] dark:bg-zinc-950/50 space-y-1">
                <span className="font-mono text-orange-600 font-bold">মিশন ০৪:</span>
                <p className="font-bold text-slate-900 dark:text-zinc-100">বাড়ির নকশা</p>
                <p className="text-stone-500 text-[11px]">&lt;!DOCTYPE&gt;, html, head, body হায়ারার্কি</p>
              </div>

              <div className="p-3 rounded-lg border border-stone-200 dark:border-zinc-800 bg-[#FCFAF6] dark:bg-zinc-950/50 space-y-1">
                <span className="font-mono text-orange-600 font-bold">মিশন ০৫:</span>
                <p className="font-bold text-slate-900 dark:text-zinc-100">সাইনবোর্ড বসানো</p>
                <p className="text-stone-500 text-[11px]">হেডিং হায়ারার্কি (h1 থেকে h6)</p>
              </div>

              <div className="p-3 rounded-lg border border-stone-200 dark:border-zinc-800 bg-[#FCFAF6] dark:bg-zinc-950/50 space-y-1">
                <span className="font-mono text-orange-600 font-bold">মিশন ০৬:</span>
                <p className="font-bold text-slate-900 dark:text-zinc-100">ফটো ফ্রেম</p>
                <p className="text-stone-500 text-[11px]">ইমেজ অ্যাট্রিবিউট (src, alt) ও অনুপাত</p>
              </div>

              <div className="p-3 rounded-lg border border-stone-200 dark:border-zinc-800 bg-[#FCFAF6] dark:bg-zinc-950/50 space-y-1">
                <span className="font-mono text-orange-600 font-bold">মিশন ০৭:</span>
                <p className="font-bold text-slate-900 dark:text-zinc-100">জাদুর দরজা</p>
                <p className="text-stone-500 text-[11px]">হাইপারলিংক নেটওয়ার্ক (href, target)</p>
              </div>

              <div className="p-3 rounded-lg border border-stone-200 dark:border-zinc-800 bg-[#FCFAF6] dark:bg-zinc-950/50 space-y-1">
                <span className="font-mono text-orange-600 font-bold">মিশন ০৮:</span>
                <p className="font-bold text-slate-900 dark:text-zinc-100">দেয়ালের রঙ</p>
                <p className="text-stone-500 text-[11px]">ইনলাইন সিএসএস স্টাইলিং ও নান্দনিকতা</p>
              </div>

              <div className="p-3 rounded-lg border-2 border-orange-400 dark:border-orange-600 bg-orange-50/50 dark:bg-orange-950/30 space-y-1">
                <span className="font-mono text-orange-700 dark:text-orange-400 font-bold">মিশন ০৯ (ক্যাপস্টোন):</span>
                <p className="font-bold text-slate-950 dark:text-white">সম্পূর্ণ পোর্টফোলিও প্রজেক্ট</p>
                <p className="text-stone-600 dark:text-zinc-400 text-[11px]">নিজস্ব ওয়েবসাইট সমাপ্তকরণ ও প্রকাশনা</p>
              </div>
            </div>
          </div>
        </section>

        {/* Section 6: Physical Collector's Package & Tooling */}
        <section className="space-y-6">
          <div className="space-y-2">
            <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-orange-700 dark:text-orange-400">
              <Award className="h-4 w-4" />
              <span>সংগ্রহযোগ্য ফিল্ড-কিট স্পেসিফিকেশন</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-950 dark:text-white">
              প্রিন্ট প্যাকেজিং ও অফলাইন টুলস
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-4 text-xs">
            <div className="p-4 rounded-xl border border-stone-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 space-y-2">
              <BookmarkCheck className="h-5 w-5 text-orange-600" />
              <h4 className="font-bold text-slate-950 dark:text-white">স্পাইরাল-বাউন্ড বুক</h4>
              <p className="text-stone-600 dark:text-zinc-400 text-[11px]">
                ডেস্কে সম্পূর্ণ ১৮০ ডিগ্রি ফ্ল্যাট রেখে হাত দিয়ে লেখার জন্য বিশেষ মেকানিক্যাল বাইন্ডিং।
              </p>
            </div>

            <div className="p-4 rounded-xl border border-stone-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 space-y-2">
              <FileText className="h-5 w-5 text-orange-600" />
              <h4 className="font-bold text-slate-950 dark:text-white">বাগ-ট্র্যাপ শিট</h4>
              <p className="text-stone-600 dark:text-zinc-400 text-[11px]">
                অফলাইন ভুল সংশোধন ও পেন্সিল ট্রেসিংয়ের জন্য প্রিন্ট-রেডি ওয়ার্কশিট প্যাক।
              </p>
            </div>

            <div className="p-4 rounded-xl border border-stone-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 space-y-2">
              <Award className="h-5 w-5 text-orange-600" />
              <h4 className="font-bold text-slate-950 dark:text-white">ভেরিফায়েড সার্টিফিকেট</h4>
              <p className="text-stone-600 dark:text-zinc-400 text-[11px]">
                মিশন সমাপ্তির পর ফিজিক্যাল মেডেল ও অফিসিয়াল ভেরিফিকেশন সার্টিফিকেট।
              </p>
            </div>

            <div className="p-4 rounded-xl border border-stone-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 space-y-2">
              <Code2 className="h-5 w-5 text-orange-600" />
              <h4 className="font-bold text-slate-950 dark:text-white">সিনট্যাক্স ব্লুপ্রিন্ট</h4>
              <p className="text-stone-600 dark:text-zinc-400 text-[11px]">
                কম্পিউটার ডেস্কে টাঙিয়ে রাখার মতো দ্রুত রেফারেন্স চিট-শিট ও স্টিকার।
              </p>
            </div>
          </div>
        </section>

        {/* Section 7: Statutory Prior Art & Digital Copyright */}
        <section className="space-y-6">
          <div className="space-y-2">
            <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-orange-700 dark:text-orange-400">
              <Shield className="h-4 w-4" />
              <span>আইনি বৈধতা ও ডিজিটাল পাণ্ডুলিপির স্বত্ব</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-950 dark:text-white">
              আইএসবিএন (ISBN) ছাড়া পূর্ববর্তী স্বত্ব সংরক্ষণ
            </h2>
          </div>

          <div className="p-6 rounded-2xl border-2 border-stone-300 dark:border-zinc-800 bg-white dark:bg-zinc-900 space-y-4 text-xs sm:text-sm text-slate-800 dark:text-zinc-200 leading-relaxed">
            <div className="flex items-center gap-2 text-emerald-700 dark:text-emerald-400 font-bold text-sm">
              <CheckCircle2 className="h-4 w-4" />
              <span>কপিরাইট আইন, ২০২৩-এর ধারা ২(১৯) ও ২(৫০) অনুসারে স্বত্ব অবিলম্বে কার্যকর</span>
            </div>
            <p>
              আইন অনুযায়ী কোনো সৃষ্টিশীল সাহিত্যকর্মের স্বত্ব সংরক্ষণের জন্য কোনো পূর্বানুমতি, সরকারি রেজিস্ট্রেশন বা আইএসবিএন (ISBN) বাধ্যতামূলক শর্ত নয়। কোনো কর্ম কোনো বাস্তব বা ডিজিটাল মাধ্যমে ধারণ করার মুহূর্ত থেকেই এর কপিরাইট প্রথম রচয়িতা বা উদ্ভাবকের নামে স্বয়ংক্রিয়ভাবে সৃষ্টি হয়।
            </p>
            <p>
              এই ডিজিটাল প্ল্যাটফর্ম, গিট রিপোজিটরির ক্রিপ্টোগ্রাফিক টাইমস্ট্যাম্প এবং ভার্সেল ক্লাউড ডেপ্লয়মেন্টের মাধ্যমে &quot;Project: Website&quot; ফিল্ড-ম্যানুয়ালের পাণ্ডুলিপি, কারিকুলাম ও আর্কিটেকচারাল রূপরেখা ডিজিটাল মাধ্যমে আনুষ্ঠানিকভাবে সংরক্ষিত এবং এটি আন্তর্জাতিক বার্ন কনভেনশন ও মার্কিন DMCA আইনের অধীনেও অখণ্ড প্রামাণ্য দলিল (Prior Art)।
            </p>
            <div className="pt-2 border-t border-stone-200 dark:border-zinc-800 flex flex-wrap items-center justify-between gap-3 text-xs">
              <span className="font-semibold text-slate-900 dark:text-white">
                স্বত্বাধিকারী: মোঃ গোলাম মুবাশশির রাফি (Md Golam Mubasshir Rafi)
              </span>
              <Link
                href="/license"
                className="inline-flex items-center gap-1 font-bold text-orange-600 hover:underline"
              >
                <span>পূর্ণাঙ্গ সংবিধিবদ্ধ লাইসেন্স বিস্তারিত পড়ুন</span>
                <ExternalLink className="h-3 w-3" />
              </Link>
            </div>
          </div>
        </section>

        {/* Bottom Actions */}
        <div className="pt-8 border-t border-stone-300 dark:border-zinc-800 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs">
          <Link
            href="/"
            className="inline-flex items-center gap-2 font-bold text-slate-800 dark:text-zinc-200 hover:text-orange-600 transition-colors"
          >
            <ArrowLeft className="h-4 w-4" />
            <span>মূল হোমপেজে ফিরে যান</span>
          </Link>
          <div className="flex items-center gap-4">
            <Link
              href="/play"
              className="px-4 py-2 rounded-lg bg-orange-600 text-white font-bold hover:bg-orange-700 transition-colors inline-flex items-center gap-1.5"
            >
              <Code2 className="h-4 w-4" />
              <span>লাইভ স্টুডিও সিমুলেটর চালু করুন</span>
            </Link>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-stone-300 dark:border-zinc-800 py-6 px-4 sm:px-8 text-center text-xs text-stone-500 dark:text-zinc-400 bg-[#FCFAF6] dark:bg-zinc-950">
        <p className="font-medium">
          Copyright (c) 2026 Md Golam Mubasshir Rafi. All rights reserved. · Centre for Fintech &amp; Strategic Business Research (CFSBR)
        </p>
      </footer>
    </div>
  );
}
