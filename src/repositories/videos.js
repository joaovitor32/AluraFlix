import configs from '../config/index';

const URL_VIDEOS = `${configs.URL_BACK}/videos`;

const createVideo = objetoDoVideo => fetch(`${URL_VIDEOS}?_embed=videos`, {
  method: 'POST',
  headers: {
    'Content-type': 'application/json',
  },
  body: JSON.stringify(objetoDoVideo),

}).then(async (response) => {
  const resposta = await response.json();

  if (response.ok) {
    return resposta;
  }
  throw new Error('Não foi possível cadastrar o vídeo: (');
});

export default {
  createVideo,
};
