import UserCard from "./components/userCard";
// import ganeshPic from "../assets/ganeshPic.jpeg";

function App() {
  return (
    <div>
      <UserCard
        name="deva ganthade"
        place="USA"
        style={{ "border-radius": "10px", "background-color": "red" }}
      />
      <UserCard name="yash kadam" place="IND" />
      <UserCard name="sam shete" place="USE" />
    </div>
  );
}
export default App;
