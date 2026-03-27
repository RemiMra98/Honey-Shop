'use client';

import Link from 'next/link';
import { Instagram, Facebook, Mail, MapPin, Phone, Heart } from 'lucide-react';
import HexGrid from '@/components/ui/HexGrid';

const footerLinks = {
  navigation: [
    { label: 'Notre Collection', href: '/boutique' },
    { label: 'Adoption de Ruche', href: '/adoption-ruche' },
    { label: 'Notre Histoire', href: '/notre-histoire' },
    { label: 'Le Calendrier du Nectar', href: '/#calendrier' },
    { label: 'La Table d\'Accord', href: '/#table-accord' },
  ],
  rucher: [
    { label: 'Le Rucher du Lubéron', href: '/notre-histoire' },
    { label: 'Certification Bio', href: '/notre-histoire#bio' },
    { label: 'Nos Pratiques', href: '/notre-histoire#pratiques' },
    { label: 'Les Abeilles', href: '/notre-histoire#abeilles' },
    { label: 'Programme d\'adoption', href: '/adoption-ruche' },
  ],
  services: [
    { label: 'Livraison & Retours', href: '/livraison' },
    { label: 'Coffrets Cadeaux', href: '/boutique#cadeaux' },
    { label: 'Vente en Gros', href: '/pro' },
    { label: 'Ateliers & Visites', href: '/visites' },
    { label: 'FAQ', href: '/faq' },
  ],
};

const BeeLogoIcon = () => (
  <svg viewBox="0 0 32 32" fill="currentColor" className="w-8 h-8" aria-hidden="true">
    <ellipse cx="16" cy="16" rx="5" ry="8" fill="#D4A017" />
    <ellipse cx="16" cy="16" rx="5" ry="8" fill="none" stroke="#8B4513" strokeWidth="1.5" />
    <line x1="14" y1="11" x2="14" y2="21" stroke="#8B4513" strokeWidth="0.8" />
    <line x1="16" y1="10" x2="16" y2="22" stroke="#8B4513" strokeWidth="0.8" />
    <line x1="18" y1="11" x2="18" y2="21" stroke="#8B4513" strokeWidth="0.8" />
    <ellipse cx="11" cy="14" rx="5" ry="2.5" fill="white" fillOpacity="0.7" transform="rotate(-20 11 14)" />
    <ellipse cx="21" cy="14" rx="5" ry="2.5" fill="white" fillOpacity="0.7" transform="rotate(20 21 14)" />
    <circle cx="14" cy="9.5" r="1.2" fill="#8B4513" />
    <circle cx="18" cy="9.5" r="1.2" fill="#8B4513" />
  </svg>
);

export default function Footer() {
  return (
    <footer className="relative bg-dark text-cream overflow-hidden">
      <HexGrid color="#D4A017" opacity={0.06} animate={false} size={80} />

      {/* Top section */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          {/* Brand column */}
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center gap-3 mb-4 group">
              <div className="p-2 rounded-full bg-honey/10 group-hover:bg-honey/20 transition-colors">
                <BeeLogoIcon />
              </div>
              <div>
                <div className="font-playfair font-bold text-lg text-cream leading-tight">
                  Le Rucher des Nectarines
                </div>
                <div className="text-xs text-honey/70 font-medium">
                  Miels Artisanaux · Certification Bio
                </div>
              </div>
            </Link>

            <p className="text-cream/50 text-sm leading-relaxed mb-5 max-w-xs italic font-playfair">
              "De la fleur à votre table depuis 1987"
            </p>

            <div className="space-y-2.5 text-sm text-cream/60">
              <div className="flex items-start gap-2.5">
                <MapPin size={14} className="text-honey mt-0.5 flex-shrink-0" />
                <span>Chemin des Abeilles, 84240 La Tour d'Aigues<br />Lubéron, Provence</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone size={14} className="text-honey flex-shrink-0" />
                <span>+33 4 90 07 XX XX</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Mail size={14} className="text-honey flex-shrink-0" />
                <a href="mailto:bonjour@rucher-nectarines.fr" className="hover:text-honey transition-colors">
                  bonjour@rucher-nectarines.fr
                </a>
              </div>
            </div>

            {/* Social */}
            <div className="flex gap-3 mt-6">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-full bg-honey/10 text-honey/70 hover:bg-honey hover:text-dark transition-all duration-300"
                aria-label="Instagram"
              >
                <Instagram size={16} />
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-full bg-honey/10 text-honey/70 hover:bg-honey hover:text-dark transition-all duration-300"
                aria-label="Facebook"
              >
                <Facebook size={16} />
              </a>
              <a
                href="mailto:bonjour@rucher-nectarines.fr"
                className="p-2.5 rounded-full bg-honey/10 text-honey/70 hover:bg-honey hover:text-dark transition-all duration-300"
                aria-label="Email"
              >
                <Mail size={16} />
              </a>
            </div>
          </div>

          {/* Navigation column */}
          <div>
            <h3 className="font-playfair font-semibold text-sm text-honey uppercase tracking-widest mb-5">
              Navigation
            </h3>
            <ul className="space-y-2.5">
              {footerLinks.navigation.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-cream/55 hover:text-honey transition-colors duration-200 flex items-center gap-1.5 group"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-honey/30 group-hover:bg-honey transition-colors flex-shrink-0" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Notre Rucher column */}
          <div>
            <h3 className="font-playfair font-semibold text-sm text-honey uppercase tracking-widest mb-5">
              Notre Rucher
            </h3>
            <ul className="space-y-2.5">
              {footerLinks.rucher.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-cream/55 hover:text-honey transition-colors duration-200 flex items-center gap-1.5 group"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-honey/30 group-hover:bg-honey transition-colors flex-shrink-0" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services column */}
          <div>
            <h3 className="font-playfair font-semibold text-sm text-honey uppercase tracking-widest mb-5">
              Services
            </h3>
            <ul className="space-y-2.5">
              {footerLinks.services.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-cream/55 hover:text-honey transition-colors duration-200 flex items-center gap-1.5 group"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-honey/30 group-hover:bg-honey transition-colors flex-shrink-0" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>

            {/* Certif badge */}
            <div className="mt-6 p-3 rounded-xl bg-honey/8 border border-honey/15">
              <div className="flex items-center gap-2 mb-1">
                <span className="text-base">🌿</span>
                <span className="text-xs font-semibold text-honey">Certifié Bio</span>
              </div>
              <p className="text-xs text-cream/40 leading-relaxed">
                FR-BIO-01 · Agriculture biologique française depuis 1995
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Divider */}
      <div className="relative z-10 border-t border-honey/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-xs text-cream/35 text-center md:text-left">
              © 2024 Le Rucher des Nectarines. Tous droits réservés.
            </p>
            <div className="flex items-center gap-1 text-xs text-cream/35">
              <span>Fait avec</span>
              <Heart size={11} className="text-honey fill-honey mx-0.5" />
              <span>par la famille Mra98 · Ruche certifiée bio</span>
            </div>
            <div className="flex items-center gap-4 text-xs text-cream/35">
              <Link href="/mentions-legales" className="hover:text-honey/60 transition-colors">
                Mentions légales
              </Link>
              <Link href="/confidentialite" className="hover:text-honey/60 transition-colors">
                Confidentialité
              </Link>
              <Link href="/cgv" className="hover:text-honey/60 transition-colors">
                CGV
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
