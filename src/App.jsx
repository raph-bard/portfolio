import { Link, Outlet } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <>
      <nav className="d-none pr-d-none">
        <Link to="/">Home</Link>
        <Link to="/portfolio">Portfolio</Link>
        <Link to="/curiculum">Curiculum Vitae</Link>
      </nav>
      <main>
        <Outlet />
      </main>
    </>
  );
}

export default App;