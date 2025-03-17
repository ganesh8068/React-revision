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

  return (
    <div>

echo "# React-revision" >> README.md
git init
git add README.md
git commit -m "first commit"
git branch -M main
git remote add origin https://github.com/ganesh8068/React-revision.git
git push -u origin main

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
