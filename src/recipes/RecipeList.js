import React, {Component} from 'react';
import Recipe from './Recipe';
import Arrow from './Arrow';
import Modal from '../popups/Modal';
import leftArrow from '../assets/leftarrow.png';
import rightArrow from '../assets/rightarrow.png';
import APIURL from '../helpers/environment';
import styled from '../../node_modules/styled-components';

const GridDiv = styled.div`
    display: grid;
    grid-template-columns: 4fr 30fr 30fr 30fr 4fr 3fr;
    border: 0.5vh solid white;
    height: 30vh;
`;
const AddButton = styled.button`
    background: none;
    color: white;
    font-size: 72px;
    border-left: 2px solid white;
    border-top: none;
    border-right: none;
    border-bottom: none;
    transition: all 0.5s;

    &:hover{
        background: rgba(255, 255, 255, 0.2);
}
`;

class RecipeList extends Component {
    constructor(props){
        super(props)
        this.state = {
            recipeList: [],
            leftIndex: '',
            modalOpen: false
        }
    }

    openModal = () =>{
        this.setState({modalOpen: true})
    }

    closeModal = () =>{
        this.setState({modalOpen: false})
    }

    getMeals = () => {
        fetch(`${APIURL}/recipes/recipe/${this.props.mealType}`, {
            method: 'GET',
            headers: ({
            'Content-Type':'application/json',
            'Authorization': this.props.token
            })
        }).then((response) => {
            return response.json()
        })
        .then((meals) => {
            this.setState({recipeList: meals, leftIndex: 0})
        })
    }

    iterateLeft = () => {
        let lIndex = this.state.leftIndex
        if (lIndex > 0){
            this.setState({leftIndex: lIndex - 1})
        }
    }

    iterateRight = () => {
        let lIndex = this.state.leftIndex
        if (lIndex < this.state.recipeList.length - 3){
            this.setState({leftIndex: lIndex + 1})
        }
    }

    deleteMeal = (mealId) => {
        fetch(`${APIURL}/recipes/recipe/${mealId}`, {
            method: 'DELETE',
            headers: ({
            'Content-Type':'application/json',
            'Authorization': this.props.token
            })
        }).then(response => {
            this.getMeals()
        })
    }

    displayRecipes = () => {
        let recipes = this.state.recipeList
        let index = this.state.leftIndex
        let color1 = this.props.bgColor1
        let color2 = this.props.bgColor2
        let color3 = this.props.bgColor3
        if (this.state.recipeList.length > 2){
            return (
                <GridDiv style={{background: `linear-gradient(to bottom,${color1}, ${color2}, ${color2}, ${color2}, ${color2}, ${color3})`}}>
                    <Arrow arrowImg={leftArrow} arrowReact={this.iterateLeft} style={{gridColumn: '1'}}/>
                    <Recipe mealName={recipes[index].name} mealPic={recipes[index].picUrl} mealDesc={recipes[index].description} mealNum={recipes[index].id} deleteMeal={this.deleteMeal} token={this.props.token} mealType={this.props.mealType} getMeals={this.getMeals} style={{gridColumn: '2'}}/>
                    <Recipe mealName={recipes[index + 1].name} mealPic={recipes[index + 1].picUrl} mealDesc={recipes[index + 1].description} mealNum={recipes[index+1].id} deleteMeal={this.deleteMeal} token={this.props.token} mealType={this.props.mealType} getMeals={this.getMeals} style={{gridColumn: '3'}}/>
                    <Recipe mealName={recipes[index + 2].name} mealPic={recipes[index + 2].picUrl} mealDesc={recipes[index + 2].description} mealNum={recipes[index+2].id} deleteMeal={this.deleteMeal} token={this.props.token} mealType={this.props.mealType}getMeals={this.getMeals} style={{gridColumn: '4'}}/>
                    <Arrow arrowImg={rightArrow} arrowReact={this.iterateRight} style={{gridColumn: '5'}}/>
                    <AddButton onClick={() => this.openModal()} style={{gridColumn: '6'}}>+</AddButton>
                    <Modal isOpen={this.state.modalOpen} closeModal={this.closeModal} token={this.props.token} mealType={this.props.mealType} getMeals={this.getMeals} modalType="C"/>
                </GridDiv>
            )
        }
        else if (this.state.recipeList.length > 1){
            return(
                <GridDiv style={{background: `linear-gradient(to bottom,${color1}, ${color2}, ${color2}, ${color2}, ${color2}, ${color3})`}}>
                    <div style={{gridColumn: '1'}}></div>
                    <Recipe mealName={recipes[index].name} mealPic={recipes[index].picUrl} mealDesc={recipes[index].description} mealNum={recipes[index].id} deleteMeal={this.deleteMeal} token={this.props.token} mealType={this.props.mealType} style={{gridColumn: '2'}}/>
                    <Recipe mealName={recipes[index + 1].name} mealPic={recipes[index + 1].picUrl} mealDesc={recipes[index + 1].description} mealNum={recipes[index+1].id} deleteMeal={this.deleteMeal} token={this.props.token} mealType={this.props.mealType} style={{gridColumn: '3'}}/>
                    <div style={{gridColumn: '4'}}></div>
                    <div style={{gridColumn: '5'}}></div>
                    <AddButton onClick={() => this.openModal()} style={{gridColumn: '6'}}>+</AddButton>
                    <Modal isOpen={this.state.modalOpen} closeModal={this.closeModal} token={this.props.token} mealType={this.props.mealType} getMeals={this.getMeals} modalType="C"/>
                </GridDiv>
            )
        }
        else if (this.state.recipeList.length > 0){
            return(
                <GridDiv style={{background: `linear-gradient(to bottom,${color1}, ${color2}, ${color2}, ${color2}, ${color2}, ${color3})`}}>
                    <div style={{gridColumn: '1'}}></div>
                    <Recipe mealName={recipes[index].name} mealPic={recipes[index].picUrl} mealDesc={recipes[index].description} mealNum={recipes[index].id} deleteMeal={this.deleteMeal} token={this.props.token} mealType={this.props.mealType} style={{gridColumn: '2'}}/>
                    <div style={{gridColumn: '3'}}></div>
                    <div style={{gridColumn: '4'}}></div>
                    <div style={{gridColumn: '5'}}></div>
                    <AddButton onClick={() => this.openModal()} style={{gridColumn: '6'}}>+</AddButton>
                    <Modal isOpen={this.state.modalOpen} closeModal={this.closeModal} token={this.props.token} mealType={this.props.mealType} getMeals={this.getMeals} modalType="C"/>
                </GridDiv>
            )
        }
        else {
            return(
                <GridDiv style={{background: `linear-gradient(to bottom,${color1}, ${color2}, ${color2}, ${color2}, ${color2}, ${color3})`}}>
                    <div style={{gridColumn: '1'}}></div>
                    <div style={{gridColumn: '2'}}></div>
                    <div style={{gridColumn: '3'}}></div>
                    <div style={{gridColumn: '4'}}></div>
                    <div style={{gridColumn: '5'}}></div>
                    <AddButton onClick={() => this.openModal()} style={{gridColumn: '6'}}>+</AddButton>
                    <Modal isOpen={this.state.modalOpen} closeModal={this.closeModal} token={this.props.token} mealType={this.props.mealType} getMeals={this.getMeals} modalType="C"/>
                </GridDiv>
            )
        }
    }

    componentDidMount(){
        this.getMeals()
    }

    render(){
        return(
            <div>
                {this.state.leftIndex === '' ? <p>''</p>: this.displayRecipes()}
            </div>
        )
    }
}

export default RecipeList;