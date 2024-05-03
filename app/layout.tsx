import "./globals.css";
import { DefaultBody } from "../components/globals";
import { Metadata } from "next";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" dir="ltr">
      <head>
      </head>
      <DefaultBody>{children}</DefaultBody>
    </html>
  );
}
