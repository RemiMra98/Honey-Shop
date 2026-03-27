'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { ShoppingBag, MapPin, Leaf, Star, AlertTriangle } from 'lucide-react';
import { clsx } from 'clsx';
import type { Product } from '@/lib/data';

interface ProductCardProps {
  product: Product;
  onAddToCart?: (product: Product, weight: string) => void;
  className?: string;
}

const stockConfig = {
  high: { label: 'En stock', color: 'text-green-600', bg: 'bg-green-50' },
  medium: { label: 'Stock limité', color: 'text-amber-600', bg: 'bg-amber-50' },
  low: { label: 'Derniers pots', color: 'text-orange-600', bg: 'bg-orange-50' },
  out: { label: 'Épuisé', color: 'text-red-500', bg: 'bg-red-50' },
};

export default function ProductCard({
  product,
  onAddToCart,
  className,
}: ProductCardProps) {
  const [selectedWeight, setSelectedWeight] = useState(
    product.weightOptions[0].weight
  );
  const [isAdding, setIsAdding] = useState(false);
  const [added, setAdded] = useState(false);

  const selectedOption = product.weightOptions.find(
    (opt) => opt.weight === selectedWeight
  );
  const stock = stockConfig[product.stockLevel];

  const handleAddToCart = async () => {
    if (product.stockLevel === 'out' || isAdding) return;
    setIsAdding(true);
    await new Promise((r) => setTimeout(r, 600));
    onAddToCart?.(product, selectedWeight);
    setIsAdding(false);
    setAdded(true);
    setTimeout(() => setAdded(false), 2000);
  };

  return (
    <motion.div
      className={clsx(
        'group relative bg-white rounded-2xl overflow-hidden shadow-sm border border-honey/10',
        'transition-all duration-500 hover:shadow-2xl hover:shadow-honey/15 hover:-translate-y-1',
        className
      )}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.5 }}
    >
      {/* Honey color splash background */}
      <div
        className="absolute inset-0 opacity-0 group-hover:opacity-5 transition-opacity duration-700 rounded-2xl"
        style={{ backgroundColor: product.color }}
      />

      {/* Seasonal badge */}
      {product.isSeasonal && (
        <div className="absolute top-3 right-3 z-10">
          <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-xs font-medium bg-honey/10 text-honey-deeper border border-honey/20">
            <Leaf size={10} />
            Saisonnier
          </span>
        </div>
      )}

      {/* Featured badge */}
      {product.isFeatured && (
        <div className="absolute top-3 left-3 z-10">
          <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-xs font-medium bg-dark text-honey">
            <Star size={10} fill="currentColor" />
            Sélection
          </span>
        </div>
      )}

      {/* Color swatch & visual */}
      <div className="relative h-44 flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 opacity-20"
          style={{
            background: `radial-gradient(ellipse at center, ${product.color} 0%, transparent 70%)`,
          }}
        />
        {/* Decorative hexagonal blob */}
        <motion.div
          className="relative"
          whileHover={{ scale: 1.05, rotate: 5 }}
          transition={{ type: 'spring', stiffness: 300 }}
        >
          <div
            className="hexagon w-28 h-28 shadow-lg"
            style={{ backgroundColor: product.color }}
          />
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="text-3xl">🍯</span>
          </div>
        </motion.div>

        {/* Intensity indicator */}
        <div className="absolute bottom-3 right-4 flex gap-0.5">
          {Array.from({ length: 5 }).map((_, i) => (
            <div
              key={i}
              className={clsx(
                'w-2 h-2 rounded-full transition-all',
                i < product.intensity
                  ? 'bg-honey-deeper'
                  : 'bg-honey/20'
              )}
            />
          ))}
          <span className="text-xs text-dark/40 ml-1">intensité</span>
        </div>
      </div>

      {/* Content */}
      <div className="p-5">
        {/* Header */}
        <div className="mb-3">
          <h3 className="font-playfair text-xl font-bold text-dark group-hover:text-honey-deeper transition-colors">
            {product.name}
          </h3>
          <div className="flex items-center gap-1 mt-1 text-dark/50 text-xs">
            <MapPin size={11} />
            <span>{product.origin}</span>
          </div>
        </div>

        <p className="text-sm text-dark/60 leading-relaxed mb-3 line-clamp-2">
          {product.description}
        </p>

        {/* Floral notes */}
        <div className="flex flex-wrap gap-1.5 mb-4">
          {product.floralNotes.slice(0, 3).map((note) => (
            <span
              key={note}
              className="px-2 py-0.5 rounded-full text-xs bg-cream-warm text-amber-warm border border-honey/15"
            >
              {note}
            </span>
          ))}
        </div>

        {/* Weight selector */}
        <div className="flex gap-2 mb-4">
          {product.weightOptions.map((option) => (
            <button
              key={option.weight}
              onClick={() => setSelectedWeight(option.weight)}
              className={clsx(
                'flex-1 py-2 rounded-xl text-sm font-medium transition-all duration-200',
                selectedWeight === option.weight
                  ? 'bg-honey text-dark shadow-sm'
                  : 'bg-cream text-dark/60 hover:bg-honey/10'
              )}
            >
              {option.weight}
              <div className="text-xs font-bold mt-0.5">{option.price}€</div>
            </button>
          ))}
        </div>

        {/* Stock & Price */}
        <div className="flex items-center justify-between mb-4">
          <div>
            <span className="font-playfair text-2xl font-bold text-honey-deeper">
              {selectedOption?.price}€
            </span>
            <span className="text-xs text-dark/40 ml-1">{selectedWeight}</span>
          </div>
          <span
            className={clsx(
              'text-xs font-medium px-2.5 py-1 rounded-full',
              stock.bg,
              stock.color
            )}
          >
            {stock.label}
          </span>
        </div>

        {/* Add to cart */}
        <motion.button
          onClick={handleAddToCart}
          disabled={product.stockLevel === 'out'}
          className={clsx(
            'w-full py-3 rounded-xl font-medium text-sm flex items-center justify-center gap-2',
            'transition-all duration-300',
            added
              ? 'bg-green-500 text-white'
              : product.stockLevel === 'out'
              ? 'bg-gray-100 text-gray-400 cursor-not-allowed'
              : 'bg-honey text-dark hover:bg-honey-light hover:shadow-md hover:shadow-honey/30'
          )}
          whileTap={product.stockLevel !== 'out' ? { scale: 0.97 } : {}}
        >
          {isAdding ? (
            <>
              <svg className="animate-spin h-4 w-4" viewBox="0 0 24 24" fill="none">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
              </svg>
              Ajout en cours...
            </>
          ) : added ? (
            <>
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              Ajouté !
            </>
          ) : product.stockLevel === 'out' ? (
            <>
              <AlertTriangle size={14} />
              Épuisé
            </>
          ) : (
            <>
              <ShoppingBag size={16} />
              Ajouter au panier
            </>
          )}
        </motion.button>
      </div>
    </motion.div>
  );
}
