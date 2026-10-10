"use client";

import { motion } from "framer-motion";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";

interface QuickTag {
  label: string;
  insert: string;
  description: string;
  color: string;
}

const QUICK_TAGS: QuickTag[] = [
  { label: "<h1>", insert: "<h1>শিরোনাম</h1>", description: "বড় সাইনবোর্ড", color: "bg-indigo-100 text-indigo-700 hover:bg-indigo-200 dark:bg-indigo-900/40 dark:text-indigo-300" },
  { label: "<h2>", insert: "<h2>উপশিরোনাম</h2>", description: "মাঝারি সাইনবোর্ড", color: "bg-violet-100 text-violet-700 hover:bg-violet-200 dark:bg-violet-900/40 dark:text-violet-300" },
  { label: "<p>", insert: "<p>লেখা এখানে</p>", description: "প্যারাগ্রাফ", color: "bg-blue-100 text-blue-700 hover:bg-blue-200 dark:bg-blue-900/40 dark:text-blue-300" },
  { label: "<img>", insert: '<img src="https://picsum.photos/200/150" alt="ছবির বর্ণনা">', description: "ছবি", color: "bg-amber-100 text-amber-700 hover:bg-amber-200 dark:bg-amber-900/40 dark:text-amber-300" },
  { label: "<a>", insert: '<a href="https://google.com">লিংকের লেখা</a>', description: "জাদুর দরজা (লিংক)", color: "bg-emerald-100 text-emerald-700 hover:bg-emerald-200 dark:bg-emerald-900/40 dark:text-emerald-300" },
  { label: "<ul>", insert: "<ul>\n  <li>আইটেম ১</li>\n  <li>আইটেম ২</li>\n</ul>", description: "বুলেট তালিকা", color: "bg-orange-100 text-orange-700 hover:bg-orange-200 dark:bg-orange-900/40 dark:text-orange-300" },
  { label: "<b>", insert: "<b>গুরুত্বপূর্ণ লেখা</b>", description: "মোটা/বোল্ড লেখা", color: "bg-rose-100 text-rose-700 hover:bg-rose-200 dark:bg-rose-900/40 dark:text-rose-300" },
  { label: "<br>", insert: "<br>", description: "নতুন লাইন", color: "bg-slate-100 text-slate-700 hover:bg-slate-200 dark:bg-slate-900/40 dark:text-slate-300" },
];

import { sound } from "@/lib/sound";

interface QuickTagsProps {
  className?: string;
}

export function QuickTags({ className }: QuickTagsProps) {
  const handleInsert = (tag: QuickTag) => {
    sound.playClick(920);
    // @ts-expect-error - global from code-editor.tsx
    const insert = window.__tixEditorInsert;
    if (typeof insert === "function") {
      insert(tag.insert);
    }
  };

  return (
    <TooltipProvider>
      <div className={`flex items-center gap-1.5 px-3 py-1.5 border-b bg-muted/20 overflow-x-auto shrink-0 ${className ?? ""}`}>
        <span className="text-xs text-muted-foreground shrink-0 mr-1">ট্যাগ যুক্ত করুন:</span>
        {QUICK_TAGS.map((tag, i) => (
          <Tooltip key={tag.label}>
            <TooltipTrigger asChild>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => handleInsert(tag)}
                className={`shrink-0 px-2 py-0.5 rounded text-xs font-mono font-medium transition-colors cursor-pointer ${tag.color}`}
              >
                {tag.label}
              </motion.button>
            </TooltipTrigger>
            <TooltipContent side="bottom" className="text-xs">
              {tag.description}
            </TooltipContent>
          </Tooltip>
        ))}
      </div>
    </TooltipProvider>
  );
}
