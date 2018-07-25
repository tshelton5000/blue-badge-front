import React, {Component} from 'react';
import styled from '../../node_modules/styled-components';
import APIURL from '../helpers/environment';

const Background = styled.div`
    background: linear-gradient(to bottom left,#99D564, #EEB76F, #7453A2);
    width: 100vw;
    height: 100vh;
`;
const LoginDiv = styled.div`
    position: absolute;
    top: 40%;
    left: 50%;
    transform: translate(-50%, -50%);
    padding: 0.5em 1.5em 1em 1.5em;
    background-color: white;
    text-align: center;
    font-size: 24px;
    font-family: 'Oxygen', sans-serif;
    color: #7453A2;
    border-radius: 10px;
    border: 2px solid #7453A2;
`;
const Input = styled.input`
    font-size: 18px;
    font-family: 'Oxygen', sans-serif;
    border-radius: 5px;
`;
const Button = styled.button`
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
const Title = styled.h1`
    font-size: 30px;
    font-family: 'Oxygen', sans-serif;
    color: #7453A2;
`;

class Login extends Component {
    constructor(){
        super();
        this.state = {
            username: '',
            password: '',
            siColor: 'white',
            suColor: 'white'
        }
    }

    updateValue = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    login = (event) => {
        event.preventDefault();
        fetch(`${APIURL}/recipes/login`, {
            method: 'POST',
            body: JSON.stringify({
            user: {
                username: this.state.username,
                password: this.state.password}
            }),
            headers: {
            'Content-Type': 'application/json'
            }})
            .then(response => response.json())
            .then(data => {
            this.props.setToken(data.sessionToken)
        })
    }

    siColorOn = () => {
        this.setState({siColor: '#99D564'})
    }

    siColorOff = () => {
        this.setState({siColor: 'white'})
    }

    suColorOn = () => {
        this.setState({suColor: '#99D564'})
    }

    suColorOff = () => {
        this.setState({suColor: 'white'})
    }

    render(){
        return(
            <Background>
                <svg viewBox= "0, 0, 1920, 900" xmlns="http://www.w3.org/2000/svg">
                    <title>HouseOutline</title>
                    <g>
                    <title>Layer 1</title>
                    <line stroke="white" id="svg_1" y2="818.66667" x2="1400" y1="818.66667" x1="-2.33337" stroke-width="6" fill="none"/>
                    <line id="svg_2" y2="657.2452" x2="1397.33333" y1="818.66667" x1="1397.33333" stroke-width="6" stroke="white" fill="none"/>
                    <line id="svg_3" y2="658.6226" x2="1589.33326" y1="820.04407" x1="1589.33326" stroke-width="6" stroke="white" fill="none"/>
                    <line stroke="white" id="svg_6" y2="558.75846" x2="1495.90821" y1="689.33333" x1="1365.33335" stroke-linecap="null" stroke-linejoin="null" stroke-dasharray="null" stroke-width="6" fill="none"/>
                    <line stroke="white" id="svg_7" y2="556.79796" x2="1495" y1="686.66666" x1="1620.00001" stroke-linecap="null" stroke-linejoin="null" stroke-dasharray="null" stroke-width="6" fill="none"/>
                    <line stroke="white" id="svg_9" y2="817.33333" x2="1925.37704" y1="817.33333" x1="1587" stroke-linecap="null" stroke-linejoin="null" stroke-dasharray="null" stroke-width="6" fill="none"/>
                    <path fill="none" stroke-width="6" d="m1884.55579,155.59228l-52.87894,18.80564l0,-37.6104l52.87894,18.80477l0,-0.00001zm-38.38957,-92.66015l-24.08698,50.69362l-26.59355,-26.59441l50.68053,-24.09921zm-92.64793,-38.37699l18.80477,52.87902l-37.61041,0l18.80565,-52.87902l-0.00001,0zm-92.66076,38.37699l50.69335,24.09921l-26.59406,26.59441l-24.0993,-50.69362l0.00001,0zm-38.37698,92.66015l52.87911,-18.80477l0,37.6104l-52.87911,-18.80564l0,0.00001zm38.37698,92.6488l24.0993,-50.6814l26.59406,26.59442l-50.69335,24.08698l-0.00001,0zm92.66076,38.38867l-18.80565,-52.87893l37.61041,0l-18.80477,52.87893l0.00001,0zm92.64793,-38.38867l-50.68053,-24.08698l26.59355,-26.59442l24.08698,50.6814zm-158.16694,-92.6488l0,0c0,-36.18495 29.33407,-65.51874 65.51901,-65.51874c36.18494,0 65.51874,29.3338 65.51874,65.51874c0,36.18494 -29.3338,65.51872 -65.51874,65.51872c-36.18494,0 -65.51901,-29.33379 -65.51901,-65.51872z" id="svg_4" stroke="white"/>
                    <path fill="none" stroke="white" stroke-width="6" stroke-dasharray="null" stroke-linejoin="null" stroke-linecap="null" d="m397.20142,118.44304c-38.90279,0 -72.29468,20.17458 -88.63943,49.29944c-6.52801,-3.64447 -13.72839,-5.8512 -21.41289,-5.8512c-23.23819,0 -42.57567,18.69411 -48.55248,44.07073c-10.20165,-4.0323 -22.06335,-6.47367 -34.7337,-6.47367c-38.01109,0 -68.84494,20.79721 -68.84494,46.43611c0,23.14345 25.28784,42.1695 58.1385,45.68913c-1.47233,2.49807 -2.61438,4.97185 -2.61438,7.59411c0,24.54786 67.25397,44.56867 150.13924,44.56867c82.88526,0 150.13932,-20.02082 150.13924,-44.56867c0,-1.65167 -1.02515,-3.12564 -1.61841,-4.73076c3.63039,0.90282 7.22499,1.86741 11.20443,1.86741c22.17306,0.00007 40.21142,-15.06599 40.21142,-33.61327c0,-18.54729 -18.03835,-33.61326 -40.21142,-33.61326c-2.71726,0 -5.02777,0.93857 -7.59411,1.36944c2.24401,-7.41614 3.7348,-14.98332 3.7348,-23.03131c0,-49.09569 -44.44099,-89.01288 -99.34584,-89.01288l-0.00003,-0.00003l0,0.00001z" id="svg_8"/>
                    </g>
                </svg>
                <LoginDiv>
                    <Title>Login</Title>
                    <form onSubmit={this.login}>
                        <label htmlFor="username">Username</label>
                        <Input type="text" name="username" minLength="5" placeholder="enter username" onChange={this.updateValue} style={{color: '#7453A2'}}/>
                        <br/>
                        <br/>
                        <label htmlFor="password">Password</label>
                        <Input type="password" name="password" minLength="5" placeholder="enter password" onChange={this.updateValue} style={{color: '#7453A2'}}/>
                        <br/>
                        <br/>
                        <Button style={{float: 'left'}} onClick={this.props.setScreen} onMouseOver={this.siColorOn} onMouseLeave={this.siColorOff}>To Signup <span style={{color: this.state.siColor, transition: 'all 0.5s'}}>{String.fromCharCode(0x21BB)}</span></Button>
                        <Button style={{float: 'right'}} type="submit" onMouseOver={this.suColorOn} onMouseLeave={this.suColorOff}>Submit <span style={{color: this.state.suColor, transition: 'all 0.5s'}}>{String.fromCharCode(0x21C0)}</span></Button>
                    </form>
                </LoginDiv>
            </Background>
        )
    }
}

export default Login;