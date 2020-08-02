import React from 'react';

import styled, { css } from 'styled-components';
import Menu from '../Menu/index';
import Footer from '../Footer/index';


const Main = styled.main`
  background-color: var(--black);
  color: var(--white);
  flex: 1;
  padding-top: 50px;
  padding-left: 5%;
  padding-right: 5%;
  ${({ paddingAll }) => paddingAll && css`padding: ${paddingAll};`};
`;

// eslint-disable-next-line react/prop-types
const PageDefault = ({ children, paddingAll }) => (
  <>
    <Menu />
    <Main paddingAll={paddingAll}>
      {children}
    </Main>
    <Footer />
  </>
);

export default PageDefault;
