import { useState } from "react";
import "./App.css";
import Button from "./components/Button";
import Card from "./components/Card";

function App() {
  const [count, setCount] = useState(0);

  function handleClick() {
    setCount(count + 1);
  }
  

  return (
    <div>
      <Button handleClick={handleClick}>
        <h1>{count}</h1>
      </Button>

      {/* <Card name="Ganesh Lokhande">
        <h1>This a first react cource</h1>
        <p>i am ganesh lokhande from mumbai</p>
        <p>i am a full stack web developer</p>
      </Card> */}
    </div>
  );
}

export default App;
