import img from "../assets/Pikachu.jpg";
import { useState } from "react";
import './FirstComponent.css'
import Gallery from "../ExportingComponent/Gallery";
import {Portfolio} from "../ExportingComponent/Gallery"


//First Component content

function Mybtn() {
  return <button> hellow</button>;
}

function FirstComponent() {

  //second Component content
  
  const user = {
    name: "Arief",
    imgUrl: img,
    imgSize: 90,
  };


  // rendering  list
  
  const products = [
    { title: "Mango", id: 1 },
    { title: "Orange", id: 2 },
    { title: "Apple", id: 3 },
    { title: "Banana", id: 4 },
  ];
  let items = products.map((product) => <li>{product.title}</li>, []);

  let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  let SqureNubers = numbers.map(number);

  function number(num) {
    return [num * 2].join("-");
  }


  // Responding to events

  let btnAlert = () => {
    alert("Hi, this alert button is clicked");
  };


  // Updating the Display

  let [count, setCount] = useState(0);
  function handleClicked() {
    setCount(count + 1);
  }

  function negHandleClicked() {
    setCount(count - 1);
  }



  return (
    <>
      <h1>Welcome all, I am {user.name} </h1>

      {/* this is an second component */}
      {/* <img
        src={user.imgUrl}
        style={{ width: user.imgSize, height: user.imgSize }}
      /> */}
      <Mybtn />

      {/* Renderring list */}
      <ol>{items}</ol>
      <ul>{items}</ul>
      <div>{SqureNubers}</div>

      {/* Responding to events */}

      <button onClick={btnAlert}> Alert btn</button>

      {/* updating the display  */}
      <h1>{count}</h1>
      <button
        style={{
          fontSize: "18px",
          padding: "8px 33px",
          marginLeft: "5px",
          border: "none",
          backgroundColor: "green",
          borderRadius: "8px",
          color: "white",
        }}
        onClick={handleClicked}
      >
        +
      </button>
      <button
        style={{
          fontSize: "18px",
          padding: "8px 33px",
          marginLeft: "5px",
          border: "none",
          backgroundColor: "red",
          borderRadius: "8px",
          color: "white",
        }}
        onClick={negHandleClicked}
      >
        -
      </button>
      <Portfolio/>
      <Gallery/>
    </>
  );
}

export default FirstComponent;
