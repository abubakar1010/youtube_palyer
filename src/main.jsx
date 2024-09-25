import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import routes from './routes/Routes.jsx'
import { StoreProvider } from 'easy-peasy'
import store from './store/store.js'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <StoreProvider store={store}>
    <RouterProvider router={routes} />
    </StoreProvider>
  </StrictMode>,
)
