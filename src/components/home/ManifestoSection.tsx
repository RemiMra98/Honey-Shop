'use client';

import { motion } from 'framer-motion';
import { Leaf, Award, Scissors } from 'lucide-react';
import HexGrid from '@/components/ui/HexGrid';

const pillars = [
  {
    icon: Scissors,
    emoji: '🔗',
    title: 'Sans intermédiaire',
    description:
      'De nos ruches directement à votre porte. Aucun grossiste, aucune chaîne de distribution. La traçabilité absolue.',
    color: 'text-honey-deeper',
    bg: 'bg-honey/8',
    border: 'border-honey/20',
  },
  {
    icon: Leaf,
    emoji: '🌿',
    title: 'Certifié Bio',
    description:
      'Depuis 1995, notre certification Agriculture Biologique FR-BIO-01 garantit des pratiques respectueuses des abeilles et de leur environnement.',
    color: 'text-forest-light',
    bg: 'bg-forest/8',
    border: 'border-forest/20',
  },
  {
    icon: Award,
    emoji: '✋',
    title: 'Récolte artisanale',
    description:
      'Chaque cadre est extrait à la main. Chaque pot est rempli, étiquetté et contrôlé par un membre de la famille. La qualité est notre signature.',
    color: 'text-amber-warm',
    bg: 'bg-amber-warm/8',
    border: 'border-amber-warm/20',
  },
];

const fadeUp = {
  initial: { opacity: 0, y: 40 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-80px' },
};

export default function ManifestoSection() {
  return (
    <section
      id="manifesto"
      className="relative bg-cream overflow-hidden py-24 md:py-32"
    >
      <HexGrid color="#D4A017" opacity={0.05} animate size={70} />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section label */}
        <motion.div
          {...fadeUp}
          transition={{ duration: 0.6 }}
          className="flex justify-center mb-12"
        >
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-honey/10 border border-honey/20 text-honey-deeper text-xs font-semibold tracking-widest uppercase">
            <span>🐝</span>
            Notre philosophie
          </span>
        </motion.div>

        {/* Big quote */}
        <motion.div
          {...fadeUp}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="text-center mb-16 max-w-4xl mx-auto"
        >
          <div className="relative inline-block">
            {/* Decorative quote mark */}
            <span
              className="absolute -top-8 -left-4 font-playfair text-8xl text-honey/15 leading-none select-none"
              aria-hidden="true"
            >
              "
            </span>
            <blockquote className="font-playfair text-2xl sm:text-3xl md:text-4xl text-dark leading-relaxed font-medium italic">
              Nous ne vendons pas du miel. Nous vous offrons{' '}
              <span
                style={{
                  background: 'linear-gradient(135deg, #C8920D, #D4A017, #F5C842)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                }}
              >
                le travail de 50 000 abeilles
              </span>
              , la promesse d'un terroir, et l'âme d'une famille qui garde les anciens savoirs.
            </blockquote>
            <span
              className="absolute -bottom-8 -right-4 font-playfair text-8xl text-honey/15 leading-none select-none"
              aria-hidden="true"
            >
              "
            </span>
          </div>

          {/* Signature */}
          <motion.div
            {...fadeUp}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-12 flex items-center justify-center gap-4"
          >
            {/* Divider line */}
            <div className="w-12 h-px bg-honey/30" />
            {/* Avatar placeholder */}
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-full overflow-hidden bg-honey/20 flex items-center justify-center text-2xl">
                🧑‍🌾
              </div>
              <div className="text-left">
                <p className="font-playfair italic text-dark/70 text-sm">
                  — Marcel Fontaine
                </p>
                <p className="text-xs text-dark/40">
                  Apiculteur, fondateur · depuis 1987
                </p>
              </div>
            </div>
            <div className="w-12 h-px bg-honey/30" />
          </motion.div>
        </motion.div>

        {/* Three pillars */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {pillars.map((pillar, index) => (
            <motion.div
              key={pillar.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              whileHover={{ y: -6 }}
              className={`relative p-8 rounded-2xl border ${pillar.bg} ${pillar.border} overflow-hidden group`}
            >
              {/* Background glow */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                style={{ background: 'radial-gradient(ellipse at top left, rgba(212,160,23,0.05) 0%, transparent 70%)' }}
              />

              {/* Icon */}
              <div className={`w-14 h-14 rounded-2xl ${pillar.bg} border ${pillar.border} flex items-center justify-center mb-5 text-2xl`}>
                {pillar.emoji}
              </div>

              <h3 className={`font-playfair text-xl font-bold mb-3 ${pillar.color}`}>
                {pillar.title}
              </h3>

              <p className="text-sm text-dark/60 leading-relaxed">
                {pillar.description}
              </p>

              {/* Decorative hexagon corner */}
              <div className="absolute bottom-4 right-4 w-10 h-10 hexagon bg-honey/5" />
            </motion.div>
          ))}
        </div>

        {/* Bottom decoration */}
        <motion.div
          {...fadeUp}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-center mt-16"
        >
          <div className="inline-flex items-center gap-6 text-xs text-dark/35 font-medium">
            <span className="flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-honey" />
              Provence · Alpes · Ardèche · Vosges
            </span>
            <span className="w-px h-4 bg-dark/15" />
            <span className="flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-forest-light" />
              Agriculture Biologique FR-BIO-01
            </span>
            <span className="w-px h-4 bg-dark/15" />
            <span className="flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-amber-warm" />
              Famille · Tradition · Passion
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
