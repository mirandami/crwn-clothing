import React from 'react';
import {Switch, Route, Redirect} from 'react-router-dom';
import {connect} from "react-redux";
import {createStructuredSelector} from "reselect";

import './App.css';

import HomePage from "./pages/homepage/homepage.component";
import ShopPage from "./pages/shop/shop.component";
import Header from "./components/header/header.component";
import SignInAndSignUpPage from "./pages/sign-in-and-sign-up/sign-in-and-sign-up.component";
import CheckoutPage from "./pages/checkout/checkout.component";
import {auth, createUserProfileDocument} from "./components/firebase/firebase.utils"; //we want to store the user login email and password in app because we want to pass it to components later
import {setCurrentUser} from "./redux/user/user.action";
import {selectCurrentUser} from "./redux/user/user.selectors";


// const HatsPage = () => (
//     <div>
//         <h1>HATS PAGE</h1>
//     </div>
// );
 class App extends React.Component {


    unsubscribeFromAuth = null;

    componentDidMount(){
        const {setCurrentUser} = this.props;


        this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {     //parameter is user state
            if (userAuth) {   //we check if a user is actually sign in
                const userRef = await createUserProfileDocument(userAuth); //we need to use it to check if our database has updated the reference with any new data

                userRef.onSnapshot(snapshot => {
                    setCurrentUser({
                        currentUser:{
                            id: snapshot.id,
                                ...snapshot.data()
                        }
                    // },() => {
                        // console.log(this.state)
                    })

                });
            }
            //if the user off object comes back and it's null, go below
            else {
                setCurrentUser(userAuth)  //if there is no document we will create a new object
            }
        })
    }

    componentWillUnmount() {
        this.unsubscribeFromAuth();
    }


     render() {
        return (
            <div>
                <Header></Header>
                <Switch>
                    <Route exact path ='/' component={HomePage}/>
                    {/*extact 表明当path刚好为local：3000的时候运行homepage，如果没有exact只要path带有local 3000就会运行homepage*/}
                    <Route path='/shop' component={ShopPage}></Route>
                    <Route exact path='/checkout' component={CheckoutPage}></Route>
                    <Route
                        exact path='/signin' render={() => this.props.currentUser ? (
                        <Redirect to= '/'/>
                        ) : (
                            <SignInAndSignUpPage/>
                            )
                    }/>
                </Switch>
                {/*switch的作用：当有switch就相当于有了exact，这个时候就不再需要exact，当有一个match以后其他在包含这个信息的也不可以符合*/}
            </div>
        );
    }
}

const mapStateToProps = createStructuredSelector({
    currentUser: selectCurrentUser
});

const mapDispatchToProps = dispatch => ({
    setCurrentUser: user => dispatch(setCurrentUser(user))
});

export default connect(
    mapStateToProps,
    mapDispatchToProps)(App);
