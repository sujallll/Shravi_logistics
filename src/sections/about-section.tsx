'use client';

import { motion } from "framer-motion";
import { companyInfo, mission, values, whyChooseUs } from "@/data/content";
import { CheckCircle2 } from "lucide-react";

function ValuesSection() {
  return (
    <div className="mt-20">
      <motion.h3
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-60px" }}
        transition={{ duration: 0.6 }}
        className="text-center text-2xl font-semibold text-slate-900 dark:text-white md:text-3xl"
      >
        Our Values
      </motion.h3>
      <div className="mt-12 flex flex-col gap-8 max-w-2xl mx-auto">
        {values.map((value, index) => (
          <motion.div
            key={value.title}
            initial={{ opacity: 0, x: -100, scale: 0.9 }}
            whileInView={{ 
              opacity: 1, 
              x: 0, 
              scale: 1,
            }}
            viewport={{ once: false, margin: "-100px" }}
            transition={{
              duration: 0.6,
              delay: index * 0.2,
              ease: "easeOut"
            }}
            className="card p-6 text-center border-2 border-transparent transition-all duration-500 relative overflow-visible"
          >
            <motion.div
              className="absolute inset-0 rounded-3xl border-2 border-primary pointer-events-none z-0"
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ 
                opacity: [0, 1, 0.7, 0],
                scale: [0.95, 1.05, 1, 1]
              }}
              viewport={{ once: false, margin: "-100px" }}
              transition={{
                duration: 1.5,
                delay: index * 0.2,
                ease: "easeOut"
              }}
              style={{
                boxShadow: '0 0 30px rgba(220, 38, 38, 0.6)'
              }}
            />
            <h4 className="text-xl font-semibold text-slate-900 dark:text-white relative z-10">
              {value.title}
            </h4>
            <p className="mt-3 text-sm text-slate-600 dark:text-slate-300 relative z-10">
              {value.description}
            </p>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

export function AboutSection() {
  return (
    <section id="about" className="bg-white py-24 dark:bg-slate-950">
      <div className="mx-auto w-full max-w-7xl px-6">
        {/* Company Info */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="mx-auto max-w-4xl"
        >
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-primary font-subheading text-center">
            About Us
          </p>
          <h2 className="mt-3 text-center text-3xl font-semibold text-slate-900 dark:text-white md:text-4xl">
            {companyInfo.title}
          </h2>
          <p className="mt-6 text-lg leading-relaxed text-slate-600 dark:text-slate-300">
            {companyInfo.description}
          </p>
        </motion.div>

        {/* Mission */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
          className="mx-auto mt-20 max-w-3xl text-center"
        >
          <h2 className="text-3xl font-semibold text-slate-900 dark:text-white md:text-4xl">
            {mission.title}
          </h2>
          <p className="mt-6 text-lg leading-relaxed text-slate-600 dark:text-slate-300">
            {mission.description}
          </p>
        </motion.div>

        {/* Values */}
        <ValuesSection />

        {/* Why Choose Us */}
        <div className="mt-24">
          <h3 className="text-center text-2xl font-semibold text-slate-900 dark:text-white md:text-3xl">
            Why Choose Us
          </h3>
          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {whyChooseUs.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="card p-6"
              >
                <div className="flex items-start gap-4">
                  <CheckCircle2 className="h-6 w-6 flex-shrink-0 text-primary" />
                  <div>
                    <h4 className="text-lg font-semibold text-slate-900 dark:text-white">
                      {item.title}
                    </h4>
                    <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">
                      {item.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

