'use client';

import { useEffect, useState, useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowDown, Leaf, Award, Box, Calendar } from 'lucide-react';
import Link from 'next/link';

// Animated bee SVG
const BeeSVG = () => (
  <svg
    viewBox="0 0 80 60"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className="w-full h-full"
    aria-hidden="true"
  >
    {/* Body */}
    <ellipse cx="40" cy="35" rx="14" ry="9" fill="#D4A017" />
    {/* Stripes */}
    <ellipse cx="40" cy="35" rx="14" ry="9" fill="none" stroke="#1A1A1A" strokeWidth="0.5" strokeOpacity="0.3" />
    <rect x="30" y="29" width="5" height="12" rx="2" fill="#1A1A1A" fillOpacity="0.5" />
    <rect x="39" y="28" width="5" height="14" rx="2" fill="#1A1A1A" fillOpacity="0.5" />
    <rect x="48" y="29" width="4" height="12" rx="2" fill="#1A1A1A" fillOpacity="0.5" />
    {/* Head */}
    <circle cx="54" cy="33" r="7" fill="#D4A017" />
    <circle cx="57" cy="30" r="1.5" fill="#1A1A1A" />
    {/* Antennae */}
    <line x1="56" y1="27" x2="60" y2="22" stroke="#1A1A1A" strokeWidth="1" strokeLinecap="round" />
    <line x1="58" y1="28" x2="64" y2="24" stroke="#1A1A1A" strokeWidth="1" strokeLinecap="round" />
    <circle cx="60" cy="21.5" r="1.5" fill="#F5C842" />
    <circle cx="64" cy="23.5" r="1.5" fill="#F5C842" />
    {/* Wings */}
    <ellipse cx="36" cy="22" rx="12" ry="7" fill="white" fillOpacity="0.65" transform="rotate(-20 36 22)" />
    <ellipse cx="45" cy="20" rx="12" ry="6" fill="white" fillOpacity="0.55" transform="rotate(-15 45 20)" />
    {/* Stinger */}
    <path d="M26 35 L20 37 L26 39" fill="#C8920D" />
  </svg>
);

// Floating particle
interface Particle {
  id: number;
  x: number;
  y: number;
  size: number;
  delay: number;
  duration: number;
  rotation: number;
  isHex: boolean;
}

const stats = [
  { label: "années d'apiculture", value: '37', icon: Calendar },
  { label: 'ruches actives', value: '12', icon: Box },
  { label: 'tonnes récoltées', value: '4', icon: Leaf },
  { label: 'Certification Bio', value: '✓', icon: Award },
];

export default function HeroSection() {
  const [particles, setParticles] = useState<Particle[]>([]);
  const heroRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ['start start', 'end start'],
  });
  const yParallax = useTransform(scrollYProgress, [0, 1], ['0%', '30%']);
  const opacityFade = useTransform(scrollYProgress, [0, 0.6], [1, 0]);

  useEffect(() => {
    const generated: Particle[] = Array.from({ length: 22 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 10 + 5,
      delay: Math.random() * 8,
      duration: Math.random() * 10 + 12,
      rotation: Math.random() * 360,
      isHex: Math.random() > 0.5,
    }));
    setParticles(generated);
  }, []);

  return (
    <section
      ref={heroRef}
      className="relative min-h-screen flex flex-col overflow-hidden"
      style={{
        background: 'linear-gradient(160deg, #0D0500 0%, #1A0A00 20%, #2D1500 45%, #3D1F00 65%, #5C2E00 85%, #7A3B0A 100%)',
      }}
    >
      {/* Radial glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse 60% 60% at 50% 40%, rgba(212,160,23,0.12) 0%, transparent 70%)',
        }}
      />

      {/* Floating particles */}
      {particles.map((p) => (
        <motion.div
          key={p.id}
          className="absolute pointer-events-none"
          style={{
            left: `${p.x}%`,
            top: `${p.y}%`,
            width: p.size,
            height: p.size,
          }}
          animate={{
            y: [0, -80, -160, -240],
            rotate: [p.rotation, p.rotation + 180, p.rotation + 360],
            opacity: [0, 0.5, 0.3, 0],
          }}
          transition={{
            duration: p.duration,
            delay: p.delay,
            repeat: Infinity,
            ease: 'linear',
          }}
        >
          {p.isHex ? (
            <div
              className="hexagon w-full h-full"
              style={{
                backgroundColor: `rgba(245, 200, 66, ${0.15 + Math.random() * 0.2})`,
              }}
            />
          ) : (
            <div
              className="rounded-full w-full h-full"
              style={{
                backgroundColor: `rgba(212, 160, 23, ${0.2 + Math.random() * 0.2})`,
              }}
            />
          )}
        </motion.div>
      ))}

      {/* Animated bee */}
      <motion.div
        className="absolute w-20 h-16 pointer-events-none"
        style={{ top: '22%', left: '-80px' }}
        animate={{
          x: ['0vw', '25vw', '55vw', '80vw', '115vw'],
          y: [0, -35, 20, -25, 5],
          rotate: [0, 8, -4, 10, 0],
        }}
        transition={{
          duration: 22,
          repeat: Infinity,
          ease: 'easeInOut',
          repeatDelay: 5,
        }}
      >
        <BeeSVG />
      </motion.div>

      {/* Main content */}
      <motion.div
        className="relative z-10 flex flex-col items-center justify-center flex-1 text-center px-4 pt-24 pb-32"
        style={{ y: yParallax, opacity: opacityFade }}
      >
        {/* Pre-title badge */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-honey/30 bg-honey/10 backdrop-blur-sm mb-8"
        >
          <span className="text-honey text-xs font-medium tracking-widest uppercase">
            Rucher familial depuis 1987
          </span>
          <span className="w-1.5 h-1.5 rounded-full bg-honey animate-pulse" />
        </motion.div>

        {/* Main heading */}
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="font-playfair font-black leading-none mb-4"
        >
          <span className="block text-cream text-6xl sm:text-7xl md:text-8xl lg:text-9xl tracking-tight">
            Le Rucher
          </span>
          <span
            className="block text-5xl sm:text-6xl md:text-7xl lg:text-8xl tracking-tight text-gradient-honey"
            style={{
              background: 'linear-gradient(135deg, #F5C842 0%, #E8A020 40%, #D4A017 70%, #C8920D 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
            }}
          >
            des Nectarines
          </span>
        </motion.h1>

        {/* Tagline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.7 }}
          className="font-inter text-cream/65 text-lg sm:text-xl md:text-2xl max-w-2xl mx-auto leading-relaxed mb-12 mt-2"
        >
          De la ruche à votre table.{' '}
          <span className="text-honey/90">Un miel vivant</span>, un héritage transmis.
        </motion.p>

        {/* CTA buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.6 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <Link
            href="/boutique"
            className="group relative inline-flex items-center gap-2 px-8 py-4 rounded-full font-semibold text-dark bg-honey overflow-hidden transition-all duration-300 hover:shadow-2xl hover:shadow-honey/40 hover:-translate-y-1"
          >
            <span className="relative z-10">Découvrir nos miels</span>
            <motion.div
              className="absolute inset-0 bg-honey-light"
              initial={{ x: '-100%' }}
              whileHover={{ x: 0 }}
              transition={{ duration: 0.3 }}
            />
            <span className="relative z-10 text-lg">→</span>
          </Link>

          <Link
            href="/adoption-ruche"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full font-semibold text-cream border-2 border-honey/50 bg-transparent backdrop-blur-sm hover:border-honey hover:bg-honey/10 transition-all duration-300 hover:-translate-y-1"
          >
            Adopter une ruche
          </Link>
        </motion.div>
      </motion.div>

      {/* Honey drip effect at bottom */}
      <div className="absolute bottom-0 left-0 right-0 pointer-events-none" style={{ zIndex: 5 }}>
        <svg
          viewBox="0 0 1440 80"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="none"
          className="w-full"
        >
          <path
            d="M0,30 C120,30 120,70 240,65 C280,63 300,45 320,65 C340,80 360,80 380,65 C400,48 420,30 480,30 C540,30 540,70 600,65 C630,63 645,45 660,65 C675,80 695,80 715,65 C735,48 755,30 820,30 C880,30 880,70 940,65 C965,63 978,45 990,65 C1002,80 1020,80 1040,65 C1060,48 1080,30 1140,30 C1200,30 1200,70 1260,65 C1285,63 1300,50 1320,65 C1340,80 1360,80 1380,68 L1440,50 L1440,80 L0,80 Z"
            fill="#FFF8E7"
            fillOpacity="0.98"
          />
        </svg>
      </div>

      {/* Stats bar */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.2, duration: 0.7 }}
        className="relative z-10 w-full pb-16 px-4"
      >
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {stats.map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.3 + i * 0.1, duration: 0.5 }}
                className="text-center p-4 rounded-2xl bg-honey/8 backdrop-blur-sm border border-honey/15"
              >
                <div className="font-playfair text-3xl font-black text-honey mb-0.5">
                  {stat.value}
                </div>
                <div className="text-xs text-cream/55 leading-tight">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.8 }}
        className="absolute bottom-32 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 z-10"
      >
        <span className="text-cream/30 text-xs tracking-widest uppercase">Découvrir</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
        >
          <ArrowDown size={20} className="text-honey/50" />
        </motion.div>
      </motion.div>
    </section>
  );
}
