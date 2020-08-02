import React, { useState, useEffect } from 'react';
import PageDefault from '../../../components/PageDefault';

import FormField from '../../../components/FormField';
import Button from '../../../components/Button';

import useForm from '../../../components/hooks/useForm';

const CadastroCategoria = () => {
  const valoresIniciais = {
    titulo: '',
    descricao: '',
    cor: '#000',
  };

  const { values, handleChange, clearForm } = useForm(valoresIniciais);

  const [categorias, setCategorias] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setCategorias(
      [
        ...categorias,
        values,
      ],
    );
    clearForm(valoresIniciais);
  };

  useEffect(() => {

  }, []);

  return (
    <PageDefault padding={0}>
      <h1>
        Página de cadastro de categoria:
        {values.nome}
      </h1>
      <form onSubmit={handleSubmit}>

        <FormField
          label="Nome da categoria "
          value={values.titulo}
          type="text"
          name="titulo"
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
          <li key={`${categoria.titulo}${indice}`}>
            {categoria.titulo}
          </li>
        ))}
      </ul>
    </PageDefault>
  );
};
export default CadastroCategoria;
