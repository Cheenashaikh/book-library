
import React from "react";


function BookCard({ book }) {
  return (
    <div >
      <img
        className="productImage"
        src={
          book?.volumeInfo?.imageLinks
            ? book?.volumeInfo?.imageLinks.thumbnail
            : "http://books.google.com/books/content?id=2HvGDwAAQBAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api"
        }
        alt={book?.volumeInfo?.title}
      />
      <h3>{book?.volumeInfo?.title}</h3>
      <p>{book?.volumeInfo?.authors?.join(",")}</p>
      <p>{book?.volumeInfo?.publisher}</p>
    </div>
  );
}

export default BookCard;
