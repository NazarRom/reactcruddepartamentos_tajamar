import React, { Component } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import Departamentos from './components/Departamentos';
import MenuDepartamentos from './components/MenuDepartamentos';
import CreateDepartamento from './components/CreateDepartamento';
import DetallesDepartamento from './components/DetallesDepartamento';
import DeleteDepartamento from './components/DeleteDepartamento';
import UpdateDepartamento from './components/UpdateDepartamento';
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
        return (
            <BrowserRouter>
                <MenuDepartamentos />
                <Routes>
                    <Route path='/' element={<Departamentos />} />
                    <Route path='/create' element={<CreateDepartamento />} />
                    <Route path='/details/:num/:nom/:loc' element={<DetallesDepartamentoElement />} />
                    <Route path='/delete/:id' element={<DeleteDepartamentoElement />} />
                    <Route path='/update/:iddepartamento' element={<UpdateDepartamentoElement />} />
                </Routes>
            </BrowserRouter>
        )
    }
}
