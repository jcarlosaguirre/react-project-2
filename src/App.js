import React from 'react';
import { Switch, Route, Link } from 'react-router-dom';

import './App.css';
import HomePage from './pages/homepage/homepage.component'

const HatsPage = () => (
    <div>
        <Link to='/hats/3'>Hats 3</Link>
        <h1>Hats page</h1>
    </div>
)

const HatsDetailPage = (props) => {

    let params = props.match.params

    return (
        <div>
            <h1>Hats page: { params.hatId }</h1>
        </div>
    );
}


function App() {
  return (
    <div className="App">
        <Link to='/hats'>Hats</Link>
        <Switch>
            <Route exact path='/' component={HomePage}/>
            <Route exact path='/hats' component={HatsPage}/>
            <Route path='/hats/:hatId' component={HatsDetailPage}/>
        </Switch>
    </div>
  );
}

export default App;
