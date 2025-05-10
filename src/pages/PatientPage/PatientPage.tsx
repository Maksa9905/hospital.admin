import {
  PatientForm,
  PatientFormValues,
  useCreatePatientMutation,
  useEditPatientMutation,
  mapPatientBody,
} from '#/entities/patient'
import Header from '#/widgets/Header'
import { useNavigate, useParams } from 'react-router'
import { StyledPaper } from './StyledPatientPage'
import { useCallback } from 'react'
import { routes } from '#/shared/lib'

const PatientPage = () => {
  const { id } = useParams<{ id: string }>()

  const navigate = useNavigate()

  const [createPatient] = useCreatePatientMutation()
  const [editPatient] = useEditPatientMutation()

  const isNew = id === 'new'

  const handleSubmit = useCallback(
    (values: PatientFormValues) => {
      try {
        if (isNew || !id) createPatient(mapPatientBody(values))
        else editPatient({ id, ...mapPatientBody(values) })

        navigate(routes.patients)
      } catch (error) {
        alert(error)
      }
    },
    [createPatient, editPatient, id, isNew, navigate],
  )

  return (
    <>
      <Header title={isNew ? 'Создать пациента' : 'Карточка пациента'} />

      <StyledPaper>
        <PatientForm
          id={id || null}
          isNew={isNew}
          onSubmit={handleSubmit}
        />
      </StyledPaper>
    </>
  )
}

export default PatientPage
