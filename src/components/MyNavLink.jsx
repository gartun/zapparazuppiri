import { NavLink } from "react-router-dom";

const MyNavLink = ({ to, children, ...rest }) => {
  return (
    <NavLink
      to={to}
      className={(isActive) => "nav-link" + (isActive ? "active" : "")}
      {...rest}
    >
      {children}
    </NavLink>
  );
};

export default MyNavLink;
