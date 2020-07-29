import React, { useState } from 'react';
import PageDefault from '../../../components/PageDefault';

import FormField from '../../../components/FormField'

import { Link } from 'react-router-dom'

const CadastroCategoria = () => {

    const valoresIniciais={
        nome:'',
        descricao:'',
        cor:"#000"
    }

    const [categorias,setCategorias]=useState([]);
    const [values, setValues] = useState(valoresIniciais);

    const setValue=(chave,valor)=>{
        setValues({
            ...values,
            [chave]:valor,
        })
    }

    const handleChange = (e) => {
        const {name,value}=e.target;
        setValue(
            name,
            value
        )
      
    }

    const handleSubmit=(e)=>{
        e.preventDefault();
        setCategorias(
            [
                ...categorias,
                values
            ]
        )
        setValues(valoresIniciais);
    }
    
    return (
        <PageDefault>
            <h1>Página de cadastro de categoria: {values.nome} </h1>
            <form onSubmit={handleSubmit}>
                
                <FormField 
                    label="Nome da categoria: "
                    value={values.nome}
                    type="text"
                    name="nome"
                    onChange={handleChange}
                />
                
                <FormField
                    type="text"
                    label="Descrição da Categoria:"
                    value={values.descricao}
                    onChange={handleChange}
                />
              
                <FormField 
                    label='Nome da cor: '
                    value={values.cor}
                    type="color"
                    name="cor"
                    onChange={handleChange}
                />
                <button>
                    Cadastrar
                </button>
            </form>
           <ul>
                {categorias.map((categoria, indice) => {
                    return (
                        <li key={`${categoria.nome}${indice}`}>
                            {categoria.nome}
                        </li>
                    )
                })}
            </ul>
        </PageDefault>
    )
}
export default CadastroCategoria;