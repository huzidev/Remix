import { Link } from "@remix-run/react";

export default function Index() {
  return (
    <div style={{ fontFamily: "system-ui, sans-serif", lineHeight: "1.8" }}>
      <h1>Welcome to Notes</h1>
      <Link to='/notes'>Notes</Link>
    </div>
  );
}
