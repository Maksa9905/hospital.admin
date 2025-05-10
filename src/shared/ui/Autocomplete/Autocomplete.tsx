import { Autocomplete as MUIAutocomplete } from '@mui/material'
import { AutocompleteProps as MUIAutocompleteProps } from '@mui/material'
import TextField from '../TextField'

export type AutocompleteProps<
  TValue,
  Multiple extends boolean | undefined,
> = Omit<
  MUIAutocompleteProps<TValue, Multiple, false, false, 'div'>,
  'renderInput'
> & {
  label?: string
  error?: boolean
}

const Autocomplete = <TValue, Multiple extends boolean | undefined>({
  label,
  error,
  ...props
}: AutocompleteProps<TValue, Multiple>) => {
  return (
    <MUIAutocomplete
      {...props}
      renderInput={(params) => (
        <TextField
          {...params}
          error={error}
          label={label}
        />
      )}
    />
  )
}

export default Autocomplete
