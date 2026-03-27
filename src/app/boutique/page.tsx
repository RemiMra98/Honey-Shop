import type { Metadata } from 'next';
import BoutiqueClient from './BoutiqueClient';

export const metadata: Metadata = {
  title: 'Boutique — Notre Collection de Miels',
  description:
    'Découvrez nos 8 miels artisanaux bio : Miel de Lavande, d\'Acacia, de Thym, de Montagne et plus encore. Directement de nos ruches à votre table.',
};

export default function BoutiquePage() {
  return <BoutiqueClient />;
}
