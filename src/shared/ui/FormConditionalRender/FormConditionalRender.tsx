import { ReactNode } from 'react'
import {
  Control,
  FieldPath,
  FieldPathValue,
  FieldValues,
  useWatch,
} from 'react-hook-form'

type FormConditionalRenderProps<
  TFieldValues extends FieldValues,
  TName extends FieldPath<TFieldValues>,
> = {
  control: Control<TFieldValues>
  name: TName
  condition: (field: FieldPathValue<TFieldValues, TName>) => boolean
  children: ReactNode
}

const FormConditionalRender = <
  TFieldValues extends FieldValues,
  TName extends FieldPath<TFieldValues>,
>({
  control,
  name,
  condition,
  children,
}: FormConditionalRenderProps<TFieldValues, TName>) => {
  const field = useWatch({ control, name })

  if (!field || !condition) return null

  if (condition(field)) return <>{children}</>
}

export default FormConditionalRender
