"use client";

import { useState } from "react";
import { company } from "@/lib/site-data";

type Status = "idle" | "sending" | "sent" | "error";

export default function ContactSection() {
  const [status, setStatus] = useState<Status>("idle");
  const [msg, setMsg] = useState<string>("");

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const formElement = e.currentTarget;
    setStatus("sending");
    setMsg("");

    const formData = new FormData(formElement);
    const payload = {
      access_key: "552bc104-2cbd-4b70-a9b6-1234618a731f",
      name: String(formData.get("name") || ""),
      email: String(formData.get("email") || ""),
      company: String(formData.get("company") || ""),
      service: String(formData.get("service") || ""),
      message: String(formData.get("message") || ""),
      subject: `New Contact from ${formData.get("name")}`,
      from_name: "Integron Website",
    };

    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify(payload),
      });

      const data = await res.json();
      if (!res.ok || !data.success) throw new Error(data?.message || "Failed");

      setStatus("sent");
      setMsg("Thanks! We received your message and will get back to you shortly.");
      formElement.reset();
    } catch (err: any) {
      console.error("Submission error:", err);
      setStatus("error");
      setMsg(err.message || "Something went wrong. Please try again, or email us directly.");
    }
  }

  return (
    <section className="rounded-3xl border border-neutral-200 bg-white p-6 shadow-soft md:p-10">
      <div className="grid gap-10 md:grid-cols-2">
        <div>
          <div className="text-sm font-semibold text-neutral-900">Contact</div>
          <h2 className="mt-3 text-2xl font-semibold tracking-tight md:text-3xl">
            Let’s build something you’re proud of.
          </h2>
          <p className="mt-3 text-sm text-neutral-600">
            Tell us what you need—software, 3D stand design, or security systems—and we’ll respond with a clear plan.
          </p>

          <div className="mt-6 text-sm text-neutral-700">
            <div className="font-medium text-neutral-900">{company.name}</div>
            <div className="mt-2">{company.location}</div>
            <div className="mt-1">{company.phone}</div>
            <div className="mt-1">
              <a className="underline decoration-neutral-300 underline-offset-4 hover:text-neutral-900" href={`mailto:${company.email}`}>
                {company.email}
              </a>
            </div>
          </div>
        </div>

        <form onSubmit={onSubmit} className="space-y-4">
          <div className="grid gap-4 sm:grid-cols-2">
            <div>
              <label className="text-xs font-medium text-neutral-700">Name</label>
              <input
                name="name"
                required
                className="mt-1 w-full rounded-2xl border border-neutral-200 bg-white px-4 py-3 text-sm outline-none focus:border-neutral-900"
                placeholder="Your name"
              />
            </div>
            <div>
              <label className="text-xs font-medium text-neutral-700">Email</label>
              <input
                name="email"
                type="email"
                required
                className="mt-1 w-full rounded-2xl border border-neutral-200 bg-white px-4 py-3 text-sm outline-none focus:border-neutral-900"
                placeholder="you@company.com"
              />
            </div>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            <div>
              <label className="text-xs font-medium text-neutral-700">Company (optional)</label>
              <input
                name="company"
                className="mt-1 w-full rounded-2xl border border-neutral-200 bg-white px-4 py-3 text-sm outline-none focus:border-neutral-900"
                placeholder="Your company"
              />
            </div>
            <div>
              <label className="text-xs font-medium text-neutral-700">Service</label>
              <select
                name="service"
                className="mt-1 w-full rounded-2xl border border-neutral-200 bg-white px-4 py-3 text-sm outline-none focus:border-neutral-900"
                defaultValue="Software Development"
              >
                <option>Software Development</option>
                <option>3D Design & Exhibition Stands</option>
                <option>Security Systems</option>
              </select>
            </div>
          </div>

          <div>
            <label className="text-xs font-medium text-neutral-700">Message</label>
            <textarea
              name="message"
              required
              rows={5}
              className="mt-1 w-full rounded-2xl border border-neutral-200 bg-white px-4 py-3 text-sm outline-none focus:border-neutral-900"
              placeholder="Describe your project..."
            />
          </div>

          <button
            disabled={status === "sending"}
            className="w-full rounded-2xl bg-neutral-900 px-4 py-3 text-sm font-medium text-white hover:bg-neutral-800 disabled:opacity-60"
          >
            {status === "sending" ? "Sending..." : "Send Message"}
          </button>

          {msg ? (
            <div
              className={[
                "rounded-2xl border px-4 py-3 text-sm",
                status === "sent"
                  ? "border-emerald-200 bg-emerald-50 text-emerald-800"
                  : status === "error"
                    ? "border-rose-200 bg-rose-50 text-rose-800"
                    : "border-neutral-200 bg-neutral-50 text-neutral-700",
              ].join(" ")}
            >
              {msg}{" "}
              {status === "error" ? (
                <span>
                  Email:{" "}
                  <a className="underline" href={`mailto:${company.email}`}>
                    {company.email}
                  </a>
                </span>
              ) : null}
            </div>
          ) : null}
        </form>
      </div>
    </section>
  );
}
