import { getBooks } from "../../data/data";

import { Link } from "react-router-dom";

import styles from "./Books.module.css";

export default function Books() {
	const books = getBooks();

	return (
		<div className={styles.Books}>
			<h2>Our Books Page</h2>

			<input type="text" placeholder="Search" />

			{books.map((book, index) => (
				<Link style={{ display: "block" }} to={`/books/${book.id}`} key={index}>
					{book.fields.Title}
				</Link>
			))}
		</div>
	);
}
