import React from "react";
import { Link } from "react-router-dom";

function BookList() {
  return (
    <div>
      <h2>Below there are so many book in the booklist</h2>
      <Link to="/books/1">BookList-1</Link>
      <Link to="/books/1">BookList-2</Link>
    </div>
  );
}

export default BookList;
