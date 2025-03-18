import "./App.css";
import { useEffect, useState } from "react";
import DataFetcher from "./components/DataFetcher";

function App() {
  // const [count, setCount] = useState(0);
  // const [total, setTotal] = useState(1);

  //first -> side effect function
  //second -> clean-up function
  //thied -> comma seprated dep list

  // variation: 1
  // runs on every render
  // useEffect(() => {
  //   alert("i will run on each render");
  // });

  // variation: 2
  // useEffect(() => {
  //   alert("i will run on first render");
  // }, []);

  // variation: 3
  // useEffect(() => {
  //   alert("i will run every time when count updated");
  // }, [count]);

  // variation: 4
  // multiple dependencies
  // useEffect(() => {
  //   alert("i will run every time when count/total updated")
  // }, [count, total]);

  // variation: 5
  // let add cleanup function
  // useEffect(() => {
  //   alert("Count is updated");
  //   return () => {
  //     alert("count is unounted from UI");
  //   };
  // }, [count]);

  // function handleClick() {
  //   setCount(count + 1);
  // }

  // function handleClickToatl() {
  //   setTotal(total + 1);
  // }

  return (
    <div>

      <DataFetcher />
      
      {/* <button onClick={handleClick}>click me</button>
      <h1>count is: {count}</h1>

      <button onClick={handleClickToatl}>click me</button>
      <h1>total count is: {total}</h1> */}
    </div>
  );
}

export default App;
