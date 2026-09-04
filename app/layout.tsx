import type { Metadata } from "next";
import { DM_Sans, Space_Grotesk } from "next/font/google";
import "./globals.css";

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Atlas | Lịch sử thế giới",
  description: "Khám phá dòng thời gian, các nền văn minh và những kết nối đã làm nên thế giới.",
  keywords: ["lịch sử thế giới", "dòng thời gian lịch sử", "nền văn minh", "world history atlas"],
  openGraph: { title: "Atlas | Lịch sử thế giới", description: "Một bản đồ sống về lịch sử nhân loại.", type: "website", locale: "vi_VN" },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="vi"
      suppressHydrationWarning
      className={`${dmSans.variable} ${spaceGrotesk.variable} h-full antialiased`}
    >
      <head><script dangerouslySetInnerHTML={{ __html: "try{var t=localStorage.getItem('atlas-theme');if(t)document.documentElement.dataset.theme=t}catch(e){}" }} /></head>
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
