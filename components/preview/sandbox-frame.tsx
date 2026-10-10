"use client";

import { useEffect, useRef, useState, useCallback } from "react";
import { AlertCircle, RefreshCw } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface SandboxFrameProps {
  code: string;
  viewport?: number | "100%";
}

export function SandboxFrame({ code, viewport = "100%" }: SandboxFrameProps) {
  const iframeRef = useRef<HTMLIFrameElement>(null);
  const [error, setError] = useState<string | null>(null);
  const [isRendering, setIsRendering] = useState(false);
  const debounceTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  const buildSrcDoc = (htmlCode: string): string => {
    // If the code already has full HTML structure, use it as-is
    if (htmlCode.includes("<!DOCTYPE") || htmlCode.includes("<html")) {
      return htmlCode;
    }

    // Otherwise wrap it in a basic HTML template with nice defaults
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
      background: #ffffff;
    }
    img { max-width: 100%; height: auto; }
    a { color: #6366f1; }
  </style>
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link href="https://fonts.googleapis.com/css2?family=Hind+Siliguri:wght@400;600&display=swap" rel="stylesheet">
</head>
<body>
${htmlCode}
</body>
</html>`;
  };

  const render = useCallback((htmlCode: string) => {
    setIsRendering(true);
    setError(null);

    if (iframeRef.current) {
      iframeRef.current.srcdoc = buildSrcDoc(htmlCode);
    }

    setTimeout(() => setIsRendering(false), 400);
  }, []);

  // Debounced update: 300ms
  useEffect(() => {
    if (debounceTimer.current) clearTimeout(debounceTimer.current);
    debounceTimer.current = setTimeout(() => {
      render(code);
    }, 300);

    return () => {
      if (debounceTimer.current) clearTimeout(debounceTimer.current);
    };
  }, [code, render]);

  // Listen for error messages from iframe
  useEffect(() => {
    const handleMessage = (e: MessageEvent) => {
      if (e.data?.type === "tixedge-error") {
        setError(e.data.message);
      }
    };
    window.addEventListener("message", handleMessage);
    return () => window.removeEventListener("message", handleMessage);
  }, []);

  const frameWidth = viewport === "100%" ? "100%" : `${viewport}px`;

  return (
    <div className="relative w-full h-full flex flex-col items-center bg-muted/20 overflow-hidden">
      {/* Rendering indicator */}
      <AnimatePresence>
        {isRendering && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute top-2 right-2 z-10 flex items-center gap-1.5 bg-background/90 border rounded-full px-2 py-1 text-xs text-muted-foreground"
          >
            <RefreshCw className="h-3 w-3 animate-spin" />
            রেন্ডার হচ্ছে...
          </motion.div>
        )}
      </AnimatePresence>

      {/* Error overlay */}
      <AnimatePresence>
        {error && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            className="absolute bottom-3 left-3 right-3 z-10 bg-destructive/10 border border-destructive/30 rounded-lg p-3 flex items-start gap-2"
          >
            <AlertCircle className="h-4 w-4 text-destructive shrink-0 mt-0.5" />
            <div>
              <p className="text-xs font-semibold text-destructive">কোডে অসঙ্গতি দেখা গেছে</p>
              <p className="text-xs text-destructive/80 mt-0.5">{error}</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* The iframe */}
      <div
        className="w-full h-full flex items-start justify-center overflow-auto"
        style={{ padding: viewport !== "100%" ? "16px" : 0 }}
      >
        <div
          className="h-full bg-white shadow-md transition-all duration-300 overflow-hidden"
          style={{
            width: frameWidth,
            maxWidth: "100%",
            minHeight: "100%",
            borderRadius: viewport !== "100%" ? "8px" : 0,
          }}
        >
          <iframe
            ref={iframeRef}
            title="TixEdge Live Preview"
            sandbox="allow-scripts allow-same-origin"
            className="w-full h-full border-0"
            style={{ minHeight: "100%" }}
          />
        </div>
      </div>
    </div>
  );
}
