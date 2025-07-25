import { createBrowserRouter } from "react-router-dom";
import { Layout } from "./Pages/Layout";
import { SearchPage } from "./Pages/SearchPage";
import { MainPage } from "./Pages/MainPage";
import { MoviePage } from "./Pages/MoviePage";
import { fetchCharacters, fetchMovieById, fetchMovies } from "./ServerApi";
import { OneMoviePage } from "./Pages/OneMoviePage";


export const routing = createBrowserRouter([
  {
    path: "/",
    element: <Layout/>,
    children: [
      { index: true,
        element: <MainPage/> 
      },
      {
        path: "/search",
        element: <SearchPage/>,
      },
     { path: "/movies", 
      element: <MoviePage />, 
      loader: fetchMovies,},
     { path: "/movies/:id", 
      element: <OneMoviePage />, 
      loader: fetchMovieById },
    ]
  }
]);