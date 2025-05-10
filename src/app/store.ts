import { chartsApi } from '#/entities/charts'
import { patientApi } from '#/entities/patient'
import { configureStore } from '@reduxjs/toolkit'
import { setupListeners } from '@reduxjs/toolkit/query'

export const store = configureStore({
  reducer: {
    [chartsApi.reducerPath]: chartsApi.reducer,
    [patientApi.reducerPath]: patientApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat([
      chartsApi.middleware,
      patientApi.middleware,
    ]),
})

setupListeners(store.dispatch)
