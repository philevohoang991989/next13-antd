import { Auth } from "@/components/common/auth";
import "../globals.css";
import { Inter } from "next/font/google";
import Template from "./template";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "About Page",
  description: "About Page",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div>
        <Template>{children}</Template>
        </div>
      </body>
    </html>
  );
}
