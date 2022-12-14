import { Link, Outlet } from "react-router-dom";

import "./App.css";

function App() {
	return (
		<div className="App">
			<header className="App-header">
				<h1>
					<Link className="title" to="/">
						Test React Router Project
					</Link>
				</h1>
				{/* About page and Books page */}

				<nav className="nav">
					<Link to="/books">Books Page</Link> | {"    "}
					<Link to="/about">About us</Link> | {"    "}
					<Link to="/contact">Contact us</Link>
				</nav>

				<Outlet />
			</header>
		</div>
	);
}

export default App;
