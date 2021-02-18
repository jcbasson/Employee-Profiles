import React from "react";
import ReactDOM from "react-dom";
import ApolloClient from "apollo-boost";
import { ApolloProvider } from "@apollo/react-hooks";
import { App } from "./components";
import { Provider } from "react-redux";
import { InMemoryCache } from "apollo-cache-inmemory";
import store from "./store";
import "./index.css";

const client = new ApolloClient({
  uri: "http://localhost:4000/graphql",
  onError: errors => {
    /*TODO: Do logging of different error types*/
    console.log(errors);
  },
  cache: new InMemoryCache({
    dataIdFromObject: (object: any) => object.id
  })
});

const Root = () => {
  return (
    <ApolloProvider client={client}>
      <Provider store={store}>
        <App />
      </Provider>
    </ApolloProvider>
  );
};
ReactDOM.render(<Root />, document.getElementById("root"));
