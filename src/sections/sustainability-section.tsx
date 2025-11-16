'use client';

import Image from "next/image";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { sustainabilityStats } from "@/data/content";

export function SustainabilitySection() {
  return (
    <section
      id="sustainability"
      className="relative isolate overflow-hidden bg-ocean py-24 text-white dark:bg-slate-950"
    >
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900 via-slate-900/90 to-slate-900/70" />
      </div>
      <div className="mx-auto w-full max-w-7xl px-6">
        <div className="grid gap-12 lg:grid-cols-[1fr_1.3fr] lg:items-center">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="space-y-5"
          >
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-primary-light font-subheading">
              Sustainability
            </p>
            <h2 className="text-3xl font-semibold md:text-4xl">
              Building a sustainable world
            </h2>
            <p className="text-base text-slate-200">
              Committed to science-based targets, Shravi Logistics is driving down carbon
              emissions across our supply chain and investing in biodiversity enhancements
              at every site we deliver.
            </p>
            <Button href="#" variant="ghost">
              Sustainability report
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5, ease: "easeOut", delay: 0.1 }}
            className="space-y-8"
          >
            <div className="relative aspect-[16/9] overflow-hidden rounded-[2rem] shadow-deep">
              <Image
                src="https://images.unsplash.com/photo-1489515217757-5fd1be406fef?auto=format&fit=crop&w=1600&q=80"
                alt="Sustainable building"
                fill
                className="object-cover"
              />
            </div>
            <div className="grid gap-6 md:grid-cols-3">
              {sustainabilityStats.map((stat) => (
                <div
                  key={stat.label}
                  className="card-dark space-y-2 rounded-[1.75rem] p-6 text-center"
                >
                  <p className="text-3xl font-semibold text-primary-light">
                    {stat.value}
                  </p>
                  <p className="text-sm text-white/70">{stat.label}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

