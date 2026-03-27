'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ShoppingBag, Menu, X, ChevronDown } from 'lucide-react';
import Link from 'next/link';
import { clsx } from 'clsx';

const navLinks = [
  { label: 'Notre Miel', href: '/#produits', hasDropdown: true },
  { label: 'Boutique', href: '/boutique' },
  { label: 'Adoption de Ruche', href: '/adoption-ruche' },
  { label: 'Notre Histoire', href: '/notre-histoire' },
];

const BeeIcon = () => (
  <svg
    viewBox="0 0 24 24"
    fill="currentColor"
    className="w-5 h-5"
    aria-hidden="true"
  >
    <path d="M12 2C9.5 2 8 4 8 6c0 .7.2 1.3.5 1.8C7 8.5 6 10.1 6 12c0 2.5 1.5 4.7 3.7 5.7-.1.4-.2.9-.2 1.3 0 1.7 1.1 3 2.5 3s2.5-1.3 2.5-3c0-.4-.1-.9-.2-1.3C16.5 16.7 18 14.5 18 12c0-1.9-1-3.5-2.5-4.2.3-.5.5-1.1.5-1.8 0-2-1.5-4-4-4zm0 2c1.1 0 2 1.1 2 2s-.9 2-2 2-2-1.1-2-2 .9-2 2-2zm0 5c2.2 0 4 1.8 4 4s-1.8 4-4 4-4-1.8-4-4 1.8-4 4-4zm-1 1v2H9v1h2v2h1v-2h2v-1h-2V10h-1z" />
  </svg>
);

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [cartCount] = useState(0);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on resize
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setMobileOpen(false);
      }
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <>
      <motion.header
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className={clsx(
          'fixed top-0 left-0 right-0 z-50 transition-all duration-500',
          scrolled
            ? 'bg-cream/95 backdrop-blur-md shadow-sm border-b border-honey/10'
            : 'bg-transparent'
        )}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 md:h-20">
            {/* Logo */}
            <Link
              href="/"
              className="flex items-center gap-2.5 group"
              aria-label="Le Rucher des Nectarines - Accueil"
            >
              <div
                className={clsx(
                  'p-2 rounded-full transition-all duration-300',
                  scrolled ? 'bg-honey/10' : 'bg-white/10'
                )}
              >
                <span
                  className={clsx(
                    'transition-colors duration-300',
                    scrolled ? 'text-honey-deeper' : 'text-honey-light'
                  )}
                >
                  <BeeIcon />
                </span>
              </div>
              <div>
                <div
                  className={clsx(
                    'font-playfair font-bold text-base leading-none transition-colors duration-300',
                    scrolled ? 'text-dark' : 'text-cream'
                  )}
                >
                  Le Rucher
                </div>
                <div
                  className={clsx(
                    'font-playfair text-xs leading-none transition-colors duration-300',
                    scrolled ? 'text-honey-deeper' : 'text-honey-light'
                  )}
                >
                  des Nectarines
                </div>
              </div>
            </Link>

            {/* Desktop Nav */}
            <nav className="hidden md:flex items-center gap-1">
              {navLinks.map((link) => (
                <div
                  key={link.label}
                  className="relative"
                  onMouseEnter={() =>
                    link.hasDropdown && setActiveDropdown(link.label)
                  }
                  onMouseLeave={() => setActiveDropdown(null)}
                >
                  <Link
                    href={link.href}
                    className={clsx(
                      'flex items-center gap-1 px-4 py-2 rounded-full text-sm font-medium transition-all duration-300',
                      scrolled
                        ? 'text-dark/70 hover:text-dark hover:bg-honey/10'
                        : 'text-cream/80 hover:text-cream hover:bg-white/10'
                    )}
                  >
                    {link.label}
                    {link.hasDropdown && (
                      <ChevronDown
                        size={14}
                        className={clsx(
                          'transition-transform duration-200',
                          activeDropdown === link.label && 'rotate-180'
                        )}
                      />
                    )}
                  </Link>
                </div>
              ))}
            </nav>

            {/* Right actions */}
            <div className="flex items-center gap-2">
              {/* Cart */}
              <button
                className={clsx(
                  'relative p-2.5 rounded-full transition-all duration-300',
                  scrolled
                    ? 'text-dark/70 hover:text-dark hover:bg-honey/10'
                    : 'text-cream/80 hover:text-cream hover:bg-white/10'
                )}
                aria-label={`Panier (${cartCount} article${cartCount !== 1 ? 's' : ''})`}
              >
                <ShoppingBag size={20} />
                {cartCount > 0 && (
                  <motion.span
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    className="absolute -top-1 -right-1 w-5 h-5 bg-honey text-dark text-xs font-bold rounded-full flex items-center justify-center"
                  >
                    {cartCount}
                  </motion.span>
                )}
              </button>

              {/* CTA */}
              <Link
                href="/boutique"
                className={clsx(
                  'hidden md:inline-flex items-center px-5 py-2 rounded-full text-sm font-semibold transition-all duration-300',
                  scrolled
                    ? 'bg-honey text-dark hover:bg-honey-light hover:shadow-md hover:shadow-honey/30'
                    : 'bg-white/20 backdrop-blur-sm text-cream border border-white/30 hover:bg-honey hover:text-dark hover:border-honey'
                )}
              >
                Commander
              </Link>

              {/* Mobile hamburger */}
              <button
                onClick={() => setMobileOpen(!mobileOpen)}
                className={clsx(
                  'md:hidden p-2 rounded-full transition-all duration-300',
                  scrolled
                    ? 'text-dark hover:bg-honey/10'
                    : 'text-cream hover:bg-white/10'
                )}
                aria-label={mobileOpen ? 'Fermer le menu' : 'Ouvrir le menu'}
                aria-expanded={mobileOpen}
              >
                {mobileOpen ? <X size={22} /> : <Menu size={22} />}
              </button>
            </div>
          </div>
        </div>
      </motion.header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed inset-y-0 right-0 z-40 w-72 bg-cream shadow-2xl border-l border-honey/10 md:hidden"
          >
            <div className="flex flex-col h-full pt-20 pb-8 px-6">
              {/* Nav links */}
              <nav className="flex flex-col gap-1 flex-1">
                {navLinks.map((link, index) => (
                  <motion.div
                    key={link.label}
                    initial={{ opacity: 0, x: 30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.07 }}
                  >
                    <Link
                      href={link.href}
                      onClick={() => setMobileOpen(false)}
                      className="flex items-center gap-2 px-4 py-3.5 rounded-xl text-dark font-medium hover:bg-honey/10 hover:text-honey-deeper transition-all duration-200"
                    >
                      {link.label}
                    </Link>
                  </motion.div>
                ))}
              </nav>

              {/* Mobile CTA */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
              >
                <Link
                  href="/boutique"
                  onClick={() => setMobileOpen(false)}
                  className="w-full flex items-center justify-center gap-2 py-3.5 bg-honey text-dark font-semibold rounded-full hover:bg-honey-light transition-all duration-300"
                >
                  <ShoppingBag size={16} />
                  Commander en ligne
                </Link>
                <p className="text-center text-xs text-dark/40 mt-3">
                  Livraison offerte dès 50€
                </p>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Mobile overlay */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setMobileOpen(false)}
            className="fixed inset-0 z-30 bg-dark/40 backdrop-blur-sm md:hidden"
          />
        )}
      </AnimatePresence>
    </>
  );
}
