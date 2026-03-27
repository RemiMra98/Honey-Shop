'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import Link from 'next/link';
import ProductCard from '@/components/ui/ProductCard';
import { products } from '@/lib/data';

type Season = 'tous' | 'printemps' | 'ete' | 'automne';

const seasons: { key: Season; label: string; emoji: string }[] = [
  { key: 'tous', label: 'Toutes les variétés', emoji: '🍯' },
  { key: 'printemps', label: 'Printemps', emoji: '🌸' },
  { key: 'ete', label: 'Été', emoji: '☀️' },
  { key: 'automne', label: 'Automne', emoji: '🍂' },
];

export default function ProduitsSection() {
  const [activeSeason, setActiveSeason] = useState<Season>('tous');

  const filtered =
    activeSeason === 'tous'
      ? products.filter((p) => p.isFeatured).slice(0, 4)
      : products
          .filter((p) => p.harvestSeason === activeSeason)
          .slice(0, 4);

  return (
    <section
      id="produits"
      className="bg-white py-24 md:py-32"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-honey/8 border border-honey/15 text-honey-deeper text-xs font-semibold tracking-widest uppercase mb-5"
          >
            <span>🌻</span>
            Nos productions
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-playfair text-4xl md:text-5xl font-bold text-dark mb-4"
          >
            Nos Miels{' '}
            <span
              style={{
                background: 'linear-gradient(135deg, #C8920D, #D4A017, #F5C842)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}
            >
              d&apos;Exception
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-dark/55 max-w-xl mx-auto text-lg leading-relaxed"
          >
            Chaque miel raconte un terroir, une floraison, une saison.
            Découvrez nos 8 cuvées artisanales.
          </motion.p>
        </div>

        {/* Season filters */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="flex flex-wrap justify-center gap-2 mb-12"
        >
          {seasons.map((season) => (
            <button
              key={season.key}
              onClick={() => setActiveSeason(season.key)}
              className={`inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300 ${
                activeSeason === season.key
                  ? 'bg-honey text-dark shadow-md shadow-honey/20'
                  : 'bg-cream text-dark/60 hover:bg-honey/10 hover:text-dark'
              }`}
            >
              <span>{season.emoji}</span>
              {season.label}
            </button>
          ))}
        </motion.div>

        {/* Product grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeSeason}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4 }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12"
          >
            {filtered.length > 0 ? (
              filtered.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))
            ) : (
              <div className="col-span-4 text-center py-16">
                <div className="text-5xl mb-4">🌱</div>
                <p className="text-dark/40 font-playfair italic">
                  Cette saison est en repos. Découvrez nos autres miels.
                </p>
                <button
                  onClick={() => setActiveSeason('tous')}
                  className="mt-4 text-honey hover:text-honey-deeper font-medium text-sm"
                >
                  Voir toutes les variétés →
                </button>
              </div>
            )}
          </motion.div>
        </AnimatePresence>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <Link
            href="/boutique"
            className="group inline-flex items-center gap-3 px-8 py-4 bg-dark text-cream rounded-full font-semibold hover:bg-dark-light transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-dark/20"
          >
            Voir toute la collection
            <ArrowRight
              size={18}
              className="group-hover:translate-x-1 transition-transform duration-300"
            />
          </Link>
          <p className="text-dark/35 text-xs mt-3">
            8 miels · 4 terroirs · Livraison offerte dès 50€
          </p>
        </motion.div>
      </div>
    </section>
  );
}
