import React, { useState, useEffect } from "react";

import "./App.css";
import "./index.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faPhone } from "@fortawesome/free-solid-svg-icons";
import axios from "axios";

function App() {
  const [record, setRecord] = useState([]);
  const [search, setSearch] = useState("");

  const handleSearch = (e) => {
    setSearch(e.target.value);
  };

  const fetchBooksData = async () => {
    if (search) {
      try {
        const response = await axios.get(
          `https://www.googleapis.com/books/v1/volumes?q=${search}`
        );
        setRecord(response?.data?.items || []);
      } catch (err) {
        console.log(err);
      }
    }
  };
  useEffect(() => {
    fetchBooksData();
  }, [search]);

  return (
    <div className="body">
      <div>
        <header className="headerDesign">
          <h3>Books</h3>
          <ul className="horizontal">
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="/about">About</a>
            </li>
            <li>
              <a href="/services">Services</a>
            </li>
            <li>
              <a href="/contact">Contact</a>
            </li>
          </ul>
        </header>
      </div>
      <div className="container">
        <div className="search-bar">
          <img
            src="https://www.svgrepo.com/show/7109/search.svg"
            className="img"
          />
          <input
            className="search"
            placeholder="search"
            type="search"
            onChange={handleSearch}
          />
        </div>

        <section className="bookTable">
          {record &&
            record
              .filter((item) => {
                return search.toLowerCase() === ""
                  ? item
                  : item?.volumeInfo?.title
                      .toLowerCase()
                      .includes(search.toLowerCase());
              })
              .map((list, index) => (
                <div key={index}>
                  <img
                    className="productImage"
                    src={
                      list?.volumeInfo?.imageLinks
                        ? list?.volumeInfo?.imageLinks.thumbnail
                        : "http://books.google.com/books/content?id=2HvGDwAAQBAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api"
                    }
                  />

                  <h3>{list?.volumeInfo?.title}</h3>

                  <p>
                    {list?.volumeInfo?.authors &&
                      list?.volumeInfo?.authors.join(",")}
                  </p>
                  <p>{list?.volumeInfo?.publisher}</p>
                </div>
              ))}
        </section>
      </div>
      <footer>
        <div className="footerDesign">
          <p>
            <FontAwesomeIcon icon={faEnvelope} />
            cheenashaikh934@gmail.com
          </p>

          <p>
            <FontAwesomeIcon icon={faPhone} />
            +954-7643280-33
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;
