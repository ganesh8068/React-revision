import { useState } from "react";
import "./App.css";
import LoginBtn from "./components/LoginBtn";
import LogoutBtn from "./components/LogoutBtn";

function App() {
  const [isLoggedin, setLoggedin] = useState(true);
  // // <-------------- IF ELSE --------------->
  // if (isLoggedin) {
  //   return <LoginBtn />;
  // } else {
  //   return <LogoutBtn />;
  // }

  // // <-------------- TERNARY OPRATOR --------------->
  // return (
  //   <div>
  //     {isLoggedin ? <LoginBtn/> : <LogoutBtn />}
  //   </div>
  // )

  // // <-------------- LOGICAL OPRATOR --------------->
  if (!isLoggedin) {
    return (
      <LoginBtn/>
    )
  }
  return (
    <div>
      <h1>welcome to my channel</h1>
      {isLoggedin && <LogoutBtn />}
    </div>
  );

  

}

export default App;
