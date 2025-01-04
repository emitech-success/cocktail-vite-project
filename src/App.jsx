import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { HomeLayout, About, Cocktail, LandingPage, Newsletter, Error, SinglePageError } from "./pages";
import {loader as landingLoader} from './pages/LandingPage'
import {loader as singleCocktailLoader} from './pages/Cocktail';
import { action as newsletterAction } from "./pages/Newsletter";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

const queryClient = new QueryClient({
  defaultOptions:{
    queries:{
      staleTime:1000 * 60 * 5
    }
  }
})

const router = createBrowserRouter([
  {
    path: '/',
    element: <HomeLayout />,
    errorElement: <Error />,
    children:[
      {
        index: true,
        element: <LandingPage />,
        errorElement: <SinglePageError />,
        loader: landingLoader(queryClient)
      },
      {
        path: '/newsletter',
        element: <Newsletter />,
        action: newsletterAction
      },
      
      {
        path: '/cocktail/:id',
        element: <Cocktail />,
        errorElement: <SinglePageError />,
        loader: singleCocktailLoader(queryClient),
        
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
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router}/>
      <ReactQueryDevtools initialIsOpen={false}/>
    </QueryClientProvider>
    
  )
}
export default App