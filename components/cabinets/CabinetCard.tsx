'use client'

import Image from 'next/image'
import { Plus, Check } from 'lucide-react'
import type { Cabinet } from '@/data/cabinets'

interface Props {
  cabinet: Cabinet
  quantity: number
  onAdd: (cabinet: Cabinet) => void
  onRemove: (id: string) => void
}

export default function CabinetCard({ cabinet, quantity, onAdd, onRemove }: Props) {
  const inQuote = quantity > 0

  return (
    <div className="bg-luxury-white border border-stone-gray/30 group flex flex-col">
      <div className="relative aspect-[4/3] overflow-hidden bg-warm-ivory">
        <Image
          src={cabinet.image}
          alt={cabinet.name}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-500"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
        <div className="absolute top-3 left-3 bg-charcoal/80 text-luxury-white text-xs px-2 py-1 font-mono tracking-wider">
          {cabinet.sku}
        </div>
        {inQuote && (
          <div className="absolute top-3 right-3 bg-brand-green text-luxury-white text-xs px-2 py-1 font-medium">
            ×{quantity} in quote
          </div>
        )}
      </div>

      <div className="p-5 flex flex-col flex-1">
        <div className="flex items-start justify-between gap-2 mb-1">
          <h3 className="font-heading text-base font-semibold text-charcoal leading-snug">
            {cabinet.name}
          </h3>
        </div>

        <p className="text-xs text-muted-taupe mb-3">
          {cabinet.width}" W × {cabinet.height}" H × {cabinet.depth}" D
        </p>

        <p className="text-sm text-charcoal/70 leading-relaxed mb-4 flex-1">
          {cabinet.description}
        </p>

        <ul className="space-y-1 mb-5">
          {cabinet.features.map((f) => (
            <li key={f} className="flex items-center gap-2 text-xs text-muted-taupe">
              <Check className="w-3 h-3 text-brand-green flex-shrink-0" />
              {f}
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-2 mt-auto">
          {inQuote ? (
            <>
              <button
                onClick={() => onRemove(cabinet.id)}
                className="flex-1 border border-stone-gray text-charcoal text-sm py-2 hover:border-charcoal transition-colors"
              >
                − Remove
              </button>
              <button
                onClick={() => onAdd(cabinet)}
                className="flex-1 bg-brand-green text-luxury-white text-sm py-2 hover:bg-deep-olive transition-colors flex items-center justify-center gap-1"
              >
                <Plus className="w-3 h-3" /> Add Another
              </button>
            </>
          ) : (
            <button
              onClick={() => onAdd(cabinet)}
              className="w-full bg-charcoal text-luxury-white text-sm py-2.5 hover:bg-brand-green transition-colors flex items-center justify-center gap-2"
            >
              <Plus className="w-4 h-4" /> Add to Quote
            </button>
          )}
        </div>
      </div>
    </div>
  )
}
