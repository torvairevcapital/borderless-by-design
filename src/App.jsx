import { useState } from "react";

export default function BorderlessLanding() {
  const [status, setStatus] = useState("idle"); // idle | submitting | success | error
  const [errorMsg, setErrorMsg] = useState("");

  // Working endpoint + preview URL
  const FORM_ENDPOINT = "https://formspree.io/f/mgvnbazk";
  const PREVIEW_URL = "/preview/Borderless-by-Design-Preview.pdf";

  async function handleSubmit(e) {
    e.preventDefault();
    setStatus("submitting");
    setErrorMsg("");

    const form = e.currentTarget;
    const formData = new FormData(form);

    // Open dossier instantly (keeps UX perfect even if network/CORS is noisy)
    const win = window.open(PREVIEW_URL, "_blank", "noopener,noreferrer");
    if (!win) window.location.href = PREVIEW_URL;

    // Fire-and-forget submission so the download isn't blocked
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
        setErrorMsg("We couldn’t confirm the submission, but your dossier opened.");
        setStatus("error");
      });
  }

  return (
    <div className="min-h-screen bg-black text-slate-100 selection:bg-amber-400/30">
      {/* HEADER */}
      <header className="sticky top-0 z-20 bg-black/60 backdrop-blur border-b border-white/10">
        <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
          <div className="flex items-center gap-3">
            <div className="h-9 w-9 rounded-xl bg-gradient-to-br from-amber-300 via-yellow-400 to-amber-600 ring-1 ring-white/20 flex items-center justify-center text-black font-semibold">BB</div>
            <span className="font-semibold text-amber-300 tracking-wide text-sm sm:text-base">Borderless Blueprint</span>
          </div>
          <nav className="hidden md:flex items-center gap-6 text-sm text-slate-300">
            <a href="#problem" className="hover:text-white">Why this</a>
            <a href="#preview" className="hover:text-white">Inside</a>
            <a href="#signup" className="hover:text-white">Receive the Dossier</a>
          </nav>
        </div>
      </header>

      {/* HERO — Naval x Stripe tone */}
      <section id="hero" className="text-center py-24 px-6 max-w-4xl mx-auto">
        <h1 className="text-4xl sm:text-5xl font-semibold mb-4">
          Build a <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-300 via-yellow-400 to-amber-500">borderless business</span> that actually works.
        </h1>
        <p className="text-slate-300 text-lg mb-8">
          <strong>Borderless Blueprint</strong> is a 63-page playbook for digital-first founders to structure, operate,
          and scale internationally using legitimate strategies—offshore entities, compliant banking, and documentation
          that passes scrutiny. No hype. No crypto wizardry. Just systems that work.
        </p>
        <a href="#signup" className="inline-block px-8 py-3 rounded-2xl bg-gradient-to-b from-amber-400 to-amber-600 text-black font-medium hover:opacity-90 transition">
          Receive the Dossier
        </a>
      </section>

      {/* PROBLEM — pains, sharp and credible */}
      <section id="problem" className="border-t border-white/10 py-20 px-6 max-w-4xl mx-auto text-center">
        <h2 className="text-2xl font-semibold text-amber-400 mb-6">Why you need this</h2>
        <p className="text-slate-300 leading-relaxed max-w-2xl mx-auto">
          If your income crosses borders but your structure doesn’t, you’re already at risk. Founders lose accounts,
          overpay taxes, and stall growth because the backend is a mess—no compliance, no documentation, no separation.
        </p>
        <ul className="text-slate-400 mt-10 space-y-3 text-sm max-w-xl mx-auto text-left">
          <li>• Frozen Stripe, PayPal, or Wise accounts with no appeal path.</li>
          <li>• 40–60% tax exposure due to poor jurisdiction setup.</li>
          <li>• Banking friction and FX drag from the wrong rails.</li>
          <li>• Credibility gaps when partners ask for docs you don’t have.</li>
        </ul>
      </section>

      {/* SOLUTION — practical, not theoretical */}
      <section id="solution" className="border-t border-white/10 py-20 px-6 max-w-5xl mx-auto text-center">
        <h2 className="text-2xl font-semibold text-amber-400 mb-6">The practical playbook for operating without borders.</h2>
        <p className="text-slate-300 leading-relaxed max-w-3xl mx-auto">
          <strong>Borderless Blueprint</strong> shows you how to build a compliant, tax-efficient international structure
          that banks respect and regulators understand. No loopholes. No theatrics. Implementation over ideology.
        </p>
        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-6 text-left text-sm text-slate-300">
          <div className="p-6 bg-zinc-900/60 rounded-2xl ring-1 ring-white/10">
            <h3 className="text-amber-300 font-semibold mb-2">01 — Entity & Jurisdiction</h3>
            <p>How to pick where to incorporate and what to avoid—without blacklist risk or high-maintenance setups.</p>
          </div>
          <div className="p-6 bg-zinc-900/60 rounded-2xl ring-1 ring-white/10">
            <h3 className="text-amber-300 font-semibold mb-2">02 — Banking & Payments</h3>
            <p>Accounts that don’t freeze. Multi-currency flows that reduce friction and FX loss.</p>
          </div>
          <div className="p-6 bg-zinc-900/60 rounded-2xl ring-1 ring-white/10">
            <h3 className="text-amber-300 font-semibold mb-2">03 — Compliance & Records</h3>
            <p>The minimum viable documentation that keeps audits calm and operations clean.</p>
          </div>
        </div>
      </section>

      {/* PREVIEW / INSIDE — snapshot + clear value */}
      <section id="preview" className="border-t border-white/10 py-20 px-6 text-center">
        <h2 className="text-2xl font-semibold text-amber-400 mb-6">Inside the Dossier</h2>
        <p className="text-slate-300 max-w-2xl mx-auto mb-8">
          A concise preview from the full 63-page playbook—frameworks, checklists, and templates you can implement this week.
        </p>
        <div className="flex justify-center">
          <img
            src="/preview/Borderless-Blueprint-Snapshot.jpg"
            alt="Borderless Blueprint dossier snapshot"
            className="w-full max-w-3xl h-auto object-contain rounded-xl ring-1 ring-white/10 mx-auto mb-10 shadow-2xl px-4 sm:px-0"
          />
        </div>
        <a href="#signup" className="inline-block px-8 py-3 rounded-2xl bg-gradient-to-b from-amber-400 to-amber-600 text-black font-medium hover:opacity-90 transition">
          Receive the Dossier
        </a>
      </section>

      {/* PAID CTA — calm, credible upsell */}
      <section id="paid" className="border-t border-white/10 py-20 px-6 text-center">
        <h2 className="text-2xl font-semibold text-amber-400 mb-6">When you’re ready for the full playbook</h2>
        <p className="text-slate-300 max-w-2xl mx-auto mb-8">
          The complete <strong>Borderless Blueprint</strong> gives you the structure used by serious founders—setup walkthroughs,
          templates, banking stack, and a documentation framework that scales.
        </p>
        <a
          href="https://borderlessblueprint.gumroad.com/l/tgbrg"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block px-10 py-3 rounded-2xl bg-gradient-to-r from-amber-500 to-amber-700 text-black font-semibold hover:scale-[1.02] transition"
        >
          Get the Full Blueprint
        </a>
      </section>

      {/* SIGNUP — “Receive the Dossier” with instant open preserved */}
      <section id="signup" className="border-t border-white/10">
        <div className="max-w-6xl mx-auto px-6 py-16 text-center">
          <h2 className="text-2xl sm:text-3xl font-semibold">Receive the Dossier</h2>
          <p className="mt-3 text-slate-300 max-w-2xl mx-auto">
            Enter your details to access the Borderless Blueprint dossier instantly. You’ll also join our private founder list.
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
                  I agree to receive the dossier and occasional updates. Unsubscribe anytime.
                </label>
              </div>
              <input type="hidden" name="source" value="borderless-blueprint-landing" />
              <button
                type="submit"
                disabled={status === "submitting"}
                className="sm:col-span-2 inline-flex justify-center items-center rounded-2xl px-6 py-3 text-sm font-medium ring-1 ring-white/15 bg-gradient-to-b from-amber-400 to-amber-600 text-black hover:from-amber-500 hover:to-amber-700 disabled:opacity-60"
              >
                {status === "submitting" ? "Sending…" : "Receive the Dossier"}
              </button>
            </form>
          )}

          {status === "error" && (
            <p className="mt-4 text-sm text-red-300">{errorMsg}</p>
          )}

          {status === "success" && (
            <div className="mt-8 rounded-3xl ring-1 ring-white/10 bg-zinc-900 p-6 max-w-xl mx-auto">
              <h3 className="text-xl font-semibold text-amber-300">Your Dossier is Ready</h3>
              <p className="mt-3 text-sm text-slate-300">
                Your dossier opened in a new tab. You can also open it again below.
              </p>
              <a
                href={PREVIEW_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-5 inline-flex items-center justify-center rounded-2xl px-6 py-3 text-sm font-medium ring-1 ring-white/15 bg-gradient-to-b from-amber-400 to-amber-600 text-black hover:from-amber-500 hover:to-amber-700 transition"
              >
                Open Dossier Again
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
