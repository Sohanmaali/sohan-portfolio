"use client";

import { ThemeProvider } from 'next-themes';
import '@/styles/globals.css';
import PublicLayout from '@/components/layout/public';
import { usePathname } from 'next/navigation';


const pageConfig: Record<string, { title: string }> = {
  "/": { title: "Sohan" },
  "/resume": { title: "My Resume" },
  "/about": { title: "About Me" },
  "/services": { title: "Services" },
  "/resources": { title: "Resources" },
  "/project": { title: "My Projects" },
  "/code": { title: "My Codes" },
  "/gallery": { title: "My Gallery" },
  "/blog": { title: "My Blogs" },
  "/contact": { title: "Contact With Sohan" },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {

  const pathname: any = usePathname();
  const config = pageConfig[pathname];


  return (
    <html lang="en" suppressHydrationWarning className="h-full">
       <head>
        <meta
          name="google-site-verification"
          content="U21sRHG4ITrbC1LksUGmTS9Lel8RcAtWXcyrJYT4pdQ"
        />
        <title>{config?.title || "Sohan"}</title>
        <meta
          name="description"
          content="Welcome to Sohan's Portfolio. Discover my projects, resume, blog, and contact details."
        />
        <meta
          name="keywords"
          content="Portfolio, Web Developer, Projects, Resume, Blog, Contact"
        />
        <meta name="author" content="Sohan" />
        <link rel="icon" href="/assets/images/emoji.png" />
      </head>
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
