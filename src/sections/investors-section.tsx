'use client';

import { motion } from "framer-motion";

const investorHighlights = [
  {
    title: "Share price",
    value: "158.20 GBX",
    description: "Live as of 09:34 GMT"
  },
  {
    title: "Annual Report 2024",
    description:
      "Explore our latest financial results, sustainability performance, and governance updates.",
    action: { label: "Download PDF", href: "#" }
  },
  {
    title: "Investor contacts",
    description:
      "Reach out to our investor relations team for tailored insights and meetings.",
    action: { label: "Contact team", href: "#contact" }
  }
];

export function InvestorsSection() {
  return (
    <section id="investors" className="bg-surface py-24 text-slate-200">
      <div className="mx-auto w-full max-w-7xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-primary font-subheading">
            Investors
          </p>
          <h2 className="mt-3 text-3xl font-semibold text-accent md:text-4xl">
            Partnership for long-term value
          </h2>
          <p className="mt-4 text-base text-slate-200/80">
            Resilient and well-focused for our medium-term plan, Shravi Logistics delivers
            long-term value for investors through disciplined execution and transparent reporting.
          </p>
        </div>
        <div className="mt-16 grid gap-8 md:grid-cols-3">
          {investorHighlights.map((item, index) => (
            <motion.article
              key={item.title}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              className="card h-full rounded-[2rem] p-8"
            >
              <h3 className="text-lg font-semibold text-slate-900 dark:text-white">{item.title}</h3>
              {item.value && (
                <p className="mt-4 text-3xl font-semibold text-primary">{item.value}</p>
              )}
              <p className="mt-4 text-sm text-slate-600">{item.description}</p>
              {item.action && (
                <a
                  className="mt-6 inline-flex items-center text-sm font-semibold text-accent transition hover:text-primary dark:text-accent-light dark:hover:text-accent"
                  href={item.action.href}
                >
                  {item.action.label}
                </a>
              )}
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}

