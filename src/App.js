import "./App.scss";
import React from "react";

import Home from "./Home";



class App extends React.Component {
  render() {
    return (
      <div className="App">
        <main className="main">
          <Home />
        </main>
      </div>
    );
  }
}

export default App;
