import type { SubmitHandler } from 'react-hook-form'
import { useForm } from 'react-hook-form'

import { Copy, Check } from 'react-feather'

import { Button } from '@/ui/Button'
import { Input } from '@/ui/Input'
import { Badge } from '@/ui/Badge'

import { useCopy } from '@/hooks/useCopy'

type Data = {
  url: string
}

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

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="mt-14">
      <div className="flex items-end">
        <Input
          id="url"
          placeholder="https://www.example.com"
          label="Your URL"
          info={isCopying ? 'Copied on clipboard' : null}
          after={isCopying ? Check : Copy}
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
          errors.url && (
            <Badge variant="error">
              {errors.url.type === 'required' && 'URL is required'}
              {errors.url.type === 'validate' && 'URL is invalid'}
            </Badge>
          )
        }
      </div>
    </form>
  )
}
