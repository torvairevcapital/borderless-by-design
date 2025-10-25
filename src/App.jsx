import { useState } from "react";

export default function BorderlessLanding() {
  const [status, setStatus] = useState("idle"); // idle | submitting | success | error
  const [errorMsg, setErrorMsg] = useState("");

  // Keep your working endpoint + preview URL
  const FORM_ENDPOINT = "https://formspree.io/f/mgvnbazk";
  const PREVIEW_URL = "/preview/Borderless-by-Design-Preview.pdf";

  async function handleSubmit(e) {
    e.preventDefault();
    setStatus("submitting");
    setErrorMsg("");

    const form = e.currentTarget;
    const formData = new FormData(form);

    // Open preview immediately (new tab if allowed; fallback same tab)
    const win = window.open(PREVIEW_URL, "_blank", "noopener,noreferrer");
    if (!win) window.location.href = PREVIEW_URL;

    // Background submit to Formspree (no UX blocking)
    fetch(FORM_ENDPOINT, {
      method: "POST",
      headers: { Accept: "application/json" },
      body: formData,
    })
      .then(async (res) => {
        if (!res.ok) {
          const data = await res.json().catch(() => ({}));
          throw new Error(data?.error || "Submission failed");
        }
        setStatus("success");
        form.reset();
      })
      .catch(() => {
        setErrorMsg("We couldn’t confirm the submission, but your preview opened.");
        setStatus("error");
      });
  }

  return (
    <div className="min-h-screen bg-black text-slate-100 selection:bg-amber-400/30">
      {/* HEADER */}
      <header className="sticky top-0 z-20 bg-black/60 backdrop-blur border-b border-white/10">
        <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
          <div className="flex items-center gap-3">
            <div className="h-9 w-9 rounded-xl bg-gradient-to-br from-amber-300 via-yellow-400 to-amber-600 ring-1 ring-white/20 flex items-center justify-center text-black font-semibold">
              BB
            </div>
            <span className="font-semibold text-amber-300 tracking-wide text-sm sm:text-base">
              Borderless Blueprint
            </span>
          </div>
          <nav className="hidden md:flex items-center gap-6 text-sm text-slate-300">
            <a href="#problem" className="hover:text-white">Why this</a>
            <a href="#preview" className="hover:text-white">Inside</a>
            <a href="#signup" className="hover:text-white">Get the Preview</a>
          </nav>
        </div>
      </header>

      {/* HERO (rewritten copy) */}
      <section id="hero" className="text-center py-24 px-6 max-w-4xl mx-auto">
        <h1 className="text-4xl sm:text-5xl font-semibold mb-4">
          Build a <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-300 via-yellow-400 to-amber-500">borderless business</span> that actually works.
        </h1>
        <p className="text-slate-300 text-lg mb-8">
          The <strong>Borderless Blueprint</strong> is a 63-page playbook that shows founders how to
          structure, operate, and scale internationally using legitimate strategies—
          offshore entities, compliant banking, and documentation that passes scrutiny.
        </p>
        <a href="#signup" className="inline-block px-8 py-3 rounded-2xl bg-gradient-to-b from-amber-400 to-amber-600 text-black font-medium hover:opacity-90 transition">
          Get the Free Preview
        </a>
      </section>

      {/* PROBLEM */}
      <section id="problem" className="border-t border-white/10 py-20 px-6 max-w-4xl mx-auto text-center">
        <h2 className="text-2xl font-semibold text-amber-400 mb-6">Why you need this</h2>
        <p className="text-slate-300 leading-relaxed max-w-2xl mx-auto">
          If your income crosses borders but your structure doesn’t, you’re already at risk.
          <br /><br />
          Founders lose accounts, overpay taxes, and stall growth because their backend is a mess—
          no compliance, no documentation, no separation between them and the business.
        </p>
        <ul className="text-slate-400 mt-10 space-y-3 text-sm max-w-xl mx-auto text-left">
          <li>• Frozen Stripe, PayPal, or Wise accounts with no appeal path.</li>
          <li>• 40–60% tax exposure due to poor jurisdiction setup.</li>
          <li>• Lost credibility when partners ask for docs you don’t have.</li>
          <li>• “Digital nomad” myths that collapse under real compliance.</li>
        </ul>
      </section>

      {/* SOLUTION */}
      <section id="solution" className="border-t border-white/10 py-20 px-6 max-w-5xl mx-auto text-center">
        <h2 className="text-2xl font-semibold text-amber-400 mb-6">
          The practical playbook for operating without borders.
        </h2>
        <p className="text-slate-300 leading-relaxed max-w-3xl mx-auto">
          <strong>Borderless Blueprint</strong> walks you through setting up a compliant,
          tax-efficient international structure that banks respect and regulators understand.
          No loopholes, no hype—just systems that work.
        </p>
        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-6 text-left text-sm text-slate-300">
          <div className="p-6 bg-zinc-900/60 rounded-2xl ring-1 ring-white/10">
            <h3 className="text-amber-300 font-semibold mb-2">01 — Entity & Jurisdiction</h3>
            <p>How to choose where to incorporate and what to avoid—without falling into blacklists or crypto schemes.</p>
          </div>
          <div className="p-6 bg-zinc-900/60 rounded-2xl ring-1 ring-white/10">
            <h3 className="text-amber-300 font-semibold mb-2">02 — Banking & Payments</h3>
            <p>Accounts that don’t freeze. Multi-currency setups that move money efficiently and reduce FX friction.</p>
          </div>
          <div className="p-6 bg-zinc-900/60 rounded-2xl ring-1 ring-white/10">
            <h3 className="text-amber-300 font-semibold mb-2">03 — Compliance & Records</h3>
            <p>The bare-minimum documentation that keeps your structure clean, auditable, and stress-free.</p>
          </div>
        </div>
      </section>

      {/* PREVIEW (snapshot + CTA) */}
      <section id="preview" className="border-t border-white/10 py-20 px-6 text-center">
        <h2 className="text-2xl font-semibold text-amber-400 mb-6">Get the free preview</h2>
        <p className="text-slate-300 max-w-2xl mx-auto mb-8">
          A concise extract from the full 63-page playbook—frameworks, checklists,
          and templates you can implement this week.
        </p>
        <div className="flex justify-center">
          <img
            src="/preview/Borderless-Blueprint-Snapshot.jpg"
            alt="Preview pages snapshot"
            className="w-full max-w-3xl h-auto object-contain rounded-xl ring-1 ring-white/10 mx-auto mb-10 shadow-2xl px-4 sm:px-0"
          />
        </div>
        <a href="#signup" className="inline-block px-8 py-3 rounded-2xl bg-gradient-to-b from-amber-400 to-amber-600 text-black font-medium hover:opacity-90 transition">
          Email Me the Preview
        </a>
      </section>

      {/* PAID (Gumroad CTA) */}
      <section id="paid" className="border-t border-white/10 py-20 px-6 text-center">
        <h2 className="text-2xl font-semibold text-amber-400 mb-6">When you’re ready for the full playbook</h2>
        <p className="text-slate-300 max-w-2xl mx-auto mb-8">
          The complete <strong>Borderless Blueprint</strong> gives you the structure used by serious founders—
          full setup walkthroughs, templates, banking stack, and documentation framework.
        </p>
        <a
          href="https://borderlessblueprint.gumroad.com/l/tgbrg"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block px-10 py-3 rounded-2xl bg-gradient-to-r from-amber-500 to-amber-700 text-black font-semibold hover:scale-[1.02] transition"
        >
          Get the Full Version
        </a>
      </section>

      {/* SIGNUP (instant open preserved) */}
      <section id="signup" className="border-t border-white/10">
        <div className="max-w-6xl mx-auto px-6 py-16 text-center">
          <h2 className="text-2xl sm:text-3xl font-semibold">Access the free preview</h2>
          <p className="mt-3 text-slate-300 max-w-2xl mx-auto">
            Enter your name and email below. The preview opens instantly, no waiting.
          </p>

          {status !== "success" && (
            <form onSubmit={handleSubmit} className="mt-8 grid sm:grid-cols-2 gap-4 max-w-xl mx-auto">
              <input
                id="name"
                name="name"
                required
                placeholder="Full name"
                className="w-full rounded-2xl bg-zinc-900 border border-white/10 px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-amber-400/50"
              />
              <input
                id="email"
                name="email"
                type="email"
                required
                placeholder="Email"
                className="w-full rounded-2xl bg-zinc-900 border border-white/10 px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-amber-400/50"
              />
              <div className="sm:col-span-2 flex items-start gap-3">
                <input
                  id="consent"
                  name="consent"
                  type="checkbox"
                  required
                  className="mt-1 h-4 w-4 rounded border-white/20 bg-zinc-900"
                />
                <label htmlFor="consent" className="text-xs text-slate-400">
                  I agree to receive the preview and occasional updates. Unsubscribe anytime.
                </label>
              </div>
              <input type="hidden" name="source" value="borderless-blueprint-landing" />
              <button
                type="submit"
                disabled={status === "submitting"}
                className="sm:col-span-2 inline-flex justify-center items-center rounded-2xl px-6 py-3 text-sm font-medium ring-1 ring-white/15 bg-gradient-to-b from-amber-400 to-amber-600 text-black hover:from-amber-500 hover:to-amber-700 disabled:opacity-60"
              >
                {status === "submitting" ? "Sending…" : "Send Me the Preview"}
              </button>
            </form>
          )}

          {status === "error" && (
            <p className="mt-4 text-sm text-red-300">{errorMsg}</p>
          )}

          {status === "success" && (
            <div className="mt-8 rounded-3xl ring-1 ring-white/10 bg-zinc-900 p-6 max-w-xl mx-auto">
              <h3 className="text-xl font-semibold text-amber-300">Instant access ready</h3>
              <p className="mt-3 text-sm text-slate-300">
                Your preview opened in a new tab. You can also download it again below.
              </p>
              <a
                href={PREVIEW_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-5 inline-flex items-center justify-center rounded-2xl px-6 py-3 text-sm font-medium ring-1 ring-white/15 bg-gradient-to-b from-amber-400 to-amber-600 text-black hover:from-amber-500 hover:to-amber-700 transition"
              >
                Download Preview Again
              </a>
            </div>
          )}
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-white/10">
        <div className="max-w-6xl mx-auto px-6 py-10 text-xs text-slate-400 text-center">
          <p>© {new Date().getFullYear()} Torvaire Capital / Borderless Blueprint. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
