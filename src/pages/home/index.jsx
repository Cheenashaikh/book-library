import React, { useState, useEffect } from "react";
import axios from "axios";
import "./home.css";

function Home() {
  const [record, setRecord] = useState([]);
  const [search, setSearch] = useState("Novel");

  const handleSearch = (e) => {
    setTimeout(() => {
      setSearch(e.target.value);
    }, 500);
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
    fetchBooksData(); // call this method if deplay between key press is graeter then 500ms
  }, [search]);
  return (
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
        {record
          ?.filter((item) =>
            item?.volumeInfo?.title
              ?.toLowerCase()
              ?.includes(search?.toLowerCase())
          )
          ?.map((list, index) => (
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
              <p>{list?.volumeInfo?.authors?.join(",")}</p>
              <p>{list?.volumeInfo?.publisher}</p>
            </div>
          ))}
      </section>
    </div>
  );
}
export default Home;
