import type { Metadata } from 'next';
import NotreHistoireClient from './NotreHistoireClient';

export const metadata: Metadata = {
  title: 'Notre Histoire — La Famille derrière le Rucher',
  description:
    'Depuis 1987, Marcel et sa famille cultivent l\'art de l\'apiculture dans le Lubéron. Découvrez l\'histoire du Rucher des Nectarines, notre certification bio, et notre engagement pour les abeilles.',
};

export default function NotreHistoirePage() {
  return <NotreHistoireClient />;
}
