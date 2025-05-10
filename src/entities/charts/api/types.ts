import { AttendanceChartPeriod } from '#/entities/charts'

export type AttendanceResponseDto = { date: string; value: string }[]

export type AttendanceParamsDto = {
  period: AttendanceChartPeriod
}

export type AllergiesResponseDto = { type: string; value: string }[]

export type DiseasesResponseDto = { type: string; value: string }[]

export type BloodTypesResponseDto = { type: string; value: string }[]
