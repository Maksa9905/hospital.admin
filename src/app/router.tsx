import ErrorPage from '#/pages/ErrorPage'
import Layout from '#/pages/Layout'
import PatientPage from '#/pages/PatientPage'
import PatientsPage from '#/pages/PatientsPage'
import StatisticsPage from '#/pages/StatisticsPage'
import { routes } from '#/shared/lib'
import { createBrowserRouter } from 'react-router'
import { QueryParamProvider } from 'use-query-params'
import { ReactRouter6Adapter } from 'use-query-params/adapters/react-router-6'

export const router = createBrowserRouter([
  {
    errorElement: <ErrorPage />,
    element: (
      <QueryParamProvider adapter={ReactRouter6Adapter}>
        <Layout />
      </QueryParamProvider>
    ),
    children: [
      {
        path: routes.patients,
        element: <PatientsPage />,
      },
      {
        path: routes.patientById(':id'),
        element: <PatientPage />,
      },
      {
        path: routes.statistics,
        element: <StatisticsPage />,
      },
    ],
  },
])
