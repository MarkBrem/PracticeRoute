export const Form = () => {
  return (<>
    <h1>Форма для пошуку</h1>
    <div className="search-form">
      <input type="text" placeholder="Введіть запит для пошуку" />
    <button type="submit">Пошук</button>
    </div>
    
  </>
  );
}