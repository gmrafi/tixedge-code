"use client";

import { Bug, AlertTriangle } from "lucide-react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Mission } from "@/lib/chapters-data";

interface BugTrapProps {
  mission: Mission;
}

export function BugTrap({ mission }: BugTrapProps) {
  if (mission.bugTraps.length === 0) return null;

  return (
    <div className="px-4 pb-4">
      <div className="border rounded-xl overflow-hidden">
        <div className="flex items-center gap-2 px-4 py-2.5 bg-rose-50 dark:bg-rose-950/30 border-b border-rose-100 dark:border-rose-900">
          <Bug className="h-4 w-4 text-rose-500" />
          <span className="text-xs font-semibold text-rose-700 dark:text-rose-400">ভাঙা ব্লক: সাবধান!</span>
        </div>

        <Accordion type="multiple" className="bg-background">
          {mission.bugTraps.map((trap, i) => (
            <AccordionItem key={i} value={`trap-${i}`} className="border-none">
              <AccordionTrigger className="px-4 py-3 text-xs font-medium hover:no-underline">
                <span className="text-left bengali-text flex items-center gap-1.5">
                  <AlertTriangle className="h-3.5 w-3.5 text-amber-500 shrink-0" />
                  {trap.title}
                </span>
              </AccordionTrigger>
              <AccordionContent className="px-4 pb-3">
                <div className="space-y-2">
                  <p className="text-xs text-muted-foreground bengali-text leading-relaxed">
                    {trap.description}
                  </p>
                  {trap.example && (
                    <pre className="text-xs bg-muted p-2.5 rounded-lg font-mono overflow-x-auto whitespace-pre-wrap">
                      {trap.example}
                    </pre>
                  )}
                </div>
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </div>
  );
}
