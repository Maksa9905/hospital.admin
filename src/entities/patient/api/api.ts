import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import {
  CreatePatientDto,
  EditPatientDto,
  PatientByIdResponseDto,
  PatientListParamsDto,
  PatientListResponseDto,
} from './types'

export const patientApi = createApi({
  reducerPath: 'patientApi',
  baseQuery: fetchBaseQuery({ baseUrl: import.meta.env.VITE_BASE_API_URL }),
  tagTypes: ['Patient', 'Charts'],
  endpoints: (build) => ({
    getPatientList: build.query<PatientListResponseDto, PatientListParamsDto>({
      query: (params) => ({
        url: 'patients',
        params,
      }),
      providesTags: ['Patient'],
    }),
    getPatientById: build.query<PatientByIdResponseDto, string>({
      query: (id) => ({
        url: `patients/${id}`,
      }),
      providesTags: (result, error, id) => [{ type: 'Patient', id }],
    }),
    createPatient: build.mutation<PatientByIdResponseDto, CreatePatientDto>({
      query: (body) => ({
        url: 'patients',
        method: 'POST',
        body,
      }),
      invalidatesTags: ['Patient', 'Charts'],
    }),
    editPatient: build.mutation<PatientByIdResponseDto, EditPatientDto>({
      query: ({ id, ...body }) => ({
        url: `patients/${id}`,
        method: 'PATCH',
        body,
      }),
      invalidatesTags: (result, error, { id }) => [
        { type: 'Patient', id },
        'Patient',
        'Charts',
      ],
    }),
  }),
})

export const {
  useGetPatientListQuery,
  useLazyGetPatientListQuery,
  useCreatePatientMutation,
  useLazyGetPatientByIdQuery,
  useEditPatientMutation,
  useGetPatientByIdQuery,
} = patientApi
