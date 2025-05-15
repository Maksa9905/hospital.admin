import { useForm } from 'react-hook-form'
import { PatientFormValues } from '../../model/types'
import PersonalInfo from './PersonalInfo'
import { Button, Stack } from '#/shared/ui'
import AddressInfo from './AddressInfo'
import MedicalInfo from './MedicalInfo'
import AdditionalInfo from './AdditionalInfo'
import { zodResolver } from '#/shared/lib/zod-resolver'
import { skipToken } from '@reduxjs/toolkit/query'
import {
  useMapPatientById,
  useLazyGetPatientByIdQuery,
  usePatientDefaultValues,
  useGetPatientByIdQuery,
  usePatientFormSchema,
} from '#/entities/patient'
import VitalSignsInfo from './VitalSignsInfo'
import { useEffect } from 'react'

type PatientFormProps = {
  onSubmit: (values: PatientFormValues) => void
  id: string | null
  isNew: boolean
}

const PatientForm = ({ onSubmit, id, isNew }: PatientFormProps) => {
  const validationSchema = usePatientFormSchema()
  const defaultValues = usePatientDefaultValues()

  const mapPatientById = useMapPatientById()

  const [getPatientById] = useLazyGetPatientByIdQuery()
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

  useEffect(() => {
    const interval = setInterval(() => {
      if (isNew || !id) return

      getPatientById(id)
    }, 30000)

    return () => clearInterval(interval)
  }, [getPatientById, id, isNew])

  if (!data) return null

  return (
    <Stack spacing={2}>
      {!isNew && <VitalSignsInfo {...data.vital_signs} />}
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
