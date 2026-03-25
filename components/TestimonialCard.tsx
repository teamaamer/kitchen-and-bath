import { Star } from 'lucide-react'
import { Testimonial } from '@/types'

interface TestimonialCardProps {
  testimonial: Testimonial
}

export default function TestimonialCard({ testimonial }: TestimonialCardProps) {
  return (
    <div className="bg-luxury-white p-8 border border-stone-gray">
      <div className="flex mb-4">
        {[...Array(testimonial.rating)].map((_, i) => (
          <Star key={i} className="w-4 h-4 fill-soft-gold text-soft-gold" />
        ))}
      </div>
      <p className="text-charcoal mb-6 leading-relaxed italic">&ldquo;{testimonial.content}&rdquo;</p>
      <div>
        <p className="font-heading text-lg text-charcoal">{testimonial.name}</p>
        <p className="text-sm text-muted-taupe">{testimonial.role}</p>
      </div>
    </div>
  )
}
