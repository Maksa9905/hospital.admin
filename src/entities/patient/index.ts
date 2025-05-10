export { default as PatientForm } from './ui/PatientForm/PatientForm'
export { default as PatientsTable } from './ui/PatientsTable/PatientsTable'

export { usePatientOptions } from './model/usePatientOptions'
export { usePatientFormSchema } from './model/usePatientFormSchema'
export { usePatientDefaultValues } from './model/usePatientDefaultValues'

export type { PatientFormValues, PatientTableItem } from './model/types'

export { mapPatient, useMapPatientById, mapPatientBody } from './model/mappers'

export type {
  PatientResponseDto,
  PatientByIdResponseDto,
  CreatePatientDto,
} from './api/types'

export {
  patientApi,
  useCreatePatientMutation,
  useEditPatientMutation,
  useGetPatientByIdQuery,
  useGetPatientListQuery,
} from './api/api'
