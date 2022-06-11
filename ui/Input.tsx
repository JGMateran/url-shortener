import type { ComponentPropsWithoutRef } from 'react'
import type { UseFormRegister, FieldError } from 'react-hook-form'

import clsx from 'clsx'

import { Badge } from '@/ui/Badge'

import isURL from 'validator/lib/isURL'

type InputProps = ComponentPropsWithoutRef<'input'> & {
  label?: string | null,
  info?: string | null,
  before?: any,
  after?: any,
  id: string,
  error?: FieldError | null,
  register: UseFormRegister<{url: string}>,
  onClickAfter?: () => void
}

export function Input ({
  id,
  label = null,
  info = null,
  error = null,
  before: Before = null,
  after: After = null,
  register,
  onClickAfter = () => {},
  ...props
}: InputProps) {
  const classes = clsx(
    'h-14 rounded-md w-full bg-neutral-800 focus:outline-none focus-visible:ring-2 placeholder-neutral-400',
    Before ? 'pl-14' : 'pl-4',
    After ? 'pr-14' : 'pr-4',
    error ? 'ring-red-600' : 'ring-blue-500'
  )

  return (
    <div className="flex-1 mr-4">
      <div className="flex items-end mb-2 text-sm">
        {
          label && (
            <label htmlFor={id}>
              <span className="font-bold">
                {label}
              </span>
            </label>
          )
        }
        <div className="flex-1 h-6"></div>
        {
          info && (
            <Badge>
              {info}
            </Badge>
          )
        }
      </div>
      <div className="relative flex items-center flex-1">
        {
          Before && (
            <button type="button" className="absolute left-5">
              <Before className="w-5 h-5" />
            </button>
          )
        }
        <input
          id={id}
          type="text"
          className={classes}
          {...register('url', {
            required: true,
            validate: (value) => isURL(value)
          })}
          {...props}
        />
        {
          After &&
            <button type="button" className="absolute right-5" onClick={onClickAfter}>
              <After className="w-5 h-5" />
            </button>
        }
      </div>
    </div>
  )
}
