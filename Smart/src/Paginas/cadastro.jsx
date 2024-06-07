import { useState } from 'react';
import estilos from './Cadastro.module.css';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
 
const schemaCadastro = z.object({
  email: z.string()
    .min(5, 'Por favor, insira pelo menos 5 caracteres')
    .max(100, "Por favor, insira até 100 caracteres"),
  username: z.string()
    .min(5, 'Por favor, insira pelo menos 5 caracteres')
    .max(100, "Por favor, insira até 100 caracteres"),
  password: z.string()
    .min(2, 'Por favor, insira pelo menos 6 caracteres')
    .max(100, "Por favor, insira até 100 caracteres")
});
 
export function Cadastro() {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm({
    resolver: zodResolver(schemaCadastro)
  });
 
  const [email, setEmail] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
 
  async function obterDadosFormulario(data) {
    try {
      const response = await axios.post('http://127.0.0.1:8000/api/create_user', data, {
        headers: {
          'Authorization': `Bearer ${localStorage.getItem('access_token')}`
        }
      });
 
      alert('Usuário cadastrado com sucesso!');
      navigate('/inicial'); // Redireciona para a página inicial após o cadastro
    } catch (error) {
      console.error('Erro no cadastro do usuário', error);
    }
  }
 
  return (
    <div className={estilos.container}>
        <h1 className={estilos.titulo}>Cadastro</h1>
      <form
        className={estilos.form}
        onSubmit={handleSubmit(obterDadosFormulario)}
      >
        
 
        <div >
          <input className={estilos.formGroup}
            placeholder='E-mail'
            {...register('email')}
            value={email}
            onChange={e => setEmail(e.target.value)}
          />
          {errors.email && (
            <p className={estilos.messageErro}>{errors.email.message}</p>
          )}
        </div>
 
        <div >
          <input className={estilos.formGroup}
            placeholder='usuario'
            {...register('username')}
            value={username}
            onChange={e => setUsername(e.target.value)}
          />
          {errors.username && (
            <p className={estilos.messageErro}>{errors.username.message}</p>
          )}
        </div>
 
        <div >
          <input className={estilos.formGroup}
            placeholder='senha'
            {...register('password')}
            type="password"
            value={password}
            onChange={e => setPassword(e.target.value)}
          />
          {errors.password && (
            <p className={estilos.messageErro}>{errors.password.message}</p>
          )}
        </div>
 
        <button className={estilos.button} type="submit">Entrar</button>
 
       
      </form>
    </div>
  );
}
 