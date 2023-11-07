import { NavLink, Outlet } from "react-router-dom";

export default function useMobileMenu() {
  return (
    <div>
      <header>
        <nav id="nav">
          <NavLink className="navButton" to="/">
            Home
          </NavLink>
          <NavLink className="navButton" to="projects">
            Projects
          </NavLink>
          <NavLink className="navButton" to="about">
            Resume
          </NavLink>
          <NavLink className="navButton" to="contact">
            Contact
          </NavLink>
        </nav>
      </header>
      <main>
        <Outlet />
      </main>
    </div>
  );
}
