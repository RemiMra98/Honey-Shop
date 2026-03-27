'use client';

import { motion } from 'framer-motion';
import { Check, Star } from 'lucide-react';
import Link from 'next/link';
import { hiveTiers } from '@/lib/data';
import HexGrid from '@/components/ui/HexGrid';

export default function AdoptionRucheSection() {
  return (
    <section
      id="adoption"
      className="relative py-24 md:py-32 overflow-hidden"
      style={{
        background: 'linear-gradient(160deg, #1A3009 0%, #2D5016 40%, #3A6B1A 80%, #2D5016 100%)',
      }}
    >
      <HexGrid color="#F5C842" opacity={0.08} animate size={90} className="opacity-60" />

      {/* Background radial glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse 50% 50% at 50% 50%, rgba(212,160,23,0.08) 0%, transparent 70%)',
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-honey/15 border border-honey/25 text-honey text-xs font-semibold tracking-widest uppercase mb-6"
          >
            <span>🐝</span>
            Programme exclusif
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="font-playfair text-4xl md:text-5xl lg:text-6xl font-bold text-cream mb-6 leading-tight"
          >
            Adoptez{' '}
            <span
              style={{
                background: 'linear-gradient(135deg, #F5C842 0%, #D4A017 60%, #C8920D 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}
            >
              une Ruche
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-cream/60 text-lg max-w-2xl mx-auto leading-relaxed"
          >
            Devenez gardien d'une ruche. Recevez ses nouvelles chaque mois,
            son miel deux fois par an, et{' '}
            <span className="text-honey font-medium">votre prénom gravé sur la ruche</span>.
          </motion.p>
        </div>

        {/* Tier cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 mb-12">
          {hiveTiers.map((tier, index) => (
            <motion.div
              key={tier.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className={`relative rounded-3xl overflow-hidden transition-all duration-500 hover:-translate-y-2 ${
                tier.featured
                  ? 'ring-2 ring-honey shadow-2xl shadow-honey/20'
                  : 'border border-honey/15'
              }`}
              style={{
                background: tier.featured
                  ? 'linear-gradient(160deg, rgba(212,160,23,0.12) 0%, rgba(26,48,9,0.9) 50%)'
                  : 'rgba(26,48,9,0.7)',
                backdropFilter: 'blur(12px)',
              }}
            >
              {/* Featured badge */}
              {tier.featured && (
                <div className="absolute top-0 left-0 right-0 flex justify-center">
                  <div className="bg-honey text-dark text-xs font-bold px-4 py-1 rounded-b-lg flex items-center gap-1">
                    <Star size={11} fill="currentColor" />
                    Le plus populaire
                  </div>
                </div>
              )}

              <div className={`p-8 ${tier.featured ? 'pt-10' : ''}`}>
                {/* Icon & name */}
                <div className="mb-6">
                  <div className="text-4xl mb-3">{tier.icon}</div>
                  <h3 className="font-playfair text-xl font-bold text-cream mb-1">
                    {tier.name}
                  </h3>
                  <p className="text-cream/50 text-sm">{tier.subtitle}</p>
                </div>

                {/* Price */}
                <div className="mb-6">
                  <div className="flex items-end gap-1">
                    <span className="font-playfair text-4xl font-black text-honey">
                      {tier.price}€
                    </span>
                    <span className="text-cream/40 text-sm mb-1.5">
                      /{tier.period}
                    </span>
                  </div>
                  <p className="text-xs text-cream/35 mt-1">
                    Soit {(tier.price / 12).toFixed(2)}€/mois · Renouvelable
                  </p>
                </div>

                {/* Benefits */}
                <ul className="space-y-2.5 mb-8">
                  {tier.benefits.map((benefit) => (
                    <li key={benefit} className="flex items-start gap-2.5">
                      <div
                        className={`w-4 h-4 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 ${
                          tier.featured ? 'bg-honey' : 'bg-honey/25'
                        }`}
                      >
                        <Check size={9} className={tier.featured ? 'text-dark' : 'text-honey'} strokeWidth={3} />
                      </div>
                      <span className="text-sm text-cream/70 leading-snug">
                        {benefit}
                      </span>
                    </li>
                  ))}
                </ul>

                {/* CTA */}
                <Link
                  href="/adoption-ruche"
                  className={`w-full inline-flex items-center justify-center py-3.5 rounded-xl font-semibold text-sm transition-all duration-300 hover:-translate-y-0.5 ${
                    tier.featured
                      ? 'bg-honey text-dark hover:bg-honey-light hover:shadow-lg hover:shadow-honey/30'
                      : 'border border-honey/40 text-honey hover:bg-honey/10 hover:border-honey'
                  }`}
                >
                  {tier.cta}
                </Link>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Fine print */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="text-center"
        >
          <div className="inline-flex items-center gap-2 px-5 py-3 rounded-full bg-honey/8 border border-honey/15 text-cream/50 text-sm">
            <span>📜</span>
            Un certificat d'adoption personnalisé vous sera envoyé dans les 48h
          </div>
        </motion.div>
      </div>
    </section>
  );
}
