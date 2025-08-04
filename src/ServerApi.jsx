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
    const response = await fetch('https://api.potterdb.com/v1/spells');
    if (!response.ok) {
      throw new Error(`HTTP error! Статус: ${response.status}`);
    }
    const data = await response.json();

    return data.data.map(movie => ({
      id: movie.id,
      name: movie.attributes.name || 'Невідома назва',
      category: movie.attributes.category
      // releaseDate: movie.attributes.release_date || 'Невідома дата',
      // summary: movie.attributes.summary || 'Немає опису'
    }));
  } catch (error) {
    console.error('Помилка при запиті фільмів:', error);
    return [];
  }
}

export async function fetchMovieById({ params }) {
  try {
    const response = await fetch(`https://api.potterdb.com/v1/spells/${params.id}`);
    if (!response.ok) {
      throw new Error(`HTTP error! Статус: ${response.status}`);
    }
    const data = await response.json();
    const movie = data.data.attributes;
    return {
      name: movie.name || 'Невідома назва',
      effect: movie.effect || 'Немає опису',
      hand: movie.hand || 'Невідомо',
      category: movie.category || [],
    };
  } catch (error) {
    console.error('Помилка при запиті фільму:', error);
    return null;
  }
}

export async function fetchForm(){

} 