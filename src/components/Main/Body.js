import React from 'react';

import {
    Title,
    BlockTitle,
    BlockWrapper,
    InsideBlock
} from '../StyledComponents/_Body';

const Wrapper = ({ children }) => {
    return(
        <BlockWrapper>
            <BlockTitle>
                <Title>Regulation energy trading hours</Title>
            </BlockTitle>
            <InsideBlock>
                { children }
            </InsideBlock>
        </BlockWrapper>
    )
}

export default Wrapper;