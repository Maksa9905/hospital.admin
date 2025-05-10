import { useForm } from 'react-hook-form'
import { PatientFormValues } from '../../model/types'
import PersonalInfo from './PersonalInfo'
import { Button, Stack } from '#/shared/ui'
import AddressInfo from './AddressInfo'
import MedicalInfo from './MedicalInfo'
import AdditionalInfo from './AdditionalInfo'
import {
  useGetPatientByIdQuery,
  usePatientFormSchema,
} from '#/entities/patient'
import { zodResolver } from '#/shared/lib/zod-resolver'
import { usePatientDefaultValues } from '#/entities/patient'
import { skipToken } from '@reduxjs/toolkit/query'
import { useMapPatientById } from '#/entities/patient'

type PatientFormProps = {
  onSubmit: (values: PatientFormValues) => void
  id: string | null
  isNew: boolean
}

const PatientForm = ({ onSubmit, id, isNew }: PatientFormProps) => {
  const validationSchema = usePatientFormSchema()
  const defaultValues = usePatientDefaultValues()

  const mapPatientById = useMapPatientById()

  const { data } = useGetPatientByIdQuery(!isNew && id ? id : skipToken, {
    selectFromResult: (result) => ({
      data: result.currentData ? mapPatientById(result.currentData) : undefined,
      isLoading: result.isLoading,
    }),
  })

  const { control, handleSubmit } = useForm<PatientFormValues>({
    resolver: zodResolver(validationSchema),
    values: data || defaultValues,
    defaultValues,
  })

  return (
    <Stack spacing={2}>
      <PersonalInfo control={control} />
      <AddressInfo control={control} />
      <MedicalInfo control={control} />
      <AdditionalInfo control={control} />
      <Button
        variant="contained"
        onClick={handleSubmit(onSubmit)}
      >
        Сохранить
      </Button>
    </Stack>
  )
}

export default PatientForm
