import React, { useState, useEffect } from 'react';
import PageDefault from '../../../components/PageDefault';

import FormField from '../../../components/FormField';
import Button from '../../../components/Button';


const CadastroCategoria = () => {
  const valoresIniciais = {
    nome: '',
    descricao: '',
    cor: '#000',
  };

  const [categorias, setCategorias] = useState([]);
  const [values, setValues] = useState(valoresIniciais);

  const setValue = (chave, valor) => {
    setValues({
      ...values,
      [chave]: valor,
    });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValue(
      name,
      value,
    );
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setCategorias(
      [
        ...categorias,
        values,
      ],
    );
    setValues(valoresIniciais);
  };

  useEffect(() => {
    const URL = 'http://localhost:8080/categorias';
    fetch(URL).then(async (response) => {
      const res = await response.json();
      setCategorias([
        ...res,
      ]);
    });
  }, []);

  return (
    <PageDefault>
      <h1>
        Página de cadastro de categoria:
        {values.nome}
      </h1>
      <form onSubmit={handleSubmit}>

        <FormField
          label="Nome da categoria "
          value={values.nome}
          type="text"
          name="nome"
          onChange={handleChange}
        />

        <FormField
          type="text"
          label="Descrição"
          name="descricao"
          value={values.descricao}
          onChange={handleChange}
        />

        <FormField
          label="Cor "
          value={values.cor}
          type="color"
          name="cor"
          onChange={handleChange}
        />
        <Button>
          Cadastrar
        </Button>
      </form>
      <ul>
        {
          categorias.length === 0 && (
          <div>
            Loading...
          </div>
          )
        }
        {categorias.map((categoria, indice) => (
          // eslint-disable-next-line react/no-array-index-key
          <li key={`${categoria.nome}${indice}`}>
            {categoria.nome}
          </li>
        ))}
      </ul>
    </PageDefault>
  );
};
export default CadastroCategoria;
