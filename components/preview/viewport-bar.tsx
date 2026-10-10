"use client";

import { Monitor, Tablet, Smartphone, Globe } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { cn } from "@/lib/utils";

export type Viewport = "desktop" | "tablet" | "mobile";

interface ViewportBarProps {
  active: Viewport;
  onChange: (v: Viewport) => void;
}

const VIEWPORTS = [
  { id: "desktop" as Viewport, label: "ডেস্কটপ", icon: Monitor, width: "100%", px: null },
  { id: "tablet" as Viewport, label: "ট্যাবলেট", icon: Tablet, width: "768px", px: 768 },
  { id: "mobile" as Viewport, label: "মোবাইল", icon: Smartphone, width: "375px", px: 375 },
];

interface ViewportBarPropsWithUrl extends ViewportBarProps {
  title?: string;
}

export function ViewportBar({ active, onChange, title }: ViewportBarPropsWithUrl) {
  const currentViewport = VIEWPORTS.find((v) => v.id === active)!;

  return (
    <TooltipProvider>
      <div className="flex items-center gap-2 px-3 py-1.5 border-b bg-muted/30 shrink-0">
        {/* Mock URL bar */}
        <div className="flex-1 flex items-center gap-2 bg-background border rounded-md px-2.5 py-1 min-w-0">
          <Globe className="h-3 w-3 text-muted-foreground shrink-0" />
          <span className="text-xs text-muted-foreground font-mono truncate">
            {title ?? "localhost:3000/my-house"}
          </span>
        </div>

        {/* Viewport switcher */}
        <div className="flex items-center gap-0.5 bg-muted rounded-md p-0.5">
          {VIEWPORTS.map(({ id, label, icon: Icon }) => (
            <Tooltip key={id}>
              <TooltipTrigger asChild>
                <Button
                  variant="ghost"
                  size="icon"
                  className={cn(
                    "h-6 w-6 rounded",
                    active === id && "bg-background shadow-sm text-foreground"
                  )}
                  onClick={() => onChange(id)}
                >
                  <Icon className="h-3.5 w-3.5" />
                </Button>
              </TooltipTrigger>
              <TooltipContent side="bottom" className="text-xs">
                {label} {currentViewport.px ? `(${currentViewport.width})` : ""}
              </TooltipContent>
            </Tooltip>
          ))}
        </div>
      </div>
    </TooltipProvider>
  );
}

// Export viewport width helper
export function getViewportWidth(viewport: Viewport): number | "100%" {
  switch (viewport) {
    case "desktop": return "100%";
    case "tablet": return 768;
    case "mobile": return 375;
  }
}
