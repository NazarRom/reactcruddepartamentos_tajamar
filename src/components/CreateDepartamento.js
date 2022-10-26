import React, { Component } from 'react'
import Global from '../Global';
import axios from 'axios';
import { Navigate } from 'react-router-dom';
export default class CreateDepartamento extends Component {
    cajaNumeroRef = React.createRef();
    cajaNombreRer = React.createRef();
    cajaLocalidadRef = React.createRef();

    state = {
        mensaje: "",
        status: false
    }
    insertDepartamento = (e) =>{
        e.preventDefault();
        var request = "/api/departamentos/";
        var url = Global.urlDepartamentos + request;
        var numero = parseInt(this.cajaNumeroRef.current.value);
        var nombre = this.cajaNombreRer.current.value;
        var localidad = this.cajaLocalidadRef.current.value;
        //REACT ya permite declarar objetos con formato json
        //Declaramos una variable con las propiedades del api de json
        var departamento = {
            numero:numero,
            nombre:nombre,
            localidad:localidad
        };
        //En axios el metodo post recibe 2 parametros
        //el primero recibe la url
        //el segundo JSON para la api
        axios.post(url,departamento).then(response =>{
            this.setState({
                status: true,
                mensaje:"Departamento insertado!!!"
            });
        });
    }
  render() {
    if (this.state.status == true){
        return(<Navigate to="/"/>)
    }
    return (
      <div>
        <h1>CreateDepartamento</h1>
        <form>
            <label>Número:</label>
            <input type="numero" className='form-control' ref={this.cajaNumeroRef} required/>
            <label>Nombre:</label>
            <input type="text" className='form-control' ref={this.cajaNombreRer} required/>
            <label>Localidad:</label>
            <input type="text" className='form-control' ref={this.cajaLocalidadRef} required/>
            <button className='btn btn-info' onClick={this.insertDepartamento}>
            Insertar Departamento </button>
        </form>
        <h2>{this.state.mensaje}</h2>
        </div>
    )
  }
}
