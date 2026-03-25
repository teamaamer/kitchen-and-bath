import { cn } from '@/lib/utils'

interface SectionIntroProps {
  label?: string
  title: string
  description?: string
  align?: 'left' | 'center'
  className?: string
}

export default function SectionIntro({
  label,
  title,
  description,
  align = 'center',
  className,
}: SectionIntroProps) {
  return (
    <div className={cn('max-w-3xl', align === 'center' && 'mx-auto text-center', className)}>
      {label && (
        <p className="text-brand-green text-sm font-medium tracking-widest uppercase mb-3">
          {label}
        </p>
      )}
      <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl text-charcoal mb-4">
        {title}
      </h2>
      {description && <p className="text-muted-taupe text-lg leading-relaxed">{description}</p>}
    </div>
  )
}
