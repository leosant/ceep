import React, { Component } from "react";
import Forms from "./components/Forms";
import ListNotes from "./components/ListNotes";
import "./assets/index.css";
import "./assets/App.css"

class App extends Component {
  
  render() {
    return (
      <section className="content">
        <Forms />
        <ListNotes />
      </section>
    );
  }
}

export default App;
