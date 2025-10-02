import "./globals.css";

export const metadata = {
  title: "PRTLY — Neon AI + Blockchain",
  description:
    "Fight deepfakes with AI detection and on-chain proofs. PRTLY — neon animated landing page.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
