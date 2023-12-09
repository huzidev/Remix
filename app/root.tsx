import { cssBundleHref } from "@remix-run/css-bundle";
import type { LinksFunction } from "@remix-run/node";
import {
  Link,
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "@remix-run/react";
// this ~ means starts from app route like app/components/Header
import { useRouteError } from "@remix-run/react";
import MainNavigation from "~/components/Header";

export const links: LinksFunction = () => [
  ...(cssBundleHref ? [{ rel: "stylesheet", href: cssBundleHref }] : []),
];

export default function App() {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body>
        <header>
          {/* Show nav buttons at top on each page */}
          <MainNavigation />
        </header>
        <Outlet />
        <ScrollRestoration />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  );
}

// if any error occured
export function ErrorBoundary() {
  const error: any = useRouteError();
  return (
  <html lang="en">
    <head>
      <meta charSet="utf-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <Meta />
      <Links />
      <title>An Error Occured!</title>t
    </head>
    <body>
      <header>
        {/* Show nav buttons at top on each page */}
        <MainNavigation />
      </header>
      <div>
        <h1>
          An Error Occured!
        </h1>
        <p>
          {error?.message}
        </p>
        <p>
          Back to <Link to='/'>Home Page</Link>
        </p>
      </div>
      <ScrollRestoration />
      <Scripts />
      <LiveReload />
    </body>
  </html>
);

}