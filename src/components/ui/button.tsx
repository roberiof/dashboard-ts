import * as React from 'react'
import { Slot } from '@radix-ui/react-slot'
import { cva, type VariantProps } from 'class-variance-authority'

import { cn } from '@/lib/utils'

const buttonVariants = cva(
  'w-full flex items-center justify-center whitespace-nowrap rounded-[12px] text-sm font-bold transition-all hover:opacity-80 disabled:opacity-30 hover:scale-[103%]',
  {
    variants: {
      variant: {
        default: 'bg-[#0075FF] text-white',
        outlined: 'border border-white bg-transparent',
      },
      size: {
        default: 'h-[35px] ',
        lg: 'h-[45px] ',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'default',
    },
  },
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : 'button'
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    )
  },
)
Button.displayName = 'Button'

export { Button, buttonVariants }
