import { Admin, Resource } from 'react-admin';
import buildGraphQLProvider from 'ra-data-graphql';
import { ApolloClient, InMemoryCache, gql } from '@apollo/client';
import { useEffect } from 'react';

import { Layout } from './layout';

const client = new ApolloClient({
  uri: 'http://localhost:3000/graphql',
  cache: new InMemoryCache()
});

console.log({client})
// get stuff
// client
//   .query({
//     query: gql`
//       query {
//       getWarehouses{
//         warehouses{
//           id
//           name
//           zone{
//             id
//           }
//         }
//       }
//     }
//     `
//   })
//   .then(result => console.log(result));

function App() {

  return (
    <Admin 
      title="" 
      dataProvider={ buildGraphQLProvider({ client }) }
      layout={Layout}
    >
      <Resource name="customers" />
    </Admin>
  );
}

export default App;
