import React, { Component, useContext } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { SignIn, Slack } from './';
import { UserContext } from '../providers/UserProvider';

const PrivateRoute = (props) => {
  const { component: Component, isLoggedIn, ...others } = props;
  return (
    <Route
      {...others}
      render={(newProps) => {
        if (isLoggedIn) {
          return <Component {...newProps} />;
        }

        return (
          <Redirect
            to={{
              pathname: '/login',
              state: {
                from: props.location,
              },
            }}
          />
        );
      }}
    />
  );
};

function Home() {
  return <div>Home</div>;
}
function Contact() {
  return <div>Contact Us</div>;
}

function App() {
    const auth = useContext(UserContext);
    const loggedin = auth.user ? true : false;

    return (
      <div>
        <Switch>
          <Route exact path="/login" component={SignIn} />
          <Route exact path="/signup" component={SignIn} />
          <PrivateRoute
            exact
            path="/"
            component={Slack}
            isLoggedIn={loggedin}
          />
        </Switch>
      </div>
    );
  }


export default App;
