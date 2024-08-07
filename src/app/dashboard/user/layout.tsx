import { Quicksand as FontSans } from "next/font/google";

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
});

export default function Page({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className={`${fontSans.className} h-screen bg-black text-white`}>
      {children}
    </div>
  );
}
