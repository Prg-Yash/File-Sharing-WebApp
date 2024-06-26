import { Outfit } from "next/font/google";
import "./globals.css";
import { ClerkProvider } from "@clerk/nextjs";
import ClientProvider from "./_components/ClientProvider";
// import { ClerkProvider } from "@clerk/nextjs/dist/types/components.server";

const outfit = Outfit({ subsets: ["latin"] });

export const metadata = {
  title: "Sharedom",
  description: "Share and store your files in one place",
};

export default function RootLayout({ children }) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className={outfit.className}>
          <ClientProvider />
          <div>{children}</div>
        </body>
      </html>
    </ClerkProvider>
  );
}
