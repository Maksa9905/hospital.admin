import {
  AllergiesDiagram,
  AttendanceChart,
  BloodTypeColumns,
  DiseaseDiagram,
} from '#/entities/charts'
import Header from '#/widgets/Header'
import { Grid } from '@mui/material'

const StatisticsPage = () => {
  return (
    <>
      <Header title="Статистика" />
      <Grid
        container
        spacing={8}
        marginTop={2}
      >
        <Grid size={{ xs: 7 }}>
          <AttendanceChart />
        </Grid>
        <Grid size={{ xs: 5 }}>
          <BloodTypeColumns />
        </Grid>
        <Grid size={{ xs: 6 }}>
          <AllergiesDiagram />
        </Grid>
        <Grid size={{ xs: 6 }}>
          <DiseaseDiagram />
        </Grid>
      </Grid>
    </>
  )
}

export default StatisticsPage
