import React from "react";
import { render } from "react-dom";
import Products from "./components/Products";
import data from "./data.json"

class App extends React.Component {
  constructor(){
    super();
    this.state={
        products: data.products,
        size:"",
        sort:"",
    };
  }
  render(){
  return (
    <div className="grid-container">
      <header>
        <a href="/">React Shopping Cart</a>
      </header>
      <main>
        <div className="content">
          <div className="main">
            <Products products={this.state.products}/>
          </div>
          <div className="sidebar">
            Carts
          </div>
        </div>
      </main>
        <footer>
          All rigth is reserved
        </footer>
      
    </div>
  );
}
}

export default App;
