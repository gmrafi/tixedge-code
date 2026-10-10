import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import localFont from "next/font/local";
import { ThemeProvider } from "next-themes";
import { Toaster } from "sonner";
import "./globals.css";

const solaimanLipi = localFont({
  src: [
    {
      path: "../public/fonts/SolaimanLipi.woff2",
      weight: "100 900",
      style: "normal",
    },
    {
      path: "../public/fonts/SolaimanLipi.ttf",
      weight: "100 900",
      style: "normal",
    },
  ],
  variable: "--font-solaimanlipi",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: "TixEdge Code: ইন্টারেক্টিভ কম্পিউটেশনাল আর্কিটেকচার প্ল্যাটফর্ম | CFSBR",
  description:
    "TixEdge Code: নতুন প্রজন্মের শিক্ষার্থীদের জন্য বাংলা ভাষায় প্রজেক্ট-ভিত্তিক কম্পিউটেশনাল চিন্তন ও সফটওয়্যার আর্কিটেকচার স্যান্ডবক্স। কনসেপ্ট ও উদ্ভাবন: মোঃ গোলাম মুবাশশির রাফি। গবেষণা প্ল্যাটফর্ম: Centre for Fintech & Strategic Business Research (CFSBR)।",
  keywords: [
    "TixEdge Code",
    "TixEdge Studio",
    "CFSBR",
    "Md Golam Mubasshir Rafi",
    "কম্পিউটেশনাল থিঙ্কিং",
    "সফটওয়্যার আর্কিটেকচার",
    "HTML কারিকুলাম",
    "Kids Coding Bangladesh",
    "STEM Education",
  ],
  authors: [
    { name: "Md Golam Mubasshir Rafi" },
    { name: "Centre for Fintech & Strategic Business Research (CFSBR)" },
  ],
  openGraph: {
    title: "TixEdge Code: কম্পিউটেশনাল আর্কিটেকচার প্ল্যাটফর্ম",
    description: "ট্যাকটাইল লার্নিং ও ব্রাউজার স্যান্ডবক্স। শৈশবেই সফটওয়্যার স্থাপত্যের মজবুত ভিত্তি।",
    type: "website",
    locale: "bn_BD",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="bn" suppressHydrationWarning className={`${solaimanLipi.variable} ${inter.variable} ${jetbrainsMono.variable}`}>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Anek+Bangla:wght@400;500;600;700;800&family=Hind+Siliguri:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body
        className="font-sans antialiased text-stone-900 dark:text-zinc-100 bg-[#FCFAF6] dark:bg-zinc-950"
        suppressHydrationWarning
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange={false}
        >
          {children}
          <Toaster
            position="bottom-right"
            toastOptions={{
              classNames: {
                toast: "font-sans",
              },
            }}
          />
        </ThemeProvider>
      </body>
    </html>
  );
}
