import Link from "next/link";
import { ArrowLeft, Shield, Scale, BookOpen } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "TixEdge Code: কপিরাইট ও সংবিধিবদ্ধ আইনি নোটিশ | CFSBR",
  description:
    "কপিরাইট আইন ২০২৩ (২০২৩ সনের ৩৪ নং আইন) ও আন্তর্জাতিক DMCA ফ্রেমওয়ার্কের অধীন সংবিধিবদ্ধ আইনি নোটিশ ও স্বত্ব সংরক্ষণ। উদ্ভাবক: মোঃ গোলাম মুবাশশির রাফি। প্ল্যাটফর্ম: CFSBR।",
};

export default function LicensePage() {
  return (
    <div className="min-h-screen bg-[#FCFAF6] dark:bg-zinc-950 text-slate-900 dark:text-zinc-100 flex flex-col">
      {/* Top Banner Navigation */}
      <header className="h-14 border-b border-stone-200/80 dark:border-zinc-800 bg-[#FCFAF6]/90 dark:bg-zinc-950/80 backdrop-blur sticky top-0 z-40 px-4 sm:px-8 flex items-center justify-between">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-xs font-bold text-slate-800 dark:text-zinc-200 hover:text-orange-600 transition-colors"
        >
          <ArrowLeft className="h-4 w-4" />
          <span>হোমপেজে ফিরে যান</span>
        </Link>
        <div className="flex items-center gap-2 text-xs font-bold text-slate-900 dark:text-white">
          <Shield className="h-4 w-4 text-orange-600" />
          <span>CFSBR লিগ্যাল ও আইনি ফ্রেমওয়ার্ক</span>
        </div>
      </header>

      {/* Main Container */}
      <main className="flex-1 max-w-4xl mx-auto w-full py-10 px-4 sm:px-6 space-y-8 text-left">
        {/* Title Header */}
        <div className="space-y-3 border-b border-stone-300 dark:border-zinc-800 pb-6">
          <div className="inline-flex items-center gap-2 rounded-full border border-stone-300 dark:border-zinc-700 bg-white dark:bg-zinc-900 px-3 py-1 text-xs font-bold">
            <Scale className="h-3.5 w-3.5 text-orange-600" />
            <span>সংবিধিবদ্ধ স্বত্বাধিকার ও আইনি ঘোষণা</span>
          </div>
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-950 dark:text-white tracking-tight">
            কপিরাইট ও প্রোপ্রাইটারি সোর্স-অ্যাভেইলেবল লাইসেন্স
          </h1>
          <p className="text-sm text-slate-700 dark:text-zinc-300 font-medium">
            গণপ্রজাতন্ত্রী বাংলাদেশের কপিরাইট আইন, ২০২৩ (২০২৩ সনের ৩৪ নং আইন), বার্ন কনভেনশন এবং
            ডিজিটাল মিলেনিয়াম কপিরাইট অ্যাক্ট (17 U.S.C. § 512)-এর অধীন প্রণীত।
          </p>
        </div>

        {/* Ownership Summary Card */}
        <div className="p-5 rounded-2xl border-2 border-stone-300 dark:border-zinc-800 bg-white dark:bg-zinc-900 shadow-xs space-y-4">
          <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-orange-700 dark:text-orange-400">
            <BookOpen className="h-4 w-4" />
            <span>মেধাস্বত্ব ও মূল উদ্ভাবক পরিচিতি</span>
          </div>
          <div className="grid sm:grid-cols-2 gap-4 text-xs">
            <div className="space-y-1">
              <span className="text-stone-500 font-bold block uppercase text-[10px]">
                আইডিয়া, উদ্ভাবন ও প্রণেতা (Concept &amp; Author):
              </span>
              <p className="text-base font-extrabold text-slate-950 dark:text-white">
                মোঃ গোলাম মুবাশশির রাফি
              </p>
              <p className="text-stone-500 font-mono text-[11px]">
                Md Golam Mubasshir Rafi (gmrafi)
              </p>
            </div>
            <div className="space-y-1">
              <span className="text-stone-500 font-bold block uppercase text-[10px]">
                প্রাতিষ্ঠানিক গবেষণা প্ল্যাটফর্ম (Research Initiative):
              </span>
              <p className="text-sm font-extrabold text-slate-950 dark:text-white">
                Centre for Fintech &amp; Strategic Business Research (CFSBR)
              </p>
              <p className="text-stone-500 text-[11px]">
                Junior Computational Architecture Lab
              </p>
            </div>
          </div>
        </div>

        {/* Statutory Legal Articles */}
        <div className="space-y-6 text-xs sm:text-sm text-slate-800 dark:text-zinc-200 leading-relaxed font-normal">
          {/* Section 1 */}
          <div className="p-5 rounded-xl border border-stone-200 dark:border-zinc-800 bg-white dark:bg-zinc-900/60 space-y-2">
            <h2 className="text-base font-extrabold text-slate-950 dark:text-white flex items-center gap-2">
              <span className="text-orange-600 font-mono">১.</span>
              <span>আইনগত শ্রেণিবিভাগ ও কর্মের প্রকৃতি</span>
            </h2>
            <p>
              এই প্ল্যাটফর্ম, এর অ্যালগরিদমিক আর্কিটেকচার, শিক্ষাক্রম, ডিজাইন অ্যাসেট এবং সম্পূর্ণ সোর্স কোড বাংলাদেশ সরকারের
              <strong> কপিরাইট আইন, ২০২৩ (২০২৩ সনের ৩৪ নং আইন)</strong>-এর অধীনে সুরক্ষিত:
            </p>
            <ul className="list-disc pl-5 space-y-1 text-slate-700 dark:text-zinc-300">
              <li>
                <strong>তথ্য প্রযুক্তি-ভিত্তিক ডিজিটাল কর্ম [ধারা ২(১০) ও ধারা ১৪(১)(খ)]:</strong> সমস্ত সোর্স কোড,
                টাইপস্ক্রিপ্ট/জাভাস্ক্রিপ্ট লজিক, নেক্সট.জেএস আর্কিটেকচার, ব্রাউজার মেমোরি স্যান্ডবক্স ও সাউন্ড সিন্থেসাইজার।
              </li>
              <li>
                <strong>সাহিত্যকর্ম [ধারা ২(৫০) ও ধারা ১৪(১)(ক)]:</strong> &quot;Project: Website&quot; ফিল্ড-ম্যানুয়াল সিরিজ, অধ্যায়ভিত্তিক শিক্ষাক্রম, পেডাগজিক্যাল অনুশীলন ও নির্দেশিকা।
              </li>
              <li>
                <strong>শিল্পকর্ম [ধারা ২(৪০) ও ধারা ১৪(১)(গ)]:</strong> &quot;Blocku&quot; ভেক্টর মাসকট, ভিজ্যুয়াল লে-আউট, কাস্টম টাইপোগ্রাফি রূপরেখা ও অফলাইন প্রিন্ট ওয়ার্কশিট।
              </li>
            </ul>
          </div>

          {/* Section 2 */}
          <div className="p-5 rounded-xl border border-stone-200 dark:border-zinc-800 bg-white dark:bg-zinc-900/60 space-y-2">
            <h2 className="text-base font-extrabold text-slate-950 dark:text-white flex items-center gap-2">
              <span className="text-orange-600 font-mono">২.</span>
              <span>স্বয়ংক্রিয় কপিরাইট ও রেজিস্ট্রেশন সংক্রান্ত অবস্থান</span>
            </h2>
            <p>
              কপিরাইট আইন ২০২৩-এর <strong>ধারা ১৫(১)</strong> এবং আন্তর্জাতিক <strong>বার্ন কনভেনশন (Berne Convention) অনুচ্ছেদ ৫(২)</strong> অনুযায়ী, কোনো সাহিত্য বা ডিজিটাল সফটওয়্যার কর্ম সৃষ্টির সাথে সাথেই কোনো প্রকার সরকারি আনুষ্ঠানিকতা বা নিবন্ধন ছাড়াই লেখকের একক কপিরাইট স্বয়ংক্রিয়ভাবে জন্ম নেয় এবং কার্যকর হয়।
            </p>
            <p className="text-slate-700 dark:text-zinc-300">
              আইনের ধারা ২৬ মোতাবেক, তথ্য প্রযুক্তি-ভিত্তিক ডিজিটাল কর্মের ক্ষেত্রে কর্মটি প্রথম প্রকাশের বছর থেকে পরবর্তী <strong>৬০ (ষাট) বছর</strong> পর্যন্ত এই কপিরাইট বলবৎ থাকবে। ধারা ৭৮ অনুযায়ী প্রণেতার অনপনেয় নৈতিক অধিকার (Moral Rights) চিরস্থায়ী।
            </p>
          </div>

          {/* Section 3 */}
          <div className="p-5 rounded-xl border border-stone-200 dark:border-zinc-800 bg-white dark:bg-zinc-900/60 space-y-2">
            <h2 className="text-base font-extrabold text-slate-950 dark:text-white flex items-center gap-2">
              <span className="text-orange-600 font-mono">৩.</span>
              <span>অনুমোদিত ও নিষিদ্ধ ব্যবহারের নীতিমালা</span>
            </h2>
            <div className="grid sm:grid-cols-2 gap-3 pt-1">
              <div className="p-3.5 rounded-lg border border-emerald-200 dark:border-emerald-950 bg-emerald-50/50 dark:bg-emerald-950/20 text-xs">
                <span className="font-bold text-emerald-900 dark:text-emerald-300 block mb-1">
                  অনুমোদিত সীমিত ব্যবহার:
                </span>
                <p className="text-emerald-950/80 dark:text-emerald-300/80">
                  অফিশিয়াল রিপোজিটরিতে কোড পর্যালোচনা, ব্যক্তিগত একাডেমিক শিক্ষা ও অবাণিজ্যিক গবেষণামূলক নিরীক্ষা।
                </p>
              </div>
              <div className="p-3.5 rounded-lg border border-rose-200 dark:border-rose-950 bg-rose-50/50 dark:bg-rose-950/20 text-xs">
                <span className="font-bold text-rose-900 dark:text-rose-300 block mb-1">
                  সম্পূর্ণ নিষিদ্ধ কার্যকলাপ:
                </span>
                <p className="text-rose-950/80 dark:text-rose-300/80">
                  অনুমতি ছাড়া বাণিজ্যিক ব্যবহার, অন্য কোনো ডোমেইনে বা ক্লাউড সার্ভারে পুনঃহোস্টিং, রি-ব্র্যান্ডিং কিংবা কারিকুলাম চুরি।
                </p>
              </div>
            </div>
          </div>

          {/* Section 4 */}
          <div className="p-5 rounded-xl border border-stone-200 dark:border-zinc-800 bg-white dark:bg-zinc-900/60 space-y-2">
            <h2 className="text-base font-extrabold text-slate-950 dark:text-white flex items-center gap-2">
              <span className="text-orange-600 font-mono">৪.</span>
              <span>ডিএমসিএ (DMCA) ও আন্তর্জাতিক আইন প্রয়োগ</span>
            </h2>
            <p>
              যেহেতু এই প্রজেক্টের সোর্স কোড ও হোস্টিং অবকাঠামো আন্তর্জাতিক ক্লাউড প্রোভাইডার (GitHub, Vercel)-এ সংরক্ষিত, তাই যেকোনো অননুমোদিত ক্লোন বা চুরির বিরুদ্ধে <strong>United States Digital Millennium Copyright Act (17 U.S.C. § 512)</strong> অনুযায়ী তাৎক্ষণিক নোটিশ প্রদান করা হবে:
            </p>
            <ul className="list-disc pl-5 space-y-1 text-slate-700 dark:text-zinc-300">
              <li>লঙ্ঘনকারী রিপোজিটরি ও হোস্টিং তাৎক্ষণিকভাবে বন্ধ (Takedown) করা হবে।</li>
              <li>গুগল ও সার্চ ইঞ্জিন ইনডেক্স থেকে নকল সাইটকে সম্পূর্ণ অপসারণ (De-index) করা হবে।</li>
              <li>কপিরাইট আইন ২০২৩-এর ধারা ৭৭ ও ৮০ মোতাবেক দেওয়ানি নিষেধাজ্ঞা এবং ধারা ৮৪-৮৮ অনুযায়ী ফৌজদারি পদক্ষেপ গ্রহণ করা হবে।</li>
            </ul>
          </div>
        </div>

        {/* Bottom Contact / Legal Notice */}
        <div className="p-4 rounded-xl border border-stone-300 dark:border-zinc-800 bg-[#F4F1EA] dark:bg-zinc-900 text-xs text-center text-slate-700 dark:text-zinc-300">
          <p className="font-bold text-slate-900 dark:text-white">
            আইনি যোগাযোগ ও প্রাতিষ্ঠানিক অনুমতি
          </p>
          <p className="mt-1">
            কোনো শিক্ষাপ্রতিষ্ঠান বা গবেষণার জন্য এই প্ল্যাটফর্ম ব্যবহারের লিখিত অনুমতির প্রয়োজন হলে
            সরাসরি যোগাযোগ করুন: <span className="font-mono text-orange-700 dark:text-orange-400 font-bold">rafi@gmrafi.com.bd</span>
          </p>
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-stone-200 dark:border-zinc-800 py-6 text-center text-xs text-stone-500">
        © 2026 Md Golam Mubasshir Rafi. All rights reserved. Centre for Fintech &amp; Strategic Business Research (CFSBR).
      </footer>
    </div>
  );
}
