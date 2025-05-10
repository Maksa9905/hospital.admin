import { useGetBloodTypesInfoQuery } from '#/entities/charts'
import { Column } from '@ant-design/charts'
import { Grid } from '@mui/material'
import { StyledDiagramTitle } from './StyledChart'

const BloodTypeColumns = () => {
  const { data } = useGetBloodTypesInfoQuery()

  if (!data) return null

  const config = { data, xField: 'type', yField: 'value' }

  return (
    <Grid>
      <StyledDiagramTitle>Группы крови</StyledDiagramTitle>
      <Column {...config} />
    </Grid>
  )
}

export default BloodTypeColumns
