import React from 'react';
import NavBar from './Navbar';
import RecipeList from './RecipeList';
import styled from '../../node_modules/styled-components';

const MainDiv = styled.div`
    height: 100vh;
    grid-template-rows: 7fr 31fr 31fr 31fr;
`;

const MainView = (props) => {
    return(
        <MainDiv>
            <NavBar logOut={props.logOut} style={{gridrow: '1'}}/>
            <RecipeList mealType="B" token={props.token} bgColor1={'#c1e5a0'} bgColor2={'#99d564'} bgColor3={'#72ba32'} style={{gridrow: '2'}}/>
            <RecipeList mealType="L" token={props.token} bgColor1={'#f6d9b3'} bgColor2={'#eeb76f'} bgColor3={'#e6952b'} style={{gridrow: '3'}}/>
            <RecipeList mealType="D" token={props.token} bgColor1={'#9c82bf'} bgColor2={'#7453a2'} bgColor3={'#50396f'} style={{gridrow: '4'}}/>
        </MainDiv>
    )
}

export default MainView;
