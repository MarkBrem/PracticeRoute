import { useLoaderData} from "react-router-dom";

export const OneMoviePage = () => {
  const movie = useLoaderData();

  if (!movie) {
    return <p>Не вдалося завантажити дані про фільм.</p>;
  }

  return (
    <div className="one-movie">
      <h1>{movie.title}</h1>
      <p><span>Дата виходу:</span>{movie.releaseDate}</p>
      <p><span>Тривалість:</span> {movie.runningTime} хв</p>
      <p><span>Каса:</span> {movie.boxOffice}</p>
      <p><span>Режисери:</span> {movie.directors.length > 0 ? movie.directors.join(", ") : "Немає даних"}</p>
      <p><span>Опис:</span> {movie.summary}</p>
    </div>
  );
};