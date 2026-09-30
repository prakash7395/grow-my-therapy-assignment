"use client";

import { useState } from "react";

const services = [
  {
    title: "Anxiety & Panic Therapy",
    description:
      "Support for chronic anxiety, panic symptoms, and constant overthinking using evidence-based approaches such as CBT and mindfulness-based practices.",
  },
  {
    title: "Trauma & EMDR Therapy",
    description:
      "Carefully paced trauma therapy for single-incident and complex trauma, focused on safety, stabilization, and nervous system regulation.",
  },
  {
    title: "Burnout & Chronic Stress Therapy",
    description:
      "Therapy for adults experiencing burnout, chronic stress, and emotional exhaustion, especially after long periods of pushing through pressure.",
  },
];

const faqs = [
  {
    question: "Do you offer in-person therapy?",
    answer:
      "Yes. I offer in-person sessions at my Santa Monica office as well as secure telehealth options for adults throughout California.",
  },
  {
    question: "What issues do you specialize in?",
    answer:
      "I work with adults experiencing anxiety, trauma, burnout, chronic stress, emotional exhaustion, overthinking, and the lingering effects of past experiences.",
  },
  {
    question: "What is your approach to therapy?",
    answer:
      "My approach is warm, collaborative, and grounded. I integrate evidence-based methods such as CBT, EMDR, mindfulness-based practices, and body-oriented techniques.",
  },
];

export default function Home() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <main className="min-h-screen bg-[#faf8f5] text-[#403832]">
      {/* Header */}
      <header className="sticky top-0 z-50 border-b border-[#e8e0d8] bg-[#faf8f5]/95 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-8">
          <a
            href="#top"
            className="text-lg font-semibold tracking-tight text-[#403832]"
          >
            Dr. Maya Reynolds
            <span className="ml-1 text-sm font-normal text-[#806c5c]">
              PsyD
            </span>
          </a>

          <nav className="hidden items-center gap-7 md:flex">
            <a
              href="#about"
              className="text-sm text-[#625952] transition hover:text-[#9a765b]"
            >
              About
            </a>

            <a
              href="#approach"
              className="text-sm text-[#625952] transition hover:text-[#9a765b]"
            >
              Approach
            </a>

            <a
              href="#office"
              className="text-sm text-[#625952] transition hover:text-[#9a765b]"
            >
              Our Office
            </a>

            <a
              href="#faq"
              className="text-sm text-[#625952] transition hover:text-[#9a765b]"
            >
              FAQ
            </a>

            <a
              href="#contact"
              className="rounded-full bg-[#806c5c] px-5 py-2.5 text-sm font-medium text-white transition hover:bg-[#6f5b4d]"
            >
              Schedule a Consultation
            </a>
          </nav>

          <a
            href="#contact"
            className="rounded-full bg-[#806c5c] px-4 py-2 text-sm font-medium text-white md:hidden"
          >
            Contact
          </a>
        </div>
      </header>

      {/* Hero */}
      <section id="top" className="overflow-hidden">
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-6 py-16 lg:grid-cols-2 lg:px-8 lg:py-24">
          <div>
            <p className="mb-5 text-sm font-semibold uppercase tracking-[0.18em] text-[#9a765b]">
              Licensed Clinical Psychologist · Santa Monica
            </p>

            <h1 className="max-w-3xl text-4xl font-semibold leading-tight tracking-tight text-[#403832] sm:text-5xl lg:text-6xl">
              Anxiety &amp; Trauma Therapy for Adults in Santa Monica, CA
            </h1>

            <p className="mt-7 max-w-2xl text-lg leading-8 text-[#665d57]">
              In-person and online therapy for adults who feel overwhelmed,
              stuck in overthinking, or emotionally on edge — even when life
              looks &quot;fine&quot; on the outside.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a
                href="#contact"
                className="rounded-full bg-[#806c5c] px-7 py-3.5 text-center text-sm font-semibold text-white transition hover:bg-[#6f5b4d]"
              >
                Schedule a Consultation
              </a>

              <a
                href="#about"
                className="rounded-full border border-[#cfc1b5] px-7 py-3.5 text-center text-sm font-semibold text-[#594d45] transition hover:bg-white"
              >
                Learn More About Me
              </a>
            </div>

            <div className="mt-9 flex flex-wrap gap-x-6 gap-y-3 text-sm text-[#746a63]">
              <span>✓ In-person in Santa Monica</span>
              <span>✓ Secure online therapy</span>
              <span>✓ Adults throughout California</span>
            </div>
          </div>

          <div className="relative">
            <div className="absolute -inset-5 rounded-[3rem] bg-[#eee4da]" />

            <img
              src="/images/maya-hero.jpg"
              alt="Dr. Maya Reynolds"
              className="relative h-[520px] w-full rounded-[2.5rem] object-cover shadow-xl"
            />
          </div>
        </div>
      </section>

      {/* Introduction */}
      <section className="border-y border-[#e9e1da] bg-white">
        <div className="mx-auto max-w-5xl px-6 py-20 text-center lg:px-8">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#9a765b]">
            Therapy for Anxiety, Trauma, and Burnout
          </p>

          <h2 className="mt-4 text-3xl font-semibold tracking-tight text-[#403832] sm:text-4xl">
            You can feel better without having to keep pushing through.
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-[#665d57]">
            Many of the people I work with are thoughtful, capable, and driven
            — yet internally feel exhausted by constant worry, tension, or
            emotional pressure. Therapy can help you slow down, understand
            what your nervous system is responding to, and develop more
            sustainable ways of living and working.
          </p>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="bg-[#f4eee7] py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#9a765b]">
              Areas of Support
            </p>

            <h2 className="mt-3 text-3xl font-semibold tracking-tight text-[#403832] sm:text-4xl">
              Therapy that meets you where you are
            </h2>

            <p className="mt-5 text-lg leading-8 text-[#665d57]">
              My work focuses on helping adults understand what they are
              experiencing and develop more sustainable ways of living and
              working.
            </p>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {services.map((service) => (
              <article
                key={service.title}
                className="rounded-3xl bg-white p-8 shadow-sm transition hover:-translate-y-1 hover:shadow-md"
              >
                <div className="mb-6 h-10 w-10 rounded-full bg-[#e8d9cc]" />

                <h3 className="text-xl font-semibold text-[#403832]">
                  {service.title}
                </h3>

                <p className="mt-4 leading-7 text-[#665d57]">
                  {service.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* About */}
      <section id="about" className="bg-white py-20">
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-6 lg:grid-cols-2 lg:px-8">
          <div className="overflow-hidden rounded-[2.5rem] bg-[#eee4da]">
            <img
              src="/images/maya-hero.jpg"
              alt="Dr. Maya Reynolds, PsyD"
              className="h-[540px] w-full object-cover"
            />
          </div>

          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#9a765b]">
              About Dr. Maya Reynolds
            </p>

            <h2 className="mt-3 text-3xl font-semibold tracking-tight text-[#403832] sm:text-4xl">
              Hi, I&apos;m Dr. Maya Reynolds, PsyD
            </h2>

            <p className="mt-6 leading-8 text-[#665d57]">
              I&apos;m a licensed clinical psychologist based in Santa Monica,
              California. I work with adults who feel overwhelmed by anxiety,
              chronic stress, or the lingering effects of past experiences —
              even when they appear high-functioning on the outside.
            </p>

            <p className="mt-5 leading-8 text-[#665d57]">
              My approach is warm, collaborative, and grounded. I integrate
              evidence-based methods such as CBT, EMDR, mindfulness-based
              practices, and body-oriented techniques.
            </p>

            <p className="mt-5 leading-8 text-[#665d57]">
              Therapy is a space where you can slow down, better understand
              what you are experiencing, and work toward greater ease and
              regulation.
            </p>

            <a
              href="#contact"
              className="mt-8 inline-block rounded-full bg-[#806c5c] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[#6f5b4d]"
            >
              Connect With Me
            </a>
          </div>
        </div>
      </section>

      {/* Support */}
      <section className="bg-[#f4eee7] py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#9a765b]">
              You Don&apos;t Have to Do This Alone
            </p>

            <h2 className="mt-3 text-3xl font-semibold tracking-tight text-[#403832] sm:text-4xl">
              Therapy can be a space to slow down
            </h2>

            <p className="mt-5 text-lg leading-8 text-[#665d57]">
              You may benefit from support if you&apos;re experiencing:
            </p>
          </div>

          <div className="mx-auto mt-10 grid max-w-4xl gap-4 sm:grid-cols-2">
            {[
              "Persistent anxiety or overthinking",
              "Difficulty sleeping or relaxing",
              "Emotional exhaustion or burnout",
              "Lingering effects of past experiences",
              "Always feeling tense or guarded",
            ].map((item) => (
              <div
                key={item}
                className="flex items-center gap-4 rounded-2xl bg-white p-5 shadow-sm"
              >
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#e8d9cc] text-[#806c5c]">
                  ✓
                </span>

                <p className="text-[#514943]">{item}</p>
              </div>
            ))}
          </div>

          <p className="mx-auto mt-10 max-w-3xl text-center text-lg leading-8 text-[#665d57]">
            Therapy can be a space to slow down, feel more regulated, and
            relate to yourself with greater ease.
          </p>
        </div>
      </section>

      {/* Approach */}
      <section id="approach" className="bg-white py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#9a765b]">
              My Approach
            </p>

            <h2 className="mt-3 text-3xl font-semibold tracking-tight text-[#403832] sm:text-4xl">
              Warm, collaborative, and grounded
            </h2>

            <p className="mt-5 text-lg leading-8 text-[#665d57]">
              I integrate evidence-based approaches while paying attention to
              the whole person and what your nervous system may be responding
              to.
            </p>
          </div>

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {[
              {
                title: "CBT",
                text: "Evidence-based cognitive behavioral strategies to better understand patterns and develop sustainable ways of responding.",
              },
              {
                title: "EMDR",
                text: "Carefully paced trauma therapy focused on safety, stabilization, and nervous system regulation.",
              },
              {
                title: "Mindfulness",
                text: "Mindfulness-based practices that can support greater awareness, regulation, and ease.",
              },
              {
                title: "Body-Oriented Work",
                text: "Attention to the ways stress and emotional experiences can show up in the body and nervous system.",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="rounded-3xl border border-[#e8e0d8] p-7"
              >
                <div className="mb-5 h-10 w-10 rounded-full bg-[#e8d9cc]" />

                <h3 className="text-lg font-semibold text-[#403832]">
                  {item.title}
                </h3>

                <p className="mt-3 text-sm leading-7 text-[#665d57]">
                  {item.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Office */}
      <section id="office" className="bg-[#f4eee7] py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#8a6f5a]">
              Our Office
            </p>

            <h2 className="mt-3 text-3xl font-semibold tracking-tight text-[#403832] sm:text-4xl">
              A calm, private space to slow down
            </h2>

            <p className="mt-5 text-lg leading-8 text-[#665d57]">
              My Santa Monica office is designed to feel calm, private, and
              grounding—a space where you can slow down and focus on what
              you&apos;re experiencing without feeling rushed or observed.
            </p>
          </div>

          {/* Office Images */}
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            <div className="overflow-hidden rounded-3xl bg-white shadow-sm">
              <img
                src="/images/therapy-office.jpg"
                alt="Calm therapy office interior"
                className="h-72 w-full object-cover transition duration-500 hover:scale-105"
              />
            </div>

            <div className="overflow-hidden rounded-3xl bg-white shadow-sm">
              <img
                src="/images/office1.jpg"
                alt="Quiet consultation corner in a therapy office"
                className="h-72 w-full object-cover transition duration-500 hover:scale-105"
              />
            </div>

            <div className="overflow-hidden rounded-3xl bg-white shadow-sm">
              <img
                src="/images/office2.jpg"
                alt="Calm and welcoming therapy office detail"
                className="h-72 w-full object-cover transition duration-500 hover:scale-105"
              />
            </div>
          </div>

          {/* Office Details */}
          <div className="mt-10 grid gap-6 md:grid-cols-2">
            <div className="rounded-3xl bg-white p-8 shadow-sm">
              <p className="text-sm font-semibold uppercase tracking-[0.15em] text-[#9a765b]">
                In-Person
              </p>

              <h3 className="mt-3 text-xl font-semibold text-[#403832]">
                Santa Monica Office
              </h3>

              <p className="mt-3 leading-7 text-[#665d57]">
                Sessions take place in a quiet, thoughtfully arranged
                environment with natural light and a sense of ease.
              </p>

              <p className="mt-4 font-medium text-[#403832]">
                Santa Monica, California
              </p>
            </div>

            <div className="rounded-3xl bg-white p-8 shadow-sm">
              <p className="text-sm font-semibold uppercase tracking-[0.15em] text-[#9a765b]">
                Online
              </p>

              <h3 className="mt-3 text-xl font-semibold text-[#403832]">
                Secure Telehealth
              </h3>

              <p className="mt-3 leading-7 text-[#665d57]">
                I offer secure telehealth options for adults throughout
                California, giving you the flexibility to receive support
                online.
              </p>

              <p className="mt-4 font-medium text-[#403832]">
                Online therapy throughout California
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Professional Background */}
      <section className="bg-white py-20">
        <div className="mx-auto max-w-5xl px-6 lg:px-8">
          <div className="text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#9a765b]">
              Professional Background
            </p>

            <h2 className="mt-3 text-3xl font-semibold tracking-tight text-[#403832] sm:text-4xl">
              Experience grounded in evidence-based care
            </h2>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            <div className="rounded-3xl bg-[#f4eee7] p-7">
              <h3 className="text-lg font-semibold text-[#403832]">
                Education
              </h3>

              <p className="mt-3 leading-7 text-[#665d57]">
                PsyD — Doctor of Psychology
              </p>
            </div>

            <div className="rounded-3xl bg-[#f4eee7] p-7">
              <h3 className="text-lg font-semibold text-[#403832]">
                Licensure
              </h3>

              <p className="mt-3 leading-7 text-[#665d57]">
                Licensed Clinical Psychologist
              </p>
            </div>

            <div className="rounded-3xl bg-[#f4eee7] p-7">
              <h3 className="text-lg font-semibold text-[#403832]">
                Clinical Approach
              </h3>

              <p className="mt-3 leading-7 text-[#665d57]">
                CBT, EMDR, mindfulness-based practices, and body-oriented
                techniques.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="bg-[#f4eee7] py-20">
        <div className="mx-auto max-w-4xl px-6 lg:px-8">
          <div className="text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#9a765b]">
              Frequently Asked Questions
            </p>

            <h2 className="mt-3 text-3xl font-semibold tracking-tight text-[#403832] sm:text-4xl">
              Questions you may have
            </h2>
          </div>

          <div className="mt-10 space-y-4">
            {faqs.map((faq, index) => {
              const isOpen = openFaq === index;

              return (
                <div
                  key={faq.question}
                  className="overflow-hidden rounded-2xl bg-white shadow-sm"
                >
                  <button
                    type="button"
                    onClick={() => setOpenFaq(isOpen ? null : index)}
                    className="flex w-full items-center justify-between gap-5 px-6 py-5 text-left"
                  >
                    <span className="font-semibold text-[#403832]">
                      {faq.question}
                    </span>

                    <span className="text-2xl font-light text-[#806c5c]">
                      {isOpen ? "−" : "+"}
                    </span>
                  </button>

                  {isOpen && (
                    <div className="border-t border-[#eee6df] px-6 py-5">
                      <p className="leading-7 text-[#665d57]">{faq.answer}</p>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section id="contact" className="bg-[#806c5c] py-20 text-white">
        <div className="mx-auto max-w-4xl px-6 text-center lg:px-8">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#eadfd5]">
            Take the Next Step
          </p>

          <h2 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">
            Begin Therapy in Santa Monica or Online
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-[#f5eee8]">
            If you&apos;re feeling ready to explore therapy, this can be a
            space to slow down, feel supported, and begin making sense of
            what you&apos;re experiencing. I&apos;d be happy to connect and
            see whether working together feels like a good fit.
          </p>

          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <a
              href="mailto:contact@drmayareynolds.com"
              className="rounded-full bg-white px-7 py-3.5 text-sm font-semibold text-[#806c5c] transition hover:bg-[#f5eee8]"
            >
              Contact Dr. Reynolds
            </a>

            <a
              href="tel:+13105554827"
              className="rounded-full border border-white/50 px-7 py-3.5 text-sm font-semibold text-white transition hover:bg-white/10"
            >
              (310) 555-4827
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#342e2a] text-[#ddd3ca]">
        <div className="mx-auto max-w-7xl px-6 py-14 lg:px-8">
          <div className="grid gap-10 md:grid-cols-3">
            <div>
              <h3 className="text-xl font-semibold text-white">
                Dr. Maya Reynolds, PsyD
              </h3>

              <p className="mt-3 text-sm text-[#bdb1a8]">
                Licensed Clinical Psychologist
              </p>

              <p className="mt-5 text-sm leading-7 text-[#bdb1a8]">
                Anxiety, trauma, burnout, and chronic stress therapy for adults
                in Santa Monica and throughout California.
              </p>
            </div>

            <div>
              <h3 className="font-semibold text-white">Contact</h3>

              <div className="mt-4 space-y-2 text-sm text-[#bdb1a8]">
                <p>123th Street 45 W</p>
                <p>Santa Monica, CA 90401</p>
                <p>contact@drmayareynolds.com</p>
                <p>(310) 555-4827</p>
                <p>Monday-Friday · 10am-6pm</p>
              </div>
            </div>

            <div>
              <h3 className="font-semibold text-white">Explore</h3>

              <div className="mt-4 space-y-2 text-sm">
                <a
                  href="#top"
                  className="block text-[#bdb1a8] transition hover:text-white"
                >
                  Home
                </a>

                <a
                  href="#contact"
                  className="block text-[#bdb1a8] transition hover:text-white"
                >
                  Contact
                </a>

                <a
                  href="#approach"
                  className="block text-[#bdb1a8] transition hover:text-white"
                >
                  Blog
                </a>
              </div>
            </div>
          </div>

          <div className="mt-12 border-t border-white/10 pt-6">
            <div className="flex flex-col gap-3 text-xs text-[#9e938b] sm:flex-row sm:items-center sm:justify-between">
              <p>
                © {new Date().getFullYear()} Dr. Maya Reynolds, PsyD. All
                rights reserved.
              </p>

              <div className="flex flex-wrap gap-4">
                <span>Privacy &amp; Cookies Policy</span>
                <span>Good Faith Estimate</span>
                <span>Website Terms &amp; Conditions</span>
                <span>Disclaimer</span>
              </div>
            </div>

            <p className="mt-4 text-xs text-[#81766f]">
              Website Template Credits: Go Bloom Creative
            </p>
          </div>
        </div>
      </footer>
    </main>
  );
}