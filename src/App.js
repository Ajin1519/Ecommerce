import Navbar from "./components/Navbar";
import Login from "./components/Login";
import ProductCards from "./components/ProductCards";
import data from "./data";
import "./App.css"
function App() {
  const productcards = data.map(item => {
    return (
        <ProductCards
            key={item.id}
            item={item}
        />
    )
}) 
  return (
    <div className="App">
      <Navbar />
      {false && <Login />}
      <section className="cards-list">
                {productcards}
      </section>
    </div>
  );
}

export default App;
