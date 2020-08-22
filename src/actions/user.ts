import { ApolloClient, InMemoryCache, gql } from "@apollo/client";
import { LOGIN_USER_OK, LOGIN_USER_FAIL } from "./types";

type Credentials = {
  username: String;
  password: String;
};

//

const client = new ApolloClient({
  uri: "https://coorderapi.herokuapp.com/graphql",
  cache: new InMemoryCache(),
});

export const loginUser = (credentials: Credentials) => (dispatch: any) => {
  client
    .mutate({
      variables: {
        username: credentials.username,
        password: credentials.password,
      },
      mutation: gql`
        mutation Login($username: String!, $password: String!) {
          login(username: $username, password: $password) {
            id
            username
            token
            orders {
              id
              order_info
              total
              date
            }
          }
        }
      `,
    })
    .then((res) => {
      console.log(res.data.login);
      dispatch({ type: LOGIN_USER_OK, payload: res.data.login });
    })
    .catch((err) => {
      console.log(err);
      dispatch({ type: LOGIN_USER_FAIL, error: "Unable To Login User" });
    });
};
