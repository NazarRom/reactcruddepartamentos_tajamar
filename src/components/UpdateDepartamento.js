import React, { Component } from 'react'
import axios from 'axios';
import Global from '../Global';
import { Navigate } from 'react-router-dom';
export default class UpdateDepartamento extends Component {
    cajaNumeroRef = React.createRef();
    cajaNombreRef = React.createRef();
    cajaLocalidadref = React.createRef();
    state = {
        departamento: {},
        status: false,
        statusGet: false
    }
    buscarDepartamento = () => {
        var id = this.props.id;
        var request = "/api/departamentos/" + id;
        var url = Global.urlDepartamentos + request;
        axios.get(url).then(response => {
            this.setState({
                departamento: response.data,
                statusGet: true
            });
        });
    }
    updateDepartamento = (e) => {
        e.preventDefault();
        var num = parseInt(this.cajaNumeroRef.current.value);
        var nom = this.cajaNombreRef.current.value;
        var loc = this.cajaLocalidadref.current.value;
        var data = {
            numero: num,
            nombre: nom,
            localidad: loc
        };
        var request = "/api/departamentos";
        var url = Global.urlDepartamentos + request;
        axios.put(url, data).then(response => {
            this.setState({
                status: true
            });
        });
    }
    componentDidMount = () => {
        this.buscarDepartamento();
    }
    render() {
        return (
            <div>
                <h1> Update </h1>
                {
                    this.state.status == true &&
                    (<Navigate to="/" />)
                }
                {
                    this.state.statusGet == true &&
                    (<form>
                        <input type="hidden" defaultValue={this.state.departamento.numero} ref={this.cajaNumeroRef} />
                        <label>Nombre: </label>
                        <input type="text" className='form-control' defaultValue={this.state.departamento.nombre} ref={this.cajaNombreRef} />
                        <label>Localidad: </label>
                        <input type="text" className='form-control' defaultValue={this.state.departamento.localidad} ref={this.cajaLocalidadref} />
                        <button className='btn btn-info' onClick={this.updateDepartamento}>Modificar departamento</button>

                    </form>)
                }

            </div>
        )
    }
}
