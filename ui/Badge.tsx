import type { ComponentPropsWithoutRef } from 'react'

import clsx from 'clsx'

type BadgeProps = ComponentPropsWithoutRef<'span'> & {
  size?: 'small',
  variant?: 'success' | 'error'
}

export function Badge ({
  size = 'small',
  variant = 'success',
  className,
  ...props
}: BadgeProps) {
  const classes = clsx(
    'inline-flex items-center justify-center ',
    {
      'bg-green-400 text-neutral-900 font-bold': variant === 'success',
      'bg-red-600 text-white font-bold': variant === 'error',

      'text-xs rounded-md h-6 px-2': size === 'small'
    },
    className
  )

  return (
    <span
      className={classes}
      {...props}
    />
  )
}
