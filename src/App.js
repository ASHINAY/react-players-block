import "./App.css";
import imageProduct from "./assets/imageProduct.png";
import shoeImage from "./assets/shoeImage.png";

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
        <div className="Card-1">
          <div className="Group-1">
            <img className="Image" src={imageProduct} />
            <div className="bottom-product">
              <div>
                <span className="text-product"> Basic Dress Green</span>
                <div
                  style={{ display: "flex", gap: "89px", paddingTop: "6px" }}
                >
                  <span className="text-product" style={{ opacity: "0.5" }}>
                    {" "}
                    Dress
                  </span>
                  <span style={{ color: "#FCC80A" }}>Rs 236.00</span>
                </div>
                <div className="buy-rectangle">
                  <div className="buy-text">Buy</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="Card-1">
          <div className="Group-1">
            <img className="Image" src={shoeImage} />
            <div className="bottom-product">
              <div>
                <span className="text-product"> Basic Dress Green</span>
                <div
                  style={{ display: "flex", gap: "89px", paddingTop: "6px" }}
                >
                  <span className="text-product" style={{ opacity: "0.5" }}>
                    {" "}
                    Dress
                  </span>
                  <span style={{ color: "#FCC80A" }}>Rs 236.00</span>
                </div>
                <div className="buy-rectangle">
                  <div className="buy-text">Buy</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="Card-1">
          <div className="Group-1">
            <img className="Image" src={imageProduct} />
            <div className="bottom-product">
              <div>
                <span className="text-product"> Basic Dress Green</span>
                <div
                  style={{ display: "flex", gap: "89px", paddingTop: "6px" }}
                >
                  <span className="text-product" style={{ opacity: "0.5" }}>
                    {" "}
                    Dress
                  </span>
                  <span style={{ color: "#FCC80A" }}>Rs 236.00</span>
                </div>
                <div className="buy-rectangle">
                  <div className="buy-text">Buy</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="Card-1">
          <div className="Group-1">
            <img className="Image" src={imageProduct} />
            <div className="bottom-product">
              <div>
                <span className="text-product"> Basic Dress Green</span>
                <div
                  style={{ display: "flex", gap: "89px", paddingTop: "6px" }}
                >
                  <span className="text-product" style={{ opacity: "0.5" }}>
                    {" "}
                    Dress
                  </span>
                  <span style={{ color: "#FCC80A" }}>Rs 236.00</span>
                </div>
                <div className="buy-rectangle">
                  <div className="buy-text">Buy</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
