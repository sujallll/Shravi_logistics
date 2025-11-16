'use client';

import { motion } from "framer-motion";

export function VideoSection() {
  return (
    <section className="relative isolate overflow-hidden bg-slate-900 py-16">
      <div className="mx-auto w-full max-w-5xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="mx-auto max-w-3xl text-center"
        >
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-primary-light font-subheading">
            Showreel
          </p>
          <h2 className="mt-3 text-2xl font-semibold text-white md:text-3xl">
            See Shravi Logistics in Action
          </h2>
          <p className="mt-4 text-base text-slate-300">
            Discover how we deliver world-class logistics solutions across the UK
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
          className="relative mt-8 aspect-video overflow-hidden rounded-xl shadow-deep"
        >
          <video
            className="h-full w-full object-cover"
            controls
            autoPlay
            loop
            muted
            playsInline
          >
            <source
              src="/images/Shravi_Logistics_Showreel_Video_Creation (online-video-cutter.com).mp4"
              type="video/mp4"
            />
          </video>
        </motion.div>
      </div>
    </section>
  );
}

