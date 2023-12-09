import { NavLink } from "@remix-run/react";

export default function MainNavigation() {
  return (
    <div id="main-navigation">
        <ul>
            <li className="nav-item">
                <NavLink to="/">
                    Home
                </NavLink>
            </li>
            <li className="nav-item">
                <NavLink to="/notes">
                    Notes
                </NavLink>;
            </li>
        </ul>
    </div>
  )
}
