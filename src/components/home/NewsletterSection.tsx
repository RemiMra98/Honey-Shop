'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, ArrowRight, Check } from 'lucide-react';

export default function NewsletterSection() {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [errorMsg, setErrorMsg] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email.includes('@')) {
      setErrorMsg('Veuillez entrer une adresse email valide.');
      setStatus('error');
      return;
    }
    setStatus('loading');
    // Simulate API call
    await new Promise((r) => setTimeout(r, 1200));
    setStatus('success');
    setEmail('');
  };

  return (
    <section
      className="relative py-24 md:py-32 overflow-hidden"
      style={{
        background: 'linear-gradient(135deg, #C8920D 0%, #D4A017 30%, #E8A020 60%, #F5C842 100%)',
      }}
    >
      {/* Shimmering overlay */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'linear-gradient(90deg, transparent 0%, rgba(255,255,255,0.08) 50%, transparent 100%)',
          backgroundSize: '200% 100%',
          animation: 'shimmer 4s linear infinite',
        }}
      />

      {/* Hex pattern */}
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M30 5 L55 20 L55 40 L30 55 L5 40 L5 20 Z' fill='none' stroke='%23FFF8E7' stroke-width='1.5'/%3E%3C/svg%3E\")",
          backgroundSize: '60px 60px',
        }}
      />

      {/* Animated bee */}
      <motion.div
        className="absolute right-10 top-1/2 -translate-y-1/2 text-6xl pointer-events-none hidden lg:block"
        animate={{
          y: [-10, 10, -10],
          rotate: [-3, 3, -3],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      >
        🐝
      </motion.div>

      <motion.div
        className="absolute left-8 top-8 text-4xl pointer-events-none hidden lg:block opacity-60"
        animate={{
          y: [0, -15, 0],
          x: [0, 5, 0],
          rotate: [0, 10, 0],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: 'easeInOut',
          delay: 1,
        }}
      >
        🌸
      </motion.div>

      <div className="relative z-10 max-w-2xl mx-auto px-4 sm:px-6 text-center">
        {/* Icon */}
        <motion.div
          initial={{ scale: 0, rotate: -20 }}
          whileInView={{ scale: 1, rotate: 0 }}
          viewport={{ once: true }}
          transition={{ type: 'spring', stiffness: 200, delay: 0.1 }}
          className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-dark/15 backdrop-blur-sm mb-8 text-3xl"
        >
          🍯
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="font-playfair text-4xl md:text-5xl font-bold text-dark mb-4 leading-tight"
        >
          Les Secrets{' '}
          <span className="italic">du Rucher</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-dark/65 text-lg leading-relaxed mb-8"
        >
          Abonnez-vous pour recevoir les nouvelles des ruches, les floraisons
          du moment, des recettes de saison, et les{' '}
          <strong>offres exclusives</strong> réservées à notre communauté.
        </motion.p>

        {/* Form */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          {status === 'success' ? (
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              className="flex flex-col items-center gap-3 py-6"
            >
              <div className="w-14 h-14 rounded-full bg-dark/15 flex items-center justify-center">
                <Check size={28} className="text-dark" strokeWidth={2.5} />
              </div>
              <p className="font-playfair text-xl font-bold text-dark">
                Bienvenue dans la ruche !
              </p>
              <p className="text-dark/65 text-sm">
                Vous recevrez prochainement votre première lettre du rucher.
              </p>
            </motion.div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3">
              <div className="relative flex-1">
                <Mail
                  size={16}
                  className="absolute left-4 top-1/2 -translate-y-1/2 text-dark/40"
                />
                <input
                  type="email"
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value);
                    if (status === 'error') setStatus('idle');
                  }}
                  placeholder="votre@email.fr"
                  required
                  className={`w-full pl-10 pr-4 py-4 rounded-full bg-white/80 backdrop-blur-sm text-dark placeholder-dark/35 focus:outline-none focus:ring-2 focus:ring-dark/30 focus:bg-white transition-all duration-200 ${
                    status === 'error' ? 'ring-2 ring-red-400' : ''
                  }`}
                />
              </div>

              <button
                type="submit"
                disabled={status === 'loading'}
                className="inline-flex items-center justify-center gap-2 px-7 py-4 bg-dark text-cream font-semibold rounded-full hover:bg-dark-light transition-all duration-300 hover:shadow-xl hover:shadow-dark/20 hover:-translate-y-0.5 disabled:opacity-60 disabled:cursor-not-allowed whitespace-nowrap"
              >
                {status === 'loading' ? (
                  <>
                    <svg className="animate-spin h-4 w-4" viewBox="0 0 24 24" fill="none">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                    </svg>
                    Envoi...
                  </>
                ) : (
                  <>
                    S&apos;abonner
                    <ArrowRight size={16} />
                  </>
                )}
              </button>
            </form>
          )}

          {status === 'error' && (
            <p className="text-red-600 text-xs mt-2">{errorMsg}</p>
          )}

          {status !== 'success' && (
            <p className="text-dark/45 text-xs mt-4">
              🔒 Vos données sont protégées. Désabonnement en un clic. Pas de spam, promis.
            </p>
          )}
        </motion.div>

        {/* Social proof */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-10 flex items-center justify-center gap-2 text-dark/50 text-sm"
        >
          <div className="flex -space-x-2">
            {['🧑', '👩', '🧓', '👨'].map((emoji, i) => (
              <div
                key={i}
                className="w-7 h-7 rounded-full bg-dark/15 flex items-center justify-center text-sm border-2 border-honey/50"
              >
                {emoji}
              </div>
            ))}
          </div>
          <span>
            Rejoignez{' '}
            <strong className="text-dark/70">2 847 passionnés</strong> déjà abonnés
          </span>
        </motion.div>
      </div>
    </section>
  );
}
