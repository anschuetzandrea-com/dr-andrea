/* Homepage.jsx — Dr. Andrea, rebranded landing page.
   Composes the design-system components. Registers itself on window so the
   sibling index.html can mount it via <script type="text/babel" src>. */

(function () {
  function findNS() {
    for (const k of Object.keys(window)) {
      try {
        const v = window[k];
        if (v && typeof v === "object" && v.Button && v.TestimonialCard) return v;
      } catch (e) {}
    }
    return window;
  }
  const NS = findNS();
  const { Button, Input, Textarea, Card, Badge, Eyebrow, TestimonialCard, StepItem, MediaSlot } = NS;

  const MAX = 1140;
  const wrap = { maxWidth: MAX, margin: "0 auto", padding: "0 28px", width: "100%", boxSizing: "border-box" };
  const serif = "var(--font-display)";

  function SectionHead({ eyebrow, title, italic, tone, center }) {
    return (
      <div style={{ textAlign: center ? "center" : "left", maxWidth: center ? 640 : "none", margin: center ? "0 auto" : 0 }}>
        {eyebrow && <Eyebrow tone={tone === "dark" ? "onDark" : "clay"}>{eyebrow}</Eyebrow>}
        <h2 style={{
          fontFamily: serif, fontWeight: italic ? 500 : 600, fontStyle: italic ? "italic" : "normal",
          fontSize: "var(--fs-h2)", lineHeight: "var(--lh-snug)", letterSpacing: "var(--ls-tight)",
          color: tone === "dark" ? "var(--cream-50)" : "var(--text-heading)", margin: "10px 0 0",
        }}>{title}</h2>
      </div>
    );
  }

  function Homepage() {
    return (
      <div style={{ background: "var(--surface-page)", color: "var(--text-primary)", fontFamily: "var(--font-sans)" }}>

        {/* ---- Nav ---- */}
        <header style={{ borderBottom: "1px solid var(--border-subtle)", background: "var(--surface-page)" }}>
          <div style={{ ...wrap, height: 76, display: "flex", alignItems: "center", justifyContent: "space-between" }}>
            <div style={{ fontFamily: serif, fontStyle: "italic", fontWeight: 500, fontSize: 24, color: "var(--ink-900)" }}>Dr. Andrea</div>
            <nav style={{ display: "flex", gap: 30, alignItems: "center" }}>
              {["Über mich", "Stimmen", "Ablauf", "Kontakt"].map((t) => (
                <a key={t} href="#" style={{ fontSize: 15, fontWeight: 500, color: "var(--text-secondary)", textDecoration: "none", whiteSpace: "nowrap" }}>{t}</a>
              ))}
              <Button variant="primary" size="sm">Erstgespräch</Button>
            </nav>
          </div>
        </header>

        {/* ---- Hero ---- */}
        <section style={{ ...wrap, paddingTop: 84, paddingBottom: 84, display: "grid", gridTemplateColumns: "1.15fr 0.85fr", gap: 56, alignItems: "center" }}>
          <div>
            <Eyebrow>Finde dich selbst</Eyebrow>
            <h1 style={{ fontFamily: serif, fontWeight: 500, fontStyle: "italic", fontSize: 48, lineHeight: 1.16, letterSpacing: "var(--ls-tight)", color: "var(--ink-900)", margin: "16px 0 26px" }}>
              Frei werden von dem,<br />was dich belastet.
            </h1>
            <p style={{ fontSize: "var(--fs-body-lg)", lineHeight: "var(--lh-relaxed)", color: "var(--text-secondary)", maxWidth: 480, margin: 0 }}>
              Mit Dr. Andrea löst du seelische und psychologische Themen — in einem geschützten Raum, in deinem Tempo.
            </p>
            <div style={{ display: "flex", gap: 14, alignItems: "center", marginTop: 32, flexWrap: "wrap" }}>
              <Button variant="primary" size="lg">Kostenloses Erstgespräch</Button>
              <Button variant="secondary" size="lg">Selbsttest machen</Button>
            </div>
            <div style={{ display: "flex", gap: 18, marginTop: 28, alignItems: "center" }}>
              {["Instagram", "Email"].map((t) => (
                <a key={t} href="#" style={{ fontFamily: "var(--font-mono)", fontSize: 12, letterSpacing: "0.06em", color: "var(--ink-500)", textDecoration: "none", borderBottom: "1px solid var(--sand-300)", paddingBottom: 2 }}>{t}</a>
              ))}
            </div>
          </div>
          <div style={{ position: "relative" }}>
            <MediaSlot label="Portrait Dr. Andrea" ratio="1 / 1" rounded="circle" />
            <div style={{ position: "absolute", bottom: 14, left: -14 }}>
              <Badge tone="solid">Über 15 Jahre Erfahrung</Badge>
            </div>
          </div>
        </section>

        {/* ---- Newsletter band ---- */}
        <section style={{ background: "var(--surface-sage)", borderTop: "1px solid var(--sage-200)", borderBottom: "1px solid var(--sage-200)" }}>
          <div style={{ ...wrap, paddingTop: 30, paddingBottom: 30, display: "flex", gap: 24, alignItems: "center", justifyContent: "space-between", flexWrap: "wrap" }}>
            <div style={{ fontFamily: serif, fontStyle: "italic", fontSize: 22, color: "var(--sage-700)" }}>Bleib in Verbindung.</div>
            <div style={{ display: "flex", gap: 12, alignItems: "center", flex: "1 1 320px", maxWidth: 460 }}>
              <div style={{ flex: 1 }}><Input placeholder="Deine Email" type="email" /></div>
              <Button variant="primary">Anmelden</Button>
            </div>
          </div>
        </section>

        {/* ---- Testimonials ---- */}
        <section style={{ ...wrap, paddingTop: 88, paddingBottom: 40 }}>
          <SectionHead eyebrow="Echte Stimmen" title="Was Klient:innen erleben" />
          <div style={{ display: "flex", flexDirection: "column", gap: 56, marginTop: 44 }}>
            <TestimonialCard
              name="Boris Bezend"
              intro="Boris hat vor ein paar Monaten angefangen, sich mit Dr. Andrea zu unterhalten."
              quote="„Ich konnte effektiv Muster in meiner Wahrnehmung und Verarbeitung von Emotionen verändern. Ich kann die Zusammenarbeit wirklich herzlich empfehlen.“"
              media={<MediaSlot label="Video · 0:40" ratio="16 / 11" />}
            />
            <TestimonialCard
              align="right"
              name="Edgar Kretschmann"
              intro="Edgar ist schon jahrelang mit Dr. Andrea in Gesprächen und lässt sich regelmäßig coachen."
              quote="„Sie hat eine unglaubliche Methode, tiefere emotionale Knoten zu erspüren und gemeinsam aufzulösen. Ich würde sie uneingeschränkt empfehlen.“"
              media={<MediaSlot label="Video · 1:00" ratio="16 / 11" />}
            />
          </div>
        </section>

        {/* ---- Help / bio split ---- */}
        <section style={{ ...wrap, paddingTop: 64, paddingBottom: 64 }}>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 32, alignItems: "stretch" }}>
            <Card tone="inverse" elevation="raised" padding={40} style={{ display: "flex", flexDirection: "column", justifyContent: "center" }}>
              <Eyebrow tone="onDark">Erster Schritt</Eyebrow>
              <h2 style={{ fontFamily: serif, fontStyle: "italic", fontWeight: 500, fontSize: 38, lineHeight: 1.1, color: "var(--cream-50)", margin: "12px 0 20px" }}>Kann ich dir helfen?</h2>
              <p style={{ fontSize: 16, lineHeight: 1.6, color: "var(--cream-200)", margin: "0 0 26px" }}>Finde in zwei Minuten heraus, ob meine Begleitung zu dir passt.</p>
              <div><Button variant="accent" size="lg">Kostenlosen Selbsttest machen</Button></div>
            </Card>
            <Card tone="card" padding={40} style={{ display: "flex", flexDirection: "column", justifyContent: "center" }}>
              <Eyebrow tone="sage">Über mich</Eyebrow>
              <p style={{ fontSize: "var(--fs-body-lg)", lineHeight: 1.7, color: "var(--ink-700)", margin: "14px 0 0" }}>
                Mit über 15 Jahren Erfahrung als Beraterin und Coachin in Persönlichkeitsentwicklung und Beziehungstherapie begleite ich dich dabei, psychologische Knotenpunkte zu finden und zu lösen.
              </p>
              <p style={{ fontFamily: serif, fontStyle: "italic", fontSize: 19, color: "var(--clay-600)", margin: "20px 0 0" }}>— Deine Andrea</p>
            </Card>
          </div>
        </section>

        {/* ---- Steps / Gib dir eine Chance ---- */}
        <section style={{ background: "var(--surface-card)", borderTop: "1px solid var(--border-subtle)", borderBottom: "1px solid var(--border-subtle)" }}>
          <div style={{ ...wrap, paddingTop: 80, paddingBottom: 80, display: "grid", gridTemplateColumns: "1fr 1fr", gap: 56, alignItems: "center" }}>
            <div>
              <Eyebrow>Jetzt dein Leben verändern</Eyebrow>
              <h2 style={{ fontFamily: serif, fontStyle: "italic", fontWeight: 500, fontSize: 44, lineHeight: 1.08, letterSpacing: "-0.02em", color: "var(--ink-900)", margin: "12px 0 14px" }}>Gib dir eine Chance.</h2>
              <p style={{ fontSize: 17, lineHeight: 1.6, color: "var(--text-secondary)", margin: "0 0 32px", maxWidth: 460 }}>Unterstützung bei Schwierigkeiten und in herausfordernden Lebensphasen.</p>
              <div style={{ display: "flex", flexDirection: "column", gap: 22, marginBottom: 34 }}>
                <StepItem number="1" title="Kostenloses Erstgespräch">Wir ermitteln zusammen deine Ziele und Themen.</StepItem>
                <StepItem number="2" title="Gemeinsamer Weg">Wir einigen uns auf ein Zeitfenster, in dem wir die Themen angehen.</StepItem>
              </div>
              <Button variant="primary" size="lg">Starte jetzt mit deinem Erstgespräch</Button>
            </div>
            <MediaSlot label="Andrea mit Klientin" ratio="4 / 5" />
          </div>
        </section>

        {/* ---- Trust quote band ---- */}
        <section style={{ background: "var(--ink-900)" }}>
          <div style={{ ...wrap, paddingTop: 76, paddingBottom: 76, textAlign: "center" }}>
            <Eyebrow tone="onDark">Vertrauen &amp; Nähe</Eyebrow>
            <p style={{ fontFamily: serif, fontStyle: "italic", fontWeight: 400, fontSize: 34, lineHeight: 1.3, color: "var(--cream-50)", maxWidth: 760, margin: "18px auto 0" }}>
              „Das Duzen schafft eine Atmosphäre der Nähe — eine solide Grundlage für unsere Zusammenarbeit und dein Wachstum.“
            </p>
          </div>
        </section>

        {/* ---- Contact ---- */}
        <section style={{ ...wrap, paddingTop: 84, paddingBottom: 40 }}>
          <div style={{ display: "grid", gridTemplateColumns: "0.9fr 1.1fr", gap: 56, alignItems: "start" }}>
            <div>
              <Eyebrow>Kontakt aufnehmen</Eyebrow>
              <h2 style={{ fontFamily: serif, fontStyle: "italic", fontWeight: 500, fontSize: 40, lineHeight: 1.1, color: "var(--ink-900)", margin: "12px 0 16px" }}>Schreib mir.</h2>
              <p style={{ fontSize: 17, lineHeight: 1.6, color: "var(--text-secondary)", maxWidth: 360 }}>Du kannst mir gerne per Mail schreiben — ich melde mich bald bei dir.</p>
            </div>
            <Card tone="raised" elevation="soft" padding={32}>
              <div style={{ display: "flex", flexDirection: "column", gap: 18 }}>
                <div style={{ display: "flex", gap: 16 }}>
                  <Input label="Name" placeholder="Dein Name" />
                  <Input label="Email" type="email" placeholder="du@beispiel.de" />
                </div>
                <Textarea label="Nachricht" rows={5} placeholder="Wie kann ich dir helfen?" />
                <div><Button variant="primary" size="lg">Abschicken</Button></div>
              </div>
            </Card>
          </div>
        </section>

        {/* ---- Footer ---- */}
        <footer style={{ borderTop: "1px solid var(--border-subtle)", marginTop: 48 }}>
          <div style={{ ...wrap, paddingTop: 36, paddingBottom: 36, display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: 16 }}>
            <div style={{ fontFamily: serif, fontStyle: "italic", fontSize: 20, color: "var(--ink-700)" }}>Dr. Andrea</div>
            <div style={{ fontFamily: "var(--font-mono)", fontSize: 12, color: "var(--text-muted)" }}>© 2024 · Persönlichkeitsentwicklung &amp; Beziehungstherapie</div>
          </div>
        </footer>
      </div>
    );
  }

  window.Homepage = Homepage;
})();
