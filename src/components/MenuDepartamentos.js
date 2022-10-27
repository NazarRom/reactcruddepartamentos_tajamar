import axios from 'axios';
import React, { Component } from 'react'
import { NavLink } from 'react-router-dom';
import Global from '../Global';
export default class MenuDepartamentos extends Component {
    state = {
        departamentos:[],
        status:false
    }
    loadDepartamentosMenu = () =>{
        var request = "/api/departamentos";
        var url = Global.urlDepartamentos + request;
        axios.get(url).then(res => {
            this.setState({
                departamentos: res.data,
                status:true
            })
        })
    }
    componentDidMount = () =>{
        this.loadDepartamentosMenu();
    }
    render() {
        return (
            <nav className="navbar navbar-expand-lg bg-light">
                <div className="container-fluid">
                    <a className="navbar-brand" href="#">CRUD</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <NavLink className="nav-link active" to="/">Home</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/create">Create</NavLink>
                            </li>
                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Departamentos
                                </a>
                                <ul className="dropdown-menu">
                                    {   this.state.status == true &&
                                        this.state.departamentos.map((dep,index)=>{
                                            return(<li key={dep.numero} className="dropdown-item"><NavLink to={"/empleado/" + dep.numero}>{dep.nombre}</NavLink></li>)
                                        })
                                    }
                                </ul>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link disabled">Disabled</a>
                            </li>
                        </ul>
                        
                    </div>
                </div>
            </nav>
            

        )
    }
}
