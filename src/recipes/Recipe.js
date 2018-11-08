import React, {Component} from 'react';
import Modal from '../popups/Modal';
import styled from '../../node_modules/styled-components';

const RecipeDiv = styled.div`
    border-radius: 10px;
    border: 3px solid white;
    text-align: center;
    color: white;
    font-family: 'Oxygen', sans-serif;
    margin: 1em;
    padding: 0.2em;
    background: rgba(0, 0, 0, 0.2);
`;
const Button = styled.button`
    background: none;
    border-radius: 2px;
    color: white;
    font-size: 18px;
    border: 2px solid white;
    transition: all 0.5s;
    margin: 2px;
    vertical-align: bottom;

    &:hover{
        background: rgba(255, 255, 255, 0.2);
    }
`;

const Img = styled.img`
    height: 14vh;
    border-radius: 10px;
    border: 2px solid white;
`;
const H2 = styled.h2`
    margin: 0px;
`;
const Para = styled.p`
    margin: 0px;
    padding: 0px;
`;

class Recipe extends Component {
    constructor(props){
        super(props)
        this.state = {
            modalOpen: false
        }
    }

    openModal = () =>{
        this.setState({modalOpen: true})
    }

    closeModal = () =>{
        this.setState({modalOpen: false})
    }

    render(){
        return(
            <RecipeDiv>
                <Modal isOpen={this.state.modalOpen} closeModal={this.closeModal} indexNum={this.props.mealNum} token={this.props.token} mealType={this.props.mealType} getMeals={this.props.getMeals} modalType="U"/>
                <H2>{this.props.mealName}</H2>
                <Img src={this.props.mealPic} alt="food pic here"/>
                <Para>{this.props.mealDesc}</Para>
                <Button onClick={() => this.openModal()}>Update</Button>
                <Button onClick={() => this.props.deleteMeal(this.props.mealNum)}>Delete</Button>
            </RecipeDiv>
        )
    }
}

export default Recipe;