import { LocalizationProvider } from '@mui/x-date-pickers'
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import { RouterProvider } from 'react-router'
import { router } from './router'
import { Provider } from 'react-redux'
import { store } from './store'

export function App() {
  return (
    <Provider store={store}>
      <LocalizationProvider
        adapterLocale="ru"
        dateAdapter={AdapterDayjs}
      >
        <RouterProvider router={router} />
      </LocalizationProvider>
    </Provider>
  )
}
