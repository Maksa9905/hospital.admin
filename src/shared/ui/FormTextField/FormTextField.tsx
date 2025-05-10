import { Control, Controller, FieldValues, Path } from 'react-hook-form'
import TextField, { TextFieldProps } from '../TextField'

export type FormTextFieldProps<TFieldValues extends FieldValues = FieldValues> =
  TextFieldProps & {
    control: Control<TFieldValues>
    name: Path<TFieldValues>
  }

const FormTextField = <TFieldValues extends FieldValues = FieldValues>({
  name,
  control,
  ...props
}: FormTextFieldProps<TFieldValues>) => {
  return (
    <Controller
      name={name}
      control={control}
      render={({ field, fieldState: { error } }) => (
        <TextField
          {...props}
          {...field}
          error={Boolean(error)}
        />
      )}
    />
  )
}

export default FormTextField
