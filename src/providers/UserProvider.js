import React, { Component, createContext } from "react";
import { auth, createOrGetUserProfileDocument } from "../firebase";

const initialUserState = { user: null, loading: false };
export const UserContext = createContext(initialUserState);

export default class UserProvider extends Component {
  state = initialUserState;

  async componentDidMount() {
    auth.onAuthStateChanged(async (userAuth) => {
      console.log("UserProvider -> componentDidMount->userAuth", userAuth);

      if (userAuth) {
        const userRef = await createOrGetUserProfileDocument(userAuth);
             
        userRef.onSnapshot((snapshot) => {
          this.setState({
            user: { uid: snapshot.id, ...snapshot.data() },
          });
        });
      }
    });
  }

  render() {
    return (
      <UserContext.Provider value={this.state}>
        {this.props.children}
      </UserContext.Provider>
    );
  }
}
