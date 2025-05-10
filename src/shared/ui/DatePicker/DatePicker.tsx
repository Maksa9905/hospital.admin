import { DatePicker as MUIDatePicker } from '@mui/x-date-pickers/DatePicker'
import { DatePickerProps as MUIDatePickerProps } from '@mui/x-date-pickers/DatePicker'
import { useMemo } from 'react'

export type DatePickerProps = MUIDatePickerProps & {
  fullWidth?: boolean
  error?: boolean
}

const DatePicker = ({ fullWidth, error, ...props }: DatePickerProps) => {
  const sxProp = useMemo(() => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const result = {} as Record<string, any>

    if (fullWidth) result.width = '100%'
    if (error) {
      result['& .MuiPickersOutlinedInput-notchedOutline'] = {
        borderColor: '#d32f2f !important',
      }
      result['& .MuiInputLabel-root'] = { color: '#d32f2f !important' }
    }

    return result
  }, [error, fullWidth])

  return (
    <MUIDatePicker
      {...props}
      sx={sxProp}
    />
  )
}

export default DatePicker
