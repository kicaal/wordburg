import "./globals.css";
import { Acme } from "next/font/google";

const AcmeFont = Acme({ weight: "400", subsets: ["latin"] });

export const metadata = {
  title: "WordBurg",
  description: "Made by kilian",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={AcmeFont.className}>{children}</body>
    </html>
  );
}
