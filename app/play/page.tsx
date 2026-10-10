"use client";

import { useCallback, useEffect, useState, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import { Panel, PanelGroup, PanelResizeHandle } from "react-resizable-panels";
import { ChevronLeft, ChevronRight, GripVertical, Code, Terminal, Boxes, ShieldCheck, Printer, Layers, Code2 } from "lucide-react";
import { toast } from "sonner";

import { Navbar } from "@/components/navbar";
import { CodeEditor } from "@/components/editor/code-editor";
import { QuickTags } from "@/components/editor/quick-tags";
import { SandboxFrame } from "@/components/preview/sandbox-frame";
import { ViewportBar, getViewportWidth, type Viewport } from "@/components/preview/viewport-bar";
import { MissionCard } from "@/components/companion/mission-card";
import { BugTrap } from "@/components/companion/bug-trap";
import { PublishModal } from "@/components/modals/publish-modal";
import { ParentModal } from "@/components/guardian/parent-modal";
import { CertificateGenerator } from "@/components/showcase/certificate-generator";
import { WorksheetModal } from "@/components/showcase/worksheet-modal";
import { Button } from "@/components/ui/button";

import { getMissionBySlug, getFirstMissionForChapter, DEFAULT_MISSION, Mission } from "@/lib/chapters-data";
import { sound } from "@/lib/sound";

type StudioTab = "html" | "python" | "blocks";

function PlaygroundContent() {
  const searchParams = useSearchParams();

  // Determine initial mission from query params
  const getInitialMission = (): Mission => {
    const missionSlug = searchParams.get("mission");
    const chapterNum = searchParams.get("ch");

    if (missionSlug) {
      return getMissionBySlug(missionSlug) ?? DEFAULT_MISSION;
    }
    if (chapterNum) {
      return getFirstMissionForChapter(parseInt(chapterNum)) ?? DEFAULT_MISSION;
    }
    return DEFAULT_MISSION;
  };

  const [activeTab, setActiveTab] = useState<StudioTab>("html");
  const [mission, setMission] = useState<Mission>(getInitialMission);
  const [code, setCode] = useState(mission.initialCode);
  const [previewCode, setPreviewCode] = useState(mission.initialCode);
  const [viewport, setViewport] = useState<Viewport>("desktop");
  const [companionOpen, setCompanionOpen] = useState(true);

  // Modals
  const [publishOpen, setPublishOpen] = useState(false);
  const [parentOpen, setParentOpen] = useState(false);
  const [certificateOpen, setCertificateOpen] = useState(false);
  const [worksheetOpen, setWorksheetOpen] = useState(false);

  // Sync mission when URL params change
  useEffect(() => {
    const newMission = getInitialMission();
    setMission(newMission);
    setCode(newMission.initialCode);
    setPreviewCode(newMission.initialCode);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchParams]);

  // Run (update preview)
  const handleRun = useCallback(() => {
    sound.playSuccess();
    setPreviewCode(code);
    toast.success("প্রজেক্ট আপডেট সম্পন্ন হয়েছে!", {
      description: "তোমার পরিবর্তনগুলো দেখা যাচ্ছে।",
      duration: 1800,
    });
  }, [code]);

  // Reset code
  const handleReset = useCallback(() => {
    sound.playTrap();
    if (confirm("কোড রিসেট করবে? তোমার লেখা পরিবর্তনগুলো মুছে গিয়ে বইয়ের মূল নকশা ফিরে আসবে।")) {
      setCode(mission.initialCode);
      setPreviewCode(mission.initialCode);
      toast.info("বইয়ের মূল কোড রিসেট হয়েছে।");
    }
  }, [mission]);

  // Keyboard shortcut: Ctrl+Enter & F5
  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if ((e.ctrlKey || e.metaKey) && e.key === "Enter") {
        e.preventDefault();
        handleRun();
      }
      if (e.key === "F5") {
        e.preventDefault();
        handleRun();
      }
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [handleRun]);

  // Auto-debounce preview
  useEffect(() => {
    setPreviewCode(code);
  }, [code]);

  const handleTabChange = (tab: StudioTab) => {
    sound.playClick(600);
    if (tab !== "html") {
      toast.info(tab === "python" ? "পাইথন কম্পিউটেশন ট্র্যাক" : "ভিজ্যুয়াল ব্লক লজিক ট্র্যাক", {
        description: "পরবর্তী খণ্ডে এই মডিউলটি উন্মুক্ত হবে। এখন ওয়েব আর্কিটেকচার (HTML5/CSS) সক্রিয় আছে।",
      });
      return;
    }
    setActiveTab(tab);
  };

  return (
    <div className="flex flex-col h-screen overflow-hidden bg-background">
      <Navbar
        currentMission={mission}
        onRun={handleRun}
        onReset={handleReset}
        onPublish={() => setPublishOpen(true)}
        onOpenParent={() => setParentOpen(true)}
        onOpenPrint={() => setWorksheetOpen(true)}
        showActions
      />

      {/* Extensible Studio Tab Bar */}
      <div className="flex items-center justify-between px-4 py-1 border-b bg-stone-100/70 dark:bg-zinc-900/60 text-xs shrink-0">
        <div className="flex items-center gap-1.5">
          <button
            onClick={() => handleTabChange("html")}
            className={`flex items-center gap-1.5 px-3 py-1 rounded-md font-medium transition-all ${
              activeTab === "html"
                ? "bg-white dark:bg-zinc-800 text-stone-900 dark:text-zinc-100 shadow-sm border border-stone-200 dark:border-zinc-700 font-semibold"
                : "text-stone-500 hover:text-stone-800 dark:hover:text-zinc-200"
            }`}
          >
            <Code className="h-3.5 w-3.5 text-orange-600" />
            <span className="bengali-text">১. ওয়েব আর্কিটেকচার (HTML5/CSS)</span>
          </button>

          <button
            onClick={() => handleTabChange("python")}
            className="flex items-center gap-1.5 px-3 py-1 rounded-md text-stone-400 hover:text-stone-600 dark:hover:text-zinc-400 transition-all cursor-pointer opacity-70"
          >
            <Terminal className="h-3.5 w-3.5 text-blue-500" />
            <span className="bengali-text">২. পাইথন এক্সপ্রেস (শীঘ্রই)</span>
          </button>

          <button
            onClick={() => handleTabChange("blocks")}
            className="flex items-center gap-1.5 px-3 py-1 rounded-md text-stone-400 hover:text-stone-600 dark:hover:text-zinc-400 transition-all cursor-pointer opacity-70"
          >
            <Boxes className="h-3.5 w-3.5 text-emerald-500" />
            <span className="bengali-text">৩. লেগো লজিক (শীঘ্রই)</span>
          </button>
        </div>

        <div className="hidden md:flex items-center gap-2 text-[11px] text-stone-500">
          <span className="bengali-text">অধ্যায় {mission.chapterNumber}: {mission.titleBangla}</span>
        </div>
      </div>

      {/* Main Studio Area */}
      <div className="flex-1 overflow-hidden">
        <PanelGroup direction="horizontal" className="h-full">
          {/* Left Panel: Mission Companion */}
          {companionOpen && (
            <>
              <Panel defaultSize={22} minSize={18} maxSize={35} className="flex flex-col border-r border-stone-200 dark:border-zinc-800">
                <div className="flex items-center justify-between px-3 py-2 border-b bg-muted/30 shrink-0">
                  <span className="text-xs font-semibold text-stone-700 dark:text-stone-300 uppercase tracking-wide flex items-center gap-1.5">
                    <Layers className="h-3.5 w-3.5 text-orange-600" />
                    <span className="bengali-text">মিশন সাথী</span>
                  </span>
                  <Button
                    variant="ghost"
                    size="icon"
                    className="h-6 w-6 text-stone-400 hover:text-stone-700"
                    onClick={() => {
                      sound.playClick();
                      setCompanionOpen(false);
                    }}
                    title="প্যানেল সংকুচিত করো"
                  >
                    <ChevronLeft className="h-4 w-4" />
                  </Button>
                </div>
                <div className="flex-1 overflow-hidden">
                  <MissionCard mission={mission} />
                </div>
                <BugTrap mission={mission} />
              </Panel>

              <PanelResizeHandle className="w-1.5 bg-border hover:bg-orange-400 transition-colors cursor-col-resize flex items-center justify-center">
                <GripVertical className="h-4 w-4 text-muted-foreground/50" />
              </PanelResizeHandle>
            </>
          )}

          {/* Center Panel: Code Editor */}
          <Panel defaultSize={companionOpen ? 39 : 50} minSize={25} className="flex flex-col">
            {!companionOpen && (
              <Button
                variant="outline"
                size="sm"
                className="m-2 self-start h-7 gap-1.5 text-xs border-stone-300"
                onClick={() => {
                  sound.playClick();
                  setCompanionOpen(true);
                }}
              >
                <ChevronRight className="h-3.5 w-3.5" />
                <span className="bengali-text">মিশন সাথী</span>
              </Button>
            )}
            <QuickTags />
            <div className="flex-1 overflow-hidden">
              <CodeEditor value={code} onChange={setCode} onRun={handleRun} />
            </div>
          </Panel>

          <PanelResizeHandle className="w-1.5 bg-border hover:bg-orange-400 transition-colors cursor-col-resize flex items-center justify-center">
            <GripVertical className="h-4 w-4 text-muted-foreground/50" />
          </PanelResizeHandle>

          {/* Right Panel: Live Preview */}
          <Panel defaultSize={companionOpen ? 39 : 50} minSize={25} className="flex flex-col">
            <ViewportBar
              active={viewport}
              onChange={(v) => {
                sound.playClick(750);
                setViewport(v);
              }}
              title={`localhost:3000/${mission.slug}`}
            />
            <div className="flex-1 overflow-hidden">
              <SandboxFrame
                code={previewCode}
                viewport={getViewportWidth(viewport)}
              />
            </div>
          </Panel>
        </PanelGroup>
      </div>

      {/* Publish Celebration Modal */}
      <PublishModal
        open={publishOpen}
        onClose={() => setPublishOpen(false)}
        code={code}
        missionTitle={mission.titleBangla}
        onOpenCertificate={() => setCertificateOpen(true)}
      />

      {/* Guardian / Parent Insights Modal */}
      <ParentModal
        open={parentOpen}
        onClose={() => setParentOpen(false)}
        onOpenCertificate={() => setCertificateOpen(true)}
      />

      {/* Certificate Generator Modal */}
      <CertificateGenerator
        open={certificateOpen}
        onClose={() => setCertificateOpen(false)}
        projectTitle={mission.titleBangla}
        code={code}
      />

      {/* Printable Physical Worksheet Modal */}
      <WorksheetModal
        open={worksheetOpen}
        onClose={() => setWorksheetOpen(false)}
        mission={mission}
        currentCode={code}
      />
    </div>
  );
}

export default function PlayPage() {
  return (
    <Suspense
      fallback={
        <div className="h-screen flex items-center justify-center bg-[#FCFAF6]">
          <div className="text-center space-y-3">
            <Code2 className="h-10 w-10 text-orange-600 animate-pulse mx-auto" />
            <p className="text-sm font-bold text-stone-700 animate-pulse">
              স্টুডিও প্রস্তুত হচ্ছে...
            </p>
          </div>
        </div>
      }
    >
      <PlaygroundContent />
    </Suspense>
  );
}
