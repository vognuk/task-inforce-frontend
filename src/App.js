import logo from "./logo.svg";
import "./App.css";
import ProductsList from "./components/ProductsList/ProductsList";

function App() {
  return (
    <div className="App">
      {/* <header className="App-header"></header> */}
      <main>
        <ProductsList />
      </main>
    </div>
  );
}

export default App;
