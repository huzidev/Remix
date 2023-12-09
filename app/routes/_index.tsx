import { Link } from "@remix-run/react";
import * as endpoints from '~/endpoints/index';

export default function Index() {
  return (
    <div id="content">
      <h1>Welcome to My Notes App</h1>
      <p><Link to={endpoints.NOTES}>Try</Link> creating your own Notes</p>
    </div>
  );
}
