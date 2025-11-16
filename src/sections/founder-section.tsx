'use client';

import Image from "next/image";
import { motion } from "framer-motion";

export function FounderSection() {
  return (
    <section className="bg-white py-24 dark:bg-slate-950">
      <div className="mx-auto w-full max-w-7xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="mx-auto max-w-2xl text-center"
        >
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-primary font-subheading">
            Meet our founder
          </p>
          <h2 className="mt-3 text-3xl font-semibold text-slate-900 dark:text-white md:text-4xl">
            Meet our founder
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
          className="mx-auto mt-12 max-w-4xl"
        >
          <div className="flex flex-col items-center gap-8 md:flex-row md:items-start">
            <div className="group relative h-64 w-64 flex-shrink-0 overflow-hidden rounded-2xl bg-slate-200 transition-all duration-500 hover:bg-primary p-2">
              <div className="relative h-full w-full rounded-xl overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=400&q=80"
                  alt="Founder"
                  fill
                  className="object-cover grayscale transition-all duration-500 group-hover:grayscale-0 group-hover:scale-110"
                />
              </div>
            </div>
            <div className="flex-1 text-center md:text-left">
              <h3 className="text-2xl font-semibold text-slate-900 dark:text-white">
                Founder Name
              </h3>
              <p className="mt-2 text-lg text-primary font-semibold">
                Founder & CEO
              </p>
              <p className="mt-6 text-base leading-relaxed text-slate-600 dark:text-slate-300">
                Add founder description here. This section can include information about the
                founder&apos;s background, vision, and commitment to Shravi Logistics.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

