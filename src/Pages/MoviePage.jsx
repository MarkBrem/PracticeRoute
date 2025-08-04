import { NavLink, useLoaderData, useSearchParams } from "react-router-dom";

export const MoviePage = () => {
  const movies = useLoaderData();
  const [searchParams, setSearchParams] = useSearchParams();
  const category = searchParams.get("category") || "All";
  const staticCategories = [
    "All",
    "Charm",
    "Jinx",
    "Hex",
    "Curse",
    "Healing",
    "Transfiguration",
  ];
  const filteredMovies =
    category === "All"
      ? movies
      : movies.filter((movie) => movie.category === category);

  return (
    <div>
      <h1>Фільми</h1>
      <ul className="button-list">
        {staticCategories.map((cat) => (
          <li key={cat}>
            <button
              onClick={() =>
                setSearchParams(cat === "All" ? {} : { category: cat })
              }
            >
              {cat}
            </button>
          </li>
        ))}
      </ul>
      <ul>
        {filteredMovies.map((movie) => (
          <li key={movie.id}>
            <h2><NavLink className="movie" to={movie.id}>{movie.name}</NavLink></h2> 
          </li>
        ))}
      </ul>
    </div>
  );
};
