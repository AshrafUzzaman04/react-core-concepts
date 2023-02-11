//............ fist of all configer react emmet in vs code ............//

import logo from "./logo.svg";
import "./App.css";
import { useEffect, useState } from "react";

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
        <Users></Users>
        <RandomUser></RandomUser>

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

// counter in react
function Counter() {
  const [count, setCount] = useState(0);
  const handleIcrease = () => {
    // const newCount = count + 1;
    setCount(count + 1);
  };
  const handleDecrease = () => {
    setCount(count - 1);
  };
  return (
    <div>
      <h1>Count: {count}</h1>
      <button onClick={handleIcrease}>Increase</button>
      <button onMouseMove={handleIcrease}>Increase</button>
      <button onMouseMove={handleDecrease}>Decrease</button>
    </div>
  );
}

// user fetch and useEffect
function Users() {
  const [users, setUser] = useState([]);
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((data) => {
        setUser(data);
      });
  });
  return (
    <div>
      <h3>All Json Users</h3>
      <ul>
        {users.map((user) => (
          <li>{user.email}</li>
        ))}
      </ul>
    </div>
  );
}

function Products(props) {
  const { name, prize } = props.products;
  const [count, setCount] = useState(0);
  const howMuchCount = () => {
    setCount(count + 1);
  };
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
      <button onClick={howMuchCount} style={{ cursor: "pointer" }}>
        Buy Now
      </button>
      <span>order: {count}</span>
    </div>
  );
}

function RandomUser() {
  const [rand, setRand] = useState();
  useEffect(() => {
    fetch("https://randomuser.me/api/")
      .then((response) => response.json())
      .then((data) => setRand(data));
  }, []);
  console.log(rand);
  const style = {
    listStyle: "none",
    color: "red",
    border: "1px solid #fff",
    padding: "20px",
  };
  return (
    <div>
      {rand.map((random) => (
        <li style={style}>{random.results.gender}</li>
      ))}
    </div>
  );
}

export default App;
