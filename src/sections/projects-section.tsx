"use client";

import { useMemo, useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { projects } from "@/data/content";
import { Button } from "@/components/ui/button";

const categories = ["Logistics", "Infrastructure", "Community"] as const;

export function ProjectsSection() {
  const [activeCategory, setActiveCategory] = useState<(typeof categories)[number]>(
    "Logistics"
  );

  const activeProject = useMemo(
    () => projects.find((project) => project.category === activeCategory) ?? projects[0],
    [activeCategory]
  );

  return (
    <section id="projects" className="bg-white py-24 dark:bg-slate-950">
      <div className="mx-auto w-full max-w-7xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-primary font-subheading">
            Our projects
          </p>
          <h2 className="mt-3 text-3xl font-semibold text-accent md:text-4xl">
            Scaling infrastructure with purpose
          </h2>
          <p className="mt-4 text-base text-slate-200/80">
            From multi-modal freight corridors to community-first logistics hubs, our flagship
            programmes redefine what resilient infrastructure looks like.
          </p>
        </div>

        <div className="mt-10 flex flex-wrap justify-center gap-3">
          {categories.map((category) => (
            <button
              key={category}
              type="button"
              onClick={() => setActiveCategory(category)}
              className={`rounded-full border px-5 py-2 text-sm font-subheading font-semibold transition ${
                activeCategory === category
                  ? "border-primary bg-primary text-white shadow-lg"
                  : "border-accent/40 text-accent hover:border-primary hover:text-primary dark:border-accent-light/40 dark:text-accent-light"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="mt-16 grid gap-10 lg:grid-cols-2 lg:items-center">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeProject.title}
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -24 }}
              transition={{ duration: 0.4, ease: "easeOut" }}
              className="relative aspect-[4/3] overflow-hidden rounded-[2rem] shadow-deep"
            >
              <Image
                src={activeProject.image}
                alt={activeProject.title}
                fill
                className="object-cover"
              />
            </motion.div>
          </AnimatePresence>

          <AnimatePresence mode="wait">
            <motion.div
              key={`${activeProject.title}-content`}
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -24 }}
              transition={{ duration: 0.4, ease: "easeOut", delay: 0.1 }}
              className="space-y-6"
            >
              <div className="inline-flex items-center gap-2 rounded-full bg-accent-light/80 px-3 py-1 text-xs font-semibold uppercase tracking-[0.3em] text-accent">
                {activeProject.category}
              </div>
              <h3 className="text-3xl font-semibold text-accent dark:text-white">
                {activeProject.title}
              </h3>
              <p className="text-base text-slate-200/80">
                {activeProject.description}
              </p>
              <ul className="space-y-3 text-sm text-slate-200/80">
                {activeProject.highlights.map((item) => (
                  <li key={item} className="flex gap-3">
                    <span className="mt-2 h-2 w-2 rounded-full bg-gradient-to-br from-primary to-primary-light" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <Button href="#" variant="outline">
                Read the spotlight
              </Button>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}

