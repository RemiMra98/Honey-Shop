'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { SlidersHorizontal, X } from 'lucide-react';
import ProductCard from '@/components/ui/ProductCard';
import { products } from '@/lib/data';

type FilterSeason = 'all' | 'printemps' | 'ete' | 'automne';
type FilterTerroir = 'all' | 'Provence' | 'Alpes' | 'Ardèche' | 'Vosges' | 'Drôme' | 'Multi-terroirs';
type SortOption = 'featured' | 'price-asc' | 'price-desc' | 'name';

const seasons: { key: FilterSeason; label: string }[] = [
  { key: 'all', label: 'Toutes les saisons' },
  { key: 'printemps', label: 'Printemps' },
  { key: 'ete', label: 'Été' },
  { key: 'automne', label: 'Automne' },
];

const terroirs: { key: FilterTerroir; label: string }[] = [
  { key: 'all', label: 'Tous les terroirs' },
  { key: 'Provence', label: 'Provence' },
  { key: 'Alpes', label: 'Alpes' },
  { key: 'Ardèche', label: 'Ardèche' },
  { key: 'Vosges', label: 'Vosges' },
  { key: 'Drôme', label: 'Drôme' },
];

export default function BoutiqueClient() {
  const [filterSeason, setFilterSeason] = useState<FilterSeason>('all');
  const [filterTerroir, setFilterTerroir] = useState<FilterTerroir>('all');
  const [sortBy, setSortBy] = useState<SortOption>('featured');
  const [showFilters, setShowFilters] = useState(false);

  let filtered = products.filter((p) => {
    if (filterSeason !== 'all' && p.harvestSeason !== filterSeason) return false;
    if (filterTerroir !== 'all' && p.region !== filterTerroir) return false;
    return true;
  });

  if (sortBy === 'price-asc') {
    filtered = [...filtered].sort((a, b) => a.weightOptions[0].price - b.weightOptions[0].price);
  } else if (sortBy === 'price-desc') {
    filtered = [...filtered].sort((a, b) => b.weightOptions[0].price - a.weightOptions[0].price);
  } else if (sortBy === 'name') {
    filtered = [...filtered].sort((a, b) => a.name.localeCompare(b.name));
  } else {
    filtered = [...filtered].sort((a, b) => (b.isFeatured ? 1 : 0) - (a.isFeatured ? 1 : 0));
  }

  const activeFiltersCount =
    (filterSeason !== 'all' ? 1 : 0) + (filterTerroir !== 'all' ? 1 : 0);

  return (
    <div className="min-h-screen bg-cream-light">
      {/* Hero Banner */}
      <section
        className="relative py-28 px-4 text-center overflow-hidden"
        style={{
          background: 'linear-gradient(160deg, #1A0A00 0%, #2D1500 40%, #3D1F00 70%, #5C2E00 100%)',
        }}
      >
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M30 5 L55 20 L55 40 L30 55 L5 40 L5 20 Z' fill='none' stroke='%23F5C842' stroke-width='1'/%3E%3C/svg%3E\")",
            backgroundSize: '60px 60px',
          }}
        />
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="relative z-10 max-w-3xl mx-auto"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-honey/15 border border-honey/25 text-honey text-xs font-semibold tracking-widest uppercase mb-6">
            <span>🍯</span>
            Notre collection
          </div>
          <h1 className="font-playfair text-4xl md:text-6xl font-bold text-cream mb-4 leading-tight">
            Notre Collection{' '}
            <span
              style={{
                background: 'linear-gradient(135deg, #F5C842 0%, #D4A017 60%, #C8920D 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}
            >
              de Miels
            </span>
          </h1>
          <p className="text-cream/55 text-lg leading-relaxed max-w-xl mx-auto">
            8 miels d&apos;exception, 4 terroirs, une famille. Chaque pot est un voyage.
          </p>
        </motion.div>
      </section>

      {/* Main content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Controls bar */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-8">
          <div className="flex items-center gap-3">
            <button
              onClick={() => setShowFilters(!showFilters)}
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-full bg-white border border-honey/20 text-sm font-medium text-dark hover:bg-honey/5 transition-colors"
            >
              <SlidersHorizontal size={15} />
              Filtres
              {activeFiltersCount > 0 && (
                <span className="w-5 h-5 rounded-full bg-honey text-dark text-xs font-bold flex items-center justify-center">
                  {activeFiltersCount}
                </span>
              )}
            </button>

            {/* Active filter chips */}
            <AnimatePresence>
              {filterSeason !== 'all' && (
                <motion.button
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  exit={{ scale: 0 }}
                  onClick={() => setFilterSeason('all')}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-honey/10 border border-honey/20 text-xs font-medium text-honey-deeper"
                >
                  {seasons.find((s) => s.key === filterSeason)?.label}
                  <X size={12} />
                </motion.button>
              )}
              {filterTerroir !== 'all' && (
                <motion.button
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  exit={{ scale: 0 }}
                  onClick={() => setFilterTerroir('all')}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-forest/10 border border-forest/20 text-xs font-medium text-forest-light"
                >
                  {filterTerroir}
                  <X size={12} />
                </motion.button>
              )}
            </AnimatePresence>
          </div>

          <div className="flex items-center gap-2">
            <span className="text-sm text-dark/40">{filtered.length} miel{filtered.length !== 1 ? 's' : ''}</span>
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value as SortOption)}
              className="pl-3 pr-8 py-2 rounded-full bg-white border border-honey/20 text-sm text-dark appearance-none cursor-pointer focus:outline-none focus:ring-2 focus:ring-honey/30"
            >
              <option value="featured">Nos sélections</option>
              <option value="price-asc">Prix croissant</option>
              <option value="price-desc">Prix décroissant</option>
              <option value="name">A → Z</option>
            </select>
          </div>
        </div>

        {/* Filter panel */}
        <AnimatePresence>
          {showFilters && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="overflow-hidden mb-8"
            >
              <div className="p-6 rounded-2xl bg-white border border-honey/15 grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Season filter */}
                <div>
                  <label className="text-xs font-semibold text-dark/40 uppercase tracking-widest mb-3 block">
                    Saison de récolte
                  </label>
                  <div className="flex flex-wrap gap-2">
                    {seasons.map((s) => (
                      <button
                        key={s.key}
                        onClick={() => setFilterSeason(s.key)}
                        className={`px-3 py-1.5 rounded-full text-sm font-medium transition-all ${
                          filterSeason === s.key
                            ? 'bg-honey text-dark'
                            : 'bg-cream text-dark/60 hover:bg-honey/10'
                        }`}
                      >
                        {s.label}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Terroir filter */}
                <div>
                  <label className="text-xs font-semibold text-dark/40 uppercase tracking-widest mb-3 block">
                    Région / Terroir
                  </label>
                  <div className="flex flex-wrap gap-2">
                    {terroirs.map((t) => (
                      <button
                        key={t.key}
                        onClick={() => setFilterTerroir(t.key as FilterTerroir)}
                        className={`px-3 py-1.5 rounded-full text-sm font-medium transition-all ${
                          filterTerroir === t.key
                            ? 'bg-forest text-cream'
                            : 'bg-cream text-dark/60 hover:bg-forest/10'
                        }`}
                      >
                        {t.label}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Products grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={`${filterSeason}-${filterTerroir}-${sortBy}`}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            {filtered.length > 0 ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {filtered.map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            ) : (
              <div className="text-center py-20">
                <div className="text-5xl mb-4">🌱</div>
                <h3 className="font-playfair text-xl font-bold text-dark mb-2">
                  Aucun miel pour cette sélection
                </h3>
                <p className="text-dark/40 text-sm mb-4">
                  Essayez d&apos;autres filtres ou consultez toute notre collection.
                </p>
                <button
                  onClick={() => {
                    setFilterSeason('all');
                    setFilterTerroir('all');
                  }}
                  className="px-5 py-2.5 bg-honey text-dark rounded-full text-sm font-semibold hover:bg-honey-light transition-colors"
                >
                  Voir toute la collection
                </button>
              </div>
            )}
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}
