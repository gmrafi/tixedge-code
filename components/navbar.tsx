"use client";

import Link from "next/link";
import { useTheme } from "next-themes";
import { Moon, Sun, Play, RotateCcw, Share2, BookOpen, Volume2, VolumeX, Shield, Printer } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Select, SelectContent, SelectItem, SelectLabel, SelectGroup, SelectTrigger, SelectValue,
} from "@/components/ui/select";
import { MISSIONS, Mission } from "@/lib/chapters-data";
import { useRouter } from "next/navigation";
import { Blocku } from "@/components/blocku/mascot";
import { sound } from "@/lib/sound";
import { useState, useEffect } from "react";

interface NavbarProps {
  currentMission?: Mission;
  onRun?: () => void;
  onReset?: () => void;
  onPublish?: () => void;
  onOpenParent?: () => void;
  onOpenPrint?: () => void;
  showActions?: boolean;
}

export function Navbar({
  currentMission,
  onRun,
  onReset,
  onPublish,
  onOpenParent,
  onOpenPrint,
  showActions = false,
}: NavbarProps) {
  const { theme, setTheme } = useTheme();
  const router = useRouter();
  const [isMuted, setIsMuted] = useState(false);

  useEffect(() => {
    setIsMuted(sound.getMuted());
  }, []);

  const handleToggleSound = () => {
    const next = sound.toggleMute();
    setIsMuted(next);
    if (!next) sound.playClick(800);
  };

  const handleMissionChange = (slug: string) => {
    sound.playClick(650);
    router.push(`/play?mission=${slug}`);
  };

  // Group missions by chapter
  const chapterGroups = MISSIONS.reduce<Record<number, Mission[]>>((acc, m) => {
    if (!acc[m.chapterNumber]) acc[m.chapterNumber] = [];
    acc[m.chapterNumber].push(m);
    return acc;
  }, {});

  return (
    <header className="h-14 border-b border-stone-200/80 dark:border-zinc-800 bg-[#FCFAF6]/90 dark:bg-zinc-950/80 backdrop-blur supports-[backdrop-filter]:bg-[#FCFAF6]/60 flex items-center px-4 gap-2.5 z-40 sticky top-0">
      {/* Brand */}
      <Link
        href="/"
        onClick={() => sound.playClick(500)}
        className="flex items-center gap-2 shrink-0 group"
      >
        <div className="relative">
          <Blocku size={28} withHat={true} />
        </div>
        <div className="flex flex-col">
          <span className="font-extrabold text-base tracking-tight text-stone-900 dark:text-zinc-100 flex items-center gap-1">
            Tix<span className="text-orange-600">Edge</span>
            <span className="text-[10px] font-normal text-stone-400 dark:text-zinc-500 uppercase tracking-wider ml-0.5">
              Studio
            </span>
          </span>
        </div>
      </Link>

      <div className="hidden lg:flex items-center gap-1.5 pl-1 border-l border-stone-300 dark:border-zinc-800">
        <Badge
          variant="outline"
          className="text-[10px] py-0 px-2 border-stone-300 dark:border-zinc-700 text-stone-600 dark:text-zinc-400 bg-white/70 dark:bg-zinc-900/60 font-medium"
        >
          CFSBR Computational Lab · Flagship System
        </Badge>
      </div>

      {/* Chapter/Mission Selector */}
      <div className="flex-1 flex items-center gap-2 max-w-sm">
        <BookOpen className="h-4 w-4 text-stone-400 shrink-0 hidden sm:block" />
        <Select
          value={currentMission?.slug}
          onValueChange={handleMissionChange}
        >
          <SelectTrigger className="h-8 w-full border-stone-300/80 dark:border-zinc-800 bg-white/80 dark:bg-zinc-900 text-xs">
            <SelectValue placeholder="অধ্যায় বেছে নাও..." />
          </SelectTrigger>
          <SelectContent className="max-h-80 bg-white dark:bg-zinc-900">
            {Object.entries(chapterGroups).map(([chapter, missions]) => (
              <SelectGroup key={chapter}>
                <SelectLabel className="text-[11px] font-semibold text-stone-400 dark:text-zinc-500">
                  অধ্যায় {chapter}
                </SelectLabel>
                {missions.map((m) => (
                  <SelectItem key={m.slug} value={m.slug} className="pl-4 text-xs">
                    <span className="flex items-center gap-2">
                      <span className="text-[10px] text-stone-400">{m.chapterNumber}.</span>
                      <span className="bengali-text">{m.titleBangla}</span>
                    </span>
                  </SelectItem>
                ))}
              </SelectGroup>
            ))}
          </SelectContent>
        </Select>
      </div>

      {/* Action Buttons */}
      <div className="flex items-center gap-1.5 ml-auto">
        {/* Guardian / Parent Modal Button */}
        {onOpenParent && (
          <Button
            size="sm"
            variant="outline"
            onClick={() => {
              sound.playClick();
              onOpenParent();
            }}
            className="h-8 gap-1.5 text-xs border-indigo-200 dark:border-indigo-900 bg-indigo-50/60 dark:bg-indigo-950/30 text-indigo-700 dark:text-indigo-300 hover:bg-indigo-100"
          >
            <Shield className="h-3.5 w-3.5" />
            <span className="hidden md:inline bengali-text">অভিভাবকের কোণ</span>
          </Button>
        )}

        {/* Code to Print Button */}
        {onOpenPrint && (
          <Button
            size="sm"
            variant="outline"
            onClick={() => {
              sound.playClick();
              onOpenPrint();
            }}
            className="h-8 gap-1 text-xs border-stone-300 dark:border-zinc-700 text-stone-700 dark:text-zinc-300"
            title="ওয়ার্কশিট প্রিন্ট করো"
          >
            <Printer className="h-3.5 w-3.5" />
            <span className="hidden lg:inline bengali-text">ওয়ার্কশিট</span>
          </Button>
        )}

        {showActions && (
          <>
            <Button
              size="sm"
              onClick={() => {
                sound.playClick(700);
                onRun?.();
              }}
              className="h-8 gap-1.5 bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-medium"
              title="Run Code (Ctrl+Enter)"
            >
              <Play className="h-3.5 w-3.5 fill-current" />
              <span className="hidden sm:inline bengali-text">রান করো</span>
            </Button>

            <Button
              size="sm"
              variant="outline"
              onClick={() => {
                sound.playClick(400);
                onReset?.();
              }}
              className="h-8 gap-1.5 text-xs border-stone-300 dark:border-zinc-700"
              title="Reset Code"
            >
              <RotateCcw className="h-3.5 w-3.5" />
              <span className="hidden sm:inline bengali-text">রিসেট</span>
            </Button>

            <Button
              size="sm"
              onClick={() => {
                sound.playSuccess();
                onPublish?.();
              }}
              className="h-8 gap-1.5 bg-orange-600 hover:bg-orange-700 text-white text-xs font-medium"
            >
              <Share2 className="h-3.5 w-3.5" />
              <span className="bengali-text">প্রকাশ করো</span>
            </Button>
          </>
        )}

        {/* Sound Toggle */}
        <Button
          variant="ghost"
          size="icon"
          className="h-8 w-8 text-stone-500"
          onClick={handleToggleSound}
          title={isMuted ? "শব্দ চালু করুন" : "শব্দ বন্ধ করুন (Mute)"}
          aria-label="Toggle sound"
        >
          {isMuted ? (
            <VolumeX className="h-4 w-4 text-stone-400" />
          ) : (
            <Volume2 className="h-4 w-4 text-stone-700 dark:text-zinc-300" />
          )}
        </Button>

        {/* Theme toggle */}
        <Button
          variant="ghost"
          size="icon"
          className="h-8 w-8 shrink-0 text-stone-500"
          onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
          aria-label="Toggle theme"
        >
          <Sun className="h-4 w-4 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
          <Moon className="absolute h-4 w-4 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
        </Button>
      </div>
    </header>
  );
}
