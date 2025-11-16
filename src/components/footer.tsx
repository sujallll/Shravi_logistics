import Link from "next/link";
import { Linkedin, Facebook, Instagram, Mail, Phone, MapPin } from "lucide-react";

const quickLinks = [
  { label: "Home", href: "/" },
  { label: "About us", href: "#about" },
  { label: "Services", href: "#what-we-do" },
  { label: "Contact us", href: "#contact" }
];

const socials = [
  { icon: Facebook, label: "Facebook", href: "https://facebook.com" },
  { icon: Instagram, label: "Instagram", href: "https://instagram.com" },
  { icon: Linkedin, label: "LinkedIn", href: "https://linkedin.com" }
];

export function Footer() {
  return (
    <footer id="contact" className="relative bg-slate-950 text-white">
      <div className="mx-auto w-full max-w-7xl px-6 py-16">
        <div className="grid gap-12 lg:grid-cols-3">
          {/* Quick Links */}
          <div className="text-center">
            <Link href="/" className="inline-flex items-center gap-2 mb-6">
              <span className="font-heading text-xl font-bold text-primary">
                SHRAVI
              </span>
              <span className="font-heading text-xs font-semibold text-white">
                logistics
              </span>
            </Link>
            <h4 className="text-lg font-semibold text-white mb-4">Quick Links</h4>
            <ul className="space-y-3 text-sm text-slate-400">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="transition hover:text-primary-light"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Address */}
          <div className="text-center">
            <h4 className="text-lg font-semibold text-white mb-4">Address</h4>
            <ul className="space-y-3 text-sm text-slate-400">
              <li className="flex items-start justify-center gap-2">
                <MapPin className="h-4 w-4 mt-0.5 flex-shrink-0" />
                <div className="text-left">
                  <p>Office No.317, 3rd Floor</p>
                  <p>Vishnu Complex Wing D</p>
                  <p>Plot No. 36 & Sector No.15</p>
                  <p>CBD Belapur, Navi Mumbai</p>
                  <p>Raigad, Maharashtra - 400614</p>
                </div>
              </li>
              <li className="flex items-center justify-center gap-2">
                <Phone className="h-4 w-4 flex-shrink-0" />
                <Link href="tel:+1234567890" className="transition hover:text-primary-light">
                  +1 234 567 890
                </Link>
              </li>
              <li className="flex items-center justify-center gap-2">
                <Mail className="h-4 w-4 flex-shrink-0" />
                <Link href="mailto:info@shravilogistics.com" className="transition hover:text-primary-light">
                  info@shravilogistics.com
                </Link>
              </li>
            </ul>
          </div>

          {/* Socials */}
          <div className="text-center">
            <h4 className="text-lg font-semibold text-white mb-4">Follow Us</h4>
            <ul className="space-y-3 text-sm text-slate-400">
              {socials.map((social) => (
                <li key={social.label}>
                  <Link
                    href={social.href}
                    className="flex items-center justify-center gap-2 transition hover:text-primary-light"
                    aria-label={social.label}
                  >
                    <social.icon className="h-4 w-4" />
                    {social.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-12 border-t border-white/10 pt-8">
          <div className="flex flex-col items-center justify-between gap-4 text-sm text-slate-500 sm:flex-row">
            <div>© {new Date().getFullYear()} Shravi Logistics. All rights reserved.</div>
            <div>Credits</div>
          </div>
        </div>
      </div>

      {/* SHRAVI Watermark */}
      <div className="absolute bottom-0 left-0 right-0 overflow-hidden pointer-events-none">
        <div className="text-center text-[400px] font-bold text-white/5 leading-none select-none" style={{ fontFamily: 'var(--font-heading)' }}>
          SHRAVI
        </div>
      </div>
    </footer>
  );
}

