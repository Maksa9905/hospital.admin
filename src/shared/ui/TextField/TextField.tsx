import { TextField as MUITextField } from '@mui/material'
import { TextFieldProps as MUITextFieldProps } from '@mui/material'

export type TextFieldProps = MUITextFieldProps

const TextField = (props: TextFieldProps) => {
  return <MUITextField {...props} />
}

export default TextField
