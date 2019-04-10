'use strict';Object.defineProperty(exports, "__esModule", { value: true });exports.default = undefined;var _prismaBinding = require('prisma-binding');
var _index = require('./resolvers/index');

var prisma = new _prismaBinding.Prisma({
  typeDefs: './src/generated/prisma.graphql', // path to the generated file, .graphqlconfig
  endpoint: process.env.PRISMA_ENDPOINT,
  secret: "cju02yv7faa2f0890ebmk64mi",
  fragmentReplacements: _index.fragmentReplacements });


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
exports.
default = prisma;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9wcmlzbWEuanMiXSwibmFtZXMiOlsicHJpc21hIiwiUHJpc21hIiwidHlwZURlZnMiLCJlbmRwb2ludCIsInByb2Nlc3MiLCJlbnYiLCJQUklTTUFfRU5EUE9JTlQiLCJzZWNyZXQiLCJmcmFnbWVudFJlcGxhY2VtZW50cyIsImRlZmF1bHQiXSwibWFwcGluZ3MiOiJ1R0FBQTtBQUNBOztBQUVBLElBQU1BLFNBQVMsSUFBSUMscUJBQUosQ0FBVztBQUN4QkMsWUFBVSxnQ0FEYyxFQUNzQjtBQUM5Q0MsWUFBVUMsUUFBUUMsR0FBUixDQUFZQyxlQUZFO0FBR3hCQyxVQUFRLDJCQUhnQjtBQUl4QkMsbURBSndCLEVBQVgsQ0FBZjs7O0FBT0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVtQkMsTyxHQUFWVCxNIiwiZmlsZSI6InByaXNtYS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFByaXNtYSB9IGZyb20gJ3ByaXNtYS1iaW5kaW5nJztcclxuaW1wb3J0IHsgZnJhZ21lbnRSZXBsYWNlbWVudHMgfSBmcm9tICcuL3Jlc29sdmVycy9pbmRleCc7XHJcblxyXG5jb25zdCBwcmlzbWEgPSBuZXcgUHJpc21hKHtcclxuICB0eXBlRGVmczogJy4vc3JjL2dlbmVyYXRlZC9wcmlzbWEuZ3JhcGhxbCcsICAgLy8gcGF0aCB0byB0aGUgZ2VuZXJhdGVkIGZpbGUsIC5ncmFwaHFsY29uZmlnXHJcbiAgZW5kcG9pbnQ6IHByb2Nlc3MuZW52LlBSSVNNQV9FTkRQT0lOVCxcclxuICBzZWNyZXQ6IFwiY2p1MDJ5djdmYWEyZjA4OTBlYm1rNjRtaVwiLFxyXG4gIGZyYWdtZW50UmVwbGFjZW1lbnRzXHJcbn0pXHJcblxyXG4vLyBwcmlzbWEucXVlcnkgcHJpbXNhLm11dGF0aW9uIHByaXNtYS5zdWJzY3JpcHRpb24gcHJpc21hLmV4aXN0c1xyXG5cclxuLy8gcHJpc21hLnF1ZXJ5LnVzZXJzKG51bGwsICd7aWQgbmFtZSBwb3N0cyB7IGlkIHRpdGxlIH19JykudGhlbigoZGF0YSk9PiB7XHJcbi8vICAgY29uc29sZS5sb2coZGF0YSk7XHJcbi8vIH0pXHJcblxyXG4vLyBwcmlzbWEucXVlcnkuY29tbWVudHMobnVsbCwgJ3tpZCB0ZXh0IHBvc3QgeyB0aXRsZSB9fScpLnRoZW4oKGRhdGEpPT4ge1xyXG4vLyAgIGNvbnNvbGUubG9nKGRhdGEpO1xyXG4vLyB9KVxyXG5cclxuLy8gcHJpc21hLm11dGF0aW9uLmNyZWF0ZVBvc3Qoe1xyXG4vLyAgIGRhdGE6IHtcclxuLy8gICAgIHRpdGxlOiBcIkxpZmUsIFVuaXZlcnNlIGFuZCBFdmVyeXRoaW5nXCIsXHJcbi8vICAgICBib2R5OiBcImEgZ3JlYXQgYm9vayBvZiBhIGNvc21pYyBzY2FsZVwiLFxyXG4vLyAgICAgcHVibGlzaGVkOiBmYWxzZSxcclxuLy8gICAgIGF1dGhvcjoge1xyXG4vLyAgICAgICBjb25uZWN0OiB7XHJcbi8vICAgICAgICAgaWQ6IFwiY2p1MDJodTdjMDAxdTA4OTA1MWlkbzh3MVwiXHJcbi8vICAgICAgIH1cclxuLy8gICAgIH1cclxuLy8gICB9XHJcbi8vIH0sICd7IGlkIHRpdGxlIGJvZHkgcHVibGlzaGVkfScpXHJcbi8vIC50aGVuICgoZGF0YSk9PiB7XHJcbi8vICAgY29uc29sZS5sb2coZGF0YSk7XHJcbi8vICAgcmV0dXJuIHByaXNtYS5xdWVyeS51c2VycyhudWxsLCAne2lkIG5hbWUgcG9zdHMgeyBpZCB0aXRsZSB9fScpXHJcbi8vIH0pLnRoZW4oZGF0YT0+IHtcclxuLy8gICBjb25zb2xlLmxvZyhKU09OLnN0cmluZ2lmeShkYXRhLCB1bmRlZmluZWQsIDIpKVxyXG4vLyB9KVxyXG4vLyAuY2F0Y2goKGVycikgPT4ge1xyXG4vLyAgIGNvbnNvbGUubG9nKGVycik7XHJcbi8vIH0pXHJcblxyXG4vLyBjb25zdCBjcmVhdGVQb3N0VXNlciA9IGFzeW5jICggYXV0aG9ySWQsIGRhdGEgKSA9PiB7XHJcbi8vICAgY29uc3QgdXNlckV4aXN0cyA9IGF3YWl0IHByaXNtYS5leGlzdHMuVXNlcih7aWQ6IGF1dGhvcklkfSk7XHJcbi8vICAgaWYgKCF1c2VyRXhpc3RzKSB7XHJcbi8vICAgICB0aHJvdyBuZXcgRXJyb3IoJ1VzZXIgaXMgbm90IGZvdW5kJylcclxuLy8gICB9XHJcbi8vICAgY29uc3QgcG9zdCA9IGF3YWl0IHByaXNtYS5tdXRhdGlvbi5jcmVhdGVQb3N0KHtcclxuLy8gICAgIGRhdGE6IHtcclxuLy8gICAgICAgLi4uZGF0YSxcclxuLy8gICAgICAgYXV0aG9yOiB7XHJcbi8vICAgICAgICAgY29ubmVjdDoge1xyXG4vLyAgICAgICAgICAgaWQ6IGF1dGhvcklkXHJcbi8vICAgICAgICAgfVxyXG4vLyAgICAgICB9XHJcbi8vICAgICB9XHJcbi8vICAgfSwgJ3tpZH0nKTtcclxuLy8gICBjb25zdCB1c2VyID0gYXdhaXQgcHJpc21hLnF1ZXJ5LnVzZXIoe1xyXG4vLyAgICAgd2hlcmU6IHtcclxuLy8gICAgICAgaWQ6IGF1dGhvcklkXHJcbi8vICAgICB9XHJcbi8vICAgfSwgJ3tpZCBuYW1lIGVtYWlsIHBvc3RzIHsgaWQgdGl0bGUgcHVibGlzaGVkIH19JylcclxuLy8gICByZXR1cm4gdXNlcjtcclxuLy8gfVxyXG5cclxuLy8gY3JlYXRlUG9zdFVzZXIoJ2NqdTAyaHU3YzAwMXUwODkwNTFpZG84dzEnLCB7XHJcbi8vICAgdGl0bGU6IFwiVGhhbmtzIGZvciBhbGwgdGhlIGZpc2hcIixcclxuLy8gICBib2R5OiBcImEgZ3JlYXQgYm9vayBvZiBhIGNvc21pYyBzY2FsZVwiLFxyXG4vLyAgIHB1Ymxpc2hlZDogdHJ1ZSxcclxuLy8gICBhdXRob3I6IHtcclxuLy8gICAgIGNvbm5lY3Q6IHtcclxuLy8gICAgICAgaWQ6IFwiY2p1MDJodTdjMDAxdTA4OTA1MWlkbzh3MVwiXHJcbi8vICAgICB9XHJcbi8vICAgfVxyXG4vLyB9KS50aGVuKGRhdGEgPT4ge1xyXG4vLyAgIGNvbnNvbGUubG9nKGRhdGEpXHJcbi8vIH0pLmNhdGNoIChlcnIgPT4ge1xyXG4vLyAgIGNvbnNvbGUubG9nKGVycik7XHJcbi8vIH0pO1xyXG5cclxuLy8gcHJpc21hLmV4aXN0cy5Db21tZW50KHtcclxuLy8gICBpZDogXCJjanUwMzVkZnQwMDJrMDg5MGttc2x5bGxrXCJcclxuLy8gfSkudGhlbihleGlzdHMgPT4ge1xyXG4vLyAgIGNvbnNvbGUubG9nKGV4aXN0cyk7XHJcbi8vIH0pXHJcblxyXG5leHBvcnQgeyBwcmlzbWEgYXMgZGVmYXVsdCB9XHJcbiJdfQ==