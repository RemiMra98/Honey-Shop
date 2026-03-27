'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Check, ChevronDown, Star } from 'lucide-react';
import Link from 'next/link';
import { hiveTiers } from '@/lib/data';
import HexGrid from '@/components/ui/HexGrid';

const steps = [
  {
    step: '01',
    title: 'Choisissez votre formule',
    description: 'Sélectionnez la formule qui correspond à votre engagement envers les abeilles.',
    icon: '🎯',
  },
  {
    step: '02',
    title: 'Personnalisez votre ruche',
    description: 'Indiquez le prénom ou le message que vous souhaitez voir sur votre ruche.',
    icon: '✏️',
  },
  {
    step: '03',
    title: 'Recevez votre certificat',
    description: 'Dans les 48h, vous recevrez votre certificat d\'adoption personnalisé par email.',
    icon: '📜',
  },
  {
    step: '04',
    title: 'Vivez l\'aventure',
    description: 'Suivez l\'évolution de votre ruche et recevez son miel à chaque récolte.',
    icon: '🍯',
  },
];

const faqs = [
  {
    question: 'Puis-je visiter ma ruche ?',
    answer:
      'Selon la formule choisie, oui ! La formule Gardien du Rucher inclut une journée de visite privée avec Marcel. Pour les autres formules, vous pouvez réserver une visite lors de nos portes ouvertes annuelles.',
  },
  {
    question: 'Que se passe-t-il si ma ruche est en difficulté ?',
    answer:
      'Nous nous engageons à vous informer transparentement de l\'état de votre ruche. En cas de perte de colonie (événement rare mais naturel), nous vous attribuons une nouvelle ruche sans frais supplémentaires.',
  },
  {
    question: 'Le miel est-il bien celui de ma ruche ?',
    answer:
      'Absolument. Votre ruche porte votre prénom, et le miel que vous recevez provient directement de ses cadres. Vous recevrez même des photos de l\'extraction.',
  },
  {
    question: 'Puis-je offrir une adoption ?',
    answer:
      'Oui, c\'est l\'un de nos cadeaux les plus appréciés ! Lors de la commande, indiquez que c\'est un cadeau et le nom du bénéficiaire. Nous préparerons un beau certificat personnalisé.',
  },
  {
    question: 'Le programme est-il renouvelable ?',
    answer:
      'L\'adoption est annuelle et se renouvelle automatiquement. Vous pouvez l\'annuler à tout moment avant la date de renouvellement.',
  },
  {
    question: 'Le miel est-il certifié bio ?',
    answer:
      'Oui, l\'intégralité de notre production est certifiée Agriculture Biologique FR-BIO-01. Votre miel d\'adoption portera bien le label bio.',
  },
];

export default function AdoptionRucheClient() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <div className="min-h-screen bg-cream-light">
      {/* Hero */}
      <section
        className="relative py-28 px-4 text-center overflow-hidden"
        style={{
          background: 'linear-gradient(160deg, #1A3009 0%, #2D5016 50%, #3A6B1A 100%)',
        }}
      >
        <HexGrid color="#F5C842" opacity={0.08} size={80} />
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="relative z-10 max-w-3xl mx-auto"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-honey/15 border border-honey/25 text-honey text-xs font-semibold tracking-widest uppercase mb-6">
            <span>🐝</span>
            Programme d&apos;adoption
          </div>
          <h1 className="font-playfair text-4xl md:text-6xl font-bold text-cream mb-4 leading-tight">
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
          </h1>
          <p className="text-cream/60 text-lg leading-relaxed max-w-2xl mx-auto">
            Devenez gardien d&apos;une ruche. Votre prénom gravé, son miel dans votre boîte,
            ses nouvelles toute l&apos;année.
          </p>
        </motion.div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        {/* How it works */}
        <section className="mb-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="font-playfair text-3xl md:text-4xl font-bold text-dark mb-3">
              Comment ça marche ?
            </h2>
            <p className="text-dark/50 max-w-lg mx-auto">
              En 4 étapes simples, devenez gardien d&apos;une ruche et entrez dans notre famille apicole.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {steps.map((step, index) => (
              <motion.div
                key={step.step}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center relative"
              >
                {/* Connector line */}
                {index < steps.length - 1 && (
                  <div className="hidden md:block absolute top-8 left-[60%] w-full h-px bg-honey/20" />
                )}
                <div className="relative z-10">
                  <div className="w-16 h-16 rounded-2xl bg-honey/10 border border-honey/20 flex items-center justify-center text-2xl mx-auto mb-4">
                    {step.icon}
                  </div>
                  <div className="font-playfair text-xs font-bold text-honey/40 mb-1">
                    {step.step}
                  </div>
                  <h3 className="font-playfair font-bold text-dark mb-2 text-sm">
                    {step.title}
                  </h3>
                  <p className="text-xs text-dark/50 leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Pricing tiers */}
        <section className="mb-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="font-playfair text-3xl md:text-4xl font-bold text-dark mb-3">
              Choisissez votre engagement
            </h2>
            <p className="text-dark/50 max-w-lg mx-auto">
              Trois formules pour trois niveaux d&apos;immersion dans la vie du rucher.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {hiveTiers.map((tier, index) => (
              <motion.div
                key={tier.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                className={`relative rounded-3xl overflow-hidden transition-all duration-500 hover:-translate-y-1 ${
                  tier.featured
                    ? 'ring-2 ring-honey shadow-2xl shadow-honey/15'
                    : 'border border-honey/15 shadow-sm'
                }`}
              >
                {tier.featured && (
                  <div className="bg-honey text-dark text-xs font-bold px-4 py-2 flex items-center justify-center gap-1">
                    <Star size={11} fill="currentColor" />
                    Le plus populaire
                  </div>
                )}
                <div
                  className={`p-8 ${
                    tier.featured
                      ? 'bg-gradient-to-b from-honey/5 to-white'
                      : 'bg-white'
                  }`}
                >
                  <div className="text-4xl mb-3">{tier.icon}</div>
                  <h3 className="font-playfair text-xl font-bold text-dark mb-1">
                    {tier.name}
                  </h3>
                  <p className="text-dark/45 text-sm mb-5">{tier.subtitle}</p>

                  <div className="mb-6">
                    <span className="font-playfair text-4xl font-black text-honey-deeper">
                      {tier.price}€
                    </span>
                    <span className="text-dark/40 text-sm">/{tier.period}</span>
                  </div>

                  <ul className="space-y-2.5 mb-8">
                    {tier.benefits.map((benefit) => (
                      <li key={benefit} className="flex items-start gap-2.5">
                        <div
                          className={`w-4 h-4 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 ${
                            tier.featured ? 'bg-honey' : 'bg-honey/20'
                          }`}
                        >
                          <Check size={9} className={tier.featured ? 'text-dark' : 'text-honey-deeper'} strokeWidth={3} />
                        </div>
                        <span className="text-sm text-dark/65">{benefit}</span>
                      </li>
                    ))}
                  </ul>

                  <Link
                    href="#"
                    className={`w-full inline-flex items-center justify-center py-3.5 rounded-xl font-semibold text-sm transition-all duration-300 ${
                      tier.featured
                        ? 'bg-honey text-dark hover:bg-honey-light hover:shadow-md'
                        : 'border-2 border-honey text-honey hover:bg-honey hover:text-dark'
                    }`}
                  >
                    {tier.cta}
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center text-sm text-dark/35 mt-6"
          >
            📜 Un certificat d&apos;adoption personnalisé vous sera envoyé dans les 48h · Renouvelable annuellement
          </motion.p>
        </section>

        {/* FAQ */}
        <section>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="font-playfair text-3xl md:text-4xl font-bold text-dark mb-3">
              Questions fréquentes
            </h2>
          </motion.div>

          <div className="max-w-3xl mx-auto space-y-3">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                className="bg-white rounded-2xl border border-honey/10 overflow-hidden"
              >
                <button
                  onClick={() => setOpenFaq(openFaq === index ? null : index)}
                  className="w-full text-left px-6 py-4 flex items-center justify-between gap-4 hover:bg-honey/3 transition-colors"
                >
                  <span className="font-medium text-dark text-sm">{faq.question}</span>
                  <ChevronDown
                    size={16}
                    className={`flex-shrink-0 text-honey transition-transform duration-200 ${
                      openFaq === index ? 'rotate-180' : ''
                    }`}
                  />
                </button>
                <AnimatePresence>
                  {openFaq === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25 }}
                      className="overflow-hidden"
                    >
                      <p className="px-6 pb-5 text-sm text-dark/55 leading-relaxed border-t border-honey/8 pt-3">
                        {faq.answer}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
