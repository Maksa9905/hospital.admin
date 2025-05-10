import { PatientFormValues } from './types'

export const usePatientDefaultValues = () => {
  const defaultValues: PatientFormValues = {
    personal_info: {
      firstName: '',
      lastName: '',
      email: '',
      middleName: '',
      birthday: null,
      phone: '',
      gender: null,
    },
    address: {
      postal_code: '',
      region: '',
      city: '',
      street: '',
      house_number: '',
    },
    medical_info: {
      snils: '',
      MHI_number: '',
      MHI_expiration_date: null,
      polyclinic: '',
      blood_type: null,
      chronic_diseases: [],
      is_other_diseases: false,
      other_chronic_diseases: '',
      allergies: [],
      is_other_allergies: false,
      other_allergies: '',
    },
    additional_info: {
      passport: {
        series: '',
        number: '',
        issuedBy: '',
        issuedAt: null,
      },
    },
  }

  return defaultValues
}
