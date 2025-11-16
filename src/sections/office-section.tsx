'use client';

import { motion } from "framer-motion";
import { MapPin, Building, Navigation } from "lucide-react";

export function OfficeSection() {
  const address = {
    floor: "3rd floor",
    office: "Office No.317",
    building: "Vishnu Complex Wing D",
    plot: "Plot No. 36 & sector No.15",
    locality: "CBD Belapur",
    city: "Navi Mumbai",
    district: "Raigad",
    state: "Maharashtra",
    pincode: "400614"
  };

  // Google Maps embed URL - you can replace this with the actual coordinates
  const mapUrl = `https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3771.123456789!2d73.0391234!3d19.0171234!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTnCsDAxJzAxLjYiTiA3M8KwMDInMjAuOCJF!5e0!3m2!1sen!2sin!4v1234567890123!5m2!1sen!2sin`;

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
            Our Office
          </p>
          <h2 className="mt-3 text-3xl font-semibold text-slate-900 dark:text-white md:text-4xl">
            Visit Our Office
          </h2>
          <p className="mt-4 text-base text-slate-600 dark:text-slate-300">
            We&apos;re located in the heart of Navi Mumbai. Come visit us or get in touch.
          </p>
        </motion.div>

        <div className="mt-16 grid gap-8 lg:grid-cols-2">
          {/* Address Card */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
            className="card p-8"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary">
                <MapPin className="h-6 w-6" />
              </div>
              <h3 className="text-2xl font-semibold text-slate-900 dark:text-white">
                Office Address
              </h3>
            </div>

            <div className="space-y-4 text-slate-600 dark:text-slate-300">
              <div className="flex items-start gap-3">
                <Building className="h-5 w-5 mt-0.5 flex-shrink-0 text-primary" />
                <div>
                  <p className="font-semibold text-slate-900 dark:text-white">{address.building}</p>
                  <p>{address.floor}, {address.office}</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Navigation className="h-5 w-5 mt-0.5 flex-shrink-0 text-primary" />
                <div>
                  <p>{address.plot}</p>
                  <p>{address.locality}</p>
                  <p>{address.city}, {address.district}</p>
                  <p>{address.state} - {address.pincode}</p>
                </div>
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-slate-200 dark:border-slate-800">
              <a
                href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
                  `${address.building}, ${address.plot}, ${address.locality}, ${address.city}, ${address.state} ${address.pincode}`
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-white transition hover:bg-primary-dark"
              >
                <MapPin className="h-4 w-4" />
                Get Directions
              </a>
            </div>
          </motion.div>

          {/* Map */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
            className="overflow-hidden rounded-2xl"
          >
            <iframe
              src={mapUrl}
              width="100%"
              height="100%"
              style={{ minHeight: "400px", border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Shravi Logistics Office Location"
              className="w-full h-full"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}

