import { routes } from '#/shared/lib'
import { Navigate } from 'react-router'

const ErrorPage = () => {
  return <Navigate to={routes.patients} />
}

export default ErrorPage
