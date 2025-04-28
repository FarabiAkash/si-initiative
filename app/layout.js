import { Poppins } from "next/font/google";
import "./globals.css";
import Nav from "../components/shared/Nav";
import Footer from "../components/shared/Footer";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

export const metadata = {
  title: "CMED",
  description: "Connecting People, Saving Lives.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${poppins.variable} antialiased bg-white text-gray-900 2xl-custom:w-[1200px] 2xl-custom:mx-auto`}>
        <Nav />
        {children}
        <Footer />
      </body>
    </html>
  );
}
