import React, {useState} from 'react';
import './style.css';
import logoImg from '../../assets/logo.svg';
import {Link, useHistory} from 'react-router-dom';
import {FiArrowLeft} from 'react-icons/fi';

import api from '../../services/api';

export default function NewIncident() {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [value, setValue] = useState('');
    
    const history = useHistory();

    const ongID = localStorage.getItem('ongID');

    async function handleNewIncident(e) {
        e.preventDefault();

        const data = {
            title,
            description,
            value,
        };
        try {
            await api.post('incidents', data , {
                headers: {
                    Authorization: ongID,
                }
            })

            history.push('/profile');
        }   catch (err) {
            alert('Erro ao cadastras caso.')
        }
    }
    return (
        <div className= "new-incident-container">
        <div className= "content">
            <section>
                <img src={logoImg} alt="Be The Hero"/>
                <h1>Cadastrar novo caso</h1>
                <p>Descreva o caso detalhadamente para encontrar um herói para resolver isso.</p>

                <Link className="back-link "to="/profile">
                    <FiArrowLeft size={16} color="#e02041"/>
                    Voltar para home
                </Link>
            </section>
            <form onSubmit={handleNewIncident}>

                <input 
                 placeholder ="Titulo do caso"
                 value={title}
                 onChange={e => setTitle(e.target.value)}
                />
                <textarea 
                 placeholder="Descrição"
                 value={description}
                 onChange={e => setDescription(e.target.value)}

                />
                <input 
                 placeholder ="Valor em reais"
                 value={value}
                 onChange={e => setValue(e.target.value)}
                />

                <button onClick={handleNewIncident} className="button" type="submit">Cadatrar</button>
            </form>
        </div>
    </div>);
}