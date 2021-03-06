// import '@babel/polyfill/noConflict';         // babel production runtime extra goodies.
// import { GraphQLServer, PubSub } from 'graphql-yoga';
// import db from './db';
// import { resolvers, fragmentReplacements } from './resolvers/index';
// import prisma from './prisma';

// // Scalr types = String, Boolean, Int, Float, ID

// const pubsub = new PubSub();

// // context has db object, and tehy are availabe on all method inside the resolver through context parameter.
// // We use { db } to decompose parameter
// const servers = new GraphQLServer({
//   typeDefs: './src/schema.graphql',
//   resolvers,
//   context(request) {
//     return {
//       db,       // database access
//       pubsub,   // event driven, subscription
//       prisma,   // access to prisma 
//       request   // request object
//     }
//   },
//   fragmentReplacements
// });

import '@babel/polyfill/noConflict';         // babel production runtime extra goodies.
import server from './server';

// process.env.PORT - set by heroku
server.start({ port: process.env.PORT || 4000 }, () => {
  console.log('the server is up.')
})
