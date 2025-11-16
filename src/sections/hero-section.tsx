'use client';

import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

export function HeroSection() {
  const [trail, setTrail] = useState<Array<{ x: number; y: number; id: number }>>([]);
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);
  const trailIdRef = useRef(0);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (sectionRef.current) {
        const rect = sectionRef.current.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        
        setCursorPosition({ x, y });
        
        const newPoint = { x, y, id: trailIdRef.current++ };
        setTrail((prev) => [...prev.slice(-15), newPoint]); // Keep last 15 points for longer trail
      }
    };

    const handleMouseEnter = () => setIsHovering(true);
    const handleMouseLeave = () => {
      setIsHovering(false);
      setTrail([]);
    };

    const section = sectionRef.current;
    if (section) {
      section.addEventListener('mousemove', handleMouseMove);
      section.addEventListener('mouseenter', handleMouseEnter);
      section.addEventListener('mouseleave', handleMouseLeave);
    }

    return () => {
      if (section) {
        section.removeEventListener('mousemove', handleMouseMove);
        section.removeEventListener('mouseenter', handleMouseEnter);
        section.removeEventListener('mouseleave', handleMouseLeave);
      }
    };
  }, []);

  return (
    <section 
      ref={sectionRef}
      className="relative h-screen w-full overflow-hidden cursor-none"
    >
      <video
        autoPlay
        loop
        muted
        playsInline
        className="h-full w-full object-cover"
      >
        <source
          src="/images/Hailuo_Video_keep the background white and _446118019885981697.mp4"
          type="video/mp4"
        />
      </video>

      {/* Cursor Circle and Trail */}
      {isHovering && (
        <div className="pointer-events-none absolute inset-0 z-50">
          {/* Trail */}
          {trail.map((point, index) => {
            const opacity = (index + 1) / trail.length;
            const size = 2; // Thin trail dots
            return (
              <motion.div
                key={point.id}
                className="absolute rounded-full bg-primary"
                style={{
                  left: point.x,
                  top: point.y,
                  width: `${size}px`,
                  height: `${size}px`,
                  transform: 'translate(-50%, -50%)',
                  opacity: opacity * 0.6,
                }}
                initial={{ opacity: 0 }}
                animate={{ opacity: opacity * 0.6 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
              />
            );
          })}
          
          {/* Red Circle Cursor */}
          <motion.div
            className="absolute rounded-full bg-primary border-2 border-white"
            style={{
              left: cursorPosition.x,
              top: cursorPosition.y,
              width: '12px',
              height: '12px',
              transform: 'translate(-50%, -50%)',
            }}
            animate={{
              scale: [1, 1.1, 1],
            }}
            transition={{
              duration: 1,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        </div>
      )}
      
      {/* Content Overlay */}
      <div className="absolute inset-0 flex items-center justify-start">
        <div className="mx-auto w-full max-w-7xl px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="max-w-3xl text-left"
          >
            <h1 className="font-heading text-3xl font-semibold text-slate-900 md:text-4xl lg:text-5xl">
              Seamless Trade. Smarter Logistics.
            </h1>
            <p className="font-body mt-4 text-sm text-slate-600 md:text-base">
              Your trusted CHA and global logistics partner for end-to-end cargo movement.
            </p>
            <div className="mt-8">
              <Button
                href="#contact"
                variant="solid"
                className="font-body text-lg px-8 py-3"
              >
                Get a Quote
              </Button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

