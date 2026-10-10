"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import Editor, { OnMount } from "@monaco-editor/react";
import { useTheme } from "next-themes";
import { Minus, Plus, Copy, Check, WrapText } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { cn } from "@/lib/utils";

interface CodeEditorProps {
  value: string;
  onChange: (value: string) => void;
  onRun?: () => void;
}

export function CodeEditor({ value, onChange, onRun }: CodeEditorProps) {
  const { theme } = useTheme();
  const [fontSize, setFontSize] = useState(14);
  const [copied, setCopied] = useState(false);
  const editorRef = useRef<Parameters<OnMount>[0] | null>(null);

  const handleMount: OnMount = (editor, monaco) => {
    editorRef.current = editor;

    // Custom HTML theme
    monaco.editor.defineTheme("tixedge-dark", {
      base: "vs-dark",
      inherit: true,
      rules: [
        { token: "tag", foreground: "c792ea" },
        { token: "attribute.name", foreground: "addb67" },
        { token: "attribute.value", foreground: "ecc48d" },
        { token: "comment", foreground: "637777", fontStyle: "italic" },
        { token: "string", foreground: "ecc48d" },
      ],
      colors: {
        "editor.background": "#0f0f17",
        "editor.foreground": "#d4d4d4",
        "editorLineNumber.foreground": "#3d3d5c",
        "editorLineNumber.activeForeground": "#6366f1",
        "editor.selectionBackground": "#6366f133",
        "editor.lineHighlightBackground": "#ffffff08",
        "editorCursor.foreground": "#6366f1",
      },
    });

    monaco.editor.defineTheme("tixedge-light", {
      base: "vs",
      inherit: true,
      rules: [],
      colors: {
        "editor.background": "#fafafa",
        "editorLineNumber.foreground": "#c0c0c0",
        "editorLineNumber.activeForeground": "#6366f1",
        "editor.selectionBackground": "#6366f133",
        "editorCursor.foreground": "#6366f1",
      },
    });

    monaco.editor.setTheme(theme === "dark" ? "tixedge-dark" : "tixedge-light");

    // Ctrl+Enter to run
    editor.addCommand(monaco.KeyMod.CtrlCmd | monaco.KeyCode.Enter, () => {
      onRun?.();
    });

    // F5 to run
    editor.addCommand(monaco.KeyCode.F5, () => {
      onRun?.();
    });
  };

  // Update theme when it changes - Monaco handles this via its own API
  useEffect(() => {
    // Theme changes are handled by Monaco's internal theming system
    // The editor will pick up changes when re-rendered
  }, [theme]);

  const handleCopy = async () => {
    await navigator.clipboard.writeText(value);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const insertAtCursor = useCallback((text: string) => {
    const editor = editorRef.current;
    if (!editor) return;
    const selection = editor.getSelection();
    if (!selection) return;
    editor.executeEdits("quick-tag", [{ range: selection, text }]);
    editor.focus();
  }, []);

  // Expose insertAtCursor via ref pattern
  useEffect(() => {
    // @ts-expect-error - global ref for quick tags
    window.__tixEditorInsert = insertAtCursor;
  }, [insertAtCursor]);

  return (
    <TooltipProvider>
      <div className="flex flex-col h-full border-r">
        {/* Toolbar */}
        <div className="flex items-center justify-between px-3 py-1.5 border-b bg-muted/30 shrink-0">
          <span className="text-xs font-medium text-muted-foreground font-mono">
            index.html
          </span>
          <div className="flex items-center gap-1">
            <Tooltip>
              <TooltipTrigger asChild>
                <Button variant="ghost" size="icon" className="h-6 w-6" onClick={handleCopy}>
                  {copied ? (
                    <Check className="h-3 w-3 text-emerald-500" />
                  ) : (
                    <Copy className="h-3 w-3" />
                  )}
                </Button>
              </TooltipTrigger>
              <TooltipContent>কোড কপি করো</TooltipContent>
            </Tooltip>

            <Tooltip>
              <TooltipTrigger asChild>
                <Button
                  variant="ghost"
                  size="icon"
                  className="h-6 w-6"
                  onClick={() => setFontSize((f) => Math.max(10, f - 2))}
                >
                  <Minus className="h-3 w-3" />
                </Button>
              </TooltipTrigger>
              <TooltipContent>ছোট ফন্ট</TooltipContent>
            </Tooltip>

            <span className="text-xs text-muted-foreground w-6 text-center">{fontSize}</span>

            <Tooltip>
              <TooltipTrigger asChild>
                <Button
                  variant="ghost"
                  size="icon"
                  className="h-6 w-6"
                  onClick={() => setFontSize((f) => Math.min(24, f + 2))}
                >
                  <Plus className="h-3 w-3" />
                </Button>
              </TooltipTrigger>
              <TooltipContent>বড় ফন্ট</TooltipContent>
            </Tooltip>
          </div>
        </div>

        {/* Monaco Editor */}
        <div className="flex-1 overflow-hidden">
          <Editor
            height="100%"
            language="html"
            value={value}
            onChange={(val) => onChange(val ?? "")}
            onMount={handleMount}
            options={{
              fontSize,
              fontFamily: "JetBrains Mono, Fira Code, monospace",
              fontLigatures: true,
              lineNumbers: "on",
              minimap: { enabled: false },
              wordWrap: "on",
              scrollBeyondLastLine: false,
              padding: { top: 12, bottom: 12 },
              tabSize: 2,
              automaticLayout: true,
              bracketPairColorization: { enabled: true },
              suggest: { showWords: false },
              quickSuggestions: {
                other: true,
                comments: false,
                strings: true,
              },
              renderLineHighlight: "gutter",
              smoothScrolling: true,
              cursorBlinking: "smooth",
              formatOnPaste: true,
              autoClosingBrackets: "always",
              autoClosingQuotes: "always",
            }}
          />
        </div>
      </div>
    </TooltipProvider>
  );
}
