import { globalStyles } from "../src/commons/styles/globalStyles";
import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";
import { Global } from "@emotion/react";

export default function MyApp({ Component, pageProps }: any) {
  const client = new ApolloClient({
    uri: "https://backendonline.codebootcamp.co.kr/graphql",
    cache: new InMemoryCache(),
  });

  return (
    <ApolloProvider client={client}>
      <Global styles={globalStyles} />
      <Component {...pageProps} />
    </ApolloProvider>
  );
}
