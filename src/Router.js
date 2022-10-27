import React, { Component } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import Departamentos from './components/Departamentos';
import MenuDepartamentos from './components/MenuDepartamentos';
import CreateDepartamento from './components/CreateDepartamento';
import DetallesDepartamento from './components/DetallesDepartamento';
import DeleteDepartamento from './components/DeleteDepartamento';
import UpdateDepartamento from './components/UpdateDepartamento';
import EmpleadosDepartamento from './components/EmpleadosDepartamento';
import EmpleadoDetalles from './components/EmpleadoDetalles';
export default class Router extends Component {
    render() {
        function DetallesDepartamentoElement() {
            var { num, nom, loc } = useParams();
            return (<DetallesDepartamento iddepartamento={num} nombre={nom} localidad={loc} />)
        }
        function DeleteDepartamentoElement() {
            var { id } = useParams();
            return (<DeleteDepartamento id={id} />);
        }
        function UpdateDepartamentoElement() {
            var { iddepartamento } = useParams();
            return (<UpdateDepartamento id={iddepartamento} />);
        }
        function MostrarEmpleadosElement() {
            var {idempleado} = useParams();
            return (<EmpleadosDepartamento id={idempleado}/>)
        }
        function DetallesEmpleadoElements(){
            var {apellido,oficio,salario,id} = useParams();
            return(<EmpleadoDetalles apellido={apellido} oficio={oficio} salario={salario} id={id}/>)
        }
        return (
            <BrowserRouter>
                <MenuDepartamentos />
                <Routes>
                    <Route path='/' element={<Departamentos />} />
                    <Route path='/create' element={<CreateDepartamento />} />
                    <Route path='/details/:num/:nom/:loc' element={<DetallesDepartamentoElement />} />
                    <Route path='/delete/:id' element={<DeleteDepartamentoElement />} />
                    <Route path='/update/:iddepartamento' element={<UpdateDepartamentoElement />} />
                    <Route path='/empleado/:idempleado' element={<MostrarEmpleadosElement/>}/>
                    <Route path='/empleadodetalles/:apellido/:oficio/:salario/:id' element ={<DetallesEmpleadoElements/>}/>
                </Routes>
            </BrowserRouter>
        )
    }
}
