import { Inter } from "next/font/google";
import "./globals.css";
import Footer from "@/components/Footer/Footer";
import NavbarPage from "@/components/Navbar/NavbarPage";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Home Page | Panda-Blog",
  description: "My first Next JS project",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-sky-950 h-screen w-full flex flex-col justify-between">
        <NavbarPage />
        {children}
        <Footer />
        </body>
    </html>
  );
}
