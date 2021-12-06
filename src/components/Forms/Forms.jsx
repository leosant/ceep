import React, { Component } from "react";
import "./style.css";
class Form extends Component {
  render() {
    return (
      <form className="forms-registration">
        <input 
         type="text"
         placeholder="Título"
         className="forms-registration_input" />
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
}

export default Form;