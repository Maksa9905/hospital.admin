import { DefaultListItemSchema, zodDayjs } from '#/shared/model'
import z from 'zod'

export const usePatientFormSchema = () => {
  return z.object({
    personal_info: z.object({
      firstName: z.string().min(1),
      lastName: z.string().min(1),
      middleName: z.string().min(1),
      birthday: zodDayjs(),
      gender: DefaultListItemSchema,
      phone: z.string().length(16),
      email: z.string().email(),
    }),
    address: z.object({
      region: z.string().min(1),
      city: z.string().min(1),
      street: z.string().min(1),
      house_number: z.string().min(1),
      postal_code: z.string().length(6),
    }),
    medical_info: z.object({
      snils: z.string().length(14),
      MHI_number: z.string().length(19),
      MHI_expiration_date: zodDayjs(),
      polyclinic: z.string(),
      blood_type: DefaultListItemSchema,
      chronic_diseases: DefaultListItemSchema.array().min(1),
      is_other_diseases: z.boolean(),
      other_chronic_diseases: z.string(),
      allergies: DefaultListItemSchema.array().min(1),
      is_other_allergies: z.boolean(),
      other_allergies: z.string(),
    }),
    additional_info: z.object({
      passport: z.object({
        series: z.string().min(1),
        number: z.string().min(1),
        issuedBy: z.string().min(1),
        issuedAt: zodDayjs(),
      }),
    }),
  })
}
