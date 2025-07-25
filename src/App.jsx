import { RouterProvider } from "react-router-dom";
import { routing } from "./router";
// import { fetchCharacters } from "./ServerApi";

export const App = () => {
  return <RouterProvider router={routing} />;
};