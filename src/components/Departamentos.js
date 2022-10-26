import React, { Component } from 'react'
import axios from 'axios';
import Global from './../Global';
import loading from './../assets/images/ZupHq.gif'
import { NavLink } from 'react-router-dom';

export default class Departamentos extends Component {
    state = {
        departamentos: [],
        status: false
    }
    loadDepartamemtos = () => {
        var request = "/api/departamentos";
        var url = Global.urlDepartamentos + request;
        axios.get(url).then(response => {
            this.setState({
                departamentos: response.data,
                status: true
            });
        });
    }
    componentDidMount = () => {
        this.loadDepartamemtos();
    }
    render() {
        //esto es javascript
        if (this.state.status == false) {
            //loading
            return (
                <div>
                    <img src={loading} />
                </div>
            )
        } else {
            //pintamos nuestro load
            return (
                <div>
                    <h1>Departamentos</h1>
                    <table className='table table-bordered table-warning'>
                        <thead>
                            <tr>
                                <th>Número</th>
                                <th>Nombre</th>
                                <th>Localidad</th>
                                <th></th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                this.state.departamentos.map((departamento, index) => {
                                    return (<tr key={departamento.numero}>
                                        <td>{departamento.numero}</td>
                                        <td>{departamento.nombre}</td>
                                        <td>{departamento.localidad}</td>
                                        <td>
                                            <NavLink to={"/details/" + departamento.numero + "/" + departamento.nombre + "/" + departamento.localidad} className="btn btn-success">Details</NavLink>
                                            <NavLink to={"/delete/" + departamento.numero} className="btn btn-danger">Eliminar</NavLink>
                                            <NavLink to={"/update/" + departamento.numero} className="btn btn-warning">Modificar</NavLink>
                                        </td>
                                    </tr>)
                                })
                            }
                        </tbody>
                    </table>
                </div>
            )
        }
    }
}
