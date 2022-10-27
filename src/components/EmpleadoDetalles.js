import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
export default class EmpleadoDetalles extends Component {
  render() {
    return (
      <div>
        <h1>{this.props.apellido}</h1>
        <h1>{this.props.oficio}</h1>
        <h1>{this.props.salario}</h1>
        <NavLink className="btn btn-warning" to={"/empleado/" + this.props.id}>Back to Departamento</NavLink>
        </div>
    )
  }
}
