export type PatientResponseDto = {
  id: string
  firstName: string
  lastName: string
  middleName: string
  birthday: string
  gender: string
  phone: string
  email: string
  postal_code: string
  region: string
  city: string
  street: string
  house_number: string
  snils: string
  MHI_number: string
  MHI_expiration_date: string
  polyclinic: string
  blood_type: string
  chronic_diseases: string[]
  is_other_diseases: boolean
  other_chronic_diseases: string[] | null
  allergies: string[]
  is_other_allergies: boolean
  other_allergies: string[] | null
  passport_series: string
  passport_number: string
  passport_issued_by: string
  passport_issued_at: string
  createdAt: string
  updatedAt: string
}

export type PatientListResponseDto = {
  data: PatientResponseDto[]
  meta: {
    total: number
    page: number
    limit: number
    totalPages: number
  }
}

export type PatientListParamsDto = {
  page: number
  limit: number
}

export type PatientByIdResponseDto = {
  id: string
  firstName: string
  lastName: string
  middleName: string
  birthday: string
  gender: string
  phone: string
  email: string
  postal_code: string
  region: string
  city: string
  street: string
  house_number: string
  snils: string
  MHI_number: string
  MHI_expiration_date: string
  polyclinic: string
  blood_type: string
  chronic_diseases: string[]
  is_other_diseases: boolean
  other_chronic_diseases: string[] | null
  allergies: string[]
  is_other_allergies: boolean
  other_allergies: string[] | null
  passport_series: string
  passport_number: string
  passport_issued_by: string
  passport_issued_at: string
  createdAt: string
  updatedAt: string
}

export type CreatePatientDto = {
  firstName: string
  lastName: string
  middleName: string
  birthday: string | null
  gender: string | null
  phone: string
  email: string
  postal_code: string
  region: string
  city: string
  street: string
  house_number: string
  snils: string
  MHI_number: string
  MHI_expiration_date: string | null
  polyclinic: string | null
  blood_type: string | null
  chronic_diseases: string[]
  other_chronic_diseases: string[]
  is_other_diseases: boolean
  allergies: string[]
  other_allergies: string[]
  is_other_allergies: boolean
  passport_series: string
  passport_number: string
  passport_issued_by: string
  passport_issued_at: string | null
}

export type EditPatientDto = Partial<CreatePatientDto> & {
  id: string
}
