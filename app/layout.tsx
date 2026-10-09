import type { ReactNode } from "react";

export const metadata = {
  title: "Vercel Next.js App",
  description: "Minimal Next.js application deployed on Vercel",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body style={{ fontFamily: "system-ui, sans-serif", margin: 0, padding: "2rem" }}>
        <span>root layout</span>
        {children}
      </body>
    </html>
  );
}