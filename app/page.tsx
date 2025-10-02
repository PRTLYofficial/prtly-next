// app/page.tsx
import FlyingGuardian from "./components/FlyingGuardian";

export default function Home() {
  return (
    <main
      style={{
        minHeight: "100vh",
        background:
          "radial-gradient(1200px 600px at 10% 10%, rgba(77,0,128,0.25), transparent), radial-gradient(1000px 800px at 90% 80%, rgba(0,128,255,0.15), transparent), #0c0e16",
        color: "white",
        fontFamily:
          "ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto, Helvetica, Arial",
      }}
    >
      {/* Top Bar */}
      <header
        style={{
          position: "sticky",
          top: 0,
          backdropFilter: "blur(8px)",
          background: "rgba(12,14,22,0.6)",
          borderBottom: "1px solid rgba(255,255,255,0.06)",
          zIndex: 5,
        }}
      >
        <nav
          style={{
            maxWidth: 1100,
            margin: "0 auto",
            padding: "14px 16px",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
            <img
              src="/guardian.png"
              alt="PRTLY"
              width={38}
              height={38}
              style={{ opacity: 0.8 }}
            />
            <strong style={{ letterSpacing: 1 }}>PRTLY</strong>
          </div>

          <div style={{ display: "flex", gap: 18, fontSize: 14 }}>
            <a href="#about" style={{ color: "#cbd5e1", textDecoration: "none" }}>
              About
            </a>
            <a href="#features" style={{ color: "#cbd5e1", textDecoration: "none" }}>
              Features
            </a>
            <a href="#how" style={{ color: "#cbd5e1", textDecoration: "none" }}>
              How it works
            </a>
            <a href="#contact" style={{ color: "#cbd5e1", textDecoration: "none" }}>
              Contact
            </a>
          </div>
        </nav>
      </header>

      {/* Hero */}
      <section
        style={{
          maxWidth: 1100,
          margin: "0 auto",
          padding: "56px 16px 24px",
          position: "relative",
        }}
      >
        <h1
          style={{
            fontSize: 42,
            lineHeight: 1.1,
            margin: 0,
            letterSpacing: 0.3,
          }}
        >
          Fight Deepfakes with <span style={{ color: "#7dd3fc" }}>Proof</span> &{" "}
          <span style={{ color: "#c084fc" }}>Detection</span>
        </h1>

        <p
          style={{
            maxWidth: 700,
            color: "#cbd5e1",
            marginTop: 14,
            fontSize: 18,
          }}
        >
          PRTLY helps creators and platforms verify media provenance on-chain and
          detect manipulated content in real-time — powered by AI + blockchain.
        </p>

        <div style={{ display: "flex", gap: 14, marginTop: 22 }}>
          <a
            href="#demo"
            style={{
              background:
                "linear-gradient(90deg, #60a5fa, #a78bfa 60%, #22d3ee)",
              padding: "12px 18px",
              borderRadius: 10,
              color: "black",
              fontWeight: 700,
              textDecoration: "none",
              boxShadow: "0 8px 24px rgba(124,58,237,0.25)",
            }}
          >
            Get Started
          </a>
          <a
            href="https://github.com/"
            target="_blank"
            rel="noreferrer"
            style={{
              padding: "12px 18px",
              borderRadius: 10,
              color: "#e2e8f0",
              textDecoration: "none",
              border: "1px solid rgba(226,232,240,0.2)",
            }}
          >
            View GitHub
          </a>
        </div>
      </section>

      {/* Live Demo card */}
      <section id="demo" style={{ padding: "10px 16px 80px" }}>
        <div
          style={{
            maxWidth: 1100,
            margin: "0 auto",
            position: "relative",
          }}
        >
          <div
            style={{
              background: "rgba(255,255,255,0.06)",
              border: "1px solid rgba(255,255,255,0.08)",
              borderRadius: 16,
              padding: 22,
              boxShadow: "0 30px 60px rgba(0,0,0,0.35)",
            }}
          >
            <h2 style={{ margin: 0, fontSize: 26, marginBottom: 10 }}>Live Demo</h2>
            <p style={{ color: "#cbd5e1", margin: 0 }}>
              You’re seeing our neon guardian flying. The image is served from{" "}
              <code>/public/guardian.png</code> and animated on the client.
            </p>
          </div>
        </div>
      </section>

      {/* The animated guardian */}
      <FlyingGuardian speed={1} />

      {/* Simple footer */}
      <footer
        id="contact"
        style={{
          borderTop: "1px solid rgba(255,255,255,0.08)",
          color: "#94a3b8",
          padding: "18px 16px",
          textAlign: "center",
        }}
      >
        © {new Date().getFullYear()} PRTLY — All rights reserved.
      </footer>
    </main>
  );
            }
