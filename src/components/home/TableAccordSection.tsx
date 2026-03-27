'use client';

import { motion } from 'framer-motion';
import { honeyPairings } from '@/lib/data';

const categoryColors: Record<string, { bg: string; text: string; border: string }> = {
  Fromage: { bg: 'bg-yellow-50', text: 'text-yellow-700', border: 'border-yellow-200' },
  Charcuterie: { bg: 'bg-red-50', text: 'text-red-700', border: 'border-red-200' },
  Cocktail: { bg: 'bg-amber-50', text: 'text-amber-700', border: 'border-amber-200' },
  Dessert: { bg: 'bg-purple-50', text: 'text-purple-700', border: 'border-purple-200' },
  'Fromage Affiné': { bg: 'bg-orange-50', text: 'text-orange-700', border: 'border-orange-200' },
  'Pain Artisan': { bg: 'bg-stone-50', text: 'text-stone-700', border: 'border-stone-200' },
};

const pairingGradients = [
  'from-amber-300 via-yellow-200 to-amber-100',
  'from-stone-700 via-red-900 to-stone-800',
  'from-amber-500 via-orange-400 to-amber-300',
  'from-violet-200 via-purple-100 to-pink-50',
  'from-yellow-600 via-amber-500 to-yellow-400',
  'from-amber-100 via-yellow-50 to-cream-warm',
];

export default function TableAccordSection() {
  return (
    <section
      id="table-accord"
      className="bg-dark py-24 md:py-32 overflow-hidden relative"
    >
      {/* Background decoration */}
      <div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage:
            'repeating-linear-gradient(45deg, #D4A017 0, #D4A017 1px, transparent 0, transparent 50%)',
          backgroundSize: '20px 20px',
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-honey/15 border border-honey/25 text-honey text-xs font-semibold tracking-widest uppercase mb-5"
          >
            Art de la table
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-playfair text-4xl md:text-5xl font-bold text-cream mb-4"
          >
            La Table{' '}
            <span
              style={{
                background: 'linear-gradient(135deg, #F5C842 0%, #D4A017 60%, #C8920D 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}
            >
              d&apos;Accord
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-cream/50 max-w-xl mx-auto text-lg leading-relaxed"
          >
            L&apos;art de marier les miels comme on accorde les vins.
            Chaque miel, son accord parfait.
          </motion.p>
        </div>

        {/* Pairings grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {honeyPairings.map((pairing, index) => {
            const catStyle =
              categoryColors[pairing.category] || categoryColors['Fromage'];
            const gradient = pairingGradients[index % pairingGradients.length];

            return (
              <motion.div
                key={pairing.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.6, delay: (index % 3) * 0.1 }}
                whileHover={{ y: -6 }}
                className="group bg-dark-light rounded-2xl overflow-hidden border border-honey/10 hover:border-honey/30 transition-all duration-400 hover:shadow-2xl hover:shadow-honey/10"
              >
                {/* Visual area */}
                <div
                  className={`h-36 bg-gradient-to-br ${gradient} relative overflow-hidden`}
                >
                  {/* Pattern overlay */}
                  <div
                    className="absolute inset-0 opacity-20"
                    style={{
                      backgroundImage:
                        'radial-gradient(circle at 30% 50%, rgba(255,255,255,0.4) 0%, transparent 50%)',
                    }}
                  />

                  {/* Category badge */}
                  <div className="absolute top-3 left-3">
                    <span
                      className={`inline-flex items-center px-2.5 py-1 rounded-full text-xs font-semibold border ${catStyle.bg} ${catStyle.text} ${catStyle.border}`}
                    >
                      {pairing.category}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-5">
                  {/* Honey name */}
                  <div className="flex items-center gap-2 mb-3">
                    <div className="w-2.5 h-2.5 rounded-full bg-honey flex-shrink-0" />
                    <span className="text-xs font-semibold text-honey/80 uppercase tracking-wider">
                      {pairing.honeyName}
                    </span>
                  </div>

                  {/* Pairing with */}
                  <h3 className="font-playfair text-lg font-bold text-cream mb-2 leading-snug group-hover:text-honey transition-colors duration-300">
                    {pairing.pairingWith}
                  </h3>

                  {/* Description */}
                  <p className="text-cream/45 text-xs leading-relaxed line-clamp-3">
                    {pairing.description}
                  </p>

                  {/* Divider line */}
                  <div className="mt-4 pt-3 border-t border-honey/10 flex items-center justify-between">
                    <span className="text-xs text-honey/50 font-medium">
                      Accord parfait
                    </span>
                    <div className="flex gap-1">
                      {[1, 2, 3, 4, 5].map((i) => (
                        <div
                          key={i}
                          className={`w-1.5 h-1.5 rounded-full ${
                            i <= 4 ? 'bg-honey' : 'bg-honey/20'
                          }`}
                        />
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Bottom note */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-12"
        >
          <p className="text-cream/30 text-sm italic font-playfair">
            "Un bon miel se marie avec presque tout. Un grand miel transcende son accord."
          </p>
          <p className="text-cream/20 text-xs mt-1">— Marcel, notre apiculteur</p>
        </motion.div>
      </div>
    </section>
  );
}
