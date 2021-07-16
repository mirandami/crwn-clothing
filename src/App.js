import './App.css';
import HomePage from "./pages/homepage/homepage.component";
import {Switch, Route} from 'react-router-dom';

const HatsPage = () => (
    <div>
        <h1>HATS PAGE</h1>
    </div>
);

function App() {
  return (
    <div>
        <Switch>
            <Route exact path ='/' component={HomePage}/>
            {/*extact 表明当path刚好为local：3000的时候运行homepage，如果没有exact只要path带有local 3000就会运行homepage*/}
            <Route path='/hats' component={HatsPage}></Route>
        </Switch>
        {/*switch的作用：当有switch就相当于有了exact，这个时候就不再需要exact，当有一个match以后其他在包含这个信息的也不可以符合*/}
    </div>
  );
}

export default App;
