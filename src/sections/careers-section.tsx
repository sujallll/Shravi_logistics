'use client';

import Image from "next/image";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

export function CareersSection() {
  return (
    <section id="careers" className="bg-surface py-24 text-slate-200">
      <div className="mx-auto grid w-full max-w-7xl items-center gap-12 px-6 lg:grid-cols-2">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="space-y-6"
        >
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-primary font-subheading">
            People
          </p>
          <h2 className="text-3xl font-semibold text-accent md:text-4xl">
            Shape the future of logistics
          </h2>
          <p className="text-base text-slate-200/80">
            Shravi Logistics is building a diverse workforce of curious, talented people
            who are passionate about engineering a better future. From graduates to experienced
            experts, we offer clear pathways for careers that make a meaningful difference.
          </p>
          <Button href="#contact" variant="solid">
            Explore careers
          </Button>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0.92 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="relative aspect-[4/3] overflow-hidden rounded-[2rem] shadow-deep"
        >
          <Image
            src="https://images.unsplash.com/photo-1545239351-1141bd82e8a6?auto=format&fit=crop&w=1400&q=80"
            alt="Team members smiling"
            fill
            className="object-cover"
          />
        </motion.div>
      </div>
    </section>
  );
}

