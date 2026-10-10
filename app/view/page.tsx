"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { Code2, Home, AlertTriangle } from "lucide-react";
import { extractCodeFromHash } from "@/lib/compression";
import { Button } from "@/components/ui/button";
import { Blocku } from "@/components/blocku/mascot";

export default function ViewPage() {
  const [code, setCode] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [loaded, setLoaded] = useState(false);
  const [showBadge, setShowBadge] = useState(true);

  useEffect(() => {
    const extracted = extractCodeFromHash();
    if (extracted) {
      setCode(extracted);
    } else {
      setError("কোনো কোড পাওয়া যায়নি। লিংকটি সঠিক কিনা দেখো।");
    }
    setLoaded(true);
  }, []);

  const buildSrcDoc = (htmlCode: string): string => {
    if (htmlCode.includes("<!DOCTYPE") || htmlCode.includes("<html")) {
      return htmlCode;
    }
    return `<!DOCTYPE html>
<html lang="bn">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <style>
    body {
      font-family: 'Hind Siliguri', 'Noto Sans Bengali', Arial, sans-serif;
      padding: 16px;
      line-height: 1.6;
      color: #1a1a2e;
    }
    img { max-width: 100%; }
    a { color: #6366f1; }
  </style>
  <link href="https://fonts.googleapis.com/css2?family=Hind+Siliguri:wght@400;600&display=swap" rel="stylesheet">
</head>
<body>
${htmlCode}
</body>
</html>`;
  };

  // Build remix URL (takes back to /play with same code)
  const remixUrl = typeof window !== "undefined"
    ? `/play?_v=shared#${window.location.hash.slice(1)}`
    : "/play";

  if (!loaded) {
    return (
      <div className="h-screen flex items-center justify-center bg-background">
        <div className="text-center space-y-2">
          <Code2 className="h-10 w-10 text-orange-600 animate-pulse mx-auto" />
          <p className="text-sm font-bold text-muted-foreground bengali-text animate-pulse">লোড হচ্ছে...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="h-screen flex items-center justify-center bg-background p-4">
        <div className="max-w-md text-center space-y-4">
          <AlertTriangle className="h-12 w-12 text-amber-500 mx-auto" />
          <h1 className="text-xl font-bold bengali-text">ওহ! কিছু একটা ঠিক নেই</h1>
          <p className="text-sm text-muted-foreground bengali-text">{error}</p>
          <div className="flex gap-3 justify-center">
            <Button asChild variant="outline">
              <Link href="/">
                <Home className="h-4 w-4 mr-2" />
                হোম পেজে ফিরে যাও
              </Link>
            </Button>
            <Button asChild>
              <Link href="/play">
                <Code2 className="h-4 w-4 mr-2" />
                নতুন প্রজেক্ট তৈরি করো
              </Link>
            </Button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="relative w-screen h-screen overflow-hidden">
      {/* Full-screen iframe */}
      {code && (
        <iframe
          title="TixEdge Published Website"
          srcDoc={buildSrcDoc(code)}
          sandbox="allow-scripts allow-same-origin"
          className="w-full h-full border-0"
        />
      )}

      {/* Floating Remix Badge */}
      <AnimatePresence>
        {showBadge && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            transition={{ delay: 1 }}
            className="fixed bottom-5 right-5 z-50"
          >
            <div className="flex items-center gap-2 bg-white/95 dark:bg-zinc-900/95 backdrop-blur border rounded-xl shadow-xl px-4 py-3">
              {/* TixEdge branding with Blocku */}
              <div className="shrink-0">
                <Blocku size={28} mood="idle" withHat={true} />
              </div>
              <div className="min-w-0">
                <p className="text-xs font-bold leading-none text-stone-900 dark:text-zinc-100">
                  TixEdge Studio
                </p>
                <p className="text-[10px] text-stone-500 dark:text-zinc-400 bengali-text leading-tight mt-0.5">
                  CFSBR Computational Lab · Flagship System
                </p>
              </div>

              <div className="flex gap-1.5 ml-1">
                <Button
                  asChild
                  size="sm"
                  className="h-7 text-xs gap-1 bg-indigo-600 hover:bg-indigo-700 text-white"
                >
                  <Link href={remixUrl}>
                    <Code2 className="h-3 w-3" />
                    <span className="bengali-text">Remix করো</span>
                  </Link>
                </Button>
                <Button
                  variant="ghost"
                  size="icon"
                  className="h-7 w-7 text-xs"
                  onClick={() => setShowBadge(false)}
                  title="Badge লুকাও"
                >
                  ×
                </Button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Show badge again if hidden */}
      {!showBadge && (
        <motion.button
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          onClick={() => setShowBadge(true)}
          className="fixed bottom-5 right-5 z-50 w-9 h-9 rounded-full tix-gradient-bg shadow-lg flex items-center justify-center text-white text-xs font-bold"
          title="TixEdge: Remix করো"
        >
          T
        </motion.button>
      )}
    </div>
  );
}
