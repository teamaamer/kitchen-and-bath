'use client'

import { motion } from 'framer-motion'
import { cn } from '@/lib/utils'

interface SectionIntroProps {
  label?: string
  title: string
  description?: string
  align?: 'left' | 'center'
  className?: string
  light?: boolean
}

export default function SectionIntro({
  label,
  title,
  description,
  align = 'center',
  className,
  light = false,
}: SectionIntroProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] }}
      className={cn('max-w-3xl', align === 'center' && 'mx-auto text-center', className)}
    >
      {label && (
        <div className={cn('flex items-center gap-3 mb-4', align === 'center' && 'justify-center')}>
          <span className="block w-6 h-px bg-soft-gold" />
          <p className="text-brand-green text-[11px] font-semibold tracking-[0.25em] uppercase">
            {label}
          </p>
          <span className="block w-6 h-px bg-soft-gold" />
        </div>
      )}
      <h2 className={cn(
        'font-heading text-3xl md:text-4xl lg:text-5xl mb-5 leading-tight',
        light ? 'text-luxury-white' : 'text-charcoal'
      )}>
        {title}
      </h2>
      {description && (
        <p className={cn(
          'text-base md:text-lg leading-relaxed max-w-2xl',
          align === 'center' && 'mx-auto',
          light ? 'text-stone-gray/80' : 'text-muted-taupe'
        )}>
          {description}
        </p>
      )}
    </motion.div>
  )
}
