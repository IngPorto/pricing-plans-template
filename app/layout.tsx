import React from "react";
import "@style/globals.css";
import Header from "@comp/UI/Header/Header";
import Footer from "@comp/UI/Footer/Footer";

const LANG = "es";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang={LANG}>
      <body>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
