import { useLoaderData} from "react-router-dom";

export const OneMoviePage = () => {
  const movie = useLoaderData();

  if (!movie) {
    return <p>Не вдалося завантажити дані про заклинання.</p>;
  }

  return (
    <div className="one-movie">
      <h1>{movie.name}</h1>
      <p><span>Effect:</span> {movie.effect} хв</p>
      <p><span>Hand:</span> {movie.hand}</p>
      <p><span>Category:</span> {movie.category}</p>
    </div>
  );
};