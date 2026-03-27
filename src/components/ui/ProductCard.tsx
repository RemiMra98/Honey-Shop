'use client';

import { useState } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { MapPin, Leaf, Star, Check, Loader2 } from 'lucide-react';
import { clsx } from 'clsx';
import type { Product } from '@/lib/data';

// ─── Intensity indicator ────────────────────────────────────────────────────
const IntensityDots = ({ level }: { level: number }) => (
  <div className="flex items-center gap-[3px]">
    {Array.from({ length: 5 }).map((_, i) => (
      <div
        key={i}
        style={{
          width: 5,
          height: 5,
          borderRadius: '50%',
          backgroundColor: i < level ? '#D4A017' : 'rgba(212,160,23,0.14)',
          transition: 'background-color 0.2s',
        }}
      />
    ))}
  </div>
);

interface ProductCardProps {
  product: Product;
  onAddToCart?: (product: Product, weight: string) => void;
  className?: string;
}

export default function ProductCard({ product, onAddToCart, className }: ProductCardProps) {
  const [selectedWeight, setSelectedWeight] = useState(product.weightOptions[0].weight);
  const [isAdding, setIsAdding] = useState(false);
  const [added, setAdded] = useState(false);

  const selectedOption = product.weightOptions.find((o) => o.weight === selectedWeight);
  const isOutOfStock = product.stockLevel === 'out';

  const handleAddToCart = async () => {
    if (isOutOfStock || isAdding) return;
    setIsAdding(true);
    await new Promise((r) => setTimeout(r, 700));
    onAddToCart?.(product, selectedWeight);
    setIsAdding(false);
    setAdded(true);
    setTimeout(() => setAdded(false), 2500);
  };

  return (
    <motion.div
      className={clsx(
        'group relative bg-white overflow-hidden rounded-2xl',
        'border border-black/[0.06] shadow-md',
        'hover:shadow-2xl hover:shadow-honey/10 hover:-translate-y-1.5',
        'transition-all duration-500',
        className
      )}
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.5 }}
    >
      {/* ── Photo area ─────────────────────────────────────────────── */}
      <div className="relative h-56 overflow-hidden bg-stone-100">
        <Image
          src={product.imageUrl}
          alt={product.name}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
          className="object-cover transition-transform duration-700 group-hover:scale-105"
        />

        {/* Dark gradient overlay at bottom for readability */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />

        {/* Badges */}
        {product.isFeatured && (
          <div className="absolute top-3 left-3 flex items-center gap-1 px-2.5 py-[5px] rounded-full bg-honey/90 backdrop-blur-sm shadow-sm">
            <Star size={9} className="text-dark" fill="currentColor" />
            <span className="text-dark text-[10px] font-bold tracking-wider uppercase">Sélection</span>
          </div>
        )}
        {product.isSeasonal && (
          <div className="absolute top-3 right-3 flex items-center gap-1 px-2.5 py-[5px] rounded-full bg-white/80 backdrop-blur-sm shadow-sm">
            <Leaf size={9} className="text-forest" />
            <span className="text-forest text-[10px] font-medium tracking-wide">Saisonnier</span>
          </div>
        )}

        {/* Low stock / out of stock ribbon */}
        {(product.stockLevel === 'low' || product.stockLevel === 'out') && (
          <div className="absolute bottom-3 left-1/2 -translate-x-1/2">
            <span
              className={clsx(
                'text-[10px] font-semibold px-3 py-1 rounded-full border tracking-wide backdrop-blur-sm',
                product.stockLevel === 'out'
                  ? 'bg-red-500/80 text-white border-red-400/50'
                  : 'bg-amber-400/80 text-dark border-amber-300/50'
              )}
            >
              {product.stockLevel === 'out' ? 'Épuisé' : 'Derniers pots'}
            </span>
          </div>
        )}
      </div>

      {/* ── Info area ───────────────────────────────────────────────── */}
      <div className="p-5">
        {/* Name */}
        <h3 className="font-playfair text-[17px] font-bold text-dark leading-tight group-hover:text-honey-deeper transition-colors duration-300">
          {product.name}
        </h3>

        {/* Origin + intensity */}
        <div className="flex items-center justify-between mt-1.5">
          <div className="flex items-center gap-1 text-dark/40">
            <MapPin size={10} strokeWidth={2} />
            <span className="text-[11px] uppercase tracking-wider font-medium">{product.origin}</span>
          </div>
          <IntensityDots level={product.intensity} />
        </div>

        {/* Divider */}
        <div className="w-full h-px bg-honey/10 my-3" />

        {/* Floral notes */}
        <div className="flex flex-wrap gap-1 mb-4">
          {product.floralNotes.slice(0, 3).map((note) => (
            <span
              key={note}
              className="text-[11px] px-2.5 py-[3px] rounded-full border font-medium"
              style={{
                background: `${product.color}18`,
                borderColor: `${product.color}35`,
                color: '#6B3410',
              }}
            >
              {note}
            </span>
          ))}
        </div>

        {/* Weight selector */}
        <div className="flex gap-2 mb-4">
          {product.weightOptions.map((opt) => (
            <button
              key={opt.weight}
              onClick={() => setSelectedWeight(opt.weight)}
              className={clsx(
                'flex-1 py-2.5 rounded-xl text-sm font-medium transition-all duration-200',
                selectedWeight === opt.weight
                  ? 'bg-honey text-dark shadow-sm shadow-honey/20'
                  : 'bg-cream text-dark/45 hover:bg-honey/15 hover:text-dark/80'
              )}
            >
              <div className="text-[11px] leading-none mb-0.5 opacity-80">{opt.weight}</div>
              <div className="font-bold text-sm">{opt.price}€</div>
            </button>
          ))}
        </div>

        {/* Price + CTA */}
        <div className="flex items-center justify-between gap-3">
          <div>
            <span className="font-playfair text-2xl font-black text-dark">
              {selectedOption?.price}€
            </span>
            <span className="text-xs text-dark/30 ml-1">{selectedWeight}</span>
          </div>

          <motion.button
            onClick={handleAddToCart}
            disabled={isOutOfStock || isAdding}
            whileTap={!isOutOfStock ? { scale: 0.96 } : {}}
            className={clsx(
              'flex items-center justify-center gap-1.5 px-5 py-2.5 rounded-xl text-sm font-semibold',
              'transition-all duration-300 min-w-[96px]',
              added
                ? 'bg-forest text-white shadow-md shadow-forest/20'
                : isOutOfStock
                ? 'bg-gray-100 text-gray-400 cursor-not-allowed'
                : 'bg-dark text-cream hover:bg-honey hover:text-dark'
            )}
          >
            {isAdding ? (
              <Loader2 size={14} className="animate-spin" />
            ) : added ? (
              <>
                <Check size={13} />
                Ajouté
              </>
            ) : isOutOfStock ? (
              'Épuisé'
            ) : (
              'Ajouter'
            )}
          </motion.button>
        </div>
      </div>
    </motion.div>
  );
}
