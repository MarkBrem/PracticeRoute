import { NavLink, useLoaderData } from "react-router-dom";

export const MoviePage = () => {
  const movies = useLoaderData();

  return (
    <div>
      <h1>Фільми</h1>
      <ul>
        {movies.map(movie => (
          <li key={movie.id}>
            <h2><NavLink className="movie" to={movie.id}>{movie.title}</NavLink> </h2>
          </li>
        ))}
      </ul>
    </div>
  );
};
