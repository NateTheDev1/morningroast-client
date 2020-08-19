import { ApolloClient, InMemoryCache } from "@apollo/client";

const client = new ApolloClient({
  uri: "https://coorderapi.herokuapp.com/graphql",
  cache: new InMemoryCache(),
});
