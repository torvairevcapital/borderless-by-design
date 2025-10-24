import { useState } from "react";

export default function BorderlessLanding() {
  const [status, setStatus] = useState("idle"); // idle | submitting | success | error
  const [errorMsg, setErrorMsg] = useState("");

  // Formspree endpoint (kept from your working setup)
  const FORM_ENDPOINT = "https://formspree.io/f/mgvnbazk";

  async function handleSubmit(e) {
    e.preventDefault();
    setStatus("submitting");
    setErrorMsg("");

    const formData = new FormData(e.currentTarget);

    try {
      const res = await fetch(FORM_ENDPOINT, {
        method: "POST",
        headers: { Accept: "application/json" },
        body: formData,
      });

      if (res.ok) {
        setStatus("success");
        e.currentTarget.reset();
      } else {
        const data = await res.json().catch(() => ({}));
        setErrorMsg(data?.error || "Something went wrong. Please try again.");
        setStatus("error");
      }
    } catch (err) {
      setErrorMsg("Network error. Please try again.");
      setStatus("error");
    }
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
            <a href="#benefits" className="hover:text-white">Benefits</a>
            <a href="#preview" className="hover:text-white">Inside</a>
            <a href="#signup" className="hover:text-white">Get the Preview</a>
          </nav>
        </div>
      </header>

      {/* HERO */}
      <section className="max-w-6xl mx-auto px-6 py-20 lg:py-28">
        <div className="grid lg:grid-cols-12 items-center gap-10">
          <div className="lg:col-span-7">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-semibold">
              Build a{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-300 via-yellow-400 to-amber-500">
                borderless business
              </span>{" "}
              that matches reality.
            </h1>
            <p className="mt-5 text-slate-300 text-lg max-w-2xl">
              Clients worldwide. Payments in multiple currencies. Operations in the cloud.{" "}
              <span className="text-slate-200">Borderless Blueprint</span> is a practical
              playbook to structure, operate, and scale internationally—without breaking
              compliance (or your sanity).
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <a
                href="#signup"
                className="inline-flex justify-center items-center rounded-2xl px-6 py-3 text-sm font-medium ring-1 ring-white/15 bg-gradient-to-b from-zinc-900 to-black hover:from-black hover:to-zinc-900"
              >
                Get the Free Preview
              </a>
              <a
                href="#preview"
                className="inline-flex justify-center items-center rounded-2xl px-6 py-3 text-sm font-medium ring-1 ring-white/15 text-slate-200 hover:bg-white/5"
              >
                See what’s inside
              </a>
            </div>
          </div>

          <div className="lg:col-span-5">
            <div className="relative">
              <div className="absolute -inset-0.5 bg-gradient-to-br from-amber-300/30 to-amber-600/20 blur-2xl rounded-3xl" />
              <div className="relative rounded-3xl ring-1 ring-white/10 bg-zinc-900 p-6">
                <div className="aspect-[4/3] rounded-2xl ring-1 ring-white/10 bg-[linear-gradient(135deg,#1f1f1f,#121212)] flex items-center justify-center">
                  <div className="text-center px-6">
                    <p className="text-sm uppercase tracking-[0.2em] text-amber-300/90">
                      Free Preview
                    </p>
                    <h3 className="mt-2 text-xl font-semibold">Borderless Blueprint</h3>
                    <p className="mt-2 text-sm text-slate-300">
                      A concise extract with frameworks, checklists, and first steps you can
                      apply immediately.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* INSIDE / PREVIEW SNAPSHOT */}
      <section id="preview" className="border-t border-white/10">
        <div className="max-w-6xl mx-auto px-6 py-16 text-center">
          <h2 className="text-2xl sm:text-3xl font-semibold text-amber-400">
            Inside Borderless Blueprint
          </h2>

<img
  src="/preview/Borderless-Blueprint-Snapshot.jpg"
  alt="Borderless Blueprint preview snapshot"
  className="w-full max-w-3xl h-auto rounded-xl ring-1 ring-white/10 shadow-2xl object-contain px-4 sm:px-0 transition-transform duration-500 hover:scale-[1.01]"
/>


          <p className="mt-6 text-sm text-slate-300 max-w-2xl mx-auto leading-relaxed">
            A glimpse into the full framework—offshore setup, asset protection, and the
            global credibility systems used by elite entrepreneurs to operate beyond borders.
          </p>

          {/* Upsell to full version */}
          <div className="mt-10">
            <p className="text-slate-400 mb-4">
              Find this valuable? Unlock the full version and join the founders’ circle.
            </p>
            <a
              href="https://borderlessblueprint.gumroad.com/l/tgbrg"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-8 py-3 rounded-2xl bg-gradient-to-r from-amber-500 to-amber-700 text-black font-semibold tracking-wide ring-1 ring-white/10 hover:scale-[1.02] transition"
            >
              Get the Full Version
            </a>
          </div>
        </div>
      </section>

      {/* BENEFITS */}
      <section id="benefits" className="border-t border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.03),rgba(0,0,0,0))]">
        <div className="max-w-6xl mx-auto px-6 py-16 text-center">
          <h2 className="text-2xl sm:text-3xl font-semibold text-amber-400 mb-8">
            Why you’ll want the full Blueprint
          </h2>
          <ul className="max-w-2xl mx-auto space-y-6 text-slate-300 text-sm leading-relaxed text-left">
            <li>⚡ Practical global structuring used by offshore professionals and fund managers.</li>
            <li>🌍 How to receive payments across jurisdictions with lower friction and flags.</li>
            <li>💼 Real asset-protection principles separating you from your business—legally and financially.</li>
            <li>🧭 Credibility systems: documents, rails, and reputational signals that travel.</li>
            <li>🔐 Frameworks and checklists to implement this week—no heavy engineering required.</li>
          </ul>
        </div>
      </section>

      {/* SIGNUP */}
      <section id="signup" className="border-t border-white/10">
        <div className="max-w-6xl mx-auto px-6 py-16">
          <h2 className="text-2xl sm:text-3xl font-semibold">Get the free preview</h2>
          <p className="mt-3 text-slate-300 max-w-2xl">
            Enter your name and email to receive the Borderless Blueprint preview instantly
            and join our private founder list.
          </p>

          {status !== "success" && (
            <form onSubmit={handleSubmit} className="mt-6 grid sm:grid-cols-2 gap-4 max-w-xl">
              <div>
                <label htmlFor="name" className="block text-xs text-slate-400 mb-1">
                  Full name
                </label>
                <input
                  id="name"
                  name="name"
                  required
                  placeholder="Jane Doe"
                  className="w-full rounded-2xl bg-zinc-900 border border-white/10 px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-amber-400/50"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-xs text-slate-400 mb-1">
                  Email
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  placeholder="you@work.com"
                  className="w-full rounded-2xl bg-zinc-900 border border-white/10 px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-amber-400/50"
                />
              </div>
              <div className="sm:col-span-2 flex items-start gap-3">
                <input
                  id="consent"
                  name="consent"
                  type="checkbox"
                  required
                  className="mt-1 h-4 w-4 rounded border-white/20 bg-zinc-900"
                />
                <label htmlFor="consent" className="text-xs text-slate-400">
                  I agree to receive the preview and occasional updates. I can unsubscribe anytime.
                </label>
              </div>
              <button
                type="submit"
                disabled={status === "submitting"}
                className="sm:col-span-2 inline-flex justify-center items-center rounded-2xl px-6 py-3 text-sm font-medium ring-1 ring-white/15 bg-gradient-to-b from-amber-400 to-amber-600 text-black hover:from-amber-500 hover:to-amber-700 disabled:opacity-60"
              >
                {status === "submitting" ? "Sending…" : "Email me the preview"}
              </button>
            </form>
          )}

          {status === "error" && (
            <p className="mt-4 text-sm text-red-300">{errorMsg}</p>
          )}

          {status === "success" && (
            <div className="mt-6 rounded-3xl ring-1 ring-white/10 bg-zinc-900 p-6 max-w-xl text-center">
              <h3 className="text-xl font-semibold text-amber-300">Instant access ready</h3>
              <p className="mt-3 text-sm text-slate-300">
                Thank you for joining <span className="text-amber-400">Borderless Blueprint</span>. Your free
                preview is ready—download it instantly below.
              </p>
              <a
                href="/preview/Borderless-by-Design-Preview.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-5 inline-flex items-center justify-center rounded-2xl px-6 py-3 text-sm font-medium ring-1 ring-white/15 bg-gradient-to-b from-amber-400 to-amber-600 text-black hover:from-amber-500 hover:to-amber-700 transition"
              >
                Download Preview Now
              </a>
              <p className="mt-3 text-xs text-slate-500">
                (You’ll also receive a confirmation email shortly.)
              </p>
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
