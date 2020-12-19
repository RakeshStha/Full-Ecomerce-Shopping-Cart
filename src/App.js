import React from "react";
import { render } from "react-dom";
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
        Product List
      </main>
        <footer>
          All rigth is reserved
        </footer>
      
    </div>
  );
}
}

export default App;
