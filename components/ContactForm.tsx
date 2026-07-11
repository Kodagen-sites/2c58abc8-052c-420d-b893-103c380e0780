"use client";

import { useState } from "react";
import { ArrowUpRight } from "lucide-react";
import { submitKodagenInquiry } from "@/lib/kodagen-live";

export default function ContactForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState<string | null>(null);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (submitting) return;
    setSubmitting(true);
    setError(null);
    const result = await submitKodagenInquiry({
      name,
      email,
      phone,
      message,
      page: "/",
    });
    setSubmitting(false);
    if (result.ok) {
      setSuccess(true);
      setName("");
      setEmail("");
      setPhone("");
      setMessage("");
    } else {
      setError("Something went wrong. Please try again.");
    }
  }

  if (success) {
    return (
      <div className="mt-10 rounded-2xl border border-primary/40 bg-surface/40 p-8 text-left">
        <p className="font-display text-2xl font-light text-white">
          Thank you — we&rsquo;ll be in touch.
        </p>
        <p className="mt-3 text-sm leading-relaxed text-white/70">
          Your message is on its way. We&rsquo;ll reply as soon as we can.
        </p>
      </div>
    );
  }

  const inputCls =
    "w-full rounded-xl border border-white/12 bg-surface/40 px-4 py-3 text-sm text-white placeholder:text-white/40 focus:border-primary focus:outline-none";

  return (
    <form
      onSubmit={handleSubmit}
      className="mt-12 grid gap-4 text-left"
      noValidate
    >
      <div className="grid gap-4 sm:grid-cols-2">
        <input
          type="text"
          name="name"
          placeholder="Your name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className={inputCls}
          autoComplete="name"
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className={inputCls}
          autoComplete="email"
          required
        />
      </div>
      <input
        type="tel"
        name="phone"
        placeholder="Phone (optional)"
        value={phone}
        onChange={(e) => setPhone(e.target.value)}
        className={inputCls}
        autoComplete="tel"
      />
      <textarea
        name="message"
        placeholder="How can we help?"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        className={`${inputCls} min-h-[140px] resize-y`}
        required
      />
      {error && (
        <p className="font-mono text-xs uppercase tracking-[0.2em] text-red-400/90">
          {error}
        </p>
      )}
      <button
        type="submit"
        disabled={submitting}
        className="mt-2 inline-flex items-center justify-center gap-2 rounded-full bg-primary px-8 py-4 font-mono text-xs uppercase tracking-[0.2em] text-bg transition-opacity hover:opacity-90 disabled:opacity-60"
      >
        {submitting ? "Sending…" : "Send message"}
        <ArrowUpRight size={16} />
      </button>
    </form>
  );
}
