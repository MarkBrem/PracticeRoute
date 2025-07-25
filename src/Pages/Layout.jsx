import { NavLink, Outlet } from "react-router-dom";

export const Layout = () => {
  return (
    <>
      <header>
        <ul className="nav-list">
          <li>
            <NavLink to="/">Головна</NavLink>
          </li>
          <li>
            <NavLink to="/search">Пошук</NavLink>
          </li>
          <li>
            <NavLink to="/movies">Фільми</NavLink>
          </li>
        </ul>
      </header>
      <main>
        <Outlet/>
      </main>
      <footer>
        <p>Зроблено палкими фанатами Гаррі Поттера</p>
      </footer>
    </>
  );
};