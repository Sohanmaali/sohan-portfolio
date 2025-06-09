import type { Metadata, Viewport } from 'next';
import { ThemeProvider } from 'next-themes';
import '@/styles/globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import BackToTop from '@/components/BackToTop';
import ChatBot from '@/components/ChatBot';
import AnimatedBackground from '@/components/ui/AnimatedBackground';

// Add viewport settings
export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
  viewportFit: 'cover',
};

export const metadata: Metadata = {
  title: 'Portfolio | Creative Developer',
  description: 'A creative developer portfolio showcasing projects and skills',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="min-h-screen bg-white  relative">
        <AnimatedBackground />
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <Navbar />
          <main className="container mx-auto px-4 py-8 relative z-10 flex-grow">
            {children}
          </main>
          <Footer />
          <div className="fixed bottom-0 right-0 z-40 flex flex-col items-end gap-4 p-4">
            <ChatBot />
            <BackToTop />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
