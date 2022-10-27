import axios from 'axios';
import React, { Component } from 'react'
import Global from '../Global';
import { NavLink } from 'react-router-dom';
export default class EmpleadosDepartamento extends Component {
    state = {
        empleados: [],
        status: false
    }
    loadEmpleados = () => {
        var num = this.props.id;
        var request = "api/Empleados/EmpleadosDepartamento/";
        var url = Global.urlEmpleados + request + num;
        axios.get(url).then(res => {
            this.setState({
                empleados: res.data,
                status: true
            })
        })
    }
    componentDidMount = () => {
        this.loadEmpleados();
    }
    componentDidUpdate = (oldProps) => {
        if (oldProps.id != this.props.id) {
            this.loadEmpleados();
        }

    }
    render() {
        return (
            <div>
                <h1>Detalles</h1>
                <table className='table table-striped'>
                    <thead>
                        <tr>
                        <th>Apellido</th>
                        <th>Oficio</th>
                        <th>Salario</th>
                        <th>Departamento</th>
                        </tr>
                    </thead>
                    <tbody >
                        {   this.state.status == true &&
                            this.state.empleados.map((emp, index) => {
                                return (<tr key={emp.idEmpleado}>
                                    <td>{emp.apellido}</td>
                                    <td>{emp.oficio}</td>
                                    <td>{emp.salario}</td>
                                    <td>{emp.departamento}</td>
                                    <td><NavLink className="btn btn-light" to={"/empleadodetalles/" + emp.apellido + "/" + emp.oficio + "/" + emp.salario + "/"+emp.departamento}>Detalles</NavLink></td>
                                </tr>)
                            })
                        }
                    </tbody>
                </table>
                <NavLink className="btn btn-warning" to="/">Back to Detalles</NavLink>
            </div>
        )
    }
}
