import { Prisma } from 'prisma-binding';
import { fragmentReplacements } from './resolvers/index';

const prisma = new Prisma({
  typeDefs: './src/generated/prisma.graphql',   // path to the generated file, .graphqlconfig
  endpoint: process.env.PRISMA_ENDPOINT,
  secret: "cju02yv7faa2f0890ebmk64mi",
  fragmentReplacements
})

// prisma.query primsa.mutation prisma.subscription prisma.exists

// prisma.query.users(null, '{id name posts { id title }}').then((data)=> {
//   console.log(data);
// })

// prisma.query.comments(null, '{id text post { title }}').then((data)=> {
//   console.log(data);
// })

// prisma.mutation.createPost({
//   data: {
//     title: "Life, Universe and Everything",
//     body: "a great book of a cosmic scale",
//     published: false,
//     author: {
//       connect: {
//         id: "cju02hu7c001u089051ido8w1"
//       }
//     }
//   }
// }, '{ id title body published}')
// .then ((data)=> {
//   console.log(data);
//   return prisma.query.users(null, '{id name posts { id title }}')
// }).then(data=> {
//   console.log(JSON.stringify(data, undefined, 2))
// })
// .catch((err) => {
//   console.log(err);
// })

// const createPostUser = async ( authorId, data ) => {
//   const userExists = await prisma.exists.User({id: authorId});
//   if (!userExists) {
//     throw new Error('User is not found')
//   }
//   const post = await prisma.mutation.createPost({
//     data: {
//       ...data,
//       author: {
//         connect: {
//           id: authorId
//         }
//       }
//     }
//   }, '{id}');
//   const user = await prisma.query.user({
//     where: {
//       id: authorId
//     }
//   }, '{id name email posts { id title published }}')
//   return user;
// }

// createPostUser('cju02hu7c001u089051ido8w1', {
//   title: "Thanks for all the fish",
//   body: "a great book of a cosmic scale",
//   published: true,
//   author: {
//     connect: {
//       id: "cju02hu7c001u089051ido8w1"
//     }
//   }
// }).then(data => {
//   console.log(data)
// }).catch (err => {
//   console.log(err);
// });

// prisma.exists.Comment({
//   id: "cju035dft002k0890kmslyllk"
// }).then(exists => {
//   console.log(exists);
// })

export { prisma as default }
