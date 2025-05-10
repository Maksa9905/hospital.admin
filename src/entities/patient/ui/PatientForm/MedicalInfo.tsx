import { Control } from 'react-hook-form'
import { PatientFormValues } from '#/entities/patient'
import { StyledSubTitle } from './StyledPatientForm'
import {
  FormAutocomplete,
  FormCheckbox,
  FormConditionalRender,
  FormDatePicker,
  FormTextField,
  Grid,
} from '#/shared/ui'
import { usePatientOptions } from '#/entities/patient'
import { withMask } from 'use-mask-input'

type MedicalInfoProps = { control: Control<PatientFormValues> }

const MedicalInfo = ({ control }: MedicalInfoProps) => {
  const { bloodTypeOptions, chronicDiseasesOptions, allergiesOptions } =
    usePatientOptions()

  return (
    <Grid>
      <StyledSubTitle variant="h6">Медицинская информация</StyledSubTitle>
      <Grid
        container
        spacing={2}
      >
        <Grid size={{ xs: 4 }}>
          <FormTextField
            label="СНИЛС"
            name="medical_info.snils"
            inputRef={withMask('999-999-999 99')}
            fullWidth
            control={control}
          />
        </Grid>
        <Grid size={{ xs: 4 }}>
          <FormTextField
            label="Номер ОМС"
            inputRef={withMask('9999 9999 9999 9999')}
            name="medical_info.MHI_number"
            fullWidth
            control={control}
          />
        </Grid>
        <Grid size={{ xs: 4 }}>
          <FormDatePicker
            label="Срок действия ОМС"
            name="medical_info.MHI_expiration_date"
            fullWidth
            control={control}
          />
        </Grid>
        <Grid size={{ xs: 4 }}>
          <FormAutocomplete
            label="Группа крови"
            options={bloodTypeOptions}
            name="medical_info.blood_type"
            control={control}
          />
        </Grid>
        <Grid size={{ xs: 8 }}>
          <FormTextField
            label="Прикрепленная поликлиника"
            name="medical_info.polyclinic"
            control={control}
            fullWidth
          />
        </Grid>
        <Grid size={{ xs: 12 }}>
          <FormAutocomplete
            multiple
            control={control}
            label="Хронические заболевания"
            name="medical_info.chronic_diseases"
            options={chronicDiseasesOptions}
          />
        </Grid>
        <Grid size={{ xs: 4 }}>
          <FormCheckbox
            control={control}
            name="medical_info.is_other_diseases"
            label="Не нашли свое заболевание?"
          />
        </Grid>
        <FormConditionalRender
          control={control}
          name="medical_info.is_other_diseases"
          condition={(isOther) => isOther}
        >
          <Grid size={{ xs: 8 }}>
            <FormTextField
              fullWidth
              label="Введите свои хронические заболевания (через запятую)"
              name="medical_info.other_chronic_diseases"
              control={control}
            />
          </Grid>
        </FormConditionalRender>
        <Grid size={{ xs: 12 }}>
          <FormAutocomplete
            multiple
            control={control}
            label="Аллергии"
            name="medical_info.allergies"
            options={allergiesOptions}
          />
        </Grid>
        <Grid size={{ xs: 4 }}>
          <FormCheckbox
            control={control}
            name="medical_info.is_other_allergies"
            label="Другая аллергия"
          />
        </Grid>
        <FormConditionalRender
          control={control}
          name="medical_info.is_other_allergies"
          condition={(isOther) => isOther}
        >
          <Grid size={{ xs: 8 }}>
            <FormTextField
              name="medical_info.other_allergies"
              fullWidth
              label="Введите аллергии (через запятую)"
              control={control}
            />
          </Grid>
        </FormConditionalRender>
      </Grid>
    </Grid>
  )
}

export default MedicalInfo
