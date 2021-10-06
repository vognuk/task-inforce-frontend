import "./App.css";
import ProductsList from "./components/ProductsList/ProductsList";
import withFetch from "./hoc/withFetch";

// create the list wrapped in the HOC
const ProductsWithFetch = withFetch(
  ProductsList,
  "http://localhost:3000/products"
);

function App() {
  return (
    <div className="App">
      <main>
        <ProductsWithFetch />
      </main>
    </div>
  );
}

export default App;
