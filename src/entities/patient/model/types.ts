import { DefaultListItem } from '#/shared/model'
import { Dayjs } from 'dayjs'

export type PatientFormValues = {
  personal_info: {
    firstName: string
    lastName: string
    middleName: string
    birthday: Dayjs | null
    gender: DefaultListItem | null
    phone: string
    email: string
  }
  address: {
    postal_code: string
    region: string
    city: string
    street: string
    house_number: string
  }
  medical_info: {
    snils: string
    MHI_number: string
    MHI_expiration_date: Dayjs | null
    polyclinic: string
    blood_type: DefaultListItem | null
    chronic_diseases: DefaultListItem[]
    is_other_diseases: boolean
    other_chronic_diseases: string
    allergies: DefaultListItem[]
    is_other_allergies: boolean
    other_allergies: string
  }
  additional_info: {
    passport: {
      series: string
      number: string
      issuedBy: string
      issuedAt: Dayjs | null
    }
  }
  vital_signs: {
    pressure: string
    pulse: string
    temperature: string
  }
}

export type PatientTableItem = {
  id: string
  fullName: string
  birthday: string
  email: string
  phone: string
  region: string
  snils: string
  pressure: string
  pulse: string
  temperature: string
}
