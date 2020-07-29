import React, { useState } from 'react';
import PageDefault from '../../../components/PageDefault';

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
                <div>
                    <label>
                        Nome da Categoria:
                    <input type="text"
                            name="nome"
                            value={values.nome}
                            onChange={handleChange}
                        />
                    </label>
                </div>
                <div>
                    <label>
                        Descrição da Categoria:
                        <textarea
                            name="descricao"
                            value={values.descricao}
                            onChange={handleChange}
                        ></textarea>
                    </label>
                </div>
                <div>
                    <label>
                        Nome da Cor:
                    <input type="color"
                            name="cor"
                            value={values.cor}
                            onChange={handleChange}
                        />
                    </label>
                </div>
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