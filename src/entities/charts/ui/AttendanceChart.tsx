import { Line } from '@ant-design/charts'
import {
  FormControl,
  FormControlLabel,
  FormLabel,
  Grid,
  Radio,
  RadioGroup,
} from '@mui/material'
import { useMemo, useState } from 'react'
import {
  AttendanceChartPeriod,
  useGetAttendanceInfoQuery,
} from '#/entities/charts'
import { StyledDiagramTitle } from './StyledChart'
import dayjs from 'dayjs'

const AttendanceChart = () => {
  const [period, setPeriod] = useState<AttendanceChartPeriod>(
    AttendanceChartPeriod.LAST_WEEK,
  )

  const { data } = useGetAttendanceInfoQuery({ period })

  const attendanceData = useMemo(
    () =>
      data?.map((el) => ({
        ['Дата']: dayjs(el.date).format('DD.MM.YYYY'),
        ['Посещаемость']: el.value,
      })) || [],
    [data],
  )

  const config = {
    data: attendanceData,
    xField: 'Дата',
    yField: 'Посещаемость',
  }

  return (
    <Grid>
      <StyledDiagramTitle>Посещаемость больницы</StyledDiagramTitle>
      <Line {...config} />
      <Grid marginTop={2}>
        <FormControl>
          <FormLabel>Выберете период</FormLabel>
          <RadioGroup
            value={period}
            onChange={(_, value) => setPeriod(value as AttendanceChartPeriod)}
          >
            <FormControlLabel
              value={AttendanceChartPeriod.LAST_WEEK}
              control={<Radio />}
              label="За последнюю неделю"
            />
            <FormControlLabel
              value={AttendanceChartPeriod.LAST_MONTH}
              control={<Radio />}
              label="За последний месяц"
            />
            <FormControlLabel
              value={AttendanceChartPeriod.LAST_YEAR}
              control={<Radio />}
              label="За последний год"
            />
          </RadioGroup>
        </FormControl>
      </Grid>
    </Grid>
  )
}

export default AttendanceChart
