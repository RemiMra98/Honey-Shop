'use client';

import { Truck, Leaf, ShieldCheck, Award } from 'lucide-react';

const signals = [
  { icon: Truck, label: 'Livraison offerte', sub: 'dès 50€ d\'achat' },
  { icon: Leaf, label: 'Certifié Bio', sub: 'FR-BIO-01 depuis 1995' },
  { icon: Award, label: 'Directement du rucher', sub: 'sans intermédiaire' },
  { icon: ShieldCheck, label: 'Paiement sécurisé', sub: 'SSL · CB · PayPal' },
];

export default function TrustBar() {
  return (
    <div className="bg-dark border-b border-honey/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-honey/10">
          {signals.map(({ icon: Icon, label, sub }) => (
            <div key={label} className="flex items-center gap-3 py-3.5 px-4 first:pl-0 last:pr-0">
              <Icon size={18} className="text-honey flex-shrink-0" strokeWidth={1.5} />
              <div>
                <p className="text-cream text-xs font-semibold leading-none">{label}</p>
                <p className="text-cream/40 text-[10px] mt-0.5 leading-none">{sub}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
