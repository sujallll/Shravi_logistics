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
            <div className="group relative aspect-[3/4] w-full max-w-[18rem] sm:max-w-[20rem] lg:max-w-[22rem] flex-shrink-0 overflow-hidden rounded-2xl bg-slate-200 transition-all duration-500 hover:bg-primary p-2">
              <div className="relative h-full w-full rounded-xl overflow-hidden">
                <Image
                  src="/images/founder.png"
                  alt="Founder"
                  fill
                  className="object-cover object-top grayscale transition-all duration-500 group-hover:grayscale-0 group-hover:scale-105"
                />
              </div>
            </div>
            <div className="flex-1 text-center md:text-left">
              <h3 className="text-2xl font-semibold text-slate-900 dark:text-white">
                Sandeep Singh
              </h3>
              <p className="mt-2 text-lg text-primary font-semibold">
                Founder
              </p>
              <p className="mt-6 text-base leading-relaxed text-slate-600 dark:text-slate-300">
                With over 20 years of industry expertise, Sandeep Singh leads SHRAVI LOGISTICS with a
                deep-rooted understanding of global trade and customs operations. Throughout his two-decade
                career, he has mastered the complexities of supply chain management, building a reputation
                for operational excellence and integrity. His leadership is focused on delivering
                high-performance, transparent solutions that turn logistics into a strategic advantage for
                every client.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

