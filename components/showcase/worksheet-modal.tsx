"use client";

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Printer, BookOpen, Sparkles, FileText } from "lucide-react";
import { Mission } from "@/lib/chapters-data";

interface WorksheetModalProps {
  open: boolean;
  onClose: () => void;
  mission: Mission;
  currentCode: string;
}

export function WorksheetModal({
  open,
  onClose,
  mission,
  currentCode,
}: WorksheetModalProps) {
  const handlePrint = () => {
    window.print();
  };

  return (
    <Dialog open={open} onOpenChange={(o) => !o && onClose()}>
      <DialogContent className="max-w-3xl max-h-[92vh] overflow-y-auto p-6 bg-white border-stone-200">
        <DialogHeader className="print:hidden space-y-1">
          <div className="flex items-center gap-2">
            <Printer className="h-5 w-5 text-indigo-600" />
            <DialogTitle className="text-lg font-bold bengali-text">
              প্রিন্ট ওয়ার্কশিট (Physical Paper Worksheet)
            </DialogTitle>
          </div>
          <DialogDescription className="text-xs bengali-text">
            স্ক্রিনের কাজ কাগজে নিয়ে গিয়ে পেনসিল দিয়ে চর্চা ও আঁকাআঁকি করার জন্য রেডি প্রিন্ট কপি
          </DialogDescription>
        </DialogHeader>

        {/* Action Header for Screen */}
        <div className="flex items-center justify-between p-3 bg-stone-100 rounded-lg print:hidden">
          <p className="text-xs text-stone-600 bengali-text font-medium">
            নিচের পাতাটি প্রিন্টারে সরাসরি সাদা কাগজে প্রিন্ট বা PDF হিসেবে সংরক্ষণ করুন।
          </p>
          <Button onClick={handlePrint} size="sm" className="gap-2 bg-orange-600 hover:bg-orange-700 text-white text-xs font-bold">
            <Printer className="h-4 w-4" />
            <span>প্রিন্ট করুন</span>
          </Button>
        </div>

        {/* The Printable Page Content */}
        <div id="printable-worksheet" className="p-6 border-2 border-stone-300 rounded-xl space-y-6 text-black bg-white">
          {/* Header */}
          <div className="border-b-2 border-stone-800 pb-4 flex items-center justify-between">
            <div>
              <span className="text-[11px] font-bold tracking-wider uppercase text-stone-600 block">
                Project: Website · ফিল্ড-ম্যানুয়াল ট্যাকটাইল ওয়ার্কশিট (অধ্যায় {mission.chapterNumber})
              </span>
              <h2 className="text-2xl font-bold font-sans mt-0.5">{mission.titleBangla}</h2>
              <p className="text-xs text-stone-500">{mission.titleEnglish}</p>
            </div>
            <div className="text-right">
              <div className="w-12 h-12 border-2 border-stone-800 rounded-lg flex items-center justify-center font-bold text-xs bg-amber-100">
                CFSBR
              </div>
              <span className="text-[10px] text-stone-500 block mt-1">তারিখ: _________</span>
            </div>
          </div>

          {/* Student Info Fields */}
          <div className="grid grid-cols-2 gap-4 text-xs">
            <div className="border-b border-stone-400 pb-1">
              <span className="font-semibold">শিক্ষার্থীর নাম: </span> ___________________________
            </div>
            <div className="border-b border-stone-400 pb-1">
              <span className="font-semibold">শ্রেণি/বয়স: </span> ___________________________
            </div>
          </div>

          {/* Activity Section 1: The Code Box */}
          <div className="space-y-2">
            <h3 className="text-sm font-bold flex items-center gap-1.5">
              <span>১. কোড নকশা (Code Blueprint):</span>
            </h3>
            <div className="p-3 bg-stone-50 border border-stone-300 rounded-lg font-mono text-xs leading-relaxed whitespace-pre-wrap">
              {currentCode}
            </div>
          </div>

          {/* Activity Section 2: Pencil Activity / Matching from Workbook */}
          <div className="space-y-2">
            <h3 className="text-sm font-bold">
              <span>২. পেনসিল হাতে নাও (Pencil Challenge):</span>
            </h3>
            <div className="p-3 border border-stone-200 rounded-lg space-y-2 text-xs">
              <p>ক) উপরের কোডে ব্যবহৃত মূল ট্যাগগুলোর নাম গোল দাগ দিয়ে চিহ্নিত করো:</p>
              <div className="flex gap-4 pt-1 font-mono">
                {mission.tags.map((t) => (
                  <span key={t} className="px-3 py-1 border border-stone-400 rounded-md">
                    &lt;{t}&gt;
                  </span>
                ))}
              </div>
              <p className="pt-2">খ) এই মিশনের সবচেয়ে গুরুত্বপূর্ণ শিক্ষা কোনটি?</p>
              <div className="h-10 border-b border-dashed border-stone-400"></div>
            </div>
          </div>

          {/* Activity Section 3: Coloring / Drawing Canvas */}
          <div className="space-y-2">
            <h3 className="text-sm font-bold">
              <span>৩. তোমার তৈরি সফটওয়্যার পেজটির লেআউট এখানে আঁকো (রং-পেনসিল দিয়ে ভরো):</span>
            </h3>
            <div className="w-full h-44 border-2 border-dashed border-stone-400 rounded-xl flex items-center justify-center text-stone-400 text-xs">
              [এখানে শিক্ষার্থী নিজের তৈরি ডিজিটাল প্রজেক্টের নকশা আঁকবে]
            </div>
          </div>

          {/* Footer Sign-off */}
          <div className="pt-4 border-t border-stone-300 flex items-center justify-between text-[11px] text-stone-600">
            <span>অভিভাবকের স্বাক্ষর: ____________________</span>
            <span>তত্ত্বাবধান: CFSBR Junior Computational Lab</span>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
