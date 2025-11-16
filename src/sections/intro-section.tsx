'use client';

import Image from "next/image";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

export function IntroSection() {
  return (
    <section
      id="about"
      className="relative isolate overflow-hidden bg-surface py-24 text-slate-200"
    >
      <div className="mx-auto grid w-full max-w-7xl items-center gap-12 px-6 lg:grid-cols-[1.1fr_1fr_0.7fr]">
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="space-y-6"
        >
          <h2 className="text-3xl font-semibold text-accent md:text-4xl">
            We build, connect, and transform
          </h2>
          <p className="text-base leading-relaxed text-slate-200/80">
            For over two decades, Shravi Logistics has supported public and private
            sector partners with the movement of goods, construction of critical
            infrastructure, and development of resilient communities across the UK.
          </p>
          <Button href="#contact" variant="outline">
            Talk to a specialist
          </Button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="relative aspect-[4/5] w-full overflow-hidden rounded-[2rem] shadow-deep"
        >
          <Image
            src="https://images.unsplash.com/photo-1541888954282-5a4c24e8e7f3?auto=format&fit=crop&w=1000&q=80"
            alt="Logistics engineer on site"
            fill
            className="object-cover"
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="rounded-[2rem] bg-ocean text-white p-8 shadow-deep dark:bg-slate-900"
        >
          <h3 className="text-lg font-semibold tracking-tight">Our purpose</h3>
          <p className="mt-4 text-sm leading-relaxed text-white/90">
            Shravi’s purpose is to sustainably deliver infrastructure that is vital
            to the UK. We invest in people, technology, and partnerships to accelerate
            greener growth, ensuring every project leaves a positive legacy.
          </p>
        </motion.div>
      </div>
    </section>
  );
}

