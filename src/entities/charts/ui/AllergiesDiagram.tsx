import { Pie } from '@ant-design/charts'
import { Grid } from '@mui/material'
import { StyledDiagramTitle } from './StyledChart'
import { useGetAllergiesInfoQuery } from '#/entities/charts'
import { usePatientOptions } from '#/entities/patient'
import { useMemo } from 'react'

const AllergiesDiagram = () => {
  const { data } = useGetAllergiesInfoQuery()
  const { allergiesOptions } = usePatientOptions()

  const allergiesData = useMemo(
    () =>
      data?.map((el) => ({
        type:
          allergiesOptions.find((option) => option.value === el.type)?.label ||
          'Другое',
        value: el.value,
      })) || [],
    [allergiesOptions, data],
  )

  const config = useMemo(
    () => ({
      data: allergiesData,
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
    [allergiesData],
  )

  return (
    <Grid>
      <StyledDiagramTitle>Аллергии</StyledDiagramTitle>
      <Pie {...config} />
    </Grid>
  )
}

export default AllergiesDiagram
