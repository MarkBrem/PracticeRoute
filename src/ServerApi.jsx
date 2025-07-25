export async function fetchCharacters() {
  try {
    const response = await fetch('https://api.potterdb.com/v1/characters');
    if (!response.ok) {
      throw new Error(`HTTP error! Статус: ${response.status}`);
    }
    const data = await response.json();
    return data.data.map(character => character.attributes.name || 'Невідоме ім’я');
  } catch (error) {
    console.error('Помилка при запиті:', error);
    return [];
  }
}

export async function fetchMovies() {
  try {
    const response = await fetch('https://api.potterdb.com/v1/movies');
    if (!response.ok) {
      throw new Error(`HTTP error! Статус: ${response.status}`);
    }
    const data = await response.json();

    return data.data.map(movie => ({
      id: movie.id,
      title: movie.attributes.title || 'Невідома назва',
      releaseDate: movie.attributes.release_date || 'Невідома дата',
      summary: movie.attributes.summary || 'Немає опису'
    }));
  } catch (error) {
    console.error('Помилка при запиті фільмів:', error);
    return [];
  }
}

export async function fetchMovieById({ params }) {
  try {
    const response = await fetch(`https://api.potterdb.com/v1/movies/${params.id}`);
    if (!response.ok) {
      throw new Error(`HTTP error! Статус: ${response.status}`);
    }
    const data = await response.json();
    const movie = data.data.attributes;
    return {
      title: movie.title || 'Невідома назва',
      releaseDate: movie.release_date || 'Невідома дата',
      summary: movie.summary || 'Немає опису',
      boxOffice: movie.box_office || 'Невідомо',
      directors: movie.directors || [],
      runningTime: movie.running_time || 'Невідомо',
    };
  } catch (error) {
    console.error('Помилка при запиті фільму:', error);
    return null;
  }
}
