import React from "react";
import VeryNaiveRouting from "./VeryNaiveRouting";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useLocation,
} from "react-router-dom";
import ProductsPage from "./ProductsPage";
import ProductPage from "./ProductPage";

export default function Routing() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/users">Users</Link>
            </li>
            <li>
              <Link to="/products">Products</Link>
            </li>
          </ul>
        </nav>

        {/* A <Switch> looks through its children <Route>s and
                renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/about" exact>
            <About />
          </Route>
          <Route path="/users" exact>
            <Users />
          </Route>
          <Route path="/products" exact>
            <ProductsPage />
          </Route>
          <Route path="/products/:id" exact>
            <ProductPage />
          </Route>
          <Route path="/" exact>
            <Home />
          </Route>
          <Route path="*">
            <NoMatch />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

function Home() {
  return <h2>Home</h2>;
}

function About() {
  return <h2>About</h2>;
}

function Users() {
  return <h2>Users</h2>;
}

function NoMatch() {
  let location = useLocation();

  return (
    <div>
      <h3>
        No match for <code>{location.pathname}</code>
      </h3>
    </div>
  );
}
