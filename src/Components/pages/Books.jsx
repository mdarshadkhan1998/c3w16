import React from "react";
import { useEffect, useState } from "react";

import { BookCard } from "./BookCard";
import styled, { css } from "styled-components";

export const Grid = styled.div`

 add required style here
`;

const Books = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
 // make a GET request to http://localhost:8080/books to get all the books data  
    } );

  return (
    <>
      <h1>Books</h1>
      <Grid data-testid="books-container">
        {/* {!!data && 
          // map thorugh the data and use <BookCard/> component to display each book
          } */}
          {
            data.map((element) => (
              <BookCard />
            ))
          }
      </Grid>
    </>
  );
};
export default Books;


// id, title, isbn, pageCount, thumbnailUrl