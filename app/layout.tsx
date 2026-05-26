import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'LinkedIn Salary Analyzer — Know Your Market Rate',
  description: 'Scrape LinkedIn job postings to extract and analyze salary data. Get market rate insights for any role and location.'
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="17d0e6bc-f443-4352-8d07-439e0105c66b"></script>
      </head>
      <body className="bg-[#0d1117] text-[#c9d1d9] min-h-screen">
        {children}
      </body>
    </html>
  )
}
