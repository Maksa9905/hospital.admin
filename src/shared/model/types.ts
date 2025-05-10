import { z } from 'zod'
import dayjs, { type Dayjs } from 'dayjs'

export const DefaultListItemSchema = z.object({
  value: z.string(),
  label: z.string(),
})

export type DefaultListItem = z.infer<typeof DefaultListItemSchema>

export const daysjInstance = dayjs as unknown as typeof Dayjs

export const zodDayjs = <
  Optional extends undefined | true = undefined,
>(options?: {
  message?: string
  optional?: Optional
}) =>
  z.custom<Optional extends true ? Dayjs | null | undefined : Dayjs>(
    (value) => value instanceof daysjInstance || (options?.optional && !value),
    {
      message: options?.message || '',
    },
  )
