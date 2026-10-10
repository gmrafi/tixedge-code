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
} from "lucide-react";

export const metadata: Metadata = {
  title: "Project: Website (প্রজেক্ট: ওয়েবসাইট) - ফিল্ড-ম্যানুয়াল ও কারিকুলাম | CFSBR",
  description:
    "জেনারেশন আলফার জন্য ডুয়াল-ইঞ্জিন কম্পিউটেশনাল আর্কিটেকচার ফিল্ড-ম্যানুয়াল সিরিজ 'Project: Website'। আইডিয়া ও উদ্ভাবন: মোঃ গোলাম মুবাশশির রাফি। প্রাতিষ্ঠানিক প্ল্যাটফর্ম: CFSBR ও TixEdge Code।",
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
            <span>ফিল্ড-ম্যানুয়াল রূপরেখা</span>
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
        {/* Hero Section */}
        <section className="space-y-4 border-b border-stone-300 dark:border-zinc-800 pb-8">
          <div className="flex flex-wrap items-center gap-2">
            <div className="inline-flex items-center gap-2 rounded-full border border-orange-200 dark:border-orange-950/60 bg-orange-50 dark:bg-orange-950/30 px-3 py-1 text-xs font-bold text-orange-800 dark:text-orange-300">
              <Sparkles className="h-3.5 w-3.5 text-orange-600" />
              <span>ফিল্ড-ম্যানুয়াল সিরিজ ও প্রকাশনা রূপরেখা</span>
            </div>
            <div className="inline-flex items-center gap-1.5 rounded-full border border-stone-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 px-3 py-1 text-xs font-semibold text-stone-600 dark:text-zinc-400">
              <Layers className="h-3.5 w-3.5 text-stone-500" />
              <span>Dual-Engine Model</span>
            </div>
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-950 dark:text-white tracking-tight leading-tight">
            Project: Website (প্রজেক্ট: ওয়েবসাইট)
          </h1>
          <p className="text-base sm:text-lg text-slate-700 dark:text-zinc-300 font-medium max-w-3xl leading-relaxed">
            জেনারেশন আলফার জন্য ডুয়াল-ইঞ্জিন কম্পিউটেশনাল আর্কিটেকচার ফিল্ড-ম্যানুয়াল সিরিজ। নিষ্ক্রিয় স্ক্রিন আসক্তি কাটিয়ে শিশুদের ডিজিটাল স্রষ্টা ও সফটওয়্যার স্থপতিতে রূপান্তরের সমন্বিত পেডাগজি।
          </p>

          {/* Authorship & Legal Credential Card */}
          <div className="mt-6 p-5 rounded-2xl border-2 border-stone-300 dark:border-zinc-800 bg-white dark:bg-zinc-900 shadow-xs">
            <div className="grid sm:grid-cols-3 gap-5 text-xs">
              <div className="space-y-1">
                <span className="text-stone-500 font-bold block uppercase text-[10px]">
                  কনসেপ্ট, উদ্ভাবন ও প্রণেতা (Author):
                </span>
                <p className="text-sm font-extrabold text-slate-950 dark:text-white">
                  মোঃ গোলাম মুবাশশির রাফি
                </p>
                <p className="text-stone-500 font-mono text-[11px]">
                  Md Golam Mubasshir Rafi
                </p>
                <p className="text-stone-500 text-[11px]">
                  ইমেইল: rafi@gmrafi.com.bd
                </p>
              </div>

              <div className="space-y-1">
                <span className="text-stone-500 font-bold block uppercase text-[10px]">
                  প্রাতিষ্ঠানিক গবেষণা প্ল্যাটফর্ম:
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
              </div>

              <div className="space-y-1">
                <span className="text-stone-500 font-bold block uppercase text-[10px]">
                  ডিজিটাল সিমুলেটর ও লাইসেন্স:
                </span>
                <p className="text-sm font-extrabold text-slate-950 dark:text-white">
                  TixEdge Code
                </p>
                <p className="text-stone-500 font-mono text-[11px]">
                  https://tixedgecode.vercel.app
                </p>
                <p className="text-orange-700 dark:text-orange-400 font-bold text-[11px]">
                  Copyright (c) 2026 Md Golam Mubasshir Rafi.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Section 1: Pedagogical Philosophy & The Dual-Engine Model */}
        <section className="space-y-6">
          <div className="space-y-2">
            <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-orange-700 dark:text-orange-400">
              <Compass className="h-4 w-4" />
              <span>মূল দর্শন ও ডুয়াল-ইঞ্জিন শিক্ষণ মডেল</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-950 dark:text-white">
              নিষ্ক্রিয় স্ক্রিন আসক্তি থেকে সক্রিয় সফটওয়্যার স্থপতি
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="p-6 rounded-2xl border border-stone-200 dark:border-zinc-800 bg-white dark:bg-zinc-900/60 space-y-3">
              <div className="h-10 w-10 rounded-xl bg-orange-100 dark:bg-orange-950/50 flex items-center justify-center text-orange-600 font-bold">
                <BookOpen className="h-5 w-5" />
              </div>
              <h3 className="text-lg font-bold text-slate-950 dark:text-white">
                ১. ফিজিক্যাল ট্যাকটাইল ফিল্ড-ম্যানুয়াল (Print Engine)
              </h3>
              <p className="text-xs sm:text-sm text-slate-700 dark:text-zinc-300 leading-relaxed">
                সাধারণ ক্লাসরুম পাঠ্যবই প্রোগ্রামিংয়ের তাত্ক্ষণিক ফলাফল দেখাতে পারে না, আবার কেবল স্ক্রিনে ভিডিও দেখলে গভীর মনোযোগ থাকে না। ফিল্ড-ম্যানুয়ালটি একটি বাস্তব প্রিন্ট ওয়ার্কবুক যাতে রয়েছে পেনসিল-পেপার কোড ট্রেসিং, অফলাইন বাগ-ট্র্যাপ হান্টিং এবং স্থাপত্যিক স্কেচিং। শিশু আগে হাতে স্পর্শ করে যুক্তি তৈরি করে।
              </p>
            </div>

            <div className="p-6 rounded-2xl border border-stone-200 dark:border-zinc-800 bg-white dark:bg-zinc-900/60 space-y-3">
              <div className="h-10 w-10 rounded-xl bg-blue-100 dark:bg-blue-950/50 flex items-center justify-center text-blue-600 font-bold">
                <Cpu className="h-5 w-5" />
              </div>
              <h3 className="text-lg font-bold text-slate-950 dark:text-white">
                ২. ক্লাউড সিমুলেশন স্যান্ডবক্স (Digital Engine)
              </h3>
              <p className="text-xs sm:text-sm text-slate-700 dark:text-zinc-300 leading-relaxed">
                TixEdge Code ইঞ্জিনের মাধ্যমে কোনো সফটওয়্যার ইনস্টল, টার্মিনাল কনফিগারেশন বা সার্ভার জটিলতা ছাড়াই ব্রাউজারে রিয়েল-টাইম কোড এডিটিং ও ভিজ্যুয়াল আউটপুট। ক্লায়েন্ট-সাইড মেমোরি সুরক্ষায় কোনো পার্সোনাল ডেটা ট্র্যাক হয় না। বইয়ের প্রতিটি অনুশীলনের লাইভ ল্যাব এখানে উন্মুক্ত।
              </p>
            </div>
          </div>
        </section>

        {/* Section 2: Construction Simulation Metaphor */}
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
              বিমূর্ত প্রোগ্রামিং সিনট্যাক্সকে শিশুদের পরিচিত শারীরিক অভিজ্ঞতার সাথে সংযুক্ত করতে ওয়েব ইঞ্জিনিয়ারিংয়ের প্রতিটি স্তরের জন্য বাস্তব রূপক নির্ধারণ করা হয়েছে:
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

        {/* Section 3: Detailed Syllabus & Volume Breakdown */}
        <section className="space-y-6">
          <div className="space-y-2">
            <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-orange-700 dark:text-orange-400">
              <FileText className="h-4 w-4" />
              <span>কারিকুলাম ও অধ্যায়ভিত্তিক পাঠ্যক্রম</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-950 dark:text-white">
              ভলিউম ১ ও ভলিউম ২ এর বিস্তারিত কাঠামো
            </h2>
          </div>

          {/* Volume 1 */}
          <div className="p-6 rounded-2xl border-2 border-orange-200 dark:border-orange-950/60 bg-white dark:bg-zinc-900 space-y-5">
            <div className="flex flex-wrap items-center justify-between gap-3 border-b border-stone-200 dark:border-zinc-800 pb-4">
              <div>
                <span className="text-orange-700 dark:text-orange-400 font-mono text-xs font-bold uppercase">
                  Volume 1: Mission 1
                </span>
                <h3 className="text-xl font-extrabold text-slate-950 dark:text-white">
                  ব্লুপ্রিন্ট ও কাঠামো (Blueprint &amp; Structure)
                </h3>
              </div>
              <span className="px-3 py-1 rounded-full bg-orange-100 dark:bg-orange-950 text-orange-800 dark:text-orange-300 text-xs font-bold">
                ৯টি মূল মিশন ও ক্যাপস্টোন প্রজেক্ট
              </span>
            </div>

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

          {/* Volume 2 */}
          <div className="p-6 rounded-2xl border border-stone-300 dark:border-zinc-800 bg-white dark:bg-zinc-900 space-y-3">
            <div className="flex flex-wrap items-center justify-between gap-3 border-b border-stone-200 dark:border-zinc-800 pb-3">
              <div>
                <span className="text-stone-500 font-mono text-xs font-bold uppercase">
                  Volume 2: Mission 2
                </span>
                <h3 className="text-xl font-extrabold text-slate-950 dark:text-white">
                  স্টাইল ও পাওয়ার-আপ (Style &amp; Power-Up)
                </h3>
              </div>
              <span className="px-3 py-1 rounded-full bg-stone-100 dark:bg-zinc-800 text-stone-700 dark:text-zinc-300 text-xs font-bold">
                সিএসএস ও জাভাস্ক্রিপ্ট ইন্টারেক্টিভিটি
              </span>
            </div>
            <p className="text-xs sm:text-sm text-slate-700 dark:text-zinc-300 leading-relaxed">
              সিএসএস বক্স মডেল (মার্জিন, প্যাডিং, বর্ডার), আধুনিক ফ্লেক্সবক্স ও গ্রিড লেআউট সিস্টেম, জাভাস্ক্রিপ্ট ইভেন্ট হ্যান্ডলার ও ইন্টারঅ্যাক্টিভ অ্যানিমেশন। পূর্ণাঙ্গ ওয়েব অ্যাপ্লিকেশন তৈরি এবং রিয়েল-ওয়ার্ল্ড ক্লাউড প্ল্যাটফর্মে ডেপ্লয়মেন্টের রূপরেখা।
            </p>
          </div>
        </section>

        {/* Section 4: Blocku Mascot & Intellectual Property */}
        <section className="space-y-6">
          <div className="space-y-2">
            <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-orange-700 dark:text-orange-400">
              <Sparkles className="h-4 w-4" />
              <span>পেডাগজিক্যাল গাইড ও বৌদ্ধিক স্বত্ব</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-950 dark:text-white">
              বোকু (Blocku): ডিজিটাল বন্ধু ও কিউব আর্কিটেক্ট
            </h2>
          </div>

          <div className="p-6 rounded-2xl border border-stone-200 dark:border-zinc-800 bg-white dark:bg-zinc-900/60 space-y-4">
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
              <div className="h-14 w-14 rounded-2xl bg-orange-600 text-white flex items-center justify-center font-extrabold text-2xl shadow-md">
                B
              </div>
              <div>
                <h3 className="text-lg font-bold text-slate-950 dark:text-white">
                  বোকু মাসকট ও ক্যারেক্টার আইপি (Artistic Work)
                </h3>
                <p className="text-xs text-stone-500">
                  কপিরাইট আইন, ২০২৩-এর ধারা ২(৪০) ও ১৪(১)(গ) অনুসারে সুরক্ষিত শিল্পকর্ম
                </p>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-slate-700 dark:text-zinc-300 leading-relaxed">
              বোকু হলো এই সিরিজের নির্দেশক চরিত্র। সে শিক্ষার্থীদের প্রতিটি পদক্ষেপে সাহস জোগায়, কোডে কোনো সিনট্যাক্স ভুল হলে ভয় না দেখিয়ে বুদ্ধিমত্তার সাথে ভুল সংশোধনের ক্লু প্রদান করে এবং প্রতিটি মিশন সফলভাবে শেষ হলে সেলিব্রেট করে। এটি কেবল কোনো প্রতীক নয়, বরং পুরো ফিল্ড-ম্যানুয়াল ও ওয়েব ইন্টারফেসের একটি স্বত্বাধিকারপ্রাপ্ত ভিজ্যুয়াল অ্যাসেট।
            </p>
          </div>
        </section>

        {/* Section 5: Physical Package & Collector's Format */}
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

        {/* Section 6: Statutory Prior Art & Digital Copyright */}
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
