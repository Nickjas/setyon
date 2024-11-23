import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar"
import { AppSidebar } from "@/components/app-sidebar";

//import "@/styles/globals.css"; // Import global styles if needed


import type {Metadata} from 'next'
import './globals.css'
import { Roboto,Inter,IBM_Plex_Serif } from 'next/font/google'
 
const roboto = Roboto({
  weight: '400',
  subsets: ['latin'],
  display: 'swap',
  variable:'--font-inter'
})
const inter = Inter({
  weight: '400',
  subsets: ['latin'],
  display: 'swap',
  variable:'--font-inter'
})
const Plex_Serif = IBM_Plex_Serif({
  weight: '400',
  subsets: ['latin'],

  variable:'--font-ibm-plex'
})
export const metadata = {
  title: "Setyon Sacco",
  description: "Setyon is a modern Banking platform for everyone",
};
 
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased`}>{children}</body>
    </html>
  );
}