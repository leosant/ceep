import React, { Component } from "react";
import Forms from "./components/Forms";
import ListNotes from "./components/ListNotes";
import "./assets/index.css";
import "./assets/App.css"

class App extends Component {

  createNote(title, text) {
    console.log(`Uma nova nota foi criada `+ title + " " + text);
  }
  
  render() {
    return (
      <section className="content">
        <Forms createNote={this.createNote}/>
        <ListNotes />
      </section>
    );
  }
}

export default App;
