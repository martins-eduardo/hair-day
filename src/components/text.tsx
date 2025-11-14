import { type VariantProps, cva } from 'class-variance-authority'
import React from 'react'

export const textVariants = cva('font-sans text-gray-300', {
  variants: {
    variant: {
      'body-sm': 'text-sm leading-5 font-normal',
      'body-md': 'text-base leading-6 font-normal',
      'title-sm': 'text-sm leading-5 font-bold',
      'title-md': 'text-base leading-6 font-bold',
      'title-lg': 'text-3xl leading-6 font-bold',
    },
  },
  defaultVariants: {
    variant: 'body-md',
  },
})

interface TextProps extends VariantProps<typeof textVariants> {
  as?: keyof React.JSX.IntrinsicElements
  className?: string
  children?: React.ReactNode
}

export default function Text({ as = 'span', variant, className, children, ...props }: TextProps) {
  return React.createElement(
    as,
    {
      className: textVariants({ variant, className }),
      ...props,
    },
    children
  )
}
