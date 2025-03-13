import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
      <nav>
        <a href="/about">About</a><br></br>
        <a href="/blog/first-blog">First Blog</a><br></br>
        <a href="/blog/second-blog">Second Blog</a>
      </nav>
        {children}
        <footer>
        <p>Footer</p>
      </footer>
      </body> 
      
    </html>
  );
}
