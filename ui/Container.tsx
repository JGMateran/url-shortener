import type { ComponentPropsWithoutRef } from 'react'

import clsx from 'clsx'

type ContainerProps = ComponentPropsWithoutRef<'div'> & {
  size?: 'smaller' | 'small' | 'large' | 'big' | 'huge',
  center?: boolean
}

export function Container ({
  size = 'large',
  center = true,
  className,
  ...props
}: ContainerProps) {
  const classes = clsx(
    'w-full px-6',
    {
      'max-w-sm': size === 'smaller',
      'max-w-2xl': size === 'small',
      'max-w-4xl': size === 'large',
      'max-w-6xl': size === 'big',
      'max-w-8xl': size === 'huge',
      'mx-auto': center
    },
    className
  )
  return (
    <div
      className={classes}
      {...props}
    />
  )
}
