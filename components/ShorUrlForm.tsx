import type { SubmitHandler } from 'react-hook-form'
import { useForm } from 'react-hook-form'

import clsx from 'clsx'

import { Copy, CheckCircle } from 'react-feather'

import { useMemo, useState } from 'react'

import { Button } from '@/ui/Button'
import { Input } from '@/ui/Input'
import { Badge } from '@/ui/Badge'

type Data = {
  url: string
}

const IS_URL_PATTERN = /^(https?:\/\/)?([a-z0-9])?[a-z]+\.[a-z]{2,}(\/[a-z0-9$?=.])?/

export function ShortUrlForm () {
  const {
    handleSubmit,
    register,
    formState: {
      errors
    }
  } = useForm<Data>()

  const [copy, setCopy] = useState(false)

  const onSubmit: SubmitHandler<Data> = (data) => {
    console.log(data.url)
  }

  const handleCopy = () => {
    setCopy(true)

    window.setTimeout(
      () => {
        setCopy(false)
      },
      2000
    )
  }

  const Icon = useMemo(
    () => {
      if (copy) {
        return CheckCircle
      }

      return Copy
    },
    [copy]
  )

  const urlErrors = () => {
    switch (errors.url?.type) {
      case 'required': {
        return 'URL is required'
      }

      case 'pattern': {
        return 'Must be a valid URL'
      }

      default: {
        return null
      }
    }
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="mt-14">
      <div className="flex items-end">
        <Input
          id="url"
          placeholder="https://www.example.com"
          label="Your URL"
          info={copy === true ? 'Copied on clipboard' : null}
          after={Icon}
          register={register}
          onClickAfter={handleCopy}
          error={errors.url}
        />
        <Button type="submit">
          Shorten URL
        </Button>
      </div>
      <div className="mt-2">
        {
          errors.url?.type === 'required' && (
            <Badge variant="error">
              Url is required
            </Badge>
          )
        }
      </div>
    </form>
  )
}
