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
            loading: false,
          });
        });
      }
      this.setState({ user: userAuth, loading: false });
    });
  }

  render() {
    console.log(this.state.user);
    const { user, loading } = this.state;

    return (
      <UserContext.Provider value={{user,loading}}>
        {this.props.children}
      </UserContext.Provider>
    );
  }
}
