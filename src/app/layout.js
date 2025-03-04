import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";
import { Analytics } from "@vercel/analytics/react";

const geistSans = Geist({
    variable: "--font-geist-sans",
    subsets: ["latin"],
});

const geistMono = Geist_Mono({
    variable: "--font-geist-mono",
    subsets: ["latin"],
});

export const metadata = {
    title: "Range And Rain",
    description: "Hell Let Loose artillery calculator",
};

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body className={`${geistSans.variable} ${geistMono.variable} h-screen flex flex-col bg-[#0D0D0D]`}>
                <Header />
                <main className="flex-1 h-[80%] overflow-auto">{children}</main>
                <Footer className="h-[10%]" />
                <Analytics /> {/* Added Vercel Analytics */}
            </body>
        </html>
    );
}
