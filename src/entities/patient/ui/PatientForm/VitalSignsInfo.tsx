import { Grid, TextField } from '#/shared/ui'
import { StyledSubTitle } from './StyledPatientForm'

type VitalSignsInfoProps = {
  temperature: string
  pressure: string
  pulse: string
}

const VitalSignsInfo = ({
  temperature,
  pressure,
  pulse,
}: VitalSignsInfoProps) => {
  return (
    <Grid>
      <StyledSubTitle variant="h6">Жизненно важные признаки</StyledSubTitle>
      <Grid
        container
        spacing={2}
      >
        <Grid size={4}>
          <TextField
            disabled
            fullWidth
            value={temperature}
            label="Температура"
          />
        </Grid>
        <Grid size={4}>
          <TextField
            disabled
            fullWidth
            value={pressure}
            label="Давление"
          />
        </Grid>
        <Grid size={4}>
          <TextField
            disabled
            fullWidth
            value={pulse}
            label="Пульс"
          />
        </Grid>
      </Grid>
    </Grid>
  )
}

export default VitalSignsInfo
