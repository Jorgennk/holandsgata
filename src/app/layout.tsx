import "../styles/globals.css";
import { ReactNode } from "react";

export const metadata = {
  title: "Municipality Shield Quiz",
  description: "Guess the Norwegian municipality shields!",
};

interface RootLayoutProps {
  children: ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
