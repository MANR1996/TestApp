import React from 'react';
import { LoadingBar as LoadingBarDiv } from './index.styles';

const LoadingBar = () => {
    return (
        <LoadingBarDiv data-testid='loading-bar-container'></LoadingBarDiv>
    );
}

export default LoadingBar;