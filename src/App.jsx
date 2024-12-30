import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { HomeLayout, About, Cocktail, LandingPage, Newsletter, Error } from "./pages";

const router = createBrowserRouter([
  {
    path: '/',
    element: <HomeLayout />,
    children:[
      {
        index: true,
        element: <LandingPage />,
      },
      {
        path: '/newsletter',
        element: <Newsletter />,
      },
      {
        path: '/error',
        element: <Error />,
      },
      {
        path: '/cocktail',
        element: <Cocktail />,
      },
      {
        path: '/about',
        element: <About />,
      },
    ]
  },
  
])
const App = () => {
  return (
    <RouterProvider router={router}/>
  )
}
export default App