import React from 'react';

import {
    BlockWrapper,
    InsideBlock
} from '../StyledComponents/_Body';

const Wrapper = ({ children }) => {
    return(
        <BlockWrapper>
            <InsideBlock>
                { children }
            </InsideBlock>
        </BlockWrapper>
    )
}

export default Wrapper;