import React from 'react';

import Menu from  '../Menu/index'
import Footer from '../Footer/index.js';

import styled from 'styled-components';

const Main=styled.main`
    background-color:var(--black);
    color:var(--white);
    flex:1;
    padding-top:50px;
    paddin-left:5%;
    paddin-right:5%;
`;

const PageDefault=({children})=>{
    return (
        <>
            <Menu/>
                <Main>
                    {children}
                </Main>
            <Footer/>
        </>
    )
};

export default PageDefault;