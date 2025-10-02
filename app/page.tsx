"use client";

export default function HomePage() {
  return (
    <main id="home">
      {/* Top nav */}
      <nav className="nav">
        <div className="container nav-row">
          <div className="brand">PRTLY</div>
          <div className="nav-links">
            <a href="#about">About</a>
            <a href="#features">Features</a>
            <a href="#how">How it works</a>
            <a href="#contact" className="btn btn-ghost">Contact</a>
          </div>
        </div>
      </nav>

      {/* HERO */}
      <header className="section hero">
        <div className="container grid2">
          <div>
            <p className="kicker">AI + Blockchain</p>
            <h1 className="title">Fight Deepfakes with Proof & Detection</h1>
            <p className="lead">
              PRTLY helps creators and platforms verify media provenance on-chain,
              and detect manipulated content in real-time.
            </p>
            <div className="cta">
              <a href="#contact" className="btn btn-primary">Get Started</a>
              <a
                className="btn btn-ghost"
                href="https://github.com/PRTLYofficial/prtly-next"
                target="_blank"
                rel="noreferrer"
              >
                View GitHub
              </a>
            </div>
          </div>
          <div className="card center">
            <h3 className="card-title">Live Demo</h3>
            <p className="muted">
              You’re seeing our neon guardian flying. That image is served from
              <code> /public/guardian.png</code> and animated on the client.
            </p>
          </div>
        </div>
      </header>

      {/* ABOUT */}
      <section id="about" className="section">
        <div className="container grid3">
          <div className="card">
            <h3 className="card-title">Mission</h3>
            <p>
              Protect society from synthetic media harm by combining AI detection
              with transparent, tamper-proof proofs on blockchain.
            </p>
          </div>
          <div className="card">
            <h3 className="card-title">What we build</h3>
            <ul className="list">
              <li>Media fingerprinting & on-chain registration</li>
              <li>Deepfake detection API & dashboard</li>
              <li>Verifier widgets for platforms</li>
            </ul>
          </div>
          <div className="card">
            <h3 className="card-title">Who it’s for</h3>
            <ul className="list">
              <li>Creators & newsrooms</li>
              <li>Social platforms & communities</li>
              <li>Compliance teams</li>
            </ul>
          </div>
        </div>
      </section>

      {/* FEATURES */}
      <section id="features" className="section">
        <div className="container">
          <h2 className="section-title">Core features</h2>
          <div className="grid3">
            <div className="card">
              <h4 className="card-title">On-chain provenance</h4>
              <p>Register hashes & signatures to prove who published media first.</p>
            </div>
            <div className="card">
              <h4 className="card-title">Detection engine</h4>
              <p>Model ensemble flags manipulations (faces, voice, composites).</p>
            </div>
            <div className="card">
              <h4 className="card-title">Trust badges</h4>
              <p>Simple “verified / uncertain / fake” badges you can embed.</p>
            </div>
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section id="how" className="section">
        <div className="container">
          <h2 className="section-title">How it works</h2>
          <ol className="steps">
            <li><span>1</span> Upload or ingest media (file / URL / API)</li>
            <li><span>2</span> We fingerprint & analyze using AI</li>
            <li><span>3</span> Store proof on chain for public verification</li>
            <li><span>4</span> Share or embed the verification link</li>
          </ol>
        </div>
      </section>

      {/* CONTACT / CTA */}
      <section id="contact" className="section cta-block">
        <div className="container center">
          <h2 className="title">Ready to protect your community?</h2>
          <p className="lead">Talk to us about integrations, pilots, or early access.</p>
          <div className="cta">
            <a className="btn btn-primary" href="mailto:hello@prtly.ai">Email us</a>
            <a className="btn btn-ghost" href="https://t.me/" target="_blank" rel="noreferrer">
              Join Telegram
            </a>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="footer">
        <div className="container footer-row">
          <div className="muted">© {new Date().getFullYear()} PRTLY — All rights reserved.</div>
          <div className="nav-links small">
            <a href="https://x.com/" target="_blank" rel="noreferrer">X</a>
            <a href="https://github.com/PRTLYofficial" target="_blank" rel="noreferrer">GitHub</a>
            <a href="#home">Top ↑</a>
          </div>
        </div>
      </footer>
    </main>
  );
}
