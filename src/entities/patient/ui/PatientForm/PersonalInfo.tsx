import {
  FormAutocomplete,
  FormDatePicker,
  FormTextField,
  Grid,
} from '#/shared/ui'
import { Control } from 'react-hook-form'
import { StyledSubTitle } from './StyledPatientForm'
import { PatientFormValues, usePatientOptions } from '#/entities/patient'
import { withMask } from 'use-mask-input'

type PersonalInfoProps = {
  control: Control<PatientFormValues>
}

const PersonalInfo = ({ control }: PersonalInfoProps) => {
  const { genderOptions } = usePatientOptions()

  return (
    <Grid>
      <StyledSubTitle variant="h6">Личная информация</StyledSubTitle>
      <Grid
        container
        spacing={2}
      >
        <Grid size={{ xs: 4 }}>
          <FormTextField
            label="Имя"
            name="personal_info.firstName"
            fullWidth
            control={control}
          />
        </Grid>
        <Grid size={{ xs: 4 }}>
          <FormTextField
            label="Фамилия"
            name="personal_info.lastName"
            fullWidth
            control={control}
          />
        </Grid>
        <Grid size={{ xs: 4 }}>
          <FormTextField
            label="Отчество"
            name="personal_info.middleName"
            fullWidth
            control={control}
          />
        </Grid>
        <Grid size={{ xs: 3 }}>
          <FormAutocomplete
            fullWidth
            label="Пол"
            name="personal_info.gender"
            options={genderOptions}
            control={control}
          />
        </Grid>
        <Grid size={{ xs: 3 }}>
          <FormDatePicker
            fullWidth
            name="personal_info.birthday"
            label="Дата рождения"
            control={control}
          />
        </Grid>
        <Grid size={{ xs: 3 }}>
          <FormTextField
            label="Email"
            name="personal_info.email"
            fullWidth
            control={control}
          />
        </Grid>
        <Grid size={{ xs: 3 }}>
          <FormTextField
            label="Номер телефона"
            name="personal_info.phone"
            inputRef={withMask('+9 999 999-99-99')}
            fullWidth
            control={control}
          />
        </Grid>
      </Grid>
    </Grid>
  )
}

export default PersonalInfo
