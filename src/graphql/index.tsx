import {
  ApolloClient,
  ApolloProvider,
  HttpLink,
  InMemoryCache,
} from '@apollo/client';

import { envConfig } from '../config';
import { ReactNode } from 'react';

const INDEXER_URL = envConfig.indexerUrl;
if (!INDEXER_URL) {
  throw new Error('ENVIO URL MISSING');
}

const httpLink = new HttpLink({ uri: INDEXER_URL });

export const apolloClient = new ApolloClient({
  connectToDevTools: true,
  link: httpLink,
  cache: new InMemoryCache(),
  defaultOptions: {
    watchQuery: {
      fetchPolicy: 'cache-and-network',
    },
  },
});

export default function GraphqlProviders({
  children,
}: {
  children: ReactNode;
}) {
  return <ApolloProvider client={apolloClient}>{children}</ApolloProvider>;
}
