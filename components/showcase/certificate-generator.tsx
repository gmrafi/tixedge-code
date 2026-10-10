"use client";

import { useRef, useState, useEffect } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Download, Share2, Award, Check, Sparkles } from "lucide-react";
import { toast } from "sonner";
import { buildShareUrl } from "@/lib/compression";

interface CertificateGeneratorProps {
  open: boolean;
  onClose: () => void;
  studentName?: string;
  projectTitle?: string;
  code?: string;
}

export function CertificateGenerator({
  open,
  onClose,
  studentName = "রাফি",
  projectTitle = "আমার প্রথম ওয়েব-বাড়ি",
  code = "<h1>Hello!</h1>",
}: CertificateGeneratorProps) {
  const [name, setName] = useState(studentName);
  const [copiedShare, setCopiedShare] = useState(false);
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  // Render certificate onto canvas for high-res download
  useEffect(() => {
    if (!open) return;
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    // High DPI Canvas (1200 x 850)
    canvas.width = 1200;
    canvas.height = 850;

    // Background Pure Off-White Canvas
    ctx.fillStyle = "#FAF8F5";
    ctx.fillRect(0, 0, 1200, 850);

    // Outer Architectural Border
    ctx.strokeStyle = "#0F172A";
    ctx.lineWidth = 4;
    ctx.strokeRect(36, 36, 1128, 778);

    // Inner Accent Border
    ctx.strokeStyle = "#EA580C";
    ctx.lineWidth = 1.5;
    ctx.strokeRect(46, 46, 1108, 758);

    // Institutional Header
    ctx.textAlign = "center";
    ctx.fillStyle = "#0F172A";
    ctx.font = "bold 20px 'Inter', sans-serif";
    ctx.fillText("CENTRE FOR FINTECH & STRATEGIC BUSINESS RESEARCH (CFSBR)", 600, 115);

    ctx.fillStyle = "#EA580C";
    ctx.font = "600 13px 'JetBrains Mono', monospace";
    ctx.fillText("JUNIOR COMPUTATIONAL LAB · TIXEDGE CODE ACCREDITATION", 600, 142);

    // Certificate Title
    ctx.fillStyle = "#0F172A";
    ctx.font = "bold 38px 'Inter', sans-serif";
    ctx.fillText("CERTIFICATE OF COMPUTATIONAL ACHIEVEMENT", 600, 225);

    ctx.font = "500 15px 'Inter', sans-serif";
    ctx.fillStyle = "#64748B";
    ctx.fillText("Awarded for Foundation Software Architecture & Semantic Web Engineering", 600, 258);

    // Divider Line
    ctx.strokeStyle = "#E2E8F0";
    ctx.lineWidth = 1.5;
    ctx.beginPath();
    ctx.moveTo(400, 285);
    ctx.lineTo(800, 285);
    ctx.stroke();

    // Body Text
    ctx.fillStyle = "#475569";
    ctx.font = "16px 'Inter', sans-serif";
    ctx.fillText("This credential certifies that", 600, 335);

    // Recipient Name
    ctx.fillStyle = "#0F172A";
    ctx.font = "bold 44px 'Inter', sans-serif";
    ctx.fillText(name || "Student Architect", 600, 400);

    // Achievement Description
    ctx.fillStyle = "#334155";
    ctx.font = "16px 'Inter', sans-serif";
    ctx.fillText("has successfully authored and deployed the software blueprint:", 600, 465);

    ctx.font = "bold 22px 'JetBrains Mono', monospace";
    ctx.fillStyle = "#EA580C";
    ctx.fillText(`"${projectTitle}"`, 600, 505);

    ctx.font = "15px 'Inter', sans-serif";
    ctx.fillStyle = "#475569";
    ctx.fillText("demonstrating mastery of foundational computational thinking, syntax discipline,", 600, 545);
    ctx.fillText("and autonomous problem-solving within the TixEdge Code sandbox environment.", 600, 570);

    // Issue Date
    const today = new Date().toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
    ctx.font = "500 14px 'Inter', sans-serif";
    ctx.fillStyle = "#64748B";
    ctx.fillText(`Issued on: ${today}`, 280, 695);

    // Verification Seal circle
    ctx.save();
    ctx.beginPath();
    ctx.arc(600, 690, 48, 0, Math.PI * 2);
    ctx.fillStyle = "#FFF7ED";
    ctx.fill();
    ctx.strokeStyle = "#EA580C";
    ctx.lineWidth = 2.5;
    ctx.stroke();
    ctx.fillStyle = "#C2410C";
    ctx.font = "bold 11px 'JetBrains Mono', monospace";
    ctx.fillText("CFSBR LAB", 600, 686);
    ctx.font = "600 10px 'JetBrains Mono', monospace";
    ctx.fillText("VERIFIED", 600, 702);
    ctx.restore();

    // Signatures
    ctx.font = "bold 14px 'Inter', sans-serif";
    ctx.fillStyle = "#0F172A";
    ctx.fillText("Director of Computational EdTech", 920, 680);
    ctx.font = "12px 'Inter', sans-serif";
    ctx.fillStyle = "#64748B";
    ctx.fillText("CFSBR Research Institute", 920, 700);

    ctx.font = "bold 14px 'Inter', sans-serif";
    ctx.fillStyle = "#0F172A";
    ctx.fillText("Lead Systems Architect", 280, 640);
    ctx.font = "12px 'Inter', sans-serif";
    ctx.fillStyle = "#64748B";
    ctx.fillText("TixEdge Code Platform", 280, 660);
  }, [open, name, projectTitle]);

  const handleDownloadImage = () => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const link = document.createElement("a");
    link.download = `TixEdge_Certificate_${name || "student"}.png`;
    link.href = canvas.toDataURL("image/png");
    link.click();
    toast.success("সনদপত্র ডাউনলোড সম্পন্ন হয়েছে।");
  };

  const handleShareParent = () => {
    const liveUrl = buildShareUrl(code);
    const message = `Check out the software project "${projectTitle}" built on TixEdge Code by ${name}!\n\nLive Project Link:\n${liveUrl}\n\nPlatform: TixEdge Code · CFSBR Junior Computational Lab`;

    navigator.clipboard.writeText(message);
    setCopiedShare(true);
    toast.success("শেয়ার করার বার্তা ক্লিপবোর্ডে কপি হয়েছে!");
    setTimeout(() => setCopiedShare(false), 2500);
  };

  return (
    <Dialog open={open} onOpenChange={(o) => !o && onClose()}>
      <DialogContent className="max-w-3xl max-h-[92vh] overflow-y-auto p-6 bg-[#FCFBF7] dark:bg-zinc-950 border-stone-200 dark:border-zinc-800">
        <DialogHeader className="space-y-1">
          <div className="flex items-center gap-2">
            <Award className="h-5 w-5 text-amber-500" />
            <DialogTitle className="text-xl font-bold bengali-text">
              CFSBR জুনিয়র কম্পিউটেশনাল কৃতিত্ব সনদ
            </DialogTitle>
          </div>
          <DialogDescription className="text-xs bengali-text">
            অভিভাবকদের জন্য তৈরি শেয়ারযোগ্য সার্টিফিকেট ও সোশ্যাল মিডিয়া ব্যাজ
          </DialogDescription>
        </DialogHeader>

        <div className="space-y-4 mt-2">
          {/* Customizer Name Input */}
          <div className="flex flex-col sm:flex-row items-center gap-2 p-3 bg-white dark:bg-zinc-900 rounded-xl border border-stone-200/90 dark:border-zinc-800">
            <label className="text-xs font-semibold text-stone-700 dark:text-stone-300 shrink-0 bengali-text">
              সনদে প্রদর্শিত শিক্ষার্থীর নাম:
            </label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="শিক্ষার্থীর নাম লিখুন..."
              className="flex-1 w-full bg-stone-50 dark:bg-zinc-800 border border-stone-300 dark:border-zinc-700 rounded-md px-3 py-1.5 text-xs text-stone-900 dark:text-stone-100 font-medium focus:outline-none focus:ring-1 focus:ring-indigo-500"
            />
          </div>

          {/* Certificate Canvas Preview Container */}
          <div className="w-full overflow-x-auto rounded-xl border border-amber-200/90 dark:border-zinc-800 bg-white p-2 shadow-inner">
            <canvas
              ref={canvasRef}
              className="w-full h-auto rounded-lg max-w-[100%] block"
              style={{ aspectRatio: "1200 / 850" }}
            />
          </div>

          {/* Action Row */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
            <Button
              onClick={handleDownloadImage}
              className="gap-2 bg-amber-600 hover:bg-amber-700 text-white font-medium text-xs h-10 shadow-sm"
            >
              <Download className="h-4 w-4" />
              <span>সনদপত্র ছবি হিসেবে ডাউনলোড (PNG)</span>
            </Button>

            <Button
              variant="outline"
              onClick={handleShareParent}
              className="gap-2 border-stone-300 dark:border-zinc-700 text-xs h-10"
            >
              {copiedShare ? (
                <>
                  <Check className="h-4 w-4 text-emerald-600" />
                  <span className="text-emerald-600">কপি সম্পন্ন হয়েছে!</span>
                </>
              ) : (
                <>
                  <Share2 className="h-4 w-4" />
                  <span>অভিভাবক শেয়ার বার্তা কপি (WhatsApp)</span>
                </>
              )}
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
