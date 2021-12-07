import React, { Component } from "react";
import "./style.css";

class Form extends Component {
  
  render() {

    return (
      <form className="forms-registration">
        <input 
         type="text"
         placeholder="Título"
         className="forms-registration_input"
         onChange={this.handleChangeTitle.bind(this)} />
        <textarea 
         rows={15}
         placeholder="Escreva sua nota..."
         className="forms-registration_input"
         />
        <button className="form-registration_input form-registration_submit" >
          Criar nota
        </button>
      </form>
    );

  }

  constructor() {
    super();
    this.title = "";
  }
  
  handleChangeTitle(event) {
    this.title = event.target.value;
    console.log(this.title);
  }
}

export default Form;