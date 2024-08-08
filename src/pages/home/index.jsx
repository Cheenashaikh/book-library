// src/pages/home/Home.jsx
import React, { useState, useEffect } from "react";
import axios from "axios";
import "./home.css";
import useDebounce from "../../hooks/common/useDebounce";

import BookCard from "./card";
import SearchBar from "./search";

function Home({search,handleSearch}) {
  const [record, setRecord] = useState([]);
  ;

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

  const debounceFetchData = useDebounce(fetchBooksData, 500);

  useEffect(() => {
    debounceFetchData();
  }, [search]);

  return (
    <div className="container">
      {/* <SearchBar fun={handleSearch} /> */}
      <div className="book-card">
        {record
          ?.filter((item) =>
            item?.volumeInfo?.title
              ?.toLowerCase()
              ?.includes(search?.toLowerCase())
          )
          ?.map((list, index) => (
            <div key={index}>
              <BookCard book={list} />
              <div className="hoverElements">
                <h2 >Additional Collection</h2>
                <h4 >Views:243M</h4>
                <p >Very good book</p>
              </div>
              
             
              </div>
            
          ))}
      </div>
      
    </div>



  );
}

export default Home;

