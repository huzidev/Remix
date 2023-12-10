import { NavLink } from "@remix-run/react";
import * as endpoints from "~/endpoints/index";

export default function MainNavigation() {
  return (
    <div id="main-navigation">
      <ul>
        <li className="nav-item">
          {/* NavLink used instead of Link because NavLink provides active class and also checks if it's in pending state
                so it'll be easier to put class if state is in pending or in active state */}
          <NavLink to={endpoints.HOME}>Home</NavLink>
        </li>
        <li className="nav-item">
          {/* <NavLink to={endpoints.NOTES}>Notes</NavLink> */}
          <NavLink to={endpoints.NOTES}>Notes</NavLink>
        </li>
      </ul>
    </div>
  );
}
