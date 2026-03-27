'use client';

import { motion } from 'framer-motion';
import { historyTimeline } from '@/lib/data';

export default function HistoireSection() {
  return (
    <section
      id="histoire"
      className="relative bg-cream py-24 md:py-32 overflow-hidden"
    >
      {/* Subtle background */}
      <div
        className="absolute inset-0 opacity-30"
        style={{
          backgroundImage:
            'radial-gradient(circle at 80% 20%, rgba(212,160,23,0.08) 0%, transparent 50%), radial-gradient(circle at 20% 80%, rgba(45,80,22,0.06) 0%, transparent 50%)',
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20">
          {/* Left: Text */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-honey/8 border border-honey/15 text-honey-deeper text-xs font-semibold tracking-widest uppercase mb-6">
              <span>📖</span>
              Notre histoire
            </div>

            <h2 className="font-playfair text-4xl md:text-5xl font-bold text-dark mb-6 leading-tight">
              L&apos;Histoire{' '}
              <span
                style={{
                  background: 'linear-gradient(135deg, #C8920D, #D4A017, #F5C842)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                }}
              >
                du Rucher
              </span>
            </h2>

            <div className="space-y-4 text-dark/65 leading-relaxed">
              <p>
                Tout a commencé en 1987, quand Marcel Fontaine a installé ses trois premières ruches
                sur les terres familiales du Lubéron, avec pour seule ambition de{' '}
                <span className="text-honey-deeper font-medium">comprendre les abeilles</span> et
                de partager leur incroyable travail.
              </p>
              <p>
                Ce qui n&apos;était au départ qu&apos;une passion est devenu une vocation, puis
                un héritage. Aujourd&apos;hui, c&apos;est Sarah, sa fille, qui perpétue les gestes
                appris auprès de son père, en les enrichissant de sa propre sensibilité et d&apos;une
                formation approfondie en apiculture biologique.
              </p>
              <p>
                12 ruches, 4 terroirs, une famille — et{' '}
                <span className="text-honey-deeper font-medium">50 000 abeilles</span> qui travaillent
                chaque jour pour que vous puissiez déguster un miel d&apos;exception.
              </p>
            </div>

            {/* Marcel quote */}
            <div className="mt-8 p-6 rounded-2xl bg-honey/8 border border-honey/15">
              <p className="font-playfair italic text-dark/75 leading-relaxed">
                "Une abeille vit 6 semaines et parcourt 800 km pour produire
                une cuillère à café de miel. C&apos;est pour ça que je traite
                chaque pot comme un trésor."
              </p>
              <div className="flex items-center gap-2 mt-4">
                <div className="w-8 h-8 rounded-full bg-honey/20 flex items-center justify-center text-sm">
                  🧑‍🌾
                </div>
                <div>
                  <p className="text-xs font-semibold text-dark/60">Marcel Fontaine</p>
                  <p className="text-xs text-dark/40">Apiculteur, fondateur</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right: Image placeholder */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="relative"
          >
            {/* Main image placeholder */}
            <div className="relative rounded-3xl overflow-hidden aspect-[4/3] shadow-2xl shadow-honey/10">
              <div
                className="absolute inset-0"
                style={{
                  background: 'linear-gradient(135deg, #3D1F00 0%, #5C2E00 30%, #8B4513 60%, #C8920D 85%, #D4A017 100%)',
                }}
              />
              {/* Hex pattern overlay */}
              <div
                className="absolute inset-0 opacity-10"
                style={{
                  backgroundImage:
                    "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M30 5 L55 20 L55 50 L30 55 L5 50 L5 20 Z' fill='none' stroke='%23FFF8E7' stroke-width='1'/%3E%3C/svg%3E\")",
                  backgroundSize: '60px 60px',
                }}
              />
              {/* Center content */}
              <div className="absolute inset-0 flex flex-col items-center justify-center text-cream">
                <div className="text-7xl mb-4">🏡</div>
                <p className="font-playfair text-2xl font-bold text-honey-light">
                  Le Rucher du Lubéron
                </p>
                <p className="text-cream/60 text-sm mt-1">Depuis 1987 · Provence</p>
              </div>
            </div>

            {/* Floating stat card */}
            <motion.div
              initial={{ scale: 0, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5, type: 'spring' }}
              className="absolute -bottom-5 -left-5 p-4 rounded-2xl bg-white shadow-xl border border-honey/15 max-w-[160px]"
            >
              <div className="font-playfair text-3xl font-black text-honey-deeper">37</div>
              <div className="text-xs text-dark/50 leading-tight">années de passion apicole</div>
            </motion.div>

            <motion.div
              initial={{ scale: 0, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.65, type: 'spring' }}
              className="absolute -top-4 -right-4 p-4 rounded-2xl bg-forest text-cream shadow-xl max-w-[140px]"
            >
              <div className="text-2xl mb-1">🌿</div>
              <div className="text-xs text-cream/70 leading-tight">Certifié Bio depuis 1995</div>
            </motion.div>
          </motion.div>
        </div>

        {/* Timeline */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <h3 className="font-playfair text-2xl font-bold text-dark text-center mb-10">
            Les Grandes Étapes
          </h3>

          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-1/2 top-0 bottom-0 w-px bg-honey/20 -translate-x-1/2 hidden md:block" />

            <div className="space-y-8">
              {historyTimeline.map((event, index) => (
                <motion.div
                  key={event.year}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: '-50px' }}
                  transition={{ duration: 0.5, delay: index * 0.05 }}
                  className={`relative flex ${
                    index % 2 === 0
                      ? 'md:flex-row'
                      : 'md:flex-row-reverse'
                  } flex-col gap-4 md:gap-8 items-start md:items-center`}
                >
                  {/* Content card */}
                  <div className="flex-1 md:max-w-[calc(50%-40px)]">
                    <div
                      className={`p-5 rounded-2xl bg-white border border-honey/10 shadow-sm hover:shadow-md hover:border-honey/20 transition-all duration-300 ${
                        index % 2 === 0 ? 'md:text-right' : 'md:text-left'
                      }`}
                    >
                      <div className="flex items-center gap-2 mb-2 flex-row md:flex-row">
                        <span className="text-xl">{event.icon}</span>
                        <span className="font-playfair text-2xl font-black text-honey-deeper">
                          {event.year}
                        </span>
                      </div>
                      <h4 className="font-playfair font-bold text-dark mb-1">{event.title}</h4>
                      <p className="text-sm text-dark/55 leading-relaxed">{event.description}</p>
                    </div>
                  </div>

                  {/* Center dot */}
                  <div className="hidden md:flex w-10 h-10 rounded-full bg-honey/15 border-2 border-honey items-center justify-center flex-shrink-0 z-10 text-base">
                    {event.icon}
                  </div>

                  {/* Spacer */}
                  <div className="flex-1 md:max-w-[calc(50%-40px)] hidden md:block" />
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
