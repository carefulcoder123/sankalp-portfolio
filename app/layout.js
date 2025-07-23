import {  Sora, Moon_Dance, Urbanist } from "next/font/google";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./globals.css";
import Logo from "./components/Logo";



const sora = Sora({
  subsets: ['latin'],
  variable: '--font-sora',
  display: 'swap',
});

const urbanist = Urbanist({
  subsets: ['latin'],
  variable: '--font-urbanist',
  display: 'swap',
});

const moonDance = Moon_Dance({
  subsets: ['latin'],
  variable: '--font-moon-dance',
  weight: "400",
  display: 'swap',
});

export const metadata = {
  title: "Sankalp Pawar | Portfolio",
  description: "Website showcasing the projects and skils of Sankalp",
  icons: {
    icon: "/logo-v2.png",  // this is what updates the browser tab logo
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      
      <body
        className={`${sora.variable} ${moonDance.variable} ${urbanist.variable} font-sora antialiased bg-[#0F172A]`}
      > 
        {children}
        <ToastContainer position="top-right" autoClose={3000} />
      </body>
    </html>
  );
}
