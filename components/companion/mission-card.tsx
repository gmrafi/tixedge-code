"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { CheckCircle2, Circle, Lightbulb, BookOpen, Award } from "lucide-react";
import { Mission } from "@/lib/chapters-data";
import { cn } from "@/lib/utils";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Badge } from "@/components/ui/badge";
import { Blocku, BlockuMood } from "@/components/blocku/mascot";
import { sound } from "@/lib/sound";
import { checkPop, tactileButton } from "@/lib/animations";

interface MissionCardProps {
  mission: Mission;
}

export function MissionCard({ mission }: MissionCardProps) {
  const [completedSteps, setCompletedSteps] = useState<Set<string>>(new Set());
  const [showHint, setShowHint] = useState<string | null>(null);
  const [mascotMood, setMascotMood] = useState<BlockuMood>("idle");

  const toggleStep = (id: string) => {
    setCompletedSteps((prev) => {
      const next = new Set(prev);
      const isChecking = !next.has(id);
      if (next.has(id)) {
        next.delete(id);
        sound.playClick(450);
      } else {
        next.add(id);
        sound.playClick(850);
        setMascotMood("cheer");
        setTimeout(() => setMascotMood("idle"), 1200);
      }
      return next;
    });
  };

  const progress = mission.steps.length > 0
    ? Math.round((completedSteps.size / mission.steps.length) * 100)
    : 0;

  const allDone = completedSteps.size === mission.steps.length && mission.steps.length > 0;

  return (
    <ScrollArea className="h-full">
      <div className="p-4 space-y-4">
        {/* Handcrafted Reactive Blocku Mascot */}
        <div className="flex items-start gap-3 p-3.5 bg-[#FCFAF6] dark:bg-zinc-900/60 rounded-2xl border border-stone-200/90 dark:border-zinc-800 shadow-sm">
          <div className="shrink-0 mt-0.5">
            <Blocku mood={allDone ? "cheer" : mascotMood} size={50} withHat={true} />
          </div>
          <div className="min-w-0">
            <div className="flex items-center gap-1.5 mb-1">
              <span className="text-xs font-bold text-orange-700 dark:text-orange-400">
                প্রধান আর্কিটেক্ট ব্লকু
              </span>
              <span className="text-[10px] bg-amber-100 dark:bg-amber-950/40 text-amber-800 dark:text-amber-300 px-1.5 py-0.2 rounded font-medium">
                গাইড
              </span>
            </div>
            <p className="text-xs text-stone-700 dark:text-zinc-300 bengali-text leading-relaxed">
              "{mission.description}"
            </p>
          </div>
        </div>

        {/* Mission Header */}
        <div>
          <div className="flex items-center gap-2 mb-1">
            <BookOpen className="h-4 w-4 text-muted-foreground" />
            <Badge variant="outline" className="text-xs py-0">
              অধ্যায় {mission.chapterNumber}
            </Badge>
          </div>
          <h2 className="font-bold text-base bengali-text">{mission.titleBangla}</h2>
          <p className="text-xs text-muted-foreground mt-0.5">{mission.titleEnglish}</p>
        </div>

        {/* Progress bar */}
        <div>
          <div className="flex items-center justify-between mb-1.5">
            <span className="text-xs font-medium">আজকের কাজ</span>
            <span className="text-xs text-muted-foreground">{completedSteps.size}/{mission.steps.length}</span>
          </div>
          <div className="h-1.5 bg-muted rounded-full overflow-hidden">
            <motion.div
              className="h-full bg-gradient-to-r from-indigo-500 to-violet-500 rounded-full"
              initial={{ width: 0 }}
              animate={{ width: `${progress}%` }}
              transition={{ duration: 0.4, ease: "easeOut" }}
            />
          </div>
        </div>

        {/* Steps Checklist */}
        <div className="space-y-2">
          {mission.steps.map((step, i) => {
            const done = completedSteps.has(step.id);
            return (
              <div key={step.id}>
                <motion.button
                  layout
                  onClick={() => toggleStep(step.id)}
                  className={cn(
                    "w-full flex items-start gap-2.5 p-2.5 rounded-lg border text-left transition-all",
                    done
                      ? "bg-emerald-50 border-emerald-200 dark:bg-emerald-950/30 dark:border-emerald-900"
                      : "bg-background hover:bg-muted/50 border-border"
                  )}
                >
                  <div className="shrink-0 mt-0.5">
                    {done ? (
                      <CheckCircle2 className="h-4 w-4 text-emerald-500" />
                    ) : (
                      <Circle className="h-4 w-4 text-muted-foreground" />
                    )}
                  </div>
                  <span className={cn(
                    "text-xs bengali-text flex-1",
                    done && "line-through text-muted-foreground"
                  )}>
                    {step.text}
                  </span>
                  {step.hint && (
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        setShowHint(showHint === step.id ? null : step.id);
                      }}
                      className="shrink-0 text-amber-500 hover:text-amber-600"
                    >
                      <Lightbulb className="h-3.5 w-3.5" />
                    </button>
                  )}
                </motion.button>

                {/* Hint */}
                <AnimatePresence>
                  {showHint === step.id && step.hint && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      className="overflow-hidden"
                    >
                      <div className="mt-1 ml-7 p-2.5 bg-amber-50 dark:bg-amber-950/30 border border-amber-200 dark:border-amber-900 rounded-lg">
                        <p className="text-xs text-amber-700 dark:text-amber-400 bengali-text flex items-start gap-1.5">
                          <Lightbulb className="h-3.5 w-3.5 text-amber-600 shrink-0 mt-0.5" />
                          <span>{step.hint}</span>
                        </p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>

        {/* Tags introduced */}
        {mission.tags.length > 0 && (
          <div>
            <p className="text-xs font-medium text-muted-foreground mb-2">এই মিশনের ট্যাগ</p>
            <div className="flex flex-wrap gap-1.5">
              {mission.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-2 py-0.5 text-xs font-mono bg-muted rounded border text-muted-foreground"
                >
                  {tag.startsWith("<") ? tag : `<${tag}>`}
                </span>
              ))}
            </div>
          </div>
        )}

        {/* All done celebration */}
        <AnimatePresence>
          {allDone && (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="p-4 bg-orange-50/60 dark:bg-zinc-900 border border-orange-200 dark:border-zinc-800 rounded-xl text-center"
            >
              <Award className="h-8 w-8 text-orange-600 mx-auto mb-2" />
              <p className="text-sm font-bold text-slate-900 dark:text-zinc-100 bengali-text">
                সব কাজ শেষ! অসাধারণ!
              </p>
              <p className="text-xs text-slate-600 dark:text-zinc-400 mt-1 bengali-text font-medium">
                এখন Publish করে বাবা-মাকে দেখাও!
              </p>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </ScrollArea>
  );
}
