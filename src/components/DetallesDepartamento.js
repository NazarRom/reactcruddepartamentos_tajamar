import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'

export default class DetallesDepartamento extends Component {
  render() {
    return (
      <div>
        <h1>Detalles Departamento</h1>
        <h2 style={{color:"blue"}}>{this.props.iddepartamento}</h2>
        <h2>{this.props.nombre}</h2>
        <h2>{this.props.localidad}</h2>
        <NavLink to="/" className="btn btn-warning">Back to list</NavLink>
        </div>
    )
  }
}
