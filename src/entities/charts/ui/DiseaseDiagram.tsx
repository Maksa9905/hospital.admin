import { useGetDiseasesInfoQuery } from '#/entities/charts'
import { Pie } from '@ant-design/charts'
import { Grid } from '@mui/material'
import { StyledDiagramTitle } from './StyledChart'
import { useMemo } from 'react'
import { usePatientOptions } from '#/entities/patient'

const DiseaseDiagram = () => {
  const { data } = useGetDiseasesInfoQuery()
  const { chronicDiseasesOptions } = usePatientOptions()

  const diseasesData = useMemo(
    () =>
      data?.map((disease) => ({
        type:
          chronicDiseasesOptions.find((option) => option.value === disease.type)
            ?.label || 'Другое',
        value: disease.value,
      })) || [],
    [chronicDiseasesOptions, data],
  )

  const config = useMemo(
    () => ({
      data: diseasesData,
      angleField: 'value',
      colorField: 'type',
      label: {
        text: 'value',
        style: {
          fontWeight: 'bold',
        },
      },
      legend: {
        color: {
          title: false,
          position: 'right',
          rowPadding: 5,
        },
      },
    }),
    [diseasesData],
  )

  return (
    <Grid>
      <StyledDiagramTitle>Хронические заболевания</StyledDiagramTitle>
      <Pie {...config} />
    </Grid>
  )
}

export default DiseaseDiagram
