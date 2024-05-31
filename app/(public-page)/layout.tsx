
import { Navbar } from "@/components";
import { Inter } from "next/font/google";
import { Footer } from "./financial-movements/presentation/components/footer";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div>
      <Navbar/>
      {children}
      <Footer />
    </div>
  );
}
