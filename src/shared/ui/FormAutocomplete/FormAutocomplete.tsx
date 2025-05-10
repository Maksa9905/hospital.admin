import { Control, Controller, FieldValues, Path } from 'react-hook-form'
import Autocomplete, { AutocompleteProps } from '../Autocomplete'

export type FormAutocompleteProps<
  TValue,
  Multiple extends boolean | undefined,
  TFieldValues extends FieldValues = FieldValues,
> = AutocompleteProps<TValue, Multiple> & {
  control: Control<TFieldValues>
  name: Path<TFieldValues>
}

const FormAutocomplete = <
  TValue,
  Multiple extends boolean | undefined,
  TFieldValues extends FieldValues = FieldValues,
>({
  control,
  name,
  ...props
}: FormAutocompleteProps<TValue, Multiple, TFieldValues>) => {
  return (
    <Controller
      control={control}
      name={name}
      render={({ field, fieldState: { error } }) => (
        <Autocomplete
          {...field}
          {...props}
          error={Boolean(error)}
          onChange={(_, value) => field.onChange(value)}
        />
      )}
    />
  )
}

export default FormAutocomplete
