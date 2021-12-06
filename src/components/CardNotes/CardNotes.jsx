import React, { Component } from "react";
import "./style.css"

class CardNotes extends Component {
    
  render() {
    return (
      <section className="card-notes">
        <header className="card-notes-header">
          <h3 className="card-notes-title">Título</h3>
        </header>
        <p className="card-notes_text">Escreva sua nota</p>
      </section>
    );
  }
}

export default CardNotes;
