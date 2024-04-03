import React from "react";
import Home from "./Pages/Home";
import BookList from "./Pages/BookList";
import Books from "./Pages/Books";
import {
  Route,
  Routes,
  BrowserRouter as Router,
  NavLink,
  Link,
} from "react-router-dom";

function App() {
  return (
    <>
      <nav>
        <ul className="">
          <li>
            <Link to="/"> Home</Link>
          </li>
          <li>
            <Link to="/booklist"> Booklist</Link>
          </li>
          <li>
            <Link to="/booklist/books"> Books</Link>
          </li>
        </ul>
      </nav>
      
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/booklist" element={<BookList />} />
          <Route path="/books/:id" element={<Books />} />
        </Routes>
 
    </>
  );
}

export default App;
