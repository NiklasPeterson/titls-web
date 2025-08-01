import { Inter } from 'next/font/google'
import "./globals.css";

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: "Titls, organize your iOS home screens",
  description: "Titls is a small iOS app that lets you create titles and then use widgets to organize your iOS home screens",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} antialiased w-full flex justify-center bg-white text-zinc-600 dark:bg-zinc-950 dark:text-zinc-400`}
      >
        {children}
      </body>
    </html>
  );
}
