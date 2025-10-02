import "./globals.css";
import FlyingGuardian from "./components/FlyingGuardian";

export const metadata = {
  title: "PRTLY – Neon AI + Blockchain",
  description:
    "Fight deepfakes with AI detection and on-chain proofs. PRTLY – neon animated guardian.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        {children}
        <FlyingGuardian />
      </body>
    </html>
  );
}
