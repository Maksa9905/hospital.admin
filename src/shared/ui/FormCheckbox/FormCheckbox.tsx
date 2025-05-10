import { Checkbox, CheckboxProps, FormControlLabel } from '@mui/material'
import { Control, Controller, FieldValues, Path } from 'react-hook-form'

type FormCheckboxProps<TFieldValues extends FieldValues = FieldValues> =
  CheckboxProps & {
    name: Path<TFieldValues>
    control: Control<TFieldValues>
    label?: string
  }

const FormCheckbox = <TFieldValues extends FieldValues = FieldValues>({
  name,
  control,
  label,
  ...props
}: FormCheckboxProps<TFieldValues>) => {
  return (
    <FormControlLabel
      label={label}
      control={
        <Controller
          control={control}
          name={name}
          render={({ field }) => (
            <Checkbox
              {...props}
              {...field}
              checked={field.value}
            />
          )}
        />
      }
    />
  )
}

export default FormCheckbox
