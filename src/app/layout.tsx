"use client";

import { ThemeProvider } from 'next-themes';
import '@/styles/globals.css';
import PublicLayout from '@/components/layout/public';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {


  return (
    <html lang="en" suppressHydrationWarning className="h-full">
      <body className={`min-h-screen bg-white dark:bg-gray-900`}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          
            <PublicLayout>
              {children}
            </PublicLayout>
         
        </ThemeProvider>
      </body>
    </html>
  )
}
