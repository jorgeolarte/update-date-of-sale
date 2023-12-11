import "./App.css";
import InputForm from "./components/InputForm";

function App() {
  return (
    <>
      <div>Hello Cartago</div>
      <InputForm onSubmit={() => console.log("Here")} />
    </>
  );
}

export default App;
