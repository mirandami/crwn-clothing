import React from 'react';
import {Switch, Route} from 'react-router-dom';

import './App.css';

import HomePage from "./pages/homepage/homepage.component";
import ShopPage from "./pages/shop/shop.component";
import Header from "./components/header/header.component";
import SignInAndSignUpPage from "./pages/sign-in-and-sign-up/sign-in-and-sign-up.component";
import {auth} from "./components/firebase/firebase.utils"; //we want to store the user login email and password in app because we want to pass it to components later



// const HatsPage = () => (
//     <div>
//         <h1>HATS PAGE</h1>
//     </div>
// );
 class App extends React.Component {
    constructor() {
        super();

        this.state = {
            currentUser: null,
        }
    }

    unsubscribeFromAuth = null;

    componentDidMount(){
        this.unsubscribeFromAuth = auth.onAuthStateChanged(user => {     //parameter is user state
            this.setState({currentUser:user});

            console.log(user)
        })
    }

    componentWillUnmount() {
        this.unsubscribeFromAuth();
    }


     render() {
        return (
            <div>
                <Header currentUser = {this.state.currentUser}></Header>
                <Switch>
                    <Route exact path ='/' component={HomePage}/>
                    {/*extact 表明当path刚好为local：3000的时候运行homepage，如果没有exact只要path带有local 3000就会运行homepage*/}
                    <Route path='/shop' component={ShopPage}></Route>
                    <Route path='/signin' component={SignInAndSignUpPage}></Route>
                </Switch>
                {/*switch的作用：当有switch就相当于有了exact，这个时候就不再需要exact，当有一个match以后其他在包含这个信息的也不可以符合*/}
            </div>
        );
    }
}

export default App;
