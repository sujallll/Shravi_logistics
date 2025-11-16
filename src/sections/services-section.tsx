'use client';

import Image from "next/image";
import { motion } from "framer-motion";
import { services } from "@/data/content";
import { FlippingCard } from "@/components/ui/flipping-card";

export function ServicesSection() {
  return (
    <section id="what-we-do" className="bg-white py-24 dark:bg-slate-950">
      <div className="mx-auto w-full max-w-7xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-primary font-subheading">
            What we do
          </p>
          <h2 className="mt-3 text-3xl font-semibold text-slate-900 dark:text-white md:text-4xl">
            Our Services
          </h2>
          <p className="mt-4 text-base text-slate-600 dark:text-slate-300">
            Shravi Logistics provides end-to-end services across the lifecycle of critical
            assets — from project financing and design to delivery, operations, and maintenance.
          </p>
        </div>

        <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              className="flex justify-center"
            >
              <FlippingCard
                height={400}
                width={350}
                className="w-full"
                frontContent={
                  <div className="flex h-full flex-col bg-white dark:bg-slate-950">
                    <div className="relative h-48 w-full flex-shrink-0 overflow-hidden rounded-t-xl">
                      <Image
                        src={service.image}
                        alt={service.title}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div className="flex flex-1 items-center justify-center p-6">
                      <h3 className="text-center text-xl font-semibold text-slate-900 dark:text-white">
                        {service.title}
                      </h3>
                    </div>
                  </div>
                }
                backContent={
                  <div className="flex h-full flex-col justify-center bg-white p-6 dark:bg-slate-950">
                    <h3 className="mb-4 text-center text-xl font-semibold text-slate-900 dark:text-white">
                      {service.title}
                    </h3>
                    <p className="text-center text-sm leading-relaxed text-slate-600 dark:text-slate-300">
                      {service.description}
                    </p>
                  </div>
                }
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

