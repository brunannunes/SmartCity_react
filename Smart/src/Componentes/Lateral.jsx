import estilos from './Lateral.module.css'
import { Link } from 'react-router-dom'


export function Lateral(){
    return(
        <aside className={estilos.conteiner}>
        <header>
            <img 
                className={estilos.imagemCabecalho}
                src='https://images.unsplash.com/photo-1619468129361-605ebea04b44?q=80&w=1171&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
            />

            <div className={estilos.perfil}>
                <img
                    className={estilos.avatar} 
                    src="https://avatars.githubusercontent.com/u/68129262?v=4"
                />
                <strong>Bruna</strong>
            </div>
        </header>
            <section>
                <Link 
                    className={estilos.botao}
                    to='/inicial'>
                    Lista Sensores
                </Link>

                <Link 

                    className={estilos.botao}
                    to='/inicial/cadsensor'
                >Cadastrar Sensor
                </Link>
                <Link 
                    className={estilos.botao}
                    to='/inicial/localizacao'
                >Mapa
                </Link>
                <Link 
                    className={estilos.botao}
                    to='/inicial/filtro'
                >Filtros
                </Link>
                <Link
                    className={estilos.botao}
                    to='/inicial/altSensor'
                    >Alterar sensor
                </Link>
            </section>
        </aside>
    )
}