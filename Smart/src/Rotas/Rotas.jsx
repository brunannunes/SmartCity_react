import React from 'react';
import {Routes, Route} from 'react-router-dom'
import { Login } from '../Paginas/Login';
import { Sensor } from '../Paginas/Sensor';
import { Inicial } from '../Paginas/Inicial';
import { CadastrarSensor } from '../Paginas/CadastrarSensor';
import { Localizacao } from '../Paginas/Localizacao';
import { Filtro } from '../Paginas/Filtro'; 
import { Cadastro } from '../Paginas/cadastro';
import { AlterarSensor } from '../Paginas/AlterarSensor';

 export function Rotas() {
    return (
        <Routes>

        <Route path='/' element={ <Login /> } />
        <Route path='cadastro' element={<Cadastro/>} />

        <Route path='inicial' element={ <Inicial /> } >
            <Route index element={ <Sensor /> } />
            <Route path='cadsensor' element={ <CadastrarSensor /> } />
            <Route path='localizacao' element={ <Localizacao /> } />
            <Route path='filtro' element={<Filtro />} /> 
            <Route path='altSensor' element={<AlterarSensor/>} />
            
        </Route>

    </Routes>
)
}


