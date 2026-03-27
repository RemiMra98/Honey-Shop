'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { MapPin, Leaf, Star, Check, Loader2 } from 'lucide-react';
import { clsx } from 'clsx';
import type { Product } from '@/lib/data';

// ─── CSS honey jar illustration — zero emojis ───────────────────────────────
const HoneyJarIllustration = ({ color }: { color: string }) => (
  <div className="relative flex items-end justify-center" style={{ width: 88, height: 114 }}>
    {/* Lid */}
    <div
      className="absolute top-0 left-1/2 -translate-x-1/2 z-10"
      style={{
        width: 72,
        height: 18,
        borderRadius: '6px 6px 3px 3px',
        background: 'linear-gradient(180deg, #4A2410 0%, #2D1500 60%, #1A0800 100%)',
        boxShadow: '0 3px 10px rgba(0,0,0,0.55)',
      }}
    >
      <div
        className="absolute inset-x-3 top-1.5 h-1 rounded-full"
        style={{ background: 'linear-gradient(90deg, transparent 0%, rgba(255,255,255,0.28) 50%, transparent 100%)' }}
      />
    </div>

    {/* Neck */}
    <div
      className="absolute"
      style={{
        width: 60,
        height: 16,
        top: 14,
        left: '50%',
        transform: 'translateX(-50%)',
        background: `${color}22`,
        border: `1px solid rgba(255,255,255,0.08)`,
        borderBottom: 'none',
      }}
    />

    {/* Body */}
    <div
      className="absolute overflow-hidden"
      style={{
        width: 76,
        height: 84,
        bottom: 0,
        left: '50%',
        transform: 'translateX(-50%)',
        borderRadius: '4px 4px 18px 18px',
        boxShadow: '0 10px 40px rgba(0,0,0,0.45), inset 0 0 0 1px rgba(255,255,255,0.07)',
      }}
    >
      {/* Honey fill */}
      <div
        className="absolute inset-0"
        style={{ background: `linear-gradient(175deg, ${color}F5 0%, ${color}CC 100%)` }}
      />
      {/* Left glass shine */}
      <div
        className="absolute top-0 left-0 bottom-0"
        style={{ width: 14, background: 'linear-gradient(90deg, rgba(255,255,255,0.22), rgba(255,255,255,0.04))' }}
      />
      {/* White label */}
      <div
        className="absolute overflow-hidden"
        style={{ inset: '9px 7px 11px', borderRadius: 4, background: 'rgba(255,255,255,0.9)', boxShadow: '0 1px 4px rgba(0,0,0,0.1)' }}
      >
        <div className="absolute inset-x-0 top-0 h-[2px]" style={{ background: color, opacity: 0.55 }} />
        <div className="absolute inset-x-0 bottom-0 h-[2px]" style={{ background: color, opacity: 0.55 }} />
        <div className="absolute inset-0 flex flex-col items-center justify-center gap-[2px]">
          <span style={{ fontSize: 6.5, color: '#2D1500', letterSpacing: '0.14em', fontFamily: 'Playfair Display, serif', fontWeight: 700, opacity: 0.7 }}>
            LE RUCHER
          </span>
          <span style={{ fontSize: 4.5, color: '#2D1500', letterSpacing: '0.1em', fontFamily: 'Inter, sans-serif', opacity: 0.45 }}>
            DES NECTARINES
          </span>
        </div>
      </div>
      {/* Bottom shine */}
      <div
        className="absolute bottom-0 left-0 right-0 h-5"
        style={{ background: 'linear-gradient(180deg, transparent, rgba(255,255,255,0.05))' }}
      />
    </div>

    {/* Honey drip */}
    <div
      className="absolute"
      style={{ width: 5, height: 13, bottom: -5, left: '61%', borderRadius: '0 0 50% 50%', background: color, opacity: 0.72 }}
    />
  </div>
);

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
      {/* ── Visual area ─────────────────────────────────────────────── */}
      <div
        className="relative h-52 flex items-center justify-center overflow-hidden"
        style={{ background: 'linear-gradient(160deg, #1A0800 0%, #2D1500 50%, #3D1F00 100%)' }}
      >
        {/* Honeycomb pattern */}
        <svg
          className="absolute inset-0 w-full h-full opacity-[0.035] pointer-events-none"
          viewBox="0 0 200 200"
          preserveAspectRatio="xMidYMid slice"
        >
          {[0, 44, 88, 132, 176].map((row) =>
            [0, 50, 100, 150, 200].map((col) => (
              <polygon
                key={`${row}-${col}`}
                points="25,0 50,14 50,43 25,57 0,43 0,14"
                fill="none"
                stroke="white"
                strokeWidth="0.6"
                transform={`translate(${col + (row % 88 === 0 ? 0 : 25)},${row})`}
              />
            ))
          )}
        </svg>

        {/* Color glow behind jar */}
        <div
          className="absolute rounded-full blur-3xl opacity-[0.28] pointer-events-none"
          style={{ width: 130, height: 130, backgroundColor: product.color }}
        />

        {/* Jar */}
        <div className="relative z-10">
          <HoneyJarIllustration color={product.color} />
        </div>

        {/* Badges */}
        {product.isFeatured && (
          <div className="absolute top-3 left-3 flex items-center gap-1 px-2.5 py-[5px] rounded-full bg-honey/20 backdrop-blur-sm border border-honey/30">
            <Star size={9} className="text-honey" fill="currentColor" />
            <span className="text-honey text-[10px] font-semibold tracking-wider uppercase">Sélection</span>
          </div>
        )}
        {product.isSeasonal && (
          <div className="absolute top-3 right-3 flex items-center gap-1 px-2.5 py-[5px] rounded-full bg-white/[0.08] backdrop-blur-sm border border-white/[0.15]">
            <Leaf size={9} className="text-cream/70" />
            <span className="text-cream/70 text-[10px] font-medium tracking-wide">Saisonnier</span>
          </div>
        )}

        {/* Low stock ribbon */}
        {(product.stockLevel === 'low' || product.stockLevel === 'out') && (
          <div className="absolute bottom-3 left-1/2 -translate-x-1/2">
            <span
              className={clsx(
                'text-[10px] font-medium px-3 py-1 rounded-full border tracking-wide',
                product.stockLevel === 'out'
                  ? 'bg-red-500/20 text-red-300 border-red-500/30'
                  : 'bg-amber-400/20 text-amber-300 border-amber-400/30'
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
