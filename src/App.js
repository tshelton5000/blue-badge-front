import React, { Component } from 'react';
import Auth from './auth/Auth';
import MainView from './recipes/MainView';

class App extends Component {
  constructor(){
    super();
    this.state = {
      sessionToken: ''
    }
  }

  logOut = () => {
    this.setState({sessionToken: ''})
  }

  setToken = (token) => {
    this.setState({sessionToken: token})
  }

  setView = () => {
    return(
      this.state.sessionToken ? <MainView token={this.state.sessionToken} logOut={this.logOut}/> : <Auth setToken={this.setToken}/>
    )
  }

  render() {
    return (
      <div>
        {this.setView()}
      </div>
    );
  }
}

export default App;

// loginTest = () => {
//   fetch('http://localhost:3000/recipes/login', {
//     method: 'POST',
//     body: JSON.stringify({
//       user: {
//         username: 'bilbo',
//         password: 'fraggins'}
//     }),
//     headers: {
//       'Content-Type': 'application/json'
//     }})
//     .then(response => response.json())
//     .then(data => {
//       console.log(data)
//       this.setState({
//         sessionToken: data.sessionToken,
//         userid: data.user.id
//       })
//     })
// }

// newUserTest = () => {
//   fetch('http://localhost:3000/recipes/user', {
//     method: 'POST',
//     body: JSON.stringify({
//       user: {
//         username: 'newuser',
//         password: 'newpassword'
//       }
//     }),
//     headers: ({
//       'Content-Type': 'application/json'
//     })
//   }).then((response) => response.json())
//   .then((data) => {
//     console.log(data)
//     this.setState({sessionToken: data.sessionToken})
//   })
// }

// getMealsTest = () => {
//   fetch('http://localhost:3000/recipes/recipe/B', {
//     method: 'GET',
//     headers: ({
//       'Content-Type':'application/json',
//       'Authorization': this.state.sessionToken
//     })
//   }).then((response) => response.json())
//   .then((meals) => {
//     console.log(meals)
//   })
// }

// newMealTest = () => {
//   fetch('http://localhost:3000/recipes/recipe/new', {
//     method: 'POST',
//     body: JSON.stringify({
//       recipe: {
//         name: 'samplemeal',
//         description: 'thisisasamplemeal',
//         meal: 'B',
//         picUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQcsZt3DjIwXeh-1VCWOBoaLL2l4qgo9ROgyzRdfPlzhhFLPB63',
//         instructions: 'get the food in yo mouth',
//         userid: '1'
//       }
//     }),
//     headers: ({
//       'Content-Type': 'application/json',
//       'Authorization': this.state.sessionToken
//     })
//   }).then((response) => response.json())
//   .then((mealData) => {
//     console.log(mealData)
//   })
// }

// mealUpdateTest = () => {
//   fetch('http://localhost:3000/recipes/recipe/16', {
//     method: 'PUT',
//     body: JSON.stringify({
//       recipe:{
//       name: 'name of a new sample meal',
//       description: 'sample meal 2.0',
//       meal: 'B',
//       picUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQcsZt3DjIwXeh-1VCWOBoaLL2l4qgo9ROgyzRdfPlzhhFLPB63',
//       instructions: 'food -> eat it',
//       userid: '1'
//       }
//     }),
//     headers: ({
//       'Content-Type': 'application/json',
//       'Authorization': this.state.sessionToken
//     })
//   }) .then((response) => response.json())
//   .then(newMealData => console.log(newMealData))
// }

// deleteMealTest = () => {
//   fetch('http://localhost:3000/recipes/recipe/18', {
//     method: 'DELETE',
//     headers: ({
//       'Content-Type':'application/json',
//       'Authorization': this.state.sessionToken
//     })
//   }).then((response) => {
//     if(response.status == 200){
//       console.log('way to go!')
//     }
//   })
// }

// componentDidMount(){
//   this.loginTest();
// }

// componentDidUpdate(){
//   // this.getMealsTest();
//     // this.newMealTest();
//   // this.mealUpdateTest();
//   this.deleteMealTest();
// }