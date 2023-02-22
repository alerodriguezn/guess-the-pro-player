import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "@remix-run/react";
import stylesheet from "~/tailwind.css";

export const meta = () => ({
  charset: "utf-8",
  title: "New Remix App",
  viewport: "width=device-width,initial-scale=1",

});

export const links = () => [
  {
    rel: 'stylesheet',
    href: 'https://necolas.github.io/normalize.css/8.0.1/normalize.css'
},
{
    rel: 'preconnect',
    href: 'https://fonts.googleapis.com'
},
{
    rel: 'preconnect',
    href: 'https://fonts.gstatic.com',
    crossOrigin : "true"
}, 
{
    rel: 'stylesheet',
    href: 'https://fonts.googleapis.com/css2?family=Outfit:wght@400;700;900&display=swap'
},
  { 
    rel: "stylesheet", href: stylesheet 
  },
];

export default function App() {
  return (
    <html lang="en">
      <head>
        <Meta />
        <Links />
      </head>
      <body className="h-screen bg-gradient-to-br from-rose-500 via-indigo-600 to-green-100">
        <Outlet />
        <ScrollRestoration />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  );
}
