'use strict';require('@babel/polyfill');
var _graphqlYoga = require('graphql-yoga');
var _db = require('./db');var _db2 = _interopRequireDefault(_db);
var _index = require('./resolvers/index');
var _prisma = require('./prisma');var _prisma2 = _interopRequireDefault(_prisma);function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}

// Scalr types = String, Boolean, Int, Float, ID
// babel production runtime extra goodies.
var pubsub = new _graphqlYoga.PubSub();

// context has db object, and tehy are availabe on all method inside the resolver through context parameter.
// We use { db } to decompose parameter
var servers = new _graphqlYoga.GraphQLServer({
  typeDefs: './src/schema.graphql',
  resolvers: _index.resolvers,
  context: function context(request) {
    return {
      db: _db2.default, // database access
      pubsub: pubsub, // event driven, subscription
      prisma: _prisma2.default, // access to prisma 
      request: request // request object
    };
  },
  fragmentReplacements: _index.fragmentReplacements });


// process.env.PORT - set by heroku
servers.start({ port: process.env.PORT || 4000 }, function () {
  console.log('the server is up.');
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9pbmRleC5qcyJdLCJuYW1lcyI6WyJwdWJzdWIiLCJQdWJTdWIiLCJzZXJ2ZXJzIiwiR3JhcGhRTFNlcnZlciIsInR5cGVEZWZzIiwicmVzb2x2ZXJzIiwiY29udGV4dCIsInJlcXVlc3QiLCJkYiIsInByaXNtYSIsImZyYWdtZW50UmVwbGFjZW1lbnRzIiwic3RhcnQiLCJwb3J0IiwicHJvY2VzcyIsImVudiIsIlBPUlQiLCJjb25zb2xlIiwibG9nIl0sIm1hcHBpbmdzIjoiYUFBQTtBQUNBO0FBQ0EsMEI7QUFDQTtBQUNBLGtDOztBQUVBO0FBTmtDO0FBUWxDLElBQU1BLFNBQVMsSUFBSUMsbUJBQUosRUFBZjs7QUFFQTtBQUNBO0FBQ0EsSUFBTUMsVUFBVSxJQUFJQywwQkFBSixDQUFrQjtBQUNoQ0MsWUFBVSxzQkFEc0I7QUFFaENDLDZCQUZnQztBQUdoQ0MsU0FIZ0MsbUJBR3hCQyxPQUh3QixFQUdmO0FBQ2YsV0FBTztBQUNMQyxzQkFESyxFQUNLO0FBQ1ZSLG9CQUZLLEVBRUs7QUFDVlMsOEJBSEssRUFHSztBQUNWRixzQkFKSyxDQUlLO0FBSkwsS0FBUDtBQU1ELEdBVitCO0FBV2hDRyxtREFYZ0MsRUFBbEIsQ0FBaEI7OztBQWNBO0FBQ0FSLFFBQVFTLEtBQVIsQ0FBYyxFQUFFQyxNQUFNQyxRQUFRQyxHQUFSLENBQVlDLElBQVosSUFBb0IsSUFBNUIsRUFBZCxFQUFrRCxZQUFNO0FBQ3REQyxVQUFRQyxHQUFSLENBQVksbUJBQVo7QUFDRCxDQUZEIiwiZmlsZSI6ImluZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICdAYmFiZWwvcG9seWZpbGwnOyAgICAgICAgIC8vIGJhYmVsIHByb2R1Y3Rpb24gcnVudGltZSBleHRyYSBnb29kaWVzLlxyXG5pbXBvcnQgeyBHcmFwaFFMU2VydmVyLCBQdWJTdWIgfSBmcm9tICdncmFwaHFsLXlvZ2EnO1xyXG5pbXBvcnQgZGIgZnJvbSAnLi9kYic7XHJcbmltcG9ydCB7IHJlc29sdmVycywgZnJhZ21lbnRSZXBsYWNlbWVudHMgfSBmcm9tICcuL3Jlc29sdmVycy9pbmRleCc7XHJcbmltcG9ydCBwcmlzbWEgZnJvbSAnLi9wcmlzbWEnO1xyXG5cclxuLy8gU2NhbHIgdHlwZXMgPSBTdHJpbmcsIEJvb2xlYW4sIEludCwgRmxvYXQsIElEXHJcblxyXG5jb25zdCBwdWJzdWIgPSBuZXcgUHViU3ViKCk7XHJcblxyXG4vLyBjb250ZXh0IGhhcyBkYiBvYmplY3QsIGFuZCB0ZWh5IGFyZSBhdmFpbGFiZSBvbiBhbGwgbWV0aG9kIGluc2lkZSB0aGUgcmVzb2x2ZXIgdGhyb3VnaCBjb250ZXh0IHBhcmFtZXRlci5cclxuLy8gV2UgdXNlIHsgZGIgfSB0byBkZWNvbXBvc2UgcGFyYW1ldGVyXHJcbmNvbnN0IHNlcnZlcnMgPSBuZXcgR3JhcGhRTFNlcnZlcih7XHJcbiAgdHlwZURlZnM6ICcuL3NyYy9zY2hlbWEuZ3JhcGhxbCcsXHJcbiAgcmVzb2x2ZXJzLFxyXG4gIGNvbnRleHQocmVxdWVzdCkge1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgZGIsICAgICAgIC8vIGRhdGFiYXNlIGFjY2Vzc1xyXG4gICAgICBwdWJzdWIsICAgLy8gZXZlbnQgZHJpdmVuLCBzdWJzY3JpcHRpb25cclxuICAgICAgcHJpc21hLCAgIC8vIGFjY2VzcyB0byBwcmlzbWEgXHJcbiAgICAgIHJlcXVlc3QgICAvLyByZXF1ZXN0IG9iamVjdFxyXG4gICAgfVxyXG4gIH0sXHJcbiAgZnJhZ21lbnRSZXBsYWNlbWVudHNcclxufSk7XHJcblxyXG4vLyBwcm9jZXNzLmVudi5QT1JUIC0gc2V0IGJ5IGhlcm9rdVxyXG5zZXJ2ZXJzLnN0YXJ0KHsgcG9ydDogcHJvY2Vzcy5lbnYuUE9SVCB8fCA0MDAwIH0sICgpID0+IHtcclxuICBjb25zb2xlLmxvZygndGhlIHNlcnZlciBpcyB1cC4nKVxyXG59KVxyXG4iXX0=