import { StyledSubTitle } from './StyledPatientForm'
import { FormTextField, Grid } from '#/shared/ui'
import { Control } from 'react-hook-form'
import { PatientFormValues } from '#/entities/patient'
import { withMask } from 'use-mask-input'

type AddressInfoProps = {
  control: Control<PatientFormValues>
}

const AddressInfo = ({ control }: AddressInfoProps) => {
  return (
    <Grid>
      <StyledSubTitle variant="h6">Адрес</StyledSubTitle>
      <Grid
        container
        spacing={2}
      >
        <Grid size={{ xs: 4 }}>
          <FormTextField
            name="address.region"
            fullWidth
            label="Регион"
            control={control}
          />
        </Grid>
        <Grid size={{ xs: 4 }}>
          <FormTextField
            name="address.city"
            fullWidth
            label="Город"
            control={control}
          />
        </Grid>
        <Grid size={{ xs: 4 }}>
          <FormTextField
            name="address.street"
            fullWidth
            label="Улица"
            control={control}
          />
        </Grid>
        <Grid size={{ xs: 4 }}>
          <FormTextField
            name="address.house_number"
            fullWidth
            label="Дом"
            control={control}
          />
        </Grid>
        <Grid size={{ xs: 4 }}>
          <FormTextField
            name="address.postal_code"
            fullWidth
            label="Почтовый индекс"
            inputRef={withMask('999999')}
            control={control}
          />
        </Grid>
      </Grid>
    </Grid>
  )
}

export default AddressInfo
