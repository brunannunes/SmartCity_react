import estilos from './Inicial.module.css'
<<<<<<< HEAD:Smart/src/Paginas/Inicial.jsx
import {Cabecalho} from '../Componentes/Cabecalho'
import {Lateral} from '../Componentes/Lateral'
=======
import {Cabecalho} from '../Components/Cabecalho'
import {Lateral} from '../Components/Lateral'

>>>>>>> 1f5fa159489b5f9310ef6c96d860a0e55cdfefd7:SmartCity/src/Paginas/Inicial.jsx
import { Outlet } from 'react-router-dom'



export function Inicial() {
  return (
    <div className={estilos.gridConteiner}>
      <Cabecalho />
      <Lateral />

      <Outlet/>

    </div>
  )
}
