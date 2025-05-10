import { PatientsTable } from '#/entities/patient'
import Header from '#/widgets/Header'

const PatientsPage = () => {
  return (
    <>
      <Header title="Список пациентов" />
      <PatientsTable />
    </>
  )
}

export default PatientsPage
