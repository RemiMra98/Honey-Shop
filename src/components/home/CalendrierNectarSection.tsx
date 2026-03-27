'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Flower2, Droplets } from 'lucide-react';
import { seasonalCalendar } from '@/lib/data';

const seasonColors: Record<string, string> = {
  winter: '#C0C8D8',
  spring: '#7EC86A',
  summer: '#F5C842',
  autumn: '#E87820',
};

const seasonBg: Record<string, string> = {
  winter: 'from-blue-50 to-indigo-50',
  spring: 'from-green-50 to-emerald-50',
  summer: 'from-yellow-50 to-amber-50',
  autumn: 'from-orange-50 to-red-50',
};

export default function CalendrierNectarSection() {
  const currentRealMonth = new Date().getMonth() + 1;
  const [selectedMonth, setSelectedMonth] = useState(
    currentRealMonth <= 12 ? currentRealMonth : 7
  );

  const monthData = seasonalCalendar.find((m) => m.month === selectedMonth);
  const prevMonth = selectedMonth === 1 ? 12 : selectedMonth - 1;
  const nextMonth = selectedMonth === 12 ? 1 : selectedMonth + 1;

  const seasonColor = monthData ? seasonColors[monthData.season] : '#D4A017';
  const isCurrentMonth = selectedMonth === currentRealMonth;

  return (
    <section
      id="calendrier"
      className="relative bg-cream-light py-24 md:py-32 overflow-hidden"
    >
      {/* Background decoration */}
      <div
        className="absolute top-0 right-0 w-1/2 h-full opacity-5"
        style={{
          background: 'radial-gradient(ellipse at right, #D4A017 0%, transparent 70%)',
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-honey/8 border border-honey/15 text-honey-deeper text-xs font-semibold tracking-widest uppercase mb-5"
          >
            <span>📅</span>
            Calendrier saisonnier
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-playfair text-4xl md:text-5xl font-bold text-dark mb-4"
          >
            Le Calendrier{' '}
            <span
              style={{
                background: 'linear-gradient(135deg, #C8920D, #D4A017, #F5C842)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}
            >
              du Nectar
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-dark/55 max-w-lg mx-auto text-lg leading-relaxed"
          >
            Chaque miel a sa saison. Chaque saison, une nouvelle floraison.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Month wheel / grid */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <div className="grid grid-cols-3 gap-3 mb-6">
              {seasonalCalendar.map((m) => {
                const isSelected = m.month === selectedMonth;
                const isCurrent = m.month === currentRealMonth;
                const color = seasonColors[m.season];
                const hasHoneys = m.honeys.length > 0;

                return (
                  <button
                    key={m.month}
                    onClick={() => setSelectedMonth(m.month)}
                    className={`relative p-4 rounded-2xl text-center transition-all duration-300 border ${
                      isSelected
                        ? 'shadow-lg scale-105'
                        : 'hover:scale-102 hover:shadow-md'
                    }`}
                    style={{
                      backgroundColor: isSelected ? color + '25' : '#ffffff',
                      borderColor: isSelected ? color : 'rgba(212,160,23,0.15)',
                    }}
                  >
                    {/* Current month indicator */}
                    {isCurrent && (
                      <span className="absolute top-1.5 right-1.5 w-1.5 h-1.5 rounded-full bg-honey animate-pulse" />
                    )}

                    <div
                      className="font-playfair font-bold text-sm mb-1"
                      style={{ color: isSelected ? color : '#1A1A1A' }}
                    >
                      {m.monthShort}
                    </div>

                    <div className="text-xs" style={{ color: isSelected ? color : '#1A1A1A80' }}>
                      {hasHoneys ? `${m.honeys.length} miel${m.honeys.length > 1 ? 's' : ''}` : '—'}
                    </div>

                    {/* Season dot */}
                    <div
                      className="w-2 h-2 rounded-full mx-auto mt-2 opacity-60"
                      style={{ backgroundColor: color }}
                    />
                  </button>
                );
              })}
            </div>

            {/* Season legend */}
            <div className="flex flex-wrap gap-3 justify-center">
              {Object.entries(seasonColors).map(([season, color]) => (
                <div key={season} className="flex items-center gap-1.5 text-xs text-dark/50">
                  <div className="w-3 h-3 rounded-full" style={{ backgroundColor: color }} />
                  <span className="capitalize">{
                    season === 'winter' ? 'Hiver' :
                    season === 'spring' ? 'Printemps' :
                    season === 'summer' ? 'Été' : 'Automne'
                  }</span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Detail panel */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
          >
            <div className="flex items-center justify-between mb-6">
              <button
                onClick={() => setSelectedMonth(prevMonth)}
                className="p-2 rounded-full bg-honey/10 text-honey-deeper hover:bg-honey/20 transition-colors"
                aria-label="Mois précédent"
              >
                <ChevronLeft size={18} />
              </button>

              <AnimatePresence mode="wait">
                <motion.div
                  key={selectedMonth}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.3 }}
                  className="text-center"
                >
                  <h3 className="font-playfair text-3xl font-bold text-dark">
                    {monthData?.monthName}
                  </h3>
                  {isCurrentMonth && (
                    <span className="inline-flex items-center gap-1 mt-1 px-2.5 py-0.5 rounded-full bg-honey text-dark text-xs font-semibold">
                      <span className="w-1.5 h-1.5 rounded-full bg-dark animate-pulse" />
                      Mois actuel
                    </span>
                  )}
                </motion.div>
              </AnimatePresence>

              <button
                onClick={() => setSelectedMonth(nextMonth)}
                className="p-2 rounded-full bg-honey/10 text-honey-deeper hover:bg-honey/20 transition-colors"
                aria-label="Mois suivant"
              >
                <ChevronRight size={18} />
              </button>
            </div>

            <AnimatePresence mode="wait">
              {monthData && (
                <motion.div
                  key={selectedMonth}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.4 }}
                  className={`bg-gradient-to-br ${seasonBg[monthData.season]} rounded-3xl p-8 border border-honey/10`}
                >
                  {/* Description */}
                  <p className="text-dark/65 text-sm leading-relaxed mb-6 italic font-playfair text-base">
                    "{monthData.description}"
                  </p>

                  {/* Blooming */}
                  {monthData.blooming.length > 0 && (
                    <div className="mb-5">
                      <div className="flex items-center gap-2 text-xs font-semibold text-dark/40 uppercase tracking-widest mb-3">
                        <Flower2 size={13} />
                        Floraisons du mois
                      </div>
                      <div className="flex flex-wrap gap-2">
                        {monthData.blooming.map((flower) => (
                          <span
                            key={flower}
                            className="px-3 py-1 rounded-full text-xs font-medium border"
                            style={{
                              backgroundColor: seasonColor + '20',
                              borderColor: seasonColor + '40',
                              color: '#3D1F00',
                            }}
                          >
                            🌸 {flower}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Honeys available */}
                  {monthData.honeys.length > 0 ? (
                    <div>
                      <div className="flex items-center gap-2 text-xs font-semibold text-dark/40 uppercase tracking-widest mb-3">
                        <Droplets size={13} />
                        Miels en cours de récolte
                      </div>
                      <div className="space-y-2">
                        {monthData.honeys.map((honey) => (
                          <div
                            key={honey}
                            className="flex items-center gap-3 px-4 py-2.5 rounded-xl bg-white/70 border border-honey/20"
                          >
                            <span className="text-lg">🍯</span>
                            <span className="text-sm font-medium text-dark/80">{honey}</span>
                            <span className="ml-auto inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-honey/15 text-honey-deeper text-xs font-medium">
                              <span className="w-1.5 h-1.5 rounded-full bg-honey animate-pulse" />
                              En récolte
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>
                  ) : (
                    <div className="text-center py-4">
                      <div className="text-3xl mb-2">😴</div>
                      <p className="text-dark/40 text-sm italic">
                        Le rucher est en repos ce mois-ci.
                      </p>
                    </div>
                  )}
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
