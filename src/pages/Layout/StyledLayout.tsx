import { Grid, styled } from '@mui/material'
import { grey } from '@mui/material/colors'

export const StyledLayoutContainer = styled(Grid)`
  width: 100%;
  min-height: 100vh;
  background-color: ${grey[100]};
`

export const StyledOutletContainer = styled(Grid)`
  margin-left: 300px;
  padding: 16px 32px;
`
