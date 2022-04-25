import React from "react";
import { useEffect, useState } from "react";
// import axios from "axios";
import { BookCard } from "./BookCard";
import styled, { css } from "styled-components";
import { EditBookData } from "./EditBookData";

export const Grid = styled.div`
 display:grid;
 grid-template-columns: 1fr 1fr ;
 grid-template-rows:auto;
 gap:25px;

`;

const Books = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    // make a GET request to http://localhost:8080/books to get all the books data
    const getData = async ()=>{
      let response = await fetch(`http://localhost:8080/books`);
      let data     = await response.json();
      console.log(data);
      setData([...data])
    }
    getData();
   
  }, []);

  return (
    <>
      <h1>Books</h1>
      <Grid data-testid="books-container">
        {
          // map thorugh the data and use <BookCard/> component to display each book
          data.map((el)=>{
           return <BookCard key={el.id} {...el}/>
          })

          }
      </Grid>
    </>
  );
};
export default Books;