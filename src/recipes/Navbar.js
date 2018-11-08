import React, {Component} from 'react';
import styled, { keyframes } from '../../node_modules/styled-components';

const Header = styled.header`
    height: 6vh;
`;

const SpanOne = styled.span`
    animation: BLetter 5s infinite;
    font-family: 'Vampiro One', cursive;
    font-size: 48px;
    margin: 0 0 0 10px;

    @keyframes BLetter {
        0% {background: -webkit-linear-gradient(#eee, #99D564, #99D564, #99D564, #99D564, #99D564);-webkit-background-clip: text;-webkit-text-fill-color: transparent;}
        1% {background: -webkit-linear-gradient( #99D564,#eee, #99D564, #99D564, #99D564, #99D564);-webkit-background-clip: text;-webkit-text-fill-color: transparent;}
        2% {background: -webkit-linear-gradient( #99D564, #99D564,#eee, #99D564, #99D564, #99D564);-webkit-background-clip: text;-webkit-text-fill-color: transparent;}
        3% {background: -webkit-linear-gradient( #99D564, #99D564, #99D564,#eee, #99D564, #99D564);-webkit-background-clip: text;-webkit-text-fill-color: transparent;}
        4% {background: -webkit-linear-gradient( #99D564, #99D564, #99D564, #99D564,#eee, #99D564);-webkit-background-clip: text;-webkit-text-fill-color: transparent;}
        5% {background: -webkit-linear-gradient( #99D564, #99D564, #99D564, #99D564,#99D564,#eee );-webkit-background-clip: text;-webkit-text-fill-color: transparent;}
        6% {background: -webkit-linear-gradient( #99D564, #99D564, #99D564, #99D564,#eee, #99D564);-webkit-background-clip: text;-webkit-text-fill-color: transparent;}
        7% {background: -webkit-linear-gradient( #99D564, #99D564, #99D564,#eee, #99D564, #99D564);-webkit-background-clip: text;-webkit-text-fill-color: transparent;}
        8% {background: -webkit-linear-gradient( #99D564, #99D564,#eee, #99D564, #99D564, #99D564);-webkit-background-clip: text;-webkit-text-fill-color: transparent;}
        9% {background: -webkit-linear-gradient( #99D564,#eee, #99D564, #99D564, #99D564, #99D564);-webkit-background-clip: text;-webkit-text-fill-color: transparent;}
        10% {background: -webkit-linear-gradient(#eee, #99D564, #99D564, #99D564, #99D564, #99D564);-webkit-background-clip: text;-webkit-text-fill-color: transparent;}
        100% {background: -webkit-linear-gradient(#eee, #99D564, #99D564, #99D564, #99D564, #99D564);-webkit-background-clip: text;-webkit-text-fill-color: transparent;}
    }
`;

const SpanTwo = styled.span`
    animation: LLetter 5s infinite;
    font-family: 'Vampiro One', cursive;
    font-size: 48px;

    @keyframes LLetter {
        0% {background: -webkit-linear-gradient(#eee, #EEB76F, #EEB76F, #EEB76F, #EEB76F, #EEB76F);-webkit-background-clip: text;-webkit-text-fill-color: transparent;}
        20% {background: -webkit-linear-gradient(#eee, #EEB76F, #EEB76F, #EEB76F, #EEB76F, #EEB76F);-webkit-background-clip: text;-webkit-text-fill-color: transparent;}
        21% {background: -webkit-linear-gradient( #EEB76F,#eee, #EEB76F, #EEB76F, #EEB76F, #EEB76F);-webkit-background-clip: text;-webkit-text-fill-color: transparent;}
        22% {background: -webkit-linear-gradient( #EEB76F, #EEB76F,#eee, #EEB76F, #EEB76F, #EEB76F);-webkit-background-clip: text;-webkit-text-fill-color: transparent;}
        23% {background: -webkit-linear-gradient( #EEB76F, #EEB76F, #EEB76F,#eee, #EEB76F, #EEB76F);-webkit-background-clip: text;-webkit-text-fill-color: transparent;}
        24% {background: -webkit-linear-gradient( #EEB76F, #EEB76F, #EEB76F, #EEB76F,#eee, #EEB76F);-webkit-background-clip: text;-webkit-text-fill-color: transparent;}
        25% {background: -webkit-linear-gradient( #EEB76F, #EEB76F, #EEB76F, #EEB76F,#EEB76F,#eee );-webkit-background-clip: text;-webkit-text-fill-color: transparent;}
        26% {background: -webkit-linear-gradient( #EEB76F, #EEB76F, #EEB76F, #EEB76F,#eee, #EEB76F);-webkit-background-clip: text;-webkit-text-fill-color: transparent;}
        27% {background: -webkit-linear-gradient( #EEB76F, #EEB76F, #EEB76F,#eee, #EEB76F, #EEB76F);-webkit-background-clip: text;-webkit-text-fill-color: transparent;}
        28% {background: -webkit-linear-gradient( #EEB76F, #EEB76F,#eee, #EEB76F, #EEB76F, #EEB76F);-webkit-background-clip: text;-webkit-text-fill-color: transparent;}
        29% {background: -webkit-linear-gradient( #EEB76F,#eee, #EEB76F, #EEB76F, #EEB76F, #EEB76F);-webkit-background-clip: text;-webkit-text-fill-color: transparent;}
        30% {background: -webkit-linear-gradient(#eee, #EEB76F, #EEB76F, #EEB76F, #EEB76F, #EEB76F);-webkit-background-clip: text;-webkit-text-fill-color: transparent;}
        100% {background: -webkit-linear-gradient(#eee, #EEB76F, #EEB76F, #EEB76F, #EEB76F, #EEB76F);-webkit-background-clip: text;-webkit-text-fill-color: transparent;}
    }
`;

const SpanThree = styled.span`
    animation: DLetter 5s infinite;
    font-family: 'Vampiro One', cursive;
    font-size: 48px;

    @keyframes DLetter {
        0% {background: -webkit-linear-gradient(#eee, #7453A2, #7453A2, #7453A2, #7453A2, #7453A2);-webkit-background-clip: text;-webkit-text-fill-color: transparent;}
        40% {background: -webkit-linear-gradient(#eee, #7453A2, #7453A2, #7453A2, #7453A2, #7453A2);-webkit-background-clip: text;-webkit-text-fill-color: transparent;}
        41% {background: -webkit-linear-gradient( #7453A2,#eee, #7453A2, #7453A2, #7453A2, #7453A2);-webkit-background-clip: text;-webkit-text-fill-color: transparent;}
        42% {background: -webkit-linear-gradient( #7453A2, #7453A2,#eee, #7453A2, #7453A2, #7453A2);-webkit-background-clip: text;-webkit-text-fill-color: transparent;}
        43% {background: -webkit-linear-gradient( #7453A2, #7453A2, #7453A2,#eee, #7453A2, #7453A2);-webkit-background-clip: text;-webkit-text-fill-color: transparent;}
        44% {background: -webkit-linear-gradient( #7453A2, #7453A2, #7453A2, #7453A2,#eee, #7453A2);-webkit-background-clip: text;-webkit-text-fill-color: transparent;}
        45% {background: -webkit-linear-gradient( #7453A2, #7453A2, #7453A2, #7453A2,#7453A2,#eee );-webkit-background-clip: text;-webkit-text-fill-color: transparent;}
        46% {background: -webkit-linear-gradient( #7453A2, #7453A2, #7453A2, #7453A2,#eee, #7453A2);-webkit-background-clip: text;-webkit-text-fill-color: transparent;}
        47% {background: -webkit-linear-gradient( #7453A2, #7453A2, #7453A2,#eee, #7453A2, #7453A2);-webkit-background-clip: text;-webkit-text-fill-color: transparent;}
        48% {background: -webkit-linear-gradient( #7453A2, #7453A2,#eee, #7453A2, #7453A2, #7453A2);-webkit-background-clip: text;-webkit-text-fill-color: transparent;}
        49% {background: -webkit-linear-gradient( #7453A2,#eee, #7453A2, #7453A2, #7453A2, #7453A2);-webkit-background-clip: text;-webkit-text-fill-color: transparent;}
        50% {background: -webkit-linear-gradient(#eee, #7453A2, #7453A2, #7453A2, #7453A2, #7453A2);-webkit-background-clip: text;-webkit-text-fill-color: transparent;}
        100% {background: -webkit-linear-gradient(#eee, #7453A2, #7453A2, #7453A2, #7453A2, #7453A2);-webkit-background-clip: text;-webkit-text-fill-color: transparent;}
    }
`;

const Button = styled.button`
    float: right;
    margin: 0.75em 0.75em 0 0;
    background: none;
    border-radius: 2px;
    color: #7453A2;
    font-size: 18px;
    border: 2px solid #7453A2;
    transition: all 0.5s;

    &:hover{
        color: #99D564;
        border-color: #99D564;
    }
`;

class NavBar extends Component {
    constructor(props){
        super(props)
        this.state = {
            loColor: 'white'
        }
    }

    loColorOn = () => {
        this.setState({loColor: '#99D564'})
    }

    loColorOff = () => {
        this.setState({loColor: 'white'})
    }

    render(){
        return (
            <Header>
                <SpanOne>B</SpanOne>
                <SpanTwo>L</SpanTwo>
                <SpanThree>D</SpanThree>
                <Button onClick={() => this.props.logOut()} onMouseOver={this.loColorOn} onMouseLeave={this.loColorOff}>Logout <span style={{color: this.state.loColor, transition: 'all 0.5s'}}>{String.fromCharCode(0x262E)}</span></Button>
            </Header>
        )
    }
}

export default NavBar;