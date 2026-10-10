"use client";

import Link from "next/link";
import { useState } from "react";
import {
  ArrowRight,
  Code2,
  Terminal,
  Boxes,
  ShieldCheck,
  Award,
  Sparkles,
  GraduationCap,
  CheckCircle2,
  Layers,
  ChevronRight,
  FileCode2,
  BookOpen,
  Laptop,
  Check,
  Sliders,
  Scale,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Navbar } from "@/components/navbar";
import { Blocku } from "@/components/blocku/mascot";
import { ParentModal } from "@/components/guardian/parent-modal";
import { CertificateGenerator } from "@/components/showcase/certificate-generator";
import { sound } from "@/lib/sound";

export default function LandingPage() {
  const [parentModalOpen, setParentModalOpen] = useState(false);
  const [certModalOpen, setCertModalOpen] = useState(false);
  const [previewTab, setPreviewTab] = useState<"html" | "python" | "blocks">("html");

  return (
    <div className="min-h-screen flex flex-col bg-[#FCFAF6] dark:bg-zinc-950 text-slate-900 dark:text-zinc-100">
      <Navbar onOpenParent={() => setParentModalOpen(true)} />

      <main className="flex-1">
        {/* ========================================================
            TOP INSTITUTIONAL ANNOUNCEMENT STRIP
           ======================================================== */}
        <div className="border-b border-stone-300/80 dark:border-zinc-800 bg-white/90 dark:bg-zinc-900/60 py-2.5 px-4 shadow-2xs">
          <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-3 text-xs text-slate-800 dark:text-zinc-200">
            <div className="flex items-center gap-2">
              <span className="flex h-2 w-2 rounded-full bg-orange-600" />
              <span className="font-extrabold text-slate-950 dark:text-white">
                CFSBR Junior Computational Lab
              </span>
              <span className="text-stone-300 dark:text-zinc-700 hidden sm:inline">|</span>
              <span className="hidden sm:inline font-medium text-slate-700 dark:text-zinc-300">
                ইন্টারেক্টিভ সফটওয়্যার আর্কিটেকচার ও কোডিং একাডেমি
              </span>
            </div>
            <div className="flex items-center gap-3">
              <span className="text-slate-800 dark:text-zinc-200 font-bold hidden md:inline-flex items-center gap-1.5">
                <ShieldCheck className="h-3.5 w-3.5 text-orange-600 stroke-[2.5]" />
                নিরাপদ ক্লায়েন্ট-সাইড স্যান্ডবক্স
              </span>
              <button
                onClick={() => setParentModalOpen(true)}
                className="font-extrabold text-orange-700 dark:text-orange-400 hover:underline cursor-pointer"
              >
                অভিভাবক সহায়িকা দেখুন →
              </button>
            </div>
          </div>
        </div>

        {/* ========================================================
            HERO SECTION: 2-COLUMN SPLIT SCREEN-FILLING LAYOUT (TOP ALIGNED)
           ======================================================== */}
        <section className="relative overflow-hidden py-10 lg:py-16 border-b border-stone-300/90 dark:border-zinc-800">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 w-full">
            <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-start">
              
              {/* ────────────────────────────────────────────────────────
                  LEFT COLUMN: Authoritative Editorial Copy & Actions
                 ──────────────────────────────────────────────────────── */}
              <div className="lg:col-span-6 space-y-6 text-left">
                {/* Category Badge */}
                <div className="inline-flex items-center gap-2 rounded-full border border-stone-300 dark:border-zinc-700 bg-white dark:bg-zinc-900 px-3.5 py-1 text-xs text-slate-900 dark:text-zinc-100 shadow-2xs font-bold">
                  <span className="flex h-2 w-2 rounded-full bg-orange-600" />
                  <span>TixEdge Code</span>
                  <span className="text-stone-300 dark:text-zinc-700">·</span>
                  <span className="text-slate-800 dark:text-zinc-200 font-bold">
                    CFSBR কম্পিউটেশনাল আর্কিটেকচার প্ল্যাটফর্ম
                  </span>
                </div>

                {/* Grand, Punchy, Deep-Black Headline in SolaimanLipi */}
                <h1 className="text-3xl sm:text-4xl md:text-5xl xl:text-6xl font-extrabold tracking-tight text-slate-950 dark:text-white leading-[1.18]">
                  পর্দার নিষ্ক্রিয় দর্শক নয়,
                  <br />
                  শৈশবেই গড়ে উঠুক{" "}
                  <span className="text-orange-600 dark:text-orange-500">
                    সফটওয়্যার নির্মাণের
                  </span>{" "}
                  চিন্তাশক্তি ও মেধা
                </h1>

                {/* Rich Standard Bangla Academy Prose with High Contrast */}
                <p className="text-base sm:text-lg text-slate-900 dark:text-zinc-100 leading-relaxed font-normal">
                  নতুন প্রজন্মের শিক্ষার্থীদের জন্য বাস্তবমুখী কম্পিউটেশনাল চিন্তন ও ওয়েব স্থাপত্য শেখার আধুনিক প্ল্যাটফর্ম। কোনো জটিল সেটআপ ছাড়াই সরাসরি ব্রাউজারে যুক্তি সাজিয়ে গড়ে তুলুন নিজস্ব ডিজিটাল সৃষ্টি।
                </p>

                {/* Solid Action Buttons with High Contrast */}
                <div className="flex flex-wrap items-center gap-3 pt-1">
                  <Button
                    asChild
                    size="lg"
                    className="h-11 px-6 rounded-lg font-extrabold text-sm bg-orange-600 hover:bg-orange-700 text-white shadow-md active:scale-98 transition-transform"
                  >
                    <Link href="/play" onClick={() => sound.playClick(700)}>
                      <Code2 className="mr-2 h-4 w-4 stroke-[2.5]" />
                      <span>স্টুডিও চালু করুন</span>
                      <kbd className="ml-2.5 inline-flex h-5 items-center rounded border border-white/40 bg-white/20 px-1.5 font-mono text-[10px] font-bold text-white">
                        Ctrl+↵
                      </kbd>
                    </Link>
                  </Button>

                  <Button
                    asChild
                    variant="outline"
                    size="lg"
                    className="h-11 px-5 rounded-lg text-sm font-extrabold border-2 border-stone-300 dark:border-zinc-700 bg-white dark:bg-zinc-900 text-slate-950 dark:text-zinc-100 hover:bg-stone-100 shadow-2xs"
                  >
                    <Link href="#tracks" onClick={() => sound.playClick(500)}>
                      <Layers className="mr-2 h-4 w-4 text-stone-700 dark:text-zinc-300 stroke-[2.5]" />
                      <span>শিক্ষাক্রমের রূপরেখা</span>
                    </Link>
                  </Button>

                  <Button
                    variant="ghost"
                    size="lg"
                    onClick={() => {
                      sound.playClick(600);
                      setParentModalOpen(true);
                    }}
                    className="h-11 px-4 rounded-lg text-sm font-bold text-slate-800 dark:text-zinc-200 hover:text-slate-950 hover:bg-stone-200/70"
                  >
                    <ShieldCheck className="mr-1.5 h-4 w-4 text-orange-600 stroke-[2.5]" />
                    <span>অভিভাবক সহায়িকা</span>
                  </Button>
                </div>

                {/* Human-Crafted 3-Pillar Institutional Trust Grid */}
                <div className="pt-2">
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                    <div className="p-3.5 rounded-xl border border-stone-300 dark:border-zinc-800 bg-white dark:bg-zinc-900 shadow-2xs">
                      <span className="text-[11px] font-bold text-stone-500 dark:text-zinc-400 uppercase tracking-wider block">
                        পদ্ধতি
                      </span>
                      <span className="text-base font-extrabold text-slate-950 dark:text-white mt-0.5 block">
                        ট্যাকটাইল লার্নিং
                      </span>
                      <span className="text-[11px] font-semibold text-slate-700 dark:text-zinc-300 mt-0.5 block">
                        কাগজ থেকে পর্দার বাস্তব সমন্বয়
                      </span>
                    </div>

                    <div className="p-3.5 rounded-xl border border-stone-300 dark:border-zinc-800 bg-white dark:bg-zinc-900 shadow-2xs">
                      <span className="text-[11px] font-bold text-stone-500 dark:text-zinc-400 uppercase tracking-wider block">
                        পরিবেশ
                      </span>
                      <span className="text-base font-extrabold text-slate-950 dark:text-white mt-0.5 block">
                        ১০০% নিরাপদ
                      </span>
                      <span className="text-[11px] font-semibold text-slate-700 dark:text-zinc-300 mt-0.5 block">
                        ক্লায়েন্ট-সাইড মেমোরি স্যান্ডবক্স
                      </span>
                    </div>

                    <div className="p-3.5 rounded-xl border border-stone-300 dark:border-zinc-800 bg-white dark:bg-zinc-900 shadow-2xs">
                      <span className="text-[11px] font-bold text-stone-500 dark:text-zinc-400 uppercase tracking-wider block">
                        স্বীকৃতি
                      </span>
                      <span className="text-base font-extrabold text-slate-950 dark:text-white mt-0.5 block">
                        CFSBR স্বীকৃতি
                      </span>
                      <span className="text-[11px] font-semibold text-slate-700 dark:text-zinc-300 mt-0.5 block">
                        যাচাইকৃত প্রাতিষ্ঠানিক সনদ
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* ────────────────────────────────────────────────────────
                  RIGHT COLUMN: Screen-Filling Studio Workbench Card
                 ──────────────────────────────────────────────────────── */}
              <div className="lg:col-span-6 w-full">
                <div className="rounded-2xl border-2 border-stone-300 dark:border-zinc-700 bg-white dark:bg-zinc-900 shadow-xl overflow-hidden flex flex-col">
                  {/* Studio Window Chrome Bar */}
                  <div className="flex flex-wrap items-center justify-between px-4 py-2.5 border-b border-stone-300 dark:border-zinc-800 bg-stone-100 dark:bg-zinc-900 text-xs">
                    <div className="flex items-center gap-2">
                      <div className="flex gap-1.5">
                        <div className="w-3 h-3 rounded-full bg-rose-500" />
                        <div className="w-3 h-3 rounded-full bg-amber-500" />
                        <div className="w-3 h-3 rounded-full bg-emerald-500" />
                      </div>

                      <div className="flex items-center gap-1 ml-2 bg-stone-200/90 dark:bg-zinc-800 p-0.5 rounded-lg">
                        <button
                          onClick={() => {
                            sound.playClick(600);
                            setPreviewTab("html");
                          }}
                          className={`px-3 py-1 rounded text-xs font-bold transition-all ${
                            previewTab === "html"
                              ? "bg-white dark:bg-zinc-900 text-slate-900 dark:text-white shadow-xs"
                              : "text-slate-600 hover:text-slate-900"
                          }`}
                        >
                          ওয়েব আর্কিটেকচার
                        </button>

                        <button
                          onClick={() => {
                            sound.playClick(600);
                            setPreviewTab("python");
                          }}
                          className={`px-3 py-1 rounded text-xs font-bold transition-all ${
                            previewTab === "python"
                              ? "bg-white dark:bg-zinc-900 text-slate-900 dark:text-white shadow-xs"
                              : "text-slate-600 hover:text-slate-900"
                          }`}
                        >
                          পাইথন লজিক
                        </button>

                        <button
                          onClick={() => {
                            sound.playClick(600);
                            setPreviewTab("blocks");
                          }}
                          className={`px-3 py-1 rounded text-xs font-bold transition-all ${
                            previewTab === "blocks"
                              ? "bg-white dark:bg-zinc-900 text-slate-900 dark:text-white shadow-xs"
                              : "text-slate-600 hover:text-slate-900"
                          }`}
                        >
                          অ্যালগরিদম ল্যাব
                        </button>
                      </div>
                    </div>

                    <span className="text-[11px] font-bold text-slate-700 dark:text-zinc-300 font-mono hidden sm:inline">
                      ● ক্লায়েন্ট মেমোরি: প্রস্তুত
                    </span>
                  </div>

                  {/* Code Editor Pane (Top Half) */}
                  <div className="bg-[#0f0f17] text-stone-100 p-4 font-mono text-xs space-y-1.5 border-b border-stone-800">
                    <div className="text-stone-400 text-[11px] mb-2 font-mono flex items-center justify-between border-b border-stone-800 pb-1">
                      <span>{"// TixEdge Code Engine"}</span>
                      <span className="text-amber-400">লাইভ স্যান্ডবক্স পরিবেশ</span>
                    </div>

                    {previewTab === "html" ? (
                      <div className="space-y-1">
                        <div>
                          <span className="text-violet-400">&lt;h1</span>{" "}
                          <span className="text-emerald-400">style</span>=
                          <span className="text-amber-300">"color: #ea580c;"</span>
                          <span className="text-violet-400">&gt;</span>
                        </div>
                        <div className="pl-4 text-white font-extrabold font-sans text-sm">
                          আমার প্রথম ওয়েব প্রজেক্ট
                        </div>
                        <div>
                          <span className="text-violet-400">&lt;/h1&gt;</span>
                        </div>
                        <div className="pt-1">
                          <span className="text-violet-400">&lt;p&gt;</span>
                          <span className="text-sky-300 font-sans font-medium">
                            কম্পিউটারকে সুস্পষ্ট নির্দেশ দিয়ে নিজের ওয়েবসাইট বানাচ্ছি!
                          </span>
                          <span className="text-violet-400">&lt;/p&gt;</span>
                        </div>
                        <div className="pt-1">
                          <span className="text-violet-400">&lt;ul&gt;</span>
                        </div>
                        <div className="pl-4 text-emerald-300 font-medium">
                          &lt;li&gt;সুবিন্যস্ত কাঠামো ও সিনট্যাক্স&lt;/li&gt;
                        </div>
                        <div className="pl-4 text-emerald-300 font-medium">
                          &lt;li&gt;সফটওয়্যার স্থাপত্যের প্রাথমিক পাঠ&lt;/li&gt;
                        </div>
                        <div>
                          <span className="text-violet-400">&lt;/ul&gt;</span>
                        </div>
                      </div>
                    ) : previewTab === "python" ? (
                      <div className="space-y-1">
                        <div className="text-blue-400 font-semibold"># পাইথন কম্পিউটেশনাল লজিক</div>
                        <div className="text-yellow-300">
                          শিক্ষার্থী = <span className="text-emerald-300">"রাফি"</span>
                        </div>
                        <div className="text-yellow-300">
                          প্রজেক্ট_সংখ্যা = <span className="text-orange-400">5</span>
                        </div>
                        <div className="pt-1 text-violet-400">
                          def <span className="text-blue-300">মূল্যায়ন</span>(সংখ্যা):
                        </div>
                        <div className="pl-4 text-stone-200">
                          {'return f"{শিক্ষার্থী}-র সৃজনশীল অগ্রগতি: {সংখ্যা * 20}%"'}
                        </div>
                        <div className="pt-1 text-yellow-300">
                          print(মূল্যায়ন(প্রজেক্ট_সংখ্যা))
                        </div>
                        <div className="text-amber-300 pt-2 text-[11px] font-bold">
                          &gt;&gt; ফলাফল: রাফি-র সৃজনশীল অগ্রগতি: ১০০%
                        </div>
                      </div>
                    ) : (
                      <div className="space-y-1">
                        <div className="text-amber-400 font-semibold">// অ্যালগরিদম ও ব্লক কাঠামো</div>
                        <div className="p-1.5 bg-stone-800 rounded border border-stone-700 text-stone-100 my-1 text-xs">
                          [শুরু] → প্রাথমিক ইনপুট গ্রহণ
                        </div>
                        <div className="p-1.5 bg-indigo-950 rounded border border-indigo-700 text-indigo-200 my-1 text-xs">
                          [শর্ত] → যুক্তি যাচাই ও সিদ্ধান্ত গ্রহণ
                        </div>
                        <div className="p-1.5 bg-stone-800 rounded border border-stone-750 text-stone-200 my-1 text-xs">
                          [সম্পূর্ণ] → নির্ভুল আউটপুট প্রদর্শন
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Live Render Output Pane (Bottom Half) */}
                  <div className="bg-[#FAF8F5] dark:bg-zinc-950 p-4 space-y-3">
                    <div className="flex items-center justify-between text-xs font-mono text-slate-700 dark:text-zinc-300 bg-white dark:bg-zinc-900 px-3 py-1.5 rounded-md border border-stone-300 dark:border-zinc-800">
                      <span className="flex items-center gap-1.5 font-bold text-slate-900 dark:text-white">
                        <span className="w-2 h-2 rounded-full bg-orange-600" />
                        studio.tixedge.org/workspace
                      </span>
                      <span className="text-[11px] text-stone-500 font-sans font-bold">লাইভ আউটপুট প্রিভিউ</span>
                    </div>

                    <div className="p-4 rounded-xl border-2 border-stone-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 space-y-3">
                      <div className="flex items-start justify-between">
                        <div>
                          <h3 className="text-lg font-extrabold text-orange-600 dark:text-orange-500">
                            আমার প্রথম ওয়েব প্রজেক্ট
                          </h3>
                          <p className="text-xs text-slate-800 dark:text-zinc-200 mt-0.5 font-bold">
                            কম্পিউটারকে সুস্পষ্ট নির্দেশ দিয়ে নিজের ওয়েবসাইট বানাচ্ছি!
                          </p>
                        </div>
                        <Blocku size={44} mood="cheer" withHat={true} />
                      </div>

                      <div className="space-y-1.5 pt-2 border-t border-stone-200 dark:border-zinc-800 text-xs text-slate-950 dark:text-zinc-100 font-extrabold">
                        <div className="flex items-center gap-2">
                          <Check className="h-3.5 w-3.5 text-orange-600 shrink-0 stroke-[3]" />
                          <span>যুক্তিভিত্তিক কোডিং সক্রিয়</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Check className="h-3.5 w-3.5 text-orange-600 shrink-0 stroke-[3]" />
                          <span>স্ট্রাকচারাল আর্কিটেকচার ভেরিফায়েড</span>
                        </div>
                      </div>
                    </div>

                    <div className="pt-2 flex items-center justify-between text-xs">
                      <span className="text-slate-800 dark:text-zinc-200 font-bold">
                        নিজ হাতে কোড করতে প্রস্তুত?
                      </span>
                      <Button
                        asChild
                        size="sm"
                        className="h-8 px-4 text-xs font-extrabold bg-orange-600 hover:bg-orange-700 text-white shadow-2xs"
                      >
                        <Link href="/play">কোডিং শুরু করুন →</Link>
                      </Button>
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* ========================================================
            THE FULL SYSTEM: 3 Pedagogical Engineering Tracks
           ======================================================== */}
        <section id="tracks" className="py-14 md:py-20 border-b border-stone-300/80 dark:border-zinc-800 bg-white/70 dark:bg-zinc-900/30">
          <div className="max-w-6xl mx-auto px-4">
            <div className="text-center max-w-2xl mx-auto mb-10 space-y-2">
              <Badge variant="outline" className="text-xs border-stone-400 font-bold text-slate-800">
                শিক্ষণ কাঠামো
              </Badge>
              <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-slate-950 dark:text-white">
                কম্পিউটেশনাল চিন্তনের তিনটি মৌলিক স্তর
              </h2>
              <p className="text-xs sm:text-sm text-slate-700 dark:text-zinc-300 font-medium leading-relaxed">
                মুখস্থ নয়, বরং যুক্তিনির্ভর সমস্যা সমাধান ও সফটওয়্যার কাঠামোর সঠিক উপলব্ধি।
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-5">
              {/* Track 1 */}
              <div className="rounded-xl border-2 border-stone-300 dark:border-zinc-800 bg-white dark:bg-zinc-900 p-5 space-y-3.5 shadow-xs flex flex-col justify-between">
                <div className="space-y-2.5">
                  <div className="w-10 h-10 rounded-lg bg-orange-100 dark:bg-orange-950 text-orange-600 flex items-center justify-center font-bold">
                    <FileCode2 className="h-5 w-5" />
                  </div>
                  <div>
                    <span className="text-[11px] font-extrabold text-orange-600 uppercase tracking-wider block">
                      ট্র্যাক ১ · সম্পূর্ণ উন্মুক্ত
                    </span>
                    <h3 className="text-lg font-bold text-slate-950 dark:text-white mt-0.5">
                      ওয়েব আর্কিটেকচার
                    </h3>
                  </div>
                  <p className="text-xs text-slate-700 dark:text-zinc-300 leading-relaxed font-normal">
                    কম্পিউটার কীভাবে ব্রাউজারকে নির্দেশ দেয় এবং ট্যাগ ও ব্লকের সমন্বয়ে কীভাবে একটি পেজের সুসংহত অবয়ব গঠিত হয়।
                  </p>
                  <ul className="text-xs text-slate-800 dark:text-zinc-200 space-y-1.5 pt-1 font-semibold">
                    <li className="flex items-center gap-1.5">
                      <Check className="h-3.5 w-3.5 text-orange-600 stroke-[3]" />
                      HTML কাঠামোগত স্থাপত্য
                    </li>
                    <li className="flex items-center gap-1.5">
                      <Check className="h-3.5 w-3.5 text-orange-600 stroke-[3]" />
                      রেসপনসিভ ভিউপোর্ট (Desktop/Mobile)
                    </li>
                    <li className="flex items-center gap-1.5">
                      <Check className="h-3.5 w-3.5 text-orange-600 stroke-[3]" />
                      CSS ভিজ্যুয়াল নান্দনিকতা
                    </li>
                  </ul>
                </div>
                <Button asChild size="sm" className="w-full mt-4 bg-orange-600 hover:bg-orange-700 text-white font-bold text-xs h-9">
                  <Link href="/play">ট্র্যাকটি শুরু করুন →</Link>
                </Button>
              </div>

              {/* Track 2 */}
              <div className="rounded-xl border-2 border-stone-300 dark:border-zinc-800 bg-white dark:bg-zinc-900 p-5 space-y-3.5 shadow-xs flex flex-col justify-between">
                <div className="space-y-2.5">
                  <div className="w-10 h-10 rounded-lg bg-blue-100 dark:bg-blue-950 text-blue-600 flex items-center justify-center font-bold">
                    <Terminal className="h-5 w-5" />
                  </div>
                  <div>
                    <span className="text-[11px] font-extrabold text-blue-600 uppercase tracking-wider block">
                      ট্র্যাক ২ · প্রস্তুতিমূলক পর্ব
                    </span>
                    <h3 className="text-lg font-bold text-slate-950 dark:text-white mt-0.5">
                      পাইথন ও ডেটা লজিক
                    </h3>
                  </div>
                  <p className="text-xs text-slate-700 dark:text-zinc-300 leading-relaxed font-normal">
                    চলক, শর্ত ও লুপের মতো মৌলিক ধারণার মাধ্যমে অ্যালগরিদমিক চিন্তা ও ডেটা বিশ্লেষণের আনন্দময় সূচনা।
                  </p>
                  <ul className="text-xs text-slate-800 dark:text-zinc-200 space-y-1.5 pt-1 font-semibold">
                    <li className="flex items-center gap-1.5">
                      <Check className="h-3.5 w-3.5 text-blue-600 stroke-[3]" />
                      অ্যালগরিদমিক সিকোয়েন্সিং
                    </li>
                    <li className="flex items-center gap-1.5">
                      <Check className="h-3.5 w-3.5 text-blue-600 stroke-[3]" />
                      লজিক্যাল ব্রাঞ্চিং ও সিদ্ধান্ত গ্রহণ
                    </li>
                    <li className="flex items-center gap-1.5">
                      <Check className="h-3.5 w-3.5 text-blue-600 stroke-[3]" />
                      ফাংশন ও মডুলার কোডিং
                    </li>
                  </ul>
                </div>
                <Button variant="outline" disabled size="sm" className="w-full mt-4 text-xs font-bold h-9 opacity-80">
                  পরবর্তী পর্বে আসছে
                </Button>
              </div>

              {/* Track 3 */}
              <div className="rounded-xl border-2 border-stone-300 dark:border-zinc-800 bg-white dark:bg-zinc-900 p-5 space-y-3.5 shadow-xs flex flex-col justify-between">
                <div className="space-y-2.5">
                  <div className="w-10 h-10 rounded-lg bg-violet-100 dark:bg-violet-950 text-violet-700 dark:text-violet-300 flex items-center justify-center font-bold">
                    <Boxes className="h-5 w-5" />
                  </div>
                  <div>
                    <span className="text-[11px] font-extrabold text-violet-700 dark:text-violet-400 uppercase tracking-wider block">
                      ট্র্যাক ৩ · প্রস্তুতিমূলক পর্ব
                    </span>
                    <h3 className="text-lg font-extrabold text-slate-950 dark:text-white mt-0.5">
                      অ্যালগরিদম ও ব্লক ডিজাইন
                    </h3>
                  </div>
                  <p className="text-xs text-slate-800 dark:text-zinc-200 leading-relaxed font-normal">
                    কম্পিউটেশনাল চিন্তনের ৪টি মূল ভিত্তি: সমস্যা বিশ্লেষণ, প্যাটার্ন শনাক্তকরণ, বিমূর্তায়ন ও কার্যকর অ্যালগরিদম গঠন।
                  </p>
                  <ul className="text-xs text-slate-900 dark:text-zinc-100 space-y-1.5 pt-1 font-bold">
                    <li className="flex items-center gap-1.5">
                      <Check className="h-3.5 w-3.5 text-violet-700 stroke-[3]" />
                      ভিজ্যুয়াল ব্লক ড্র্যাগ-অ্যান্ড-ড্রপ
                    </li>
                    <li className="flex items-center gap-1.5">
                      <Check className="h-3.5 w-3.5 text-violet-700 stroke-[3]" />
                      প্যাটার্ন রিকগনিশন পাজল
                    </li>
                    <li className="flex items-center gap-1.5">
                      <Check className="h-3.5 w-3.5 text-violet-700 stroke-[3]" />
                      ইভেন্ট-ড্রিভেন কোডিং প্যাটার্ন
                    </li>
                  </ul>
                </div>
                <Button variant="outline" disabled size="sm" className="w-full mt-4 text-xs font-bold h-9 opacity-80">
                  পরবর্তী পর্বে আসছে
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* ========================================================
            GUARDIAN ADVICE & SCREEN-TIME TRANSFORMATION
           ======================================================== */}
        <section className="py-14 md:py-20 border-b border-stone-300/80 dark:border-zinc-800 bg-[#FAF8F5] dark:bg-zinc-950">
          <div className="max-w-6xl mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-10 items-center">
              <div className="space-y-4 text-left">
                <Badge className="bg-indigo-100 text-indigo-900 dark:bg-indigo-950 dark:text-indigo-300 border-none text-xs font-bold">
                  অভিভাবক মূল্যায়ন
                </Badge>
                
                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight text-slate-950 dark:text-white leading-tight">
                  স্ক্রিনের নিষ্ক্রিয় ব্যবহার নয়, বরং গঠনমূলক সৃজনশীলতা
                </h2>

                <p className="text-sm text-slate-800 dark:text-zinc-200 leading-relaxed font-normal">
                  ডিজিটাল ডিভাইসে অলস সময় অপচয়ের পরিবর্তে শিক্ষার্থীরা যখন নিজে কোড লিখে সফটওয়্যার গড়ে তোলে, তখন তাদের চিন্তা ও আত্মবিশ্বাস দুটোই বহুগুণ বৃদ্ধি পায়। TixEdge প্ল্যাটফর্ম সেই শিক্ষণ প্রক্রিয়াকে সহজ ও আনন্দময় করে তোলে।
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1 text-xs">
                  <div className="p-3.5 rounded-xl border border-rose-200 bg-rose-50/70 dark:bg-rose-950/20">
                    <span className="font-bold text-rose-950 dark:text-rose-200 block mb-1">
                      নিষ্ক্রিয় স্ক্রিন আসক্তি:
                    </span>
                    <span className="text-rose-900/80 dark:text-rose-300 text-[11px] leading-relaxed block">
                      অবিরাম ভিডিও স্ক্রলিং ও মনোযোগ হ্রাস পাওয়া, যেখানে নিজস্ব কোনো সৃষ্টিশীলতা থাকে না।
                    </span>
                  </div>

                  <div className="p-3.5 rounded-xl border border-orange-300 dark:border-orange-900/60 bg-orange-50/70 dark:bg-orange-950/20">
                    <span className="font-extrabold text-orange-950 dark:text-orange-200 block mb-1">
                      সক্রিয় সফটওয়্যার নির্মাণ:
                    </span>
                    <span className="text-orange-950/90 dark:text-orange-300 text-[11px] font-medium leading-relaxed block">
                      ধাপে ধাপে কোড রচনা, যৌক্তিক বিশ্লেষণ ও নিজস্ব প্রজেক্ট সফলভাবে প্রস্তুত করার আনন্দ।
                    </span>
                  </div>
                </div>

                <div className="flex flex-wrap gap-3 pt-2">
                  <Button
                    onClick={() => {
                      sound.playClick(600);
                      setParentModalOpen(true);
                    }}
                    className="gap-1.5 bg-indigo-700 hover:bg-indigo-800 text-white text-xs font-bold h-10 px-5 shadow-xs"
                  >
                    <ShieldCheck className="h-4 w-4" />
                    <span>অভিভাবক সহায়িকা</span>
                  </Button>

                  <Button
                    variant="outline"
                    onClick={() => {
                      sound.playClick(500);
                      setCertModalOpen(true);
                    }}
                    className="gap-1.5 border-stone-300 dark:border-zinc-700 text-xs font-bold h-10 px-5"
                  >
                    <Award className="h-4 w-4 text-amber-600" />
                    <span>কৃতিত্ব সনদ প্রিভিউ</span>
                  </Button>
                </div>
              </div>

              {/* Physical to Digital Bridge */}
              <div className="p-6 rounded-2xl border-2 border-stone-300 dark:border-zinc-800 bg-white dark:bg-zinc-900 shadow-sm space-y-4 text-left">
                <h3 className="text-base font-extrabold text-slate-950 dark:text-white flex items-center gap-2">
                  <Sparkles className="h-4 w-4 text-orange-500" />
                  হাতে-কলমে কাজ থেকে ডিজিটাল উদ্ভাবন
                </h3>

                <div className="space-y-3 text-xs">
                  <div className="p-3 rounded-xl bg-stone-50 dark:bg-zinc-800/60 border border-stone-200 dark:border-zinc-700 flex items-start gap-3">
                    <span className="w-6 h-6 rounded-md bg-orange-100 text-orange-700 font-bold flex items-center justify-center shrink-0 text-xs">
                      ১
                    </span>
                    <div>
                      <strong className="block text-slate-900 dark:text-zinc-100 font-bold mb-0.5">
                        কাগজে-কলমে পরিকল্পনা:
                      </strong>
                      <span className="text-slate-700 dark:text-zinc-300 leading-relaxed font-normal">
                        কম্পিউটারে কোডিং শুরুর আগেই ওয়ার্কশিটে আর্কিটেকচার ও যুক্তির প্রাথমিক খসড়া তৈরি।
                      </span>
                    </div>
                  </div>

                  <div className="p-3 rounded-xl bg-stone-50 dark:bg-zinc-800/60 border border-stone-200 dark:border-zinc-700 flex items-start gap-3">
                    <span className="w-6 h-6 rounded-md bg-indigo-100 text-indigo-700 font-bold flex items-center justify-center shrink-0 text-xs">
                      ২
                    </span>
                    <div>
                      <strong className="block text-slate-900 dark:text-zinc-100 font-bold mb-0.5">
                        সরাসরি ব্রাউজারে কোডিং:
                      </strong>
                      <span className="text-slate-700 dark:text-zinc-300 leading-relaxed font-normal">
                        কোনো বাড়তি সফটওয়্যার সেটআপ ছাড়াই যেকোনো ডিভাইসে তাৎক্ষণিক লাইভ কোডিং স্টুডিও।
                      </span>
                    </div>
                  </div>

                  <div className="p-3 rounded-xl bg-stone-50 dark:bg-zinc-800/60 border border-stone-200 dark:border-zinc-700 flex items-start gap-3">
                    <span className="w-6 h-6 rounded-md bg-orange-100 dark:bg-orange-950 text-orange-800 dark:text-orange-300 font-extrabold flex items-center justify-center shrink-0 text-xs">
                      ৩
                    </span>
                    <div>
                      <strong className="block text-slate-900 dark:text-zinc-100 font-bold mb-0.5">
                        প্রজেক্ট সংরক্ষণ ও মূল্যায়ন:
                      </strong>
                      <span className="text-slate-700 dark:text-zinc-300 leading-relaxed font-normal">
                        তৈরি করা প্রজেক্ট সবার সঙ্গে শেয়ার করা এবং অর্জনের প্রাতিষ্ঠানিক সনদপত্র সংগ্রহ।
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ========================================================
            CURRICULUM MISSION EXPLORER
           ======================================================== */}
        <section className="py-14 md:py-20">
          <div className="max-w-4xl mx-auto px-4">
            <div className="text-center mb-8 space-y-1.5">
              <Badge variant="outline" className="text-xs border-stone-400 font-bold text-slate-800">
                ধাপে ধাপে অগ্রসর শিক্ষাক্রম
              </Badge>
              <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-slate-950 dark:text-white">
                ফাউন্ডেশনাল কারিকুলাম ও মিশনসমূহ
              </h2>
              <p className="text-xs sm:text-sm text-slate-700 dark:text-zinc-300 font-medium">
                প্রতিটি অধ্যায় একটি বাস্তব সফটওয়্যার আর্কিটেকচার দক্ষতার সাথে সরাসরি যুক্ত
              </p>
            </div>

            <div className="space-y-2">
              {[
                { ch: 1, title: "কম্পিউটার কীভাবে কথা শোনে? (Introduction & Instructions)", tag: "ভিত্তি", slug: "computer-kivabe-kotha-shone" },
                { ch: 2, title: "যন্ত্রপাতির বাক্স ও প্রথম ইট (Editor & First Brick)", tag: "Hello World", slug: "toolbox-first-brick" },
                { ch: 3, title: "ব্লকের পরিচয়: ট্যাগ আর্কিটেকচার (Tags & Elements)", tag: "ট্যাগ সিস্টেম", slug: "block-porichoy-tags" },
                { ch: 4, title: "সিস্টেমের নকশা: HTML, HEAD, BODY (Document Blueprint)", tag: "আর্কিটেকচার", slug: "barir-noksha-html-head-body" },
                { ch: 5, title: "সাইনবোর্ড বসানো: Headings হায়ারার্কি (h1-h6)", tag: "হায়ারার্কি", slug: "sainboard-boshano-headings" },
                { ch: 6, title: "ফটো ফ্রেম: মিডিয়া ও ছবি যুক্ত করা (img & assets)", tag: "মিডিয়া", slug: "photo-frame-img" },
                { ch: 7, title: "জাদুর দরজা: হাইপারলিংক ও নেটওয়ার্ক (Links & Web)", tag: "হাইপারটেক্সট", slug: "jadu-dor-links" },
                { ch: 8, title: "দেয়ালের রঙ: CSS ভিজ্যুয়াল স্টাইলিং (Styling Engine)", tag: "CSS ইঞ্জিন", slug: "deyal-rang-css" },
                { ch: 9, title: "সম্পূর্ণ সফটওয়্যার প্রজেক্ট ও পোর্টফোলিও (Capstone Project)", tag: "ক্যাপস্টোন", slug: "amar-prokolpo-final" },
              ].map((item) => (
                <Link
                  key={item.ch}
                  href={`/play?mission=${item.slug}`}
                  onClick={() => sound.playClick(600)}
                  className="flex items-center gap-3.5 p-3.5 rounded-xl border border-stone-300 dark:border-zinc-800 bg-white dark:bg-zinc-900 hover:border-orange-500 dark:hover:border-orange-600 transition-all group shadow-2xs hover:shadow-xs"
                >
                  <div className="w-8 h-8 rounded-lg bg-orange-100 dark:bg-orange-950 text-orange-800 dark:text-orange-300 font-extrabold text-xs flex items-center justify-center shrink-0">
                    {item.ch}
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-xs sm:text-sm font-bold truncate text-slate-900 dark:text-zinc-100">
                      {item.title}
                    </p>
                  </div>
                  <Badge variant="outline" className="text-[10px] py-0 border-stone-300 dark:border-zinc-700 shrink-0 font-medium">
                    {item.tag}
                  </Badge>
                  <ArrowRight className="h-4 w-4 text-stone-400 group-hover:text-orange-600 transition-colors shrink-0" />
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* ========================================================
            INSTITUTIONAL FOOTER: AUTHOR ATTRIBUTION & CFSBR INITIATIVE
           ======================================================== */}
        <footer className="border-t border-stone-300/90 dark:border-zinc-800 bg-[#F4F1EA] dark:bg-zinc-950 text-slate-900 dark:text-zinc-100 py-12 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto space-y-10">
            {/* Top Grid */}
            <div className="grid grid-cols-1 md:grid-cols-12 gap-8 lg:gap-12 items-start">
              {/* Col 1: Platform Brand & Mission (5 cols) */}
              <div className="md:col-span-5 space-y-3.5 text-left">
                <div className="flex items-center gap-2.5">
                  <Blocku size={36} mood="cheer" withHat={true} />
                  <div>
                    <span className="font-extrabold text-slate-950 dark:text-white text-lg tracking-tight flex items-center gap-2">
                      Tix<span className="text-orange-600">Edge</span> Studio
                      <Badge variant="outline" className="text-[10px] py-0 px-2 border-stone-300 dark:border-zinc-700 bg-white/80 dark:bg-zinc-900 font-bold text-slate-800 dark:text-zinc-200">
                        CFSBR Lab
                      </Badge>
                    </span>
                    <span className="block text-[11px] font-semibold text-orange-700 dark:text-orange-400 mt-0.5">
                      কম্পিউটেশনাল আর্কিটেকচার অ্যান্ড সফটওয়্যার ল্যাব
                    </span>
                  </div>
                </div>
                <p className="text-xs sm:text-sm text-slate-700 dark:text-zinc-300 leading-relaxed font-normal max-w-md">
                  শিশুদের জন্য বাংলা ভাষায় প্রথম পূর্ণাঙ্গ সফটওয়্যার স্থাপত্য ও কম্পিউটেশনাল চিন্তন একাডেমি।
                  প্যাসিভ স্ক্রিন-টাইমের পরিবর্তে সক্রিয় অ্যালগরিদম নির্মাণ ও প্রোগ্রামিংয়ের মেধা বিকাশ।
                </p>
              </div>

              {/* Col 2: Prominent Attribution Box (4 cols) */}
              <div className="md:col-span-4 p-5 rounded-2xl border-2 border-stone-300 dark:border-zinc-800 bg-white dark:bg-zinc-900 shadow-xs space-y-3 text-left">
                <div className="flex items-center gap-2 border-b border-stone-200 dark:border-zinc-800 pb-2">
                  <span className="flex h-2 w-2 rounded-full bg-orange-600" />
                  <span className="text-[11px] font-extrabold uppercase tracking-wider text-slate-900 dark:text-zinc-100">
                    উদ্ভাবন ও প্রাতিষ্ঠানিক প্ল্যাটফর্ম
                  </span>
                </div>

                <div className="space-y-2.5">
                  <div>
                    <span className="text-[11px] font-semibold text-stone-500 dark:text-zinc-400 uppercase block">
                      আইডিয়া ও উদ্ভাবন (Concept &amp; Author):
                    </span>
                    <p className="text-sm font-extrabold text-slate-950 dark:text-white tracking-tight">
                      মোঃ গোলাম মুবাশশির রাফি
                    </p>
                    <p className="text-[11px] text-stone-500 dark:text-zinc-400 font-mono mt-0.5">
                      Md Golam Mubasshir Rafi
                    </p>
                  </div>

                  <div className="pt-2 border-t border-stone-100 dark:border-zinc-800">
                    <span className="text-[11px] font-semibold text-stone-500 dark:text-zinc-400 uppercase block">
                      প্রাতিষ্ঠানিক গবেষণা উদ্যোগ (Research Initiative):
                    </span>
                    <p className="text-xs font-bold text-orange-700 dark:text-orange-400 mt-0.5 leading-snug">
                      Centre for Fintech &amp; Strategic Business Research (CFSBR)
                    </p>
                    <p className="text-[11px] text-slate-600 dark:text-zinc-400 font-medium mt-0.5">
                      CFSBR Junior Computational Lab · তাত্ত্বিক ও ব্যবহারিক এডটেক গবেষণা
                    </p>
                  </div>
                </div>
              </div>

              {/* Col 3: Fast Navigation Links (3 cols) */}
              <div className="md:col-span-3 space-y-3 text-left md:text-right">
                <span className="text-[11px] font-extrabold uppercase tracking-wider text-slate-900 dark:text-zinc-100 block">
                  সরাসরি অ্যাক্সেস
                </span>
                <ul className="space-y-2 text-xs font-bold text-slate-800 dark:text-zinc-200">
                  <li>
                    <Link
                      href="/play"
                      onClick={() => sound.playClick(600)}
                      className="inline-flex items-center gap-1.5 hover:text-orange-600 transition-colors"
                    >
                      <Code2 className="h-3.5 w-3.5 text-orange-600" />
                      <span>স্টুডিও ওপেন করুন</span>
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="#tracks"
                      onClick={() => sound.playClick(500)}
                      className="hover:text-orange-600 transition-colors"
                    >
                      ৩টি কম্পিউটেশনাল ট্র্যাক
                    </Link>
                  </li>
                  <li>
                    <button
                      onClick={() => {
                        sound.playClick(600);
                        setParentModalOpen(true);
                      }}
                      className="hover:text-orange-600 transition-colors cursor-pointer text-left md:text-right"
                    >
                      অভিভাবক সহায়িকা
                    </button>
                  </li>
                  <li>
                    <button
                      onClick={() => {
                        sound.playClick(600);
                        setCertModalOpen(true);
                      }}
                      className="hover:text-orange-600 transition-colors cursor-pointer text-left md:text-right"
                    >
                      ভেরিফায়েড সার্টিফিকেট প্রিভিউ
                    </button>
                  </li>
                  <li>
                    <Link
                      href="/license"
                      className="hover:text-orange-600 transition-colors inline-flex items-center gap-1.5"
                    >
                      <Scale className="h-3.5 w-3.5 text-stone-500" />
                      <span>কপিরাইট ও আইনি নোটিশ</span>
                    </Link>
                  </li>
                </ul>
              </div>
            </div>

            {/* Bottom Credit Line */}
            <div className="border-t border-stone-300 dark:border-zinc-800 pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-slate-700 dark:text-zinc-400">
              <div className="flex flex-wrap items-center gap-2 font-medium">
                <span>© 2026 Md Golam Mubasshir Rafi. All rights reserved.</span>
                <span className="text-stone-400">·</span>
                <Link
                  href="/license"
                  className="font-bold text-orange-700 dark:text-orange-400 hover:underline"
                >
                  কপিরাইট ও আইনি ডিসক্লেইমার
                </Link>
              </div>
              <div className="flex flex-wrap items-center gap-2 font-semibold text-slate-800 dark:text-zinc-200">
                <span>Concept &amp; Author: <strong className="text-slate-950 dark:text-white font-extrabold">Md Golam Mubasshir Rafi</strong></span>
                <span className="text-stone-400">·</span>
                <span>Initiative: <strong className="text-slate-950 dark:text-white font-extrabold">CFSBR</strong></span>
              </div>
            </div>
          </div>
        </footer>
      </main>

      {/* Modals */}
      <ParentModal open={parentModalOpen} onClose={() => setParentModalOpen(false)} />
      <CertificateGenerator
        open={certModalOpen}
        onClose={() => setCertModalOpen(false)}
        projectTitle="ফাউন্ডেশনাল কম্পিউটেশনাল আর্কিটেকচার"
      />
    </div>
  );
}
