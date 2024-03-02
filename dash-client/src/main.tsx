import React from 'react'
import ReactDOM from 'react-dom/client'
import App from '@/App'
import '@/index.css'
import { Provider } from 'react-redux'
import { configureStore } from '@reduxjs/toolkit'
import { setupListeners } from '@reduxjs/toolkit/query'
import { api } from '@/state/api'

// This sets up our api reducer path
export const store = configureStore({
  // This is where we set up our store
  reducer: { [api.reducerPath]: api.reducer },
  // This is where we set up our middleware for our store
  middleware: (getDefault) => getDefault().concat(api.middleware),
})
// This sets up our listeners for our store
setupListeners(store.dispatch);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <Provider store={store}>
    <App />
  </Provider>
)
