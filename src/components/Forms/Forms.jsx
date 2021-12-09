import React, { Component } from "react";
import "./style.css";

class Form extends Component {
  
  render() {

    return (
      <form className="forms-registration"
        onSubmit={this._createNote.bind(this)}
      >
        <input 
         type="text"
         placeholder="Título"
         className="forms-registration_input"
         onChange={this._handleChangeTitle.bind(this)}
          />
        <textarea 
         rows={15}
         placeholder="Escreva sua nota..."
         className="forms-registration_input"
         onChange={this._handleChangeText.bind(this)} 
         />
        <button className="form-registration_input form-registration_submit" >
          Criar nota
        </button>
      </form>
    );

  }

  constructor(props) {
    super(props);
    this.title = "";
    this.text = "";
  }
  
  _createNote(event) {
    event.preventDefault();
    event.stopPropagation();
    this.props.createNote(this.title, this.text);
  }

  _handleChangeTitle(event) {
    event.stopPropagation();
    this.title = event.target.value;
    console.log(this.title);
  }

  _handleChangeText(event) {
    event.stopPropagation();
    this.text = event.target.value;
    console.log(this.text);
  }
}

export default Form;