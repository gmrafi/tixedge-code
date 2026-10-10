"use client";

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { SafetyBadge } from "@/components/guardian/safety-badge";
import { BookOpen, GraduationCap, HeartHandshake, Award, Shield, CheckCircle } from "lucide-react";
import Link from "next/link";

interface ParentModalProps {
  open: boolean;
  onClose: () => void;
  onOpenCertificate?: () => void;
}

export function ParentModal({ open, onClose, onOpenCertificate }: ParentModalProps) {
  return (
    <Dialog open={open} onOpenChange={(o) => !o && onClose()}>
      <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto p-6 bg-[#FCFBF7] dark:bg-zinc-950 border-stone-200 dark:border-zinc-800">
        <DialogHeader className="space-y-2">
          <div className="flex items-center gap-2">
            <Badge className="bg-indigo-100 text-indigo-800 dark:bg-indigo-900/60 dark:text-indigo-300 border-none font-medium text-xs">
              অভিভাবকদের জন্য নির্দেশিকা ও বিশ্লেষণ
            </Badge>
            <Badge variant="outline" className="text-[10px] border-amber-300 text-amber-700">
              CFSBR রিসার্চ ল্যাব
            </Badge>
          </div>
          <DialogTitle className="text-xl font-bold text-stone-900 dark:text-stone-100 bengali-text">
            স্ক্রিনের ভোক্তা নয়, আপনার সন্তান এখন ডিজিটাল স্রষ্টা
          </DialogTitle>
          <DialogDescription className="text-xs text-stone-600 dark:text-stone-400 bengali-text">
            TixEdge কম্পিউটেশনাল লার্নিং প্ল্যাটফর্মের অভিভাবক নির্দেশিকা ও অগ্রগতি বিশ্লেষণ
          </DialogDescription>
        </DialogHeader>

        <div className="space-y-5 mt-3">
          {/* Active Creation Metrics */}
          <SafetyBadge variant="metrics" activeMinutes={25} />

          {/* Academic Provenance Card */}
          <div className="p-4 rounded-xl border border-indigo-100 dark:border-indigo-900/40 bg-indigo-50/50 dark:bg-indigo-950/20 space-y-2">
            <div className="flex items-center gap-2 text-indigo-900 dark:text-indigo-200 font-semibold text-xs">
              <GraduationCap className="h-4 w-4 text-indigo-600" />
              <span>প্রাতিষ্ঠানিক গবেষণা ও ল্যাব ভিত্তি</span>
            </div>
            <p className="text-xs text-indigo-950/80 dark:text-indigo-300 bengali-text leading-relaxed">
              প্ল্যাটফর্মটি <strong>Centre for Fintech & Strategic Business Research (CFSBR)</strong>-এর
              জুনিয়র কম্পিউটেশনাল ল্যাব ইনিশিয়েটিভের অধীনে ৯-১৪ বছর বয়সী শিক্ষার্থীদের জন্য একটি পূর্ণাঙ্গ
              লার্নিং সিস্টেম হিসেবে তৈরি করা হয়েছে। এটি কোনো বিনোদনমূলক অনলাইন গেম নয়; এটি শিশুদের
              সফটওয়্যার আর্কিটেকচার ও কম্পিউটেশনাল থিঙ্কিংয়ের শক্ত ভিত্তি গড়ে তোলার জাতীয় উদ্যোগ।
            </p>
          </div>

          {/* Core Computational Skills */}
          <div className="space-y-2">
            <h4 className="text-xs font-bold text-stone-900 dark:text-stone-100 uppercase tracking-wider flex items-center gap-1.5">
              <BookOpen className="h-3.5 w-3.5 text-stone-500" />
              আজকে আপনার সন্তান কী শিখছে?
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
              <div className="p-3 rounded-lg border border-stone-200/80 dark:border-zinc-800 bg-white dark:bg-zinc-900">
                <span className="font-semibold text-stone-900 dark:text-stone-100 block mb-1">
                  ১. লজিক্যাল সিকোয়েন্সিং
                </span>
                <p className="text-stone-600 dark:text-stone-400 text-[11px] bengali-text leading-relaxed">
                  কম্পিউটার নিজে আন্দাজ করতে পারে না; তাকে ধাপে ধাপে নির্দেশ দিতে হয় (রুটিতে জ্যাম মাখানোর উপমা)।
                </p>
              </div>
              <div className="p-3 rounded-lg border border-stone-200/80 dark:border-zinc-800 bg-white dark:bg-zinc-900">
                <span className="font-semibold text-stone-900 dark:text-stone-100 block mb-1">
                  ২. লেগো-আর্কিটেকচার মেটাফর
                </span>
                <p className="text-stone-600 dark:text-stone-400 text-[11px] bengali-text leading-relaxed">
                  কঠিন প্রোগ্রামিং জাদুটোনা নয়, ইট ও দেয়াল গেঁথে বাড়ি বানানোর মতোই সহজ ব্লক ও ট্যাগ সমন্বয়।
                </p>
              </div>
              <div className="p-3 rounded-lg border border-stone-200/80 dark:border-zinc-800 bg-white dark:bg-zinc-900">
                <span className="font-semibold text-stone-900 dark:text-stone-100 block mb-1">
                  ৩. ভুল থেকে শেখা ("ভাঙা ব্লক")
                </span>
                <p className="text-stone-600 dark:text-stone-400 text-[11px] bengali-text leading-relaxed">
                  ট্যাগ বন্ধ না করলে বাড়ি ভেঙে যায়। ভুলের ভয় কাটিয়ে ধৈর্য ও ডিবাগিং মানসিকতা তৈরি হয়।
                </p>
              </div>
              <div className="p-3 rounded-lg border border-stone-200/80 dark:border-zinc-800 bg-white dark:bg-zinc-900">
                <span className="font-semibold text-stone-900 dark:text-stone-100 block mb-1">
                  ৪. ডিজিটাল আত্মবিশ্বাস
                </span>
                <p className="text-stone-600 dark:text-stone-400 text-[11px] bengali-text leading-relaxed">
                  অন্যের ভিডিও দেখার চেয়ে নিজে একটি ওয়েবসাইট তৈরি করে লিংক উপহার দেওয়ার আত্মতৃপ্তি।
                </p>
              </div>
            </div>
          </div>

          {/* Direct Advice for Parents */}
          <div className="p-4 rounded-xl border border-amber-200/80 bg-amber-50/60 dark:bg-amber-950/20 dark:border-amber-900/40 space-y-2">
            <div className="flex items-center gap-1.5 text-amber-900 dark:text-amber-300 font-semibold text-xs">
              <HeartHandshake className="h-4 w-4 text-amber-600" />
              <span>অভিভাবকদের প্রতি গবেষক দলের দিকনির্দেশনা:</span>
            </div>
            <ul className="text-xs text-amber-950/90 dark:text-amber-200/90 space-y-1.5 list-disc list-inside bengali-text leading-relaxed">
              <li><strong>পাশে বসুন, কিন্তু কিবোর্ডে হাত দেবেন না।</strong> ভুল দেখলে সাথে সাথে ঠিক করার তাড়া সামলান।</li>
              <li><strong>এক বসায় ২০ থেকে ৩০ মিনিটই যথেষ্ট।</strong> একটানা ঘণ্টার পর ঘণ্টা বসিয়ে রাখার প্রয়োজন নেই।</li>
              <li><strong>কাজ শেষে শুধু জিজ্ঞেস করুন:</strong> <em>"আজ কী বানালে?"</em> তারপর ওর কথা মনোযোগ দিয়ে শুনুন।</li>
            </ul>
          </div>

          {/* Digital Safety Guarantee */}
          <SafetyBadge variant="full" />

          {/* Action Row */}
          <div className="flex flex-col sm:flex-row gap-2 pt-2">
            {onOpenCertificate && (
              <Button
                onClick={() => {
                  onClose();
                  onOpenCertificate();
                }}
                className="flex-1 gap-2 bg-indigo-600 hover:bg-indigo-700 text-white font-medium text-xs h-10"
              >
                <Award className="h-4 w-4" />
                <span>সন্তানের অর্জনের সার্টিফিকেট দেখুন</span>
              </Button>
            )}
            <Button
              variant="outline"
              onClick={onClose}
              className="sm:w-auto h-10 text-xs text-stone-700 dark:text-stone-300"
            >
              বন্ধ করুন
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
