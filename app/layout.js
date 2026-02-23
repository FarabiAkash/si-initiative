import "./globals.css";
import { Poppins } from "next/font/google";
import Footer from "../components/shared/Footer";
import ClientWrapper from "../components/shared/ClientWrapper.jsx";
import { Toaster } from "react-hot-toast";

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
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${poppins.variable} antialiased bg-white text-gray-900`}
        suppressHydrationWarning
      >
        <Toaster position="top-center" />
        <ClientWrapper>{children}</ClientWrapper>
        <Footer />
      </body>
    </html>
  );
}
