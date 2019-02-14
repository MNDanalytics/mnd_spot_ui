import React from 'react';
import logo from '../../assets/MND.cz.svg';

import {
    Title, 
    BlockTitle,
    Logo,
    BlockImg,
    BlockUp
} from '../StyledComponents/_Header';

const Header = () => (
    <BlockUp>
        <BlockImg>
            <Logo src={logo}/>
        </BlockImg>
        <BlockTitle>
            <Title>RegEn App</Title>
        </BlockTitle>
    </BlockUp>
)

export default Header;