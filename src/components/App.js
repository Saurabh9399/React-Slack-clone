import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import { SignIn } from './';

function Home(){
  return(
    <div>Home</div>
  )
}
function Contact(){
  return(
    <div>Contact Us</div>
  )
}

class App extends Component {
  render() {
    return (
      <div>
        <Switch>
          <Route exact path="/" component={SignIn} />
          <Route exact path="/home" component={Home} />
          <Route exact path="/contact" component={Contact} />
        </Switch>
      </div>
    );
  }
}

export default App;
