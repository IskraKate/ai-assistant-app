import type {Metadata} from "next";
import {Bricolage_Grotesque} from "next/font/google";
import "./globals.css";
import NavBar from "@/components/NavBar";
import {
    ClerkProvider
} from "@clerk/nextjs";

const bricolage = Bricolage_Grotesque({
    variable: "--font-bricolage",
    subsets: ["latin"],
});

export const metadata: Metadata = {
    title: "Converso",
    description: "Real-time AI Teaching Platform",
};

export default function RootLayout({
                                       children,
                                   }: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <ClerkProvider appearance={{variables: {colorPrimary: '#fe5933'}}}>
            <html lang="en">
            <body className={`${bricolage.variable} antialiased`}>
            <header>
                <NavBar/>
            </header>
            {children}
            </body>
            </html>
        </ClerkProvider>
    );
}
