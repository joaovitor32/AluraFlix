import React, { useState, useEffect } from 'react';
import { Link, useHistory } from 'react-router-dom';
import PageDefault from '../../../components/PageDefault';
import FormField from '../../../components/FormField';

import useForm from '../../../components/hooks/useForm';
import Button from '../../../components/Button';
import VideosRepository from '../../../repositories/videos';
import CategoriasRepository from '../../../repositories/categorias';

const CadastroVideo = () => {
  const { handleChange, values } = useForm({
    titulo: '',
    url: '',
    categoria: '',
  });
  const [categorias, setCategorias] = useState([]);
  const history = useHistory();

  useEffect(() => {
    CategoriasRepository.getAll().then((response) => {
      setCategorias(response);
    });
  }, []);

  const handleSubmit = (event) => {
    event.preventDefault();
    const categoriaSelecionada = categorias.find(categoria => categoria.titulo === values.categoria);
    VideosRepository.createVideo({
      titulo: values.titulo,
      url: values.url,
      categoriaId: categoriaSelecionada,
    }).then(() => {
      history.push('/');
    });
  };

  return (
    <PageDefault>
      <h1>Página de cadastro de vídeo</h1>
      <form onSubmit={handleSubmit}>
        <FormField
          label="Título do vídeo "
          value={values.titulo}
          type="text"
          name="titulo"
          onChange={handleChange}
        />
        <FormField
          label="URL do vídeo "
          value={values.url}
          type="text"
          name="url"
          onChange={handleChange}
        />
        <FormField
          label="Categoria do vídeo "
          value={values.categoria}
          type="text"
          name="categoria"
          onChange={handleChange}
        />
        <Button type="submit">
          Cadastrar
        </Button>
      </form>
      <Link to="/cadastro/categoria">
        Cadastrar Categoria
      </Link>
    </PageDefault>
  );
};
export default CadastroVideo;
