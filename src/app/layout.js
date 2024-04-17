import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar/Navbar";
import Footer from "@/components/Footer/Footer";
import { auth } from "@/lib/auth";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Home Page | Panda-Blog",
  description: "My first Next JS project",
};

export default async function RootLayout({ children }) {
  const session = await auth();
  return (
    <html lang="en">
      <body className="bg-sky-950 h-screen w-full flex flex-col justify-between">
        <Navbar session={session}/>
        {children}
        <Footer />
        </body>
    </html>
  );
}
