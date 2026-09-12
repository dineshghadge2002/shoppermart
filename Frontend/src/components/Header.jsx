import { NavLink } from "react-router-dom";

export default function Header({ user, onLogout }) {
  return (
    <header className="site-header">
      <NavLink className="logo" to="/">ShopperMart</NavLink>
      <nav aria-label="Main navigation">
        <NavLink to="/" end>Products</NavLink>
        <NavLink to="/about">About</NavLink>
        {user ? (
          <NavLink to="/login" onClick={onLogout}>
            Logout
          </NavLink>
        ) : (
          <NavLink to="/login">Login</NavLink>
        )}
      </nav>
    </header>
  );
}
