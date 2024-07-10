
import Navbar from "@/components/Navbar";
import "./globals.css";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Namaste Homestay",
  description: "Namaste Samudayik Homestay",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body >
        <Navbar/>
        <main className="overflow-hidden " >{children}</main>
        <Footer/>
        </body>
    </html>
  );
}
