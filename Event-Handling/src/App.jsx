import "./App.css";

function App() {
  function handleClick() {
    alert("i am clicked now");
  }

  function mouseOver() {
    alert("you over me");
  }

  function InputChange(e) {
    console.log("value till is:", e.target.value);
  }

  function Sumbit(e) {
    e.preventDefault();
    alert("form sumbit kar du kya");
  }

  // imediate invocation
  // prevent default (stop to send data to server)
  // stop propogration (Stop bubbling)

  return (
    <div>
      {/* <form onSubmit={Sumbit}>
        <input type="text" onChange={InputChange} />
        <button type="sumbit">Sumbit</button>
      </form> */}

      {/* <button
        type="button"
        class="btn btn-primary btn-lg"
        onClick={handleClick}
        // onClick={() => {
        //   alert("i am ganesh");
        // }}
      >
        Large button
      </button>

      <p onMouseOver={mouseOver} style={{ color: "red" }}>
        I am Ganesh Lokhande hover me
      </p> */}
    </div>
  );
}

export default App;
