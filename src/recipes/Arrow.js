import React from 'react';
import styled from '../../node_modules/styled-components';

const StyledDiv = styled.div`
    position: relative;
    height: 100%;
`;

const StyledImg = styled.img`
    position: absolute;
    top: 40%;
`;

const Arrow = (props) => {
    return(
        <StyledDiv>
            <StyledImg src={props.arrowImg} onClick={props.arrowReact} alt="arrow pic here"/>
        </StyledDiv>
    )
}

export default Arrow;