import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { SectionLabel } from '../ui/SectionLabel';
import { CtaButton } from '../ui/CtaButton';
import { productsData, productCategories, Product } from '../../data/products';
import { InteractiveSwitchSimulator } from './InteractiveSwitchSimulator';
import { scrollToSection } from '../../hooks/useSmoothScroll';
import {
  CheckIcon,
  SparklesIcon,
  ShieldCheckIcon,
  ZapIcon,
  EyeIcon,
  SlidersIcon,
  LayersIcon,
  MessageCircleIcon,
  InfoIcon
} from 'lucide-react';

export function ProductShowcase() {
  const [selectedCategory, setSelectedCategory] = useState('All Products');
  const [activeProduct, setActiveProduct] = useState<Product | null>(productsData[0]);

  const filteredProducts =
    selectedCategory === 'All Products'
      ? productsData
      : productsData.filter((p) => p.category.toLowerCase().includes(selectedCategory.toLowerCase()));

  return (
    <section id="products" aria-labelledby="products-heading" className="relative bg-ink py-28 md:py-40">
      <div className="mx-auto max-w-7xl px-6 md:px-12">
        {/* Header */}
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div>
            <SectionLabel>Hardware & Touch Panels</SectionLabel>
            <h2
              id="products-heading"
              className="mt-6 font-display text-[clamp(2.5rem,5.5vw,5rem)] font-semibold uppercase leading-[0.95] tracking-[-0.035em] text-paper"
            >
              Smart Touch
              <br />
              Glass Switches.
            </h2>
          </div>
          <p className="max-w-md text-base leading-relaxed text-muted">
            Crafted with beveled tempered crystal glass, feather-touch capacitive sensors, and silent digital regulation.
            Available in sleek black glass finishes for retrofit and new builds.
          </p>
        </div>

        {/* Category Pill Filters */}
        <div className="mt-12 flex flex-wrap gap-2">
          {productCategories.map((cat) => (
            <button
              key={cat}
              type="button"
              onClick={() => setSelectedCategory(cat)}
              className={`rounded-full px-5 py-2.5 text-xs font-semibold uppercase tracking-[0.14em] transition-all duration-200 ${
                selectedCategory === cat
                  ? 'bg-accent text-white dark:text-ink shadow-lg shadow-accent/20'
                  : 'border border-paper/15 bg-surface text-paper/75 hover:border-paper/30 hover:text-paper'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Interactive Simulator Section */}
        <div className="mt-14">
          <InteractiveSwitchSimulator />
        </div>

        {/* Product Cards Grid */}
        <div className="mt-20">
          <div className="flex items-center justify-between mb-8">
            <h3 className="font-display text-2xl font-semibold text-paper">
              Featured Switch & Regulator Range
            </h3>
            <span className="text-xs text-muted font-mono">{filteredProducts.length} Models Available</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {filteredProducts.map((product) => (
              <motion.div
                key={product.id}
                whileHover={{ y: -6 }}
                transition={{ duration: 0.2 }}
                onClick={() => setActiveProduct(product)}
                className={`group relative flex flex-col justify-between rounded-3xl border p-5 transition-all cursor-pointer ${
                  activeProduct?.id === product.id
                    ? 'border-accent/80 bg-surface shadow-xl shadow-accent/10 ring-1 ring-accent/40'
                    : 'border-paper/10 bg-surface/60 hover:border-paper/30 hover:bg-surface'
                }`}
              >
                {product.popular && (
                  <span className="absolute top-4 right-4 z-10 rounded-full bg-accent/20 px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-accent border border-accent/40">
                    Bestseller
                  </span>
                )}

                {/* Product Photo with Glass Background */}
                <div className="relative aspect-square w-full overflow-hidden rounded-2xl bg-neutral-950 p-4 flex items-center justify-center border border-neutral-800">
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent pointer-events-none" />
                  <img
                    src={product.image}
                    alt={product.name}
                    className="h-full w-full object-contain filter drop-shadow-[0_12px_24px_rgba(0,0,0,0.8)] transition-transform duration-300 group-hover:scale-105"
                  />
                </div>

                {/* Product Info */}
                <div className="mt-5 flex-1 flex flex-col">
                  <span className="text-[11px] font-semibold uppercase tracking-wider text-accent">
                    {product.category}
                  </span>
                  <h4 className="mt-1 font-display text-lg font-semibold text-paper leading-snug">
                    {product.name}
                  </h4>
                  <p className="mt-1 text-xs text-muted line-clamp-2">
                    {product.subtitle}
                  </p>

                  {/* Key Feature bullet */}
                  <ul className="mt-4 space-y-1.5 text-xs text-paper/80">
                    {product.features.slice(0, 3).map((f, i) => (
                      <li key={i} className="flex items-start gap-1.5">
                        <CheckIcon className="h-3.5 w-3.5 text-accent shrink-0 mt-0.5" />
                        <span className="line-clamp-1">{f}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Action CTA */}
                <div className="mt-6 flex items-center justify-between border-t border-paper/10 pt-4">
                  <button
                    type="button"
                    onClick={(e) => {
                      e.stopPropagation();
                      setActiveProduct(product);
                    }}
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-accent hover:underline"
                  >
                    <InfoIcon className="h-3.5 w-3.5" /> View Full Specs
                  </button>

                  <a
                    href={`https://wa.me/919000006000?text=Hi%20AIIVA%20Automation,%20I%20am%20interested%20in%20the%20${encodeURIComponent(product.name)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={(e) => e.stopPropagation()}
                    className="rounded-full bg-emerald-500/15 text-emerald-400 border border-emerald-500/30 p-2 hover:bg-emerald-500 hover:text-white transition-colors"
                    title="Inquire on WhatsApp"
                  >
                    <MessageCircleIcon className="h-4 w-4" />
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Selected Product Detailed Drawer / Modal Display */}
        {activeProduct && (
          <div className="mt-16 rounded-3xl border border-paper/15 bg-gradient-to-br from-surface to-surface/90 p-8 md:p-12 shadow-2xl">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              {/* Product Visual */}
              <div className="lg:col-span-5 flex flex-col items-center justify-center">
                <div className="relative w-full max-w-[380px] aspect-square rounded-2xl bg-neutral-950 p-6 flex items-center justify-center border border-neutral-800 shadow-2xl">
                  <img
                    src={activeProduct.image}
                    alt={activeProduct.name}
                    className="max-h-full max-w-full object-contain filter drop-shadow-[0_20px_40px_rgba(0,0,0,0.9)]"
                  />
                </div>
                <p className="mt-3 text-xs text-muted text-center">
                  Official AIIVA Automation Tempered Glass Touch Panel
                </p>
              </div>

              {/* Product Spec Table & Inquire */}
              <div className="lg:col-span-7 flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-2">
                    <span className="rounded-full bg-accent/15 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-accent border border-accent/30">
                      {activeProduct.category}
                    </span>
                    <span className="text-xs text-muted">Model ID: {activeProduct.id}</span>
                  </div>

                  <h3 className="mt-3 font-display text-2xl md:text-3xl font-bold text-paper">
                    {activeProduct.name}
                  </h3>
                  <p className="mt-2 text-sm text-paper/80 leading-relaxed">
                    {activeProduct.description}
                  </p>

                  {/* Specifications Grid */}
                  <div className="mt-6 rounded-2xl border border-paper/10 bg-ink/50 p-4">
                    <h4 className="text-xs font-bold uppercase tracking-wider text-accent mb-3">
                      Technical Specifications
                    </h4>
                    <dl className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-2 text-xs">
                      {Object.entries(activeProduct.specs).map(([key, val]) => (
                        <div key={key} className="flex justify-between border-b border-paper/5 pb-1.5">
                          <dt className="text-muted">{key}:</dt>
                          <dd className="font-semibold text-paper text-right">{val}</dd>
                        </div>
                      ))}
                    </dl>
                  </div>
                </div>

                {/* Direct Actions */}
                <div className="mt-8 flex flex-wrap items-center gap-4">
                  <CtaButton
                    href={`https://wa.me/919000006000?text=Hi%20AIIVA%20Automation,%20I%20would%20like%20a%20quote%20for%20the%20${encodeURIComponent(activeProduct.name)}`}
                    icon={<MessageCircleIcon className="h-4 w-4" />}
                  >
                    Request Quote on WhatsApp
                  </CtaButton>

                  <CtaButton
                    variant="ghost"
                    onClick={() => scrollToSection('contact')}
                  >
                    Book Site Consultation
                  </CtaButton>

                  <a
                    href="tel:9000006000"
                    className="text-xs font-medium text-paper/70 hover:text-paper"
                  >
                    Direct Sales: +91 9000006000
                  </a>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
