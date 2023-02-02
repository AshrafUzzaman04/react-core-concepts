//............ fist of all configer react emmet in vs code ............//

import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";

function App() {
  var details = "I'm a react person";

  var object = {
    name: "Asrhaf Uzzaman",
    occopation: "Web",
  };

  var products = [
    { name: "Adobe", prize: "$89.00" },
    { name: "Primear Pro", prize: "$90.00" },
    { name: "PDF Reader", prize: "$20.00" },
  ];

  var style = {
    color: "yellow",
    listStyle: "none",
    fontWeight: "bold",
    fontSize: 28,
    fontFamily: "arial",
    textTransform: "uppercase",
  };

  const friends = [
    "ashraf",
    "tanha",
    "bithi",
    "anwar",
    "jannat",
    "nafi",
    "shumi",
  ];

  return (
    <div className="App">
      <header className="App-header">
        <p>{details}</p>
        <ul style={style}>
          <li>{object.name}</li>
          <li>{object.occopation}</li>
        </ul>
        <span>My total math total number is {(5 + 5) * 9}</span>
        <Counter></Counter>

        <ul>
          {friends.map((friend) => (
            <li>{friend}</li>
          ))}
        </ul>

        {/* semilar in pettern dinamic in data */}
        <Person nayok="ashraf" naika="tanha"></Person>
        <Person nayok="jasim" naika="bithi"></Person>
        <Person nayok="karim" naika="samia"></Person>
        <Person nayok="moin" naika="sumaia"></Person>

        {/* all products */}
        {/* <Products name={products[0].name} prize={products[0].prize}></Products> */}

        {/* important way */}
        {products.map((product) => (
          <Products products={product} object={object.name}></Products>
        ))}

        {/* details way */}
        {/* <Products products={products[0]} object={object.name}></Products>
        <Products products={products[1]}></Products>
        <Products products={products[2]}></Products> */}
      </header>
    </div>
  );
}

function Person(props) {
  return (
    <div
      style={{
        border: "1px solid yellow",
        color: "red",
        padding: "6px 20px",
        margin: "10px 0px",
        fontSize: "20px",
      }}
    >
      <span>nayok: {props.nayok}</span>
      <br />
      <span>hero of {props.naika}</span>
    </div>
  );
}

function Counter() {
  const [count, setCount] = useState(999);
  return (
    <div>
      <h1>Count: {count}</h1>
    </div>
  );
}

function Products(props) {
  const { name, prize } = props.products;
  return (
    <div
      style={{
        border: "5px dotted yellow",
        color: "black",
        padding: "6px 20px",
        width: "500px",
        margin: "10px 0px",
        fontSize: "20px",
        backgroundColor: "gray",
      }}
    >
      <h2>Name: {name}</h2>
      <h2>Prize: {prize}</h2>
      <h2>object: {props.object}</h2>
      <button style={{ cursor: "pointer" }}>Buy Now</button>
    </div>
  );
}

export default App;
