import { Control, Controller, FieldValues, Path } from 'react-hook-form'
import DatePicker from '../DatePicker'
import { DatePickerProps } from '../DatePicker'

export type FormDatePickerProps<
  TFieldValues extends FieldValues = FieldValues,
> = DatePickerProps & {
  name: Path<TFieldValues>
  control: Control<TFieldValues>
}

const FormDatePicker = <TFieldValues extends FieldValues = FieldValues>({
  name,
  control,
  ...props
}: FormDatePickerProps<TFieldValues>) => {
  return (
    <Controller
      name={name}
      control={control}
      render={({ field, fieldState: { error } }) => (
        <DatePicker
          {...props}
          {...field}
          error={Boolean(error)}
        />
      )}
    />
  )
}

export default FormDatePicker
