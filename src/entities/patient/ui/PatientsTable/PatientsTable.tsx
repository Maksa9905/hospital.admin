import { MaterialReactTable, MRT_ColumnDef } from 'material-react-table'
import { useMemo } from 'react'
import {
  mapPatient,
  PatientTableItem,
  useGetPatientListQuery,
} from '#/entities/patient'
import { useTablePaginationQuery } from '#/shared/model'
import { useNavigate } from 'react-router'

const PatientsTable = () => {
  const { onPaginationChange, pagination, params } = useTablePaginationQuery()
  const { data, meta, isLoading } = useGetPatientListQuery(params, {
    selectFromResult: (result) => ({
      data: result.currentData?.data.map(mapPatient),
      meta: result.currentData?.meta,
      isLoading: result.isLoading || result.isFetching,
    }),
  })

  const navigate = useNavigate()

  const columns = useMemo<MRT_ColumnDef<PatientTableItem>[]>(
    () => [
      {
        header: 'ФИО',
        accessorKey: 'fullName',
      },
      {
        header: 'Дата рождения',
        accessorKey: 'birthday',
      },
      {
        header: 'Email',
        accessorKey: 'email',
      },
      {
        header: 'Номер телефона',
        accessorKey: 'phone',
      },
      {
        header: 'Регион',
        accessorKey: 'region',
      },
      {
        header: 'Номер СНИЛС',
        accessorKey: 'snils',
      },
    ],
    [],
  )

  if (!data) return null

  return (
    <MaterialReactTable
      manualPagination
      state={{ pagination, isLoading }}
      rowCount={meta?.total}
      onPaginationChange={onPaginationChange}
      muiTableBodyRowProps={({ row }) => ({
        onClick: () => navigate(row.original.id),
      })}
      enableColumnActions={false}
      enableSorting={false}
      enableTopToolbar={false}
      data={data}
      columns={columns}
    />
  )
}

export default PatientsTable
