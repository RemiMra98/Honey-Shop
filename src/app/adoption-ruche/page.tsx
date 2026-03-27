import type { Metadata } from 'next';
import AdoptionRucheClient from './AdoptionRucheClient';

export const metadata: Metadata = {
  title: 'Adopter une Ruche — Devenez Gardien',
  description:
    'Adoptez une ruche du Rucher des Nectarines. Recevez son miel, ses nouvelles, et portez votre prénom sur la ruche. 3 formules à partir de 49€/an.',
};

export default function AdoptionRuchePage() {
  return <AdoptionRucheClient />;
}
