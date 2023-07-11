import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'boraCodar {hub}',
  description: 'Hub de desafios semanais do #boraCodar da Rocketseat',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} w-full h-full`}>{children}</body>
    </html>
  )
}
