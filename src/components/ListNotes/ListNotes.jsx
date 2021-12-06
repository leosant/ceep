import React, { Component } from "react";
import CardNotes from "../CardNotes"
import "./style.css"

class ListNotes extends Component {
  render() {
    return (
      <ul className="list-notes">
        {Array.of("Trabalho", "Trabalho", "Estudos").map((cartegory, index) => {
          return (  
            <li className="list-notes_item" key={index}>
              <CardNotes />
            </li>
          );
        })}
      </ul>
    );
  }
}

export default ListNotes;
