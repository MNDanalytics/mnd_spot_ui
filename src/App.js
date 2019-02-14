import React from 'react';
import styled from 'styled-components';
import Header from './components/Header/Header';
import Content from './containers/Main/Content';

import './App.css';

const App = () => (
    <Application>
        <Header/>
        <Content/>
    </Application>
)

const Application = styled.div`
    width: 100%;
    height: 100%;
`;

export default App;