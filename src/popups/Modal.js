import React, {Component} from 'react';
import styled from 'styled-components';

const ModalDiv = styled.div`
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    color: white;
    text-align: center;
    background-color: rgba(0, 0, 0, 0.65);
    font-family: 'Oxygen', sans-serif;
    padding: 1em;
    border-radius: 10px;
`;
const ModalButton = styled.button`
    background: none;
    border-radius: 2px;
    color: white;
    font-size: 18px;
    border: 2px solid white;
    transition: all 0.5s;
    margin: 2px;
    vertical-align: bottom;
    horizontal-align: middle;

    &:hover{
        background: rgba(255, 255, 255, 0.2);
    }
`;

class Modal extends Component {
    constructor(props){
        super(props)
        this.state = {
            recipeName: '',
            description: '',
            picUrl: '',
            instructions: '',
        }
    }

    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    mealUpdate = () => {
        fetch(`http://localhost:3000/recipes/recipe/${this.props.indexNum}`, {
            method: 'PUT',
            body: JSON.stringify({
            recipe:{
            name: this.state.recipeName,
            description: this.state.description,
            meal: this.props.mealType,
            picUrl: this.state.picUrl,
            instructions: this.state.instructions,
            }
        }),
        headers: ({
            'Content-Type': 'application/json',
            'Authorization': this.props.token
        })
        }) .then((response) => response.json())
        .then(updateMeal => {
            console.log(updateMeal)
            this.props.getMeals()
        })
    }

    newMeal = () => {
        fetch('http://localhost:3000/recipes/recipe/new', {
            method: 'POST',
            body: JSON.stringify({
            recipe: {
                name: this.state.recipeName,
                description: this.state.description,
                meal: this.props.mealType,
                picUrl: this.state.picUrl,
                instructions: this.state.instructions,
            }
            }),
            headers: ({
            'Content-Type': 'application/json',
            'Authorization': this.props.token
            })
        }).then((response) => response.json())
        .then((newMeal) => {
            console.log(newMeal)
            this.props.getMeals()
        })
    }

    editButton = () => {
        if(this.props.modalType === 'U'){
            return(                
                <ModalButton onClick={this.mealUpdate}>Save</ModalButton>
            )
        }
        else if (this.props.modalType === 'C'){
            return(
                <ModalButton onClick={this.newMeal}>Save</ModalButton>
            )
        }
    }

    render(){
        if (this.props.isOpen){
            return(
                <ModalDiv>
                    <label for="recipeName">Name:</label>
                    <input type="text" name="recipeName" value={this.state.name} onChange={this.handleChange} placeholder="Enter Recipe Name"/>
                    <br/>
                    <br/>
                    <label for="description">Description:</label>
                    <input type="text" name="description" value={this.state.name} onChange={this.handleChange} placeholder="Enter Description"/>
                    <br/>
                    <br/>
                    <label for="picUrl">Picture Url:</label>
                    <input type="text" name="picUrl" value={this.state.name} onChange={this.handleChange} placeholder="Enter Pic Url"/>
                    <br/>
                    <br/>
                    <label for="instructions">Instructions:</label>
                    <input type="text" name="instructions" value={this.state.name} onChange={this.handleChange} placeholder="Enter Instructions"/>
                    <br/>
                    <br/>
                    {this.editButton()}
                    <ModalButton onClick={() => this.props.closeModal()}>Close</ModalButton>
                </ModalDiv>
            )
        }
        else {
            return(
                null
            )
        }
    }
}

export default Modal;