import React, {Component} from 'react';
import Signup from './Signup';
import Login from './Login';

class Auth extends Component {
    constructor(props){
        super(props);
        this.state = {
            loginScreen: false
        }
    }

    setScreen = () => {
        this.setState({loginScreen: !this.state.loginScreen})
    }

    displayScreen = () => {
        if(this.state.loginScreen){
            return(
                <Login setToken={this.props.setToken} setScreen={this.setScreen}/>
            )
        }
        else {
            return(
                <Signup setToken={this.props.setToken} setScreen={this.setScreen}/>
            )
        }
    }

    render(){
        return(
            <div>
                {this.displayScreen()}
            </div>
        )
    }
}

export default Auth;