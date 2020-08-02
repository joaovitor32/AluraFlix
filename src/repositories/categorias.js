import configs from '../config/index';

const URL_CATEGORIES = `${configs.URL_BACK}/categorias`;

const getAllWithVideos = () => fetch(`${URL_CATEGORIES}?_embed=videos`).then(async (response) => {
  const resposta = await response.json();

  if (response.ok) {
    return resposta;
  }
  throw new Error('Não foi possível pegar os dados: (');
});

const getAll = () => fetch(URL_CATEGORIES).then(async (response) => {
  const resposta = await response.json();

  if (response.ok) {
    return resposta;
  }
  throw new Error('Não foi possível pegar os dados: (');
});

export default {
  getAll,
  getAllWithVideos,
};
