import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import {
  AllergiesResponseDto,
  AttendanceParamsDto,
  AttendanceResponseDto,
  BloodTypesResponseDto,
  DiseasesResponseDto,
} from './types'

export const chartsApi = createApi({
  reducerPath: 'chartsApi',
  baseQuery: fetchBaseQuery({ baseUrl: import.meta.env.VITE_BASE_API_URL }),
  tagTypes: ['Charts'],
  endpoints: (build) => ({
    getAttendanceInfo: build.query<AttendanceResponseDto, AttendanceParamsDto>({
      query: (params) => ({
        url: 'statistics/attendance',
        params,
      }),
      providesTags: ['Charts'],
    }),
    getAllergiesInfo: build.query<AllergiesResponseDto, void>({
      query: () => ({
        url: 'statistics/allergies',
      }),
      providesTags: ['Charts'],
    }),
    getDiseasesInfo: build.query<DiseasesResponseDto, void>({
      query: () => ({
        url: 'statistics/chronic-diseases',
      }),
      providesTags: ['Charts'],
    }),
    getBloodTypesInfo: build.query<BloodTypesResponseDto, void>({
      query: () => ({
        url: 'statistics/blood-types',
      }),
      providesTags: ['Charts'],
    }),
  }),
})

export const {
  useGetAllergiesInfoQuery,
  useGetAttendanceInfoQuery,
  useGetDiseasesInfoQuery,
  useGetBloodTypesInfoQuery,
} = chartsApi
