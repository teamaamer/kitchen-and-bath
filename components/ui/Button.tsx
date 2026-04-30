import { cn } from '@/lib/utils'
import { ButtonHTMLAttributes, forwardRef, ReactNode } from 'react'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'ghost' | 'gold'
  size?: 'sm' | 'md' | 'lg'
  asChild?: boolean
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = 'primary', size = 'md', asChild, children, ...props }, ref) => {
    const classes = cn(
      'inline-flex items-center justify-center font-medium tracking-wide transition-all duration-300',
      'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-green focus-visible:ring-offset-2',
      'disabled:opacity-50 disabled:pointer-events-none',
      'hover:-translate-y-px',
      {
        'bg-brand-green text-luxury-white hover:bg-deep-olive hover:shadow-soft':
          variant === 'primary',
        'bg-transparent border border-charcoal text-charcoal hover:bg-charcoal hover:text-luxury-white hover:shadow-soft':
          variant === 'secondary',
        'bg-transparent text-charcoal hover:text-brand-green':
          variant === 'ghost',
        'bg-soft-gold text-charcoal hover:bg-light-gold hover:shadow-soft':
          variant === 'gold',
      },
      {
        'px-5 py-2.5 text-xs': size === 'sm',
        'px-7 py-3.5 text-sm': size === 'md',
        'px-9 py-4 text-base': size === 'lg',
      },
      className
    )

    if (asChild && typeof children === 'object') {
      return children as ReactNode
    }

    return (
      <button ref={ref} className={classes} {...props}>
        {children}
      </button>
    )
  }
)

Button.displayName = 'Button'

export default Button
