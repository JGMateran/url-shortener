import type { SubmitHandler } from 'react-hook-form'
import { useForm } from 'react-hook-form'

import { useMemo } from 'react'

import { Copy, CheckCircle } from 'react-feather'

import { Button } from '@/ui/Button'
import { Input } from '@/ui/Input'
import { Badge } from '@/ui/Badge'

import { useCopy } from '@/hooks/useCopy'

type Data = {
  url: string
}

const IS_URL_PATTERN = /^(https?:\/\/)?([a-z0-9])?[a-z]+\.[a-z]{2,}(\/[a-z0-9$?=.])?/

export function ShortUrlForm () {
  const {
    handleSubmit,
    register,
    getValues,
    formState: {
      errors
    }
  } = useForm<Data>()

  const { copy, isCopying } = useCopy()

  const handleCopy = () => {
    const url = getValues('url')
    copy(url)
  }

  const onSubmit: SubmitHandler<Data> = (data) => {
    console.log(data.url)
  }

  const urlError = useMemo(
    () => {
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
    },
    [errors.url]
  )

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="mt-14">
      <div className="flex items-end">
        <Input
          id="url"
          placeholder="https://www.example.com"
          label="Your URL"
          info={isCopying ? 'Copied on clipboard' : null}
          after={isCopying ? CheckCircle : Copy}
          register={register}
          onClickAfter={handleCopy}
          error={errors.url}
        />
        <Button type="submit">
          Shorten URL
        </Button>
      </div>
      <div className="mt-2 h-6">
        {
          urlError && (
            <Badge variant="error">
              {urlError}
            </Badge>
          )
        }
      </div>
    </form>
  )
}
