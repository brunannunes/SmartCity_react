import estilos from './Cabecalho.module.css'
import {MapPin} from "@phosphor-icons/react";

export function Cabecalho(){
    return(
        <header className={estilos.conteiner}>
            <p>Localizar</p>
            <MapPin
                weight='duotone'
                size={32} 
                color='#dcdcdd'
            />
        </header>
    )
}