import estilos from './Inicial.module.css'
import {Cabecalho} from '../Components/Cabecalho'
import {Lateral} from '../Components/Lateral'

import { Outlet } from 'react-router-dom'

export function Inicial() {


  return (
    
    <div className={estilos.gridConteiner}>
      <Cabecalho/>
      <Lateral/>
      

      <Outlet/>
    </div>
  )
}


