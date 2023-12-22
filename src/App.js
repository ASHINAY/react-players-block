import "./App.css";
import {products} from "./constant";

function App() {
  return (
    <div className="root">
      <div className="Main-Container">
        <span className="shop-text">My Shop</span>
      </div>
      <div className="product-text">
        <div>Products</div>
      </div>
      <div className="CardContainer">
        {products.map((product)=> (
        <div className="Card-1" key={product.id}>
          <div className="Group-1">
            <img className="Image" src={product.image} />
            <div className="bottom-product">
              <div>
                <span className="text-product">{product.name}</span>
                <div
                  style={{ display: "flex", gap: "89px", paddingTop: "6px" }}
                >
                  <span className="text-product" style={{ opacity: "0.5" }}>
                    {" "}
                    {product.category}
                  </span>
                  <span style={{ color: "#FCC80A" }}>{product.price}</span>
                </div>
                <div className="buy-rectangle">
                  <div className="buy-text">Buy</div>
                </div>
              </div>
            </div>
          </div>
        </div>

))}
      </div>
    </div>
  );
}

export default App;
