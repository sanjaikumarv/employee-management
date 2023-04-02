import { ApolloClient, createHttpLink, InMemoryCache } from "@apollo/client";
import { setContext } from '@apollo/client/link/context';

const link = createHttpLink({
  uri: '/graphql',
  credentials: 'include',
});
const headerLink = setContext((_, { headers }) => {
  return {
    headers: {
      ...headers,
      'Access-Control-Allow-Origin': process.env.SCANDI_API,
      'Access-Control-Allow-Credentials': true
    }
  }
});

export const client = new ApolloClient({
  cache: new InMemoryCache(),
  link: headerLink.concat(link),
});

// export const client = new ApolloClient({
//   uri: "/graphql",
//   cache: new InMemoryCache({})
// });


export const serverClient = new ApolloClient({
  uri: process.env.SCANDI_API + '/graphql',
  cache: new InMemoryCache({})
});

export default client;
