import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from 'react-router'
import { PublicLayout } from '../Layouts/PublicLayout'
import { Error } from '../Pages/Error/Error'
import { Home } from '../Pages/Home/Home'

export const PublicRoutes = () => {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<PublicLayout />} errorElement={<Error />}>
        <Route index element={<Home />} />
      </Route>
    )
  )
  return <RouterProvider router={router} />
}
