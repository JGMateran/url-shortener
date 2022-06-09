import type { ComponentPropsWithoutRef } from 'react'

import clsx from 'clsx'

type TextProps = ComponentPropsWithoutRef<'p'> & {
  priority?: 'high' | 'medium' | 'low',
}

export function Text ({
  priority = 'high',
  className,
  ...props
}: TextProps) {
  const classes = clsx(
    {
      'text-white': priority === 'high',
      'text-neutral-400': priority === 'medium',
      'text-neutral-500': priority === 'low'
    },
    className
  )

  return (
    <p
      className={classes}
      {...props}
    />
  )
}
