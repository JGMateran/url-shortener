import type { ComponentPropsWithRef } from 'react'

import clsx from 'clsx'

type ButtonProps = ComponentPropsWithRef<'button'> & {
  size?: 'large' | 'small',
  variant?: 'base'
}

export function Button ({
  size = 'large',
  variant = 'base',
  ...props
}: ButtonProps) {
  const classes = clsx(
    'focus-visible:ring-2 focus:outline-none active:scale-95',
    {
      'h-14 px-4 text-base': size === 'large',
      'h-10 px-3 text-sm': size === 'small',
      'text-white bg-blue-600 rounded-md font-bold ring-blue-200 shadow-xl shadow-blue-500/20': variant === 'base'
    }
  )

  return (
    <button
      type="button"
      className={classes}
      {...props}
    />
  )
}
