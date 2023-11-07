import { NavLink } from "react-router-dom";

export default function Project({ image, project, children }) {
  return (
    <NavLink to={project} className="project">
      <img
        className="ft-project-image"
        src={image}
        alt="featured-project"
      ></img>
      {children}
    </NavLink>
  );
}
