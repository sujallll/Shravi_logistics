'use client';

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export function CTASection() {
  return (
    <section className="relative isolate overflow-hidden bg-slate-950 py-20 pb-32 text-white">
      <div
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.05'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
        }}
      />
      <div className="relative mx-auto w-full max-w-7xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="mx-auto max-w-3xl text-center"
        >
          <h2 className="text-3xl font-semibold md:text-4xl lg:text-5xl">
            Ready to Transform Your Logistics?
          </h2>
          <p className="mt-6 text-lg text-slate-200">
            Join hundreds of satisfied clients who trust Shravi Logistics for their
            infrastructure needs. Let&apos;s build something great together.
          </p>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
            <Button
              href="#contact"
              variant="solid"
              className="bg-primary text-white hover:bg-primary-dark"
              icon={<ArrowRight className="h-4 w-4" />}
            >
              Get Started Today
            </Button>
            <Button
              href="tel:080888357"
              variant="solid"
              className="bg-primary text-white hover:bg-primary-dark"
            >
              Call Us Now
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

