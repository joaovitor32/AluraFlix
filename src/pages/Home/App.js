import React, { useEffect, useState } from 'react';

import BannerMain from '../../components/BannerMain';
import Carrousel from '../../components/Carousel';
import categoriasRepository from '../../repositories/categorias';
import PageDefault from '../../components/PageDefault';

function App() {
  const [dadosIniciais, setDadosIniciais] = useState({
    categorias: [],
  });

  useEffect(() => {
    categoriasRepository.getAllWithVideos()
      // eslint-disable-next-line no-console
      .then((response) => {
        setDadosIniciais(response);
      })
      .catch((err) => {
        // eslint-disable-next-line no-console
        console.log(err.message);
      });
  }, []);

  return (
    <PageDefault>

      {dadosIniciais.length === 0 && <div>Loading</div>}

      {dadosIniciais.length >= 1 && dadosIniciais.map((categoria, indice) => {
        if (indice === 0) {
          return (
            <div key={categoria.id}>
              <BannerMain
                videoTitle={dadosIniciais[0].videos[0].titulo}
                url={dadosIniciais[0].videos[0].url}
                videoDescription="O que é Front-end? Trabalhando na área os termos HTML, CSS e JavaScript fazem parte da rotina das desenvolvedoras e desenvolvedores. Mas o que eles fazem, afinal? Descubra com a Vanessa!"
              />
              <Carrousel
                key={categoria.id}
                category={categoria}
              />
            </div>
          );
        }
        return (
          <Carrousel
            key={categoria.id}
            category={categoria}
          />
        );
      })}

    </PageDefault>
  );
}

export default App;
