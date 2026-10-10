import LZString from "lz-string";

/**
 * Compress HTML code to a URL-safe base64 string.
 * Used for sharing: https://tixedge.cfsbr.org/view#<compressed>
 */
export function compressCode(code: string): string {
  return LZString.compressToEncodedURIComponent(code);
}

/**
 * Decompress a URL-safe base64 string back to HTML code.
 */
export function decompressCode(compressed: string): string | null {
  return LZString.decompressFromEncodedURIComponent(compressed);
}

/**
 * Build a full shareable URL from a code string.
 */
export function buildShareUrl(code: string, baseUrl?: string): string {
  const compressed = compressCode(code);
  const base =
    baseUrl ||
    (typeof window !== "undefined" ? window.location.origin : "https://tixedge.cfsbr.org");
  return `${base}/view#${compressed}`;
}

/**
 * Extract and decompress code from the current URL hash.
 */
export function extractCodeFromHash(): string | null {
  if (typeof window === "undefined") return null;
  const hash = window.location.hash.slice(1); // Remove the '#'
  if (!hash) return null;
  return decompressCode(hash);
}
