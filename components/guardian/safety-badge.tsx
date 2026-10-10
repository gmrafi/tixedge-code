"use client";

import { ShieldCheck, Sparkles, Clock, Lock, CheckCircle2 } from "lucide-react";
import { Badge } from "@/components/ui/badge";

interface SafetyBadgeProps {
  variant?: "full" | "compact" | "metrics";
  activeMinutes?: number;
}

export function SafetyBadge({ variant = "compact", activeMinutes = 25 }: SafetyBadgeProps) {
  if (variant === "metrics") {
    return (
      <div className="bg-orange-50/60 dark:bg-orange-950/20 border border-orange-200/80 dark:border-orange-900/60 rounded-xl p-3.5 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs">
        <div className="flex items-center gap-2.5">
          <div className="w-8 h-8 rounded-lg bg-orange-600 text-white flex items-center justify-center shrink-0">
            <Sparkles className="h-4 w-4" />
          </div>
          <div>
            <p className="font-extrabold text-slate-950 dark:text-orange-200 bengali-text">
              স্ক্রিন-টাইম রূপান্তর মেট্রিক্স
            </p>
            <p className="text-[11px] text-slate-700 dark:text-zinc-300 bengali-text font-medium">
              প্যাসিভ ভিডিও দেখা বাদ দিয়ে শিশুর নিজের হাতে লজিক্যাল নির্মাণ
            </p>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <div className="bg-white dark:bg-zinc-900 px-3.5 py-1.5 rounded-lg border border-orange-300 dark:border-orange-800 text-center">
            <span className="block text-[10px] text-stone-500 font-bold uppercase">সক্রিয় নির্মাণ</span>
            <span className="font-extrabold text-orange-600 dark:text-orange-400 text-xs">
              {activeMinutes} মিনিট
            </span>
          </div>
          <div className="bg-white dark:bg-zinc-900 px-3.5 py-1.5 rounded-lg border border-stone-200 dark:border-zinc-800 text-center">
            <span className="block text-[10px] text-stone-500 font-bold uppercase">অলস স্ক্রল</span>
            <span className="font-extrabold text-slate-700 dark:text-zinc-300 text-xs">০ মিনিট</span>
          </div>
        </div>
      </div>
    );
  }

  if (variant === "compact") {
    return (
      <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-stone-100 dark:bg-zinc-900 border border-stone-300 dark:border-zinc-700 text-slate-900 dark:text-zinc-100 text-xs font-bold">
        <ShieldCheck className="h-3.5 w-3.5 text-orange-600 shrink-0 stroke-[2.5]" />
        <span className="bengali-text">১০০% ক্লায়েন্ট-সাইড মেমোরি · সম্পূর্ণ ব্যক্তিগত ও নিরাপদ</span>
      </div>
    );
  }

  return (
    <div className="rounded-2xl border border-stone-200/90 dark:border-zinc-800 bg-[#FDFBF7] dark:bg-zinc-900/40 p-4 space-y-3">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <ShieldCheck className="h-5 w-5 text-emerald-600" />
          <h4 className="font-bold text-sm text-stone-900 dark:text-zinc-100 bengali-text">
            ডিজিটাল নিরাপত্তা ও গোপনীয়তার অঙ্গীকার
          </h4>
        </div>
        <Badge variant="outline" className="text-[10px] bg-emerald-50 text-emerald-700 border-emerald-200">
          COPPA-স্ট্যান্ডার্ড
        </Badge>
      </div>

      <p className="text-xs text-stone-600 dark:text-zinc-400 bengali-text leading-relaxed">
        TixEdge সম্পূর্ণ ক্লায়েন্ট-সাইড মেমোরিতে রান করে। আপনার শিশুর তৈরি করা কোনো কোড সেন্ট্রাল সার্ভারে সংরক্ষিত
        হয় না এবং কোনো বিজ্ঞাপনদাতার সাথে শেয়ার করা হয় না।
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 pt-1 text-[11px]">
        <div className="flex items-center gap-1.5 text-stone-700 dark:text-zinc-300">
          <CheckCircle2 className="h-3.5 w-3.5 text-emerald-600 shrink-0" />
          <span className="bengali-text">শূন্য বিজ্ঞাপন ও পপ-আপ</span>
        </div>
        <div className="flex items-center gap-1.5 text-stone-700 dark:text-zinc-300">
          <CheckCircle2 className="h-3.5 w-3.5 text-emerald-600 shrink-0" />
          <span className="bengali-text">কোনো কুকি ট্র্যাকিং নেই</span>
        </div>
        <div className="flex items-center gap-1.5 text-stone-700 dark:text-zinc-300">
          <CheckCircle2 className="h-3.5 w-3.5 text-emerald-600 shrink-0" />
          <span className="bengali-text">আইসোলেটেড সিকিউর আইফ্রেম</span>
        </div>
      </div>
    </div>
  );
}
