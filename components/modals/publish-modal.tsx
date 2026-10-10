"use client";

import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Copy, Check, Download, X, Share2, QrCode, ExternalLink, CheckCircle2, Award } from "lucide-react";
import { QRCodeSVG } from "qrcode.react";
import confetti from "canvas-confetti";
import { buildShareUrl } from "@/lib/compression";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { cn } from "@/lib/utils";

interface PublishModalProps {
  open: boolean;
  onClose: () => void;
  code: string;
  missionTitle?: string;
  onOpenCertificate?: () => void;
}

export function PublishModal({
  open,
  onClose,
  code,
  missionTitle,
  onOpenCertificate,
}: PublishModalProps) {
  const [shareUrl, setShareUrl] = useState("");
  const [copied, setCopied] = useState(false);
  const confettiFired = useRef(false);

  // Build share URL and fire confetti when opened
  useEffect(() => {
    if (open) {
      const url = buildShareUrl(code);
      setShareUrl(url);

      if (!confettiFired.current) {
        confettiFired.current = true;
        fireConfetti();
      }
    } else {
      confettiFired.current = false;
    }
  }, [open, code]);

  const fireConfetti = () => {
    const count = 200;
    const defaults = { origin: { y: 0.7 } };

    function fire(particleRatio: number, opts: confetti.Options) {
      confetti({ ...defaults, ...opts, particleCount: Math.floor(count * particleRatio) });
    }

    fire(0.25, { spread: 26, startVelocity: 55, colors: ["#6366f1", "#8b5cf6"] });
    fire(0.2, { spread: 60, colors: ["#f97316", "#fbbf24"] });
    fire(0.35, { spread: 100, decay: 0.91, scalar: 0.8, colors: ["#10b981", "#34d399"] });
    fire(0.1, { spread: 120, startVelocity: 25, decay: 0.92, scalar: 1.2 });
    fire(0.1, { spread: 120, startVelocity: 45 });
  };

  const handleCopy = async () => {
    await navigator.clipboard.writeText(shareUrl);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleDownload = () => {
    const blob = new Blob([code], { type: "text/html;charset=utf-8" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "ghor.html";
    a.click();
    URL.revokeObjectURL(url);
  };

  const handleOpenPreview = () => {
    window.open(shareUrl, "_blank");
  };

  return (
    <Dialog open={open} onOpenChange={(o) => !o && onClose()}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2 text-xl font-extrabold text-slate-950 dark:text-white">
            <CheckCircle2 className="h-5 w-5 text-orange-600" />
            <span className="bengali-text">প্রজেক্ট প্রকাশ সম্পন্ন!</span>
          </DialogTitle>
          <DialogDescription className="bengali-text">
            {missionTitle
              ? `"${missionTitle}" সফলভাবে লাইভ ডেপ্লয় হয়েছে!`
              : "তোমার ডিজিটাল সফটওয়্যার প্রজেক্ট সফলভাবে প্রস্তুত!"}
          </DialogDescription>
        </DialogHeader>

        <div className="space-y-4 mt-2">
          {/* QR Code */}
          <div className="flex flex-col items-center p-4 bg-muted/30 rounded-xl border">
            <div className="bg-white p-3 rounded-lg shadow-sm mb-3">
              {shareUrl && (
                <QRCodeSVG
                  value={shareUrl}
                  size={160}
                  level="M"
                  fgColor="#1a1a2e"
                  bgColor="#ffffff"
                  imageSettings={{
                    src: "",
                    height: 0,
                    width: 0,
                    excavate: false,
                  }}
                />
              )}
            </div>
            <p className="text-xs text-center text-muted-foreground bengali-text font-medium">
              বাবা-মা এই QR কোড স্ক্যান করলে স্মার্টফোনে তোমার তৈরি লাইভ প্রজেক্ট দেখতে পাবেন।
            </p>
          </div>

          {/* Share URL */}
          <div>
            <p className="text-xs font-medium mb-2 flex items-center gap-1.5 text-muted-foreground">
              <Share2 className="h-3.5 w-3.5" />
              শেয়ার লিংক
            </p>
            <div className="flex gap-2">
              <div className="flex-1 bg-muted rounded-md px-3 py-2 min-w-0">
                <p className="text-xs font-mono truncate text-muted-foreground">
                  {shareUrl}
                </p>
              </div>
              <Button
                size="sm"
                variant="outline"
                className="h-9 shrink-0 gap-1.5"
                onClick={handleCopy}
              >
                {copied ? (
                  <>
                    <Check className="h-3.5 w-3.5 text-emerald-500" />
                    <span className="text-emerald-500 bengali-text">কপি!</span>
                  </>
                ) : (
                  <>
                    <Copy className="h-3.5 w-3.5" />
                    <span className="bengali-text">কপি</span>
                  </>
                )}
              </Button>
            </div>
          </div>

          {/* Action buttons */}
          <div className="flex flex-col gap-2">
            <div className="flex gap-2">
              <Button
                variant="outline"
                className="flex-1 gap-1.5 text-xs bengali-text h-9"
                onClick={handleOpenPreview}
              >
                <ExternalLink className="h-3.5 w-3.5" />
                খুলে দেখো
              </Button>
              <Button
                variant="outline"
                className="flex-1 gap-1.5 text-xs bengali-text h-9"
                onClick={handleDownload}
              >
                <Download className="h-3.5 w-3.5" />
                ডাউনলোড (.html)
              </Button>
            </div>

            {onOpenCertificate && (
              <Button
                onClick={() => {
                  onClose();
                  onOpenCertificate();
                }}
                className="w-full gap-2 text-xs font-semibold bg-orange-600 hover:bg-orange-700 text-white h-9 shadow-xs"
              >
                <Award className="h-4 w-4" />
                <span className="bengali-text">CFSBR কৃতিত্ব সনদপত্র তৈরি করো</span>
              </Button>
            )}
          </div>

          {/* Clean status message */}
          <div className="text-center py-2">
            <p className="text-xs text-muted-foreground bengali-text font-medium">
              সফলভাবে সফটওয়্যার আর্কিটেকচার সম্পন্ন হয়েছে।
            </p>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
