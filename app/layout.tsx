import type { Metadata, Viewport } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";
import { buildMetadata } from "@/lib/seo";

const inter = Inter({ subsets: ["latin"], display: "swap", variable: "--font-sans" });
const spaceGrotesk = Space_Grotesk({ subsets: ["latin"], display: "swap", variable: "--font-display" });

export const metadata: Metadata = buildMetadata();
export const viewport: Viewport = { width: "device-width", initialScale: 1, colorScheme: "light dark", themeColor: [{ media: "(prefers-color-scheme: light)", color: "#ffffff" }, { media: "(prefers-color-scheme: dark)", color: "#09090b" }] };

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en" suppressHydrationWarning><body className={`${inter.variable} ${spaceGrotesk.variable} font-sans antialiased`}><ThemeProvider>{children}</ThemeProvider></body></html>;
}