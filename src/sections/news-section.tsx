'use client';

import Image from "next/image";
import { motion } from "framer-motion";
import { news } from "@/data/content";
import { Button } from "@/components/ui/button";

export function NewsSection() {
  return (
    <section id="news" className="bg-surface py-24 text-slate-200">
      <div className="mx-auto w-full max-w-7xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-primary font-subheading">
            Latest news
          </p>
          <h2 className="mt-3 text-3xl font-semibold text-accent md:text-4xl">
            Stories from across the UK
          </h2>
          <p className="mt-4 text-base text-slate-200/80">
            Discover how Shravi Logistics is partnering with communities, clients, and innovators
            to deliver the next era of resilient infrastructure.
          </p>
        </div>

        <div className="mt-16 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {news.map((item, index) => (
            <motion.article
              key={item.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              className="card-dark overflow-hidden rounded-[2rem]"
            >
              <div className="relative h-44 w-full">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="space-y-3 p-6">
                <h3 className="text-lg font-semibold">{item.title}</h3>
                <p className="text-sm text-white/60">{item.date}</p>
              </div>
            </motion.article>
          ))}
        </div>

        <div className="mt-10 flex justify-center">
          <Button href="#" variant="outline" className="border-accent text-accent dark:border-accent-light dark:text-accent-light">
            All stories
          </Button>
        </div>
      </div>
    </section>
  );
}

