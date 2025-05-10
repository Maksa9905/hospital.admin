import { Control } from 'react-hook-form'
import { PatientFormValues } from '#/entities/patient'
import { FormDatePicker, FormTextField, Grid } from '#/shared/ui'
import { StyledSubTitle } from './StyledPatientForm'
import { withMask } from 'use-mask-input'

type AdditionalInfoProps = {
  control: Control<PatientFormValues>
}

const AdditionalInfo = ({ control }: AdditionalInfoProps) => {
  return (
    <Grid>
      <StyledSubTitle variant="h6">Паспортные данные</StyledSubTitle>
      <Grid
        container
        spacing={2}
      >
        <Grid size={{ xs: 6 }}>
          <FormTextField
            fullWidth
            control={control}
            inputRef={withMask('99 99')}
            label="Серия"
            name="additional_info.passport.series"
          />
        </Grid>
        <Grid size={{ xs: 6 }}>
          <FormTextField
            fullWidth
            control={control}
            inputRef={withMask('999999')}
            label="Номер"
            name="additional_info.passport.number"
          />
        </Grid>
        <Grid size={{ xs: 8 }}>
          <FormTextField
            fullWidth
            control={control}
            label="Кем выдан"
            name="additional_info.passport.issuedBy"
          />
        </Grid>
        <Grid size={{ xs: 4 }}>
          <FormDatePicker
            fullWidth
            control={control}
            label="Когда выдан"
            name="additional_info.passport.issuedAt"
          />
        </Grid>
      </Grid>
    </Grid>
  )
}

export default AdditionalInfo
