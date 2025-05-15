import {
  PatientResponseDto,
  PatientTableItem,
  PatientByIdResponseDto,
  PatientFormValues,
  usePatientDefaultValues,
  usePatientOptions,
  CreatePatientDto,
} from '#/entities/patient'
import dayjs from 'dayjs'

export const mapPatient = (dto: PatientResponseDto) => {
  const tableItem: PatientTableItem = {
    id: dto.id,
    fullName: `${dto.firstName || ''} ${dto.lastName || ''} ${
      dto.middleName || ''
    }`,
    birthday: dto.birthday ? dayjs(dto.birthday).format('DD.MM.YYYY') : '',
    email: dto.email || '',
    phone: dto.phone || '',
    region: dto.region || '',
    snils: dto.snils || '',
    pulse: String(dto.pulse) || '',
    pressure: `${dto.bloodPressureDiastolic}/${dto.bloodPressureSystolic}`,
    temperature: dto.temperature || '',
  }

  return tableItem
}

export const useMapPatientById = () => {
  const defaultValues = usePatientDefaultValues()
  const {
    genderOptions,
    bloodTypeOptions,
    chronicDiseasesOptions,
    allergiesOptions,
  } = usePatientOptions()

  return (dto: PatientByIdResponseDto) => {
    const formValues: PatientFormValues = {
      personal_info: {
        firstName: dto.firstName || defaultValues.personal_info.firstName,
        lastName: dto.lastName || defaultValues.personal_info.lastName,
        middleName: dto.middleName || defaultValues.personal_info.middleName,
        birthday: dto.birthday ? dayjs(dto.birthday) : null,
        gender:
          genderOptions.find((option) => option.value === dto.gender) ||
          defaultValues.personal_info.gender,
        phone: dto.phone || defaultValues.personal_info.phone,
        email: dto.email || defaultValues.personal_info.email,
      },
      address: {
        postal_code: dto.postal_code || defaultValues.address.postal_code,
        region: dto.region || defaultValues.address.region,
        city: dto.city || defaultValues.address.city,
        street: dto.street || defaultValues.address.street,
        house_number: dto.house_number || defaultValues.address.house_number,
      },
      medical_info: {
        snils: dto.snils || defaultValues.medical_info.snils,
        MHI_number: dto.MHI_number || defaultValues.medical_info.MHI_number,
        MHI_expiration_date: dto.MHI_expiration_date
          ? dayjs(dto.MHI_expiration_date)
          : null,
        polyclinic: dto.polyclinic || defaultValues.medical_info.polyclinic,
        blood_type:
          bloodTypeOptions.find(
            (options) => options.value === dto.blood_type,
          ) || defaultValues.medical_info.blood_type,
        chronic_diseases:
          dto.chronic_diseases.flatMap(
            (disease) =>
              chronicDiseasesOptions.find(
                (option) => option.value === disease,
              ) ?? [],
          ) || defaultValues.medical_info.chronic_diseases,
        is_other_diseases:
          dto.is_other_diseases || defaultValues.medical_info.is_other_diseases,
        other_chronic_diseases:
          dto.other_chronic_diseases?.join(', ') ||
          defaultValues.medical_info.other_chronic_diseases,
        allergies:
          dto.allergies.flatMap(
            (disease) =>
              allergiesOptions.find((option) => option.value === disease) ?? [],
          ) || defaultValues.medical_info.allergies,
        is_other_allergies:
          dto.is_other_allergies ||
          defaultValues.medical_info.is_other_allergies,
        other_allergies:
          dto.other_allergies?.join(', ') ||
          defaultValues.medical_info.other_allergies,
      },
      additional_info: {
        passport: {
          series:
            dto.passport_series ||
            defaultValues.additional_info.passport.series,
          number:
            dto.passport_number ||
            defaultValues.additional_info.passport.number,
          issuedBy:
            dto.passport_issued_by ||
            defaultValues.additional_info.passport.issuedBy,
          issuedAt: dto.passport_issued_at
            ? dayjs(dto.passport_issued_at)
            : defaultValues.additional_info.passport.issuedAt,
        },
      },
      vital_signs: {
        pulse: dto.pulse ? String(dto.pulse) : '',
        pressure: `${dto.bloodPressureDiastolic}/${dto.bloodPressureSystolic}`,
        temperature: dto.temperature,
      },
    }

    return formValues
  }
}

export const mapPatientBody = (values: PatientFormValues) => {
  const body: CreatePatientDto = {
    firstName: values.personal_info.firstName || '',
    lastName: values.personal_info.lastName || '',
    middleName: values.personal_info.middleName || '',
    birthday: values.personal_info.birthday
      ? values.personal_info.birthday?.toISOString()
      : null,
    gender: values.personal_info.gender?.value || null,
    phone: values.personal_info.phone || '',
    email: values.personal_info.email || '',
    postal_code: values.address.postal_code || '',
    region: values.address.region || '',
    city: values.address.city || '',
    street: values.address.street || '',
    house_number: values.address.house_number || '',
    snils: values.medical_info.snils || '',
    MHI_number: values.medical_info.MHI_number || '',
    MHI_expiration_date: values.medical_info.MHI_expiration_date
      ? values.medical_info.MHI_expiration_date.toISOString()
      : null,
    polyclinic: values.medical_info.polyclinic || null,
    blood_type: values.medical_info.blood_type?.value || null,
    chronic_diseases: values.medical_info.chronic_diseases.map(
      (disease) => disease.value,
    ),
    is_other_diseases: values.medical_info.is_other_diseases || false,
    other_chronic_diseases:
      values.medical_info.other_chronic_diseases.split(', ') || [],
    allergies: values.medical_info.allergies.map((allergy) => allergy.value),
    is_other_allergies: values.medical_info.is_other_allergies || false,
    other_allergies: values.medical_info.other_allergies.split(', ') || [],
    passport_series: values.additional_info.passport.series || '',
    passport_number: values.additional_info.passport.number || '',
    passport_issued_by: values.additional_info.passport.issuedBy || '',
    passport_issued_at: values.additional_info.passport.issuedAt
      ? values.additional_info.passport.issuedAt.toISOString()
      : null,
  }

  return body
}
