'use client';

import { motion } from "framer-motion";
import { Phone, Mail, MapPin, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";

const contactMethods = [
  {
    icon: Phone,
    title: "Call Our Team",
    description: "Speak directly with our logistics specialists.",
    value: "+1 234 567 890",
    href: "tel:+1234567890",
    cta: "Call now",
  },
  {
    icon: Mail,
    title: "Email Us",
    description: "Share your requirements and receive a tailored plan.",
    value: "info@shravilogistics.com",
    href: "mailto:info@shravilogistics.com",
    cta: "Send email",
  },
  {
    icon: Clock,
    title: "Office Hours",
    description: "Available Monday to Friday, 9:00 AM – 6:00 PM IST.",
    value: "24/7 support for priority shipments",
    href: "#contact",
    cta: "Plan a call",
  },
];

export function ContactSection() {
  return (
    <section id="contact" className="bg-gradient-to-b from-white to-slate-50 py-24 dark:from-slate-950 dark:to-slate-900">
      <div className="mx-auto w-full max-w-6xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-3xl text-center"
        >
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-primary font-subheading">
            Contact Us
          </p>
          <h2 className="mt-4 text-3xl font-semibold text-slate-900 dark:text-white md:text-4xl">
            Let’s plan your next shipment
          </h2>
          <p className="mt-4 text-lg text-slate-600 dark:text-slate-300">
            Reach out to our team for quotes, partnership opportunities, or support with ongoing projects.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3"
        >
          {contactMethods.map((method) => (
            <motion.div
              key={method.title}
              whileHover={{ y: -6 }}
              className="card flex flex-col gap-4 border border-slate-100 p-6 text-left shadow-[0_20px_50px_rgba(15,23,42,0.08)] transition dark:border-slate-800 dark:bg-slate-900/60"
            >
              <method.icon className="h-10 w-10 text-primary" />
              <div>
                <h3 className="text-xl font-semibold text-slate-900 dark:text-white">{method.title}</h3>
                <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">
                  {method.description}
                </p>
              </div>
              <p className="text-lg font-semibold text-slate-900 dark:text-white">{method.value}</p>
              <Button href={method.href} variant="solid" className="mt-auto w-fit">
                {method.cta}
              </Button>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, delay: 0.25 }}
          className="mt-16 grid gap-8 rounded-3xl border border-slate-100 bg-white/70 p-8 shadow-[0_30px_60px_rgba(15,23,42,0.08)] backdrop-blur dark:border-slate-800 dark:bg-slate-900/70 md:grid-cols-2"
        >
          <div className="space-y-4">
            <h3 className="text-2xl font-semibold text-slate-900 dark:text-white">Visit our headquarters</h3>
            <p className="text-slate-600 dark:text-slate-300">
              Office No.317, 3rd Floor, Vishnu Complex Wing D, Plot 36, Sector 15, CBD Belapur, Navi Mumbai, Maharashtra 400614
            </p>
            <div className="flex items-center gap-3 text-slate-700 dark:text-slate-200">
              <MapPin className="h-5 w-5 text-primary" />
              <span>Schedule a visit and explore our operations hub.</span>
            </div>
          </div>
          <div className="flex flex-col gap-4 rounded-2xl bg-gradient-to-br from-primary to-primary-dark p-8 text-white">
            <p className="text-lg font-semibold">
              Need a tailored logistics strategy?
            </p>
            <p className="text-sm text-white/80">
              Share your cargo details and timelines—we’ll return with a detailed roadmap within one business day.
            </p>
            <div className="mt-auto flex flex-wrap gap-3">
              <Button href="mailto:info@shravilogistics.com" variant="ghost" className="bg-white/10 text-white hover:bg-white/20">
                Email our team
              </Button>
              <Button href="tel:+1234567890" variant="outline" className="border-white/70 text-white hover:border-white hover:bg-white/10">
                Speak now
              </Button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}


