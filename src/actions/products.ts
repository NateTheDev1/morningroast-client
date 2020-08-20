import { ApolloClient, InMemoryCache, gql } from "@apollo/client";
import { LOADING, FETCH_PRODUCTS_FAIL, FETCH_PRODUCTS_OK } from "./types";

const client = new ApolloClient({
  uri: "https://coorderapi.herokuapp.com/graphql",
  cache: new InMemoryCache(),
});

export const fetchProducts = () => (dispatch: any) => {
  dispatch({ type: LOADING, payload: true });
  client
    .query({
      query: gql`
        query getProducts {
          products {
            id
            title
            image
            price
            nutrition {
              calories
              fat
              cholesterol
              protein
              caffeine
            }
          }
        }
      `,
    })
    .then((res) => {
      dispatch({ type: FETCH_PRODUCTS_OK, payload: res.data.products });
    })
    .catch((err) => {
      console.error(err);
      dispatch({
        type: FETCH_PRODUCTS_FAIL,
        payload: {},
        error: "Failed to load Products :(",
      });
    });
};
