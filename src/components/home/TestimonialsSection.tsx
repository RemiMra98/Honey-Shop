'use client';

import { motion } from 'framer-motion';
import { Star } from 'lucide-react';

const testimonials = [
  {
    id: 1,
    name: 'Sophie L.',
    location: 'Lyon',
    rating: 5,
    text: 'Le miel de lavande est d\'une pureté absolue. On sent immédiatement la différence avec les miels industriels. J\'en commande depuis 3 ans.',
    honey: 'Miel de Lavande',
    initial: 'S',
  },
  {
    id: 2,
    name: 'Thomas B.',
    location: 'Paris',
    rating: 5,
    text: 'J\'ai adopté une ruche il y a 2 ans. Recevoir "les nouvelles" de mes abeilles chaque mois et mon propre miel en été, c\'est une expérience unique.',
    honey: 'Programme Adoption',
    initial: 'T',
  },
  {
    id: 3,
    name: 'Marie-Claire D.',
    location: 'Bordeaux',
    rating: 5,
    text: 'Le miel de châtaignier sur un plateau de fromages... C\'est la Table d\'Accord qui m\'a convaincue. Un accord parfait, exactement comme décrit.',
    honey: 'Miel de Châtaignier',
    initial: 'M',
  },
  {
    id: 4,
    name: 'Éric F.',
    location: 'Marseille',
    rating: 5,
    text: 'Commandé pour offrir à Noël. Les pots sont beaux, le miel est d\'une qualité remarquable, et la note manuscrite dans le colis a touché ma famille.',
    honey: 'Coffret Découverte',
    initial: 'É',
  },
];

const StarRating = ({ count }: { count: number }) => (
  <div className="flex gap-0.5">
    {Array.from({ length: count }).map((_, i) => (
      <Star key={i} size={12} className="text-honey fill-honey" />
    ))}
  </div>
);

export default function TestimonialsSection() {
  return (
    <section className="bg-cream py-20 md:py-28 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-14">
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-honey/10 border border-honey/20 text-honey-deeper text-xs font-semibold tracking-widest uppercase mb-5"
          >
            <Star size={10} fill="currentColor" />
            Avis clients
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-playfair text-4xl md:text-5xl font-bold text-dark mb-3"
          >
            Ce qu&apos;ils en pensent
          </motion.h2>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-dark/50 text-lg"
          >
            <span className="font-semibold text-honey-deeper">4.9/5</span> · Plus de 340 avis vérifiés
          </motion.p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="bg-white rounded-2xl p-6 border border-honey/8 shadow-sm hover:shadow-lg hover:shadow-honey/8 transition-all duration-400 hover:-translate-y-0.5"
            >
              {/* Stars */}
              <StarRating count={t.rating} />

              {/* Quote */}
              <p className="text-dark/70 text-sm leading-relaxed mt-4 mb-5 font-playfair italic">
                &ldquo;{t.text}&rdquo;
              </p>

              {/* Author */}
              <div className="flex items-center gap-3 pt-4 border-t border-honey/10">
                <div
                  className="w-9 h-9 rounded-full flex items-center justify-center text-sm font-bold text-dark flex-shrink-0"
                  style={{ background: 'linear-gradient(135deg, #F5C842, #D4A017)' }}
                >
                  {t.initial}
                </div>
                <div>
                  <p className="text-sm font-semibold text-dark">{t.name}</p>
                  <p className="text-xs text-dark/40">{t.location} · {t.honey}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom trust signal */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="text-center mt-10"
        >
          <p className="text-dark/30 text-xs">
            Avis collectés et vérifiés via Trustpilot · Mis à jour chaque semaine
          </p>
        </motion.div>
      </div>
    </section>
  );
}
