"use strict";Object.defineProperty(exports, "__esModule", { value: true });exports.default = undefined;var _jwtToken = require("../utils/jwtToken");function _asyncToGenerator(fn) {return function () {var gen = fn.apply(this, arguments);return new Promise(function (resolve, reject) {function step(key, arg) {try {var info = gen[key](arg);var value = info.value;} catch (error) {reject(error);return;}if (info.done) {resolve(value);} else {return Promise.resolve(value).then(function (value) {step("next", value);}, function (err) {step("throw", err);});}}return step("next");});};}

var Query = {
  users: function users(parent, args, _ref, info) {var db = _ref.db,prisma = _ref.prisma;
    // opArgs.  Which operation does it support?
    // look under the shcema in the graphql browser for users: where, orderBy, skip, after, ...
    var opArgs = {
      first: args.first,
      skip: args.skip,
      after: args.after,
      orderBy: args.orderBy };

    if (args.query) {
      opArgs.where = {
        name_contains: args.query
        // name_contains: args.query
        // OR: [{
        //   name_contains: args.query
        // }, {
        //   email_contains: args.query
        // }]
      };
    }

    // second parameter can be null, string or object;
    // info - it has original information of the GraphQL request
    return prisma.query.users(opArgs, info);

    // if (!args.query) {
    //   return db.userList;
    // }
    // return db.userList.filter((user) => {
    //   return user.name.toLowerCase().includes(args.query.toLowerCase())
    // });
  },
  me: function me(parent, args, _ref2, info) {var db = _ref2.db,prisma = _ref2.prisma,request = _ref2.request;
    var userId = (0, _jwtToken.getUserId)(request);
    return prisma.query.user({ where: { id: userId } });
  },
  posts: function posts(parent, args, _ref3, info) {var db = _ref3.db,prisma = _ref3.prisma,request = _ref3.request;
    var opArgs = {
      first: args.first,
      skip: args.skip,
      after: args.after,
      orderBy: args.orderBy };

    var userId = (0, _jwtToken.getUserId)(request, false);
    if (userId)
    opArgs.where = {
      author: {
        id: userId } };else



    opArgs.where = {
      published: true };

    if (args.query) {
      opArgs.where.OR = [{
        title_contains: args.query },
      {
        body_contains: args.query }];

    }
    // second parameter can be null, string or object;
    // info - it has original information of the GraphQL request
    return prisma.query.posts(opArgs, info);
    // if (!args.query) {
    //   return db.postList;
    // }
    // return db.postList.filter((post)=> {
    //   return post.title.toLowerCase().includes(args.query.toLowerCase());
    // });
  },
  post: function () {var _ref5 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(parent, args, _ref4, info) {var prisma = _ref4.prisma,request = _ref4.request;var userId, opArgs, posts;return regeneratorRuntime.wrap(function _callee$(_context) {while (1) {switch (_context.prev = _context.next) {case 0:
              userId = (0, _jwtToken.getUserId)(request, false);
              opArgs = {};
              if (args.query) {
                opArgs.where = {
                  id: args.id,
                  OR: [{
                    published: true },

                  {
                    author: {
                      id: userId } }] };



              }_context.next = 5;return (
                prisma.query.posts(opArgs, info));case 5:posts = _context.sent;if (!(
              posts.length <= 0)) {_context.next = 8;break;}throw (
                new Error("Post not found."));case 8:return _context.abrupt("return",
              posts[0]);case 9:case "end":return _context.stop();}}}, _callee, this);}));function post(_x, _x2, _x3, _x4) {return _ref5.apply(this, arguments);}return post;}(),

  comments: function comments(parent, args, _ref6, info) {var db = _ref6.db,prisma = _ref6.prisma;
    var opArgs = {
      first: args.first,
      skip: args.skip,
      after: args.after,
      orderBy: args.orderBy };

    if (args.query) {
      opArgs.where = {
        text_contains: args.query };

    }
    return prisma.query.comments(opArgs, info);
    // return db.commentList;
  } };exports.


default = Query;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9yZXNvbHZlcnMvUXVlcnkuanMiXSwibmFtZXMiOlsiUXVlcnkiLCJ1c2VycyIsInBhcmVudCIsImFyZ3MiLCJpbmZvIiwiZGIiLCJwcmlzbWEiLCJvcEFyZ3MiLCJmaXJzdCIsInNraXAiLCJhZnRlciIsIm9yZGVyQnkiLCJxdWVyeSIsIndoZXJlIiwibmFtZV9jb250YWlucyIsIm1lIiwicmVxdWVzdCIsInVzZXJJZCIsInVzZXIiLCJpZCIsInBvc3RzIiwiYXV0aG9yIiwicHVibGlzaGVkIiwiT1IiLCJ0aXRsZV9jb250YWlucyIsImJvZHlfY29udGFpbnMiLCJwb3N0IiwibGVuZ3RoIiwiRXJyb3IiLCJjb21tZW50cyIsInRleHRfY29udGFpbnMiLCJkZWZhdWx0Il0sIm1hcHBpbmdzIjoidUdBQUEsNkM7O0FBRUEsSUFBTUEsUUFBUTtBQUNaQyxPQURZLGlCQUNOQyxNQURNLEVBQ0VDLElBREYsUUFDd0JDLElBRHhCLEVBQzhCLEtBQXBCQyxFQUFvQixRQUFwQkEsRUFBb0IsQ0FBaEJDLE1BQWdCLFFBQWhCQSxNQUFnQjtBQUN4QztBQUNBO0FBQ0EsUUFBTUMsU0FBUztBQUNiQyxhQUFPTCxLQUFLSyxLQURDO0FBRWJDLFlBQU1OLEtBQUtNLElBRkU7QUFHYkMsYUFBT1AsS0FBS08sS0FIQztBQUliQyxlQUFTUixLQUFLUSxPQUpELEVBQWY7O0FBTUEsUUFBSVIsS0FBS1MsS0FBVCxFQUFnQjtBQUNkTCxhQUFPTSxLQUFQLEdBQWU7QUFDYkMsdUJBQWVYLEtBQUtTO0FBQ3BCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQVBhLE9BQWY7QUFTRDs7QUFFRDtBQUNBO0FBQ0EsV0FBT04sT0FBT00sS0FBUCxDQUFhWCxLQUFiLENBQW1CTSxNQUFuQixFQUEyQkgsSUFBM0IsQ0FBUDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDRCxHQWhDVztBQWlDWlcsSUFqQ1ksY0FpQ1RiLE1BakNTLEVBaUNEQyxJQWpDQyxTQWlD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QUFhaUIsUUFBYixDQUFzQnRCLE1BQXRCLEVBQThCSCxJQUE5QixDQUFQO0FBQ0E7QUFDRCxHQTNHVyxFQUFkLEM7OztBQThHa0IyQixPLEdBQVQvQixLIiwiZmlsZSI6IlF1ZXJ5LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgbWFrZVRva2VuLCBnZXRVc2VySWQgfSBmcm9tIFwiLi4vdXRpbHMvand0VG9rZW5cIjtcclxuXHJcbmNvbnN0IFF1ZXJ5ID0ge1xyXG4gIHVzZXJzKHBhcmVudCwgYXJncywgeyBkYiwgcHJpc21hIH0sIGluZm8pIHtcclxuICAgIC8vIG9wQXJncy4gIFdoaWNoIG9wZXJhdGlvbiBkb2VzIGl0IHN1cHBvcnQ/XHJcbiAgICAvLyBsb29rIHVuZGVyIHRoZSBzaGNlbWEgaW4gdGhlIGdyYXBocWwgYnJvd3NlciBmb3IgdXNlcnM6IHdoZXJlLCBvcmRlckJ5LCBza2lwLCBhZnRlciwgLi4uXHJcbiAgICBjb25zdCBvcEFyZ3MgPSB7XHJcbiAgICAgIGZpcnN0OiBhcmdzLmZpcnN0LFxyXG4gICAgICBza2lwOiBhcmdzLnNraXAsXHJcbiAgICAgIGFmdGVyOiBhcmdzLmFmdGVyLFxyXG4gICAgICBvcmRlckJ5OiBhcmdzLm9yZGVyQnlcclxuICAgIH1cclxuICAgIGlmIChhcmdzLnF1ZXJ5KSB7XHJcbiAgICAgIG9wQXJncy53aGVyZSA9IHtcclxuICAgICAgICBuYW1lX2NvbnRhaW5zOiBhcmdzLnF1ZXJ5XHJcbiAgICAgICAgLy8gbmFtZV9jb250YWluczogYXJncy5xdWVyeVxyXG4gICAgICAgIC8vIE9SOiBbe1xyXG4gICAgICAgIC8vICAgbmFtZV9jb250YWluczogYXJncy5xdWVyeVxyXG4gICAgICAgIC8vIH0sIHtcclxuICAgICAgICAvLyAgIGVtYWlsX2NvbnRhaW5zOiBhcmdzLnF1ZXJ5XHJcbiAgICAgICAgLy8gfV1cclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8vIHNlY29uZCBwYXJhbWV0ZXIgY2FuIGJlIG51bGwsIHN0cmluZyBvciBvYmplY3Q7XHJcbiAgICAvLyBpbmZvIC0gaXQgaGFzIG9yaWdpbmFsIGluZm9ybWF0aW9uIG9mIHRoZSBHcmFwaFFMIHJlcXVlc3RcclxuICAgIHJldHVybiBwcmlzbWEucXVlcnkudXNlcnMob3BBcmdzLCBpbmZvKTtcclxuXHJcbiAgICAvLyBpZiAoIWFyZ3MucXVlcnkpIHtcclxuICAgIC8vICAgcmV0dXJuIGRiLnVzZXJMaXN0O1xyXG4gICAgLy8gfVxyXG4gICAgLy8gcmV0dXJuIGRiLnVzZXJMaXN0LmZpbHRlcigodXNlcikgPT4ge1xyXG4gICAgLy8gICByZXR1cm4gdXNlci5uYW1lLnRvTG93ZXJDYXNlKCkuaW5jbHVkZXMoYXJncy5xdWVyeS50b0xvd2VyQ2FzZSgpKVxyXG4gICAgLy8gfSk7XHJcbiAgfSxcclxuICBtZShwYXJlbnQsIGFyZ3MsIHsgZGIsIHByaXNtYSwgcmVxdWVzdCB9LCBpbmZvKSB7XHJcbiAgICBjb25zdCB1c2VySWQgPSBnZXRVc2VySWQocmVxdWVzdCk7XHJcbiAgICByZXR1cm4gcHJpc21hLnF1ZXJ5LnVzZXIoe3doZXJlOiB7aWQ6IHVzZXJJZH19KTtcclxuICB9LFxyXG4gIHBvc3RzKHBhcmVudCwgYXJncywgeyBkYiwgcHJpc21hLCByZXF1ZXN0IH0sIGluZm8pIHtcclxuICAgIGNvbnN0IG9wQXJncyA9IHtcclxuICAgICAgZmlyc3Q6IGFyZ3MuZmlyc3QsXHJcbiAgICAgIHNraXA6IGFyZ3Muc2tpcCxcclxuICAgICAgYWZ0ZXI6IGFyZ3MuYWZ0ZXIsXHJcbiAgICAgIG9yZGVyQnk6IGFyZ3Mub3JkZXJCeVxyXG4gICAgfVxyXG4gICAgY29uc3QgdXNlcklkID0gZ2V0VXNlcklkKHJlcXVlc3QsIGZhbHNlKTtcclxuICAgIGlmICh1c2VySWQpXHJcbiAgICAgIG9wQXJncy53aGVyZSA9IHtcclxuICAgICAgICBhdXRob3I6IHtcclxuICAgICAgICAgIGlkOiB1c2VySWRcclxuICAgICAgICB9XHJcbiAgICAgIH07XHJcbiAgICBlbHNlXHJcbiAgICAgIG9wQXJncy53aGVyZSA9IHtcclxuICAgICAgICBwdWJsaXNoZWQ6IHRydWVcclxuICAgICAgfTtcclxuICAgIGlmIChhcmdzLnF1ZXJ5KSB7XHJcbiAgICAgIG9wQXJncy53aGVyZS5PUiA9IFt7XHJcbiAgICAgICAgICB0aXRsZV9jb250YWluczogYXJncy5xdWVyeVxyXG4gICAgICAgIH0sIHtcclxuICAgICAgICAgIGJvZHlfY29udGFpbnM6IGFyZ3MucXVlcnlcclxuICAgICAgICB9XVxyXG4gICAgfVxyXG4gICAgLy8gc2Vjb25kIHBhcmFtZXRlciBjYW4gYmUgbnVsbCwgc3RyaW5nIG9yIG9iamVjdDtcclxuICAgIC8vIGluZm8gLSBpdCBoYXMgb3JpZ2luYWwgaW5mb3JtYXRpb24gb2YgdGhlIEdyYXBoUUwgcmVxdWVzdFxyXG4gICAgcmV0dXJuIHByaXNtYS5xdWVyeS5wb3N0cyhvcEFyZ3MsIGluZm8pO1xyXG4gICAgLy8gaWYgKCFhcmdzLnF1ZXJ5KSB7XHJcbiAgICAvLyAgIHJldHVybiBkYi5wb3N0TGlzdDtcclxuICAgIC8vIH1cclxuICAgIC8vIHJldHVybiBkYi5wb3N0TGlzdC5maWx0ZXIoKHBvc3QpPT4ge1xyXG4gICAgLy8gICByZXR1cm4gcG9zdC50aXRsZS50b0xvd2VyQ2FzZSgpLmluY2x1ZGVzKGFyZ3MucXVlcnkudG9Mb3dlckNhc2UoKSk7XHJcbiAgICAvLyB9KTtcclxuICB9LFxyXG4gIGFzeW5jIHBvc3QocGFyZW50LCBhcmdzLCB7IHByaXNtYSwgcmVxdWVzdCB9LCBpbmZvKSB7XHJcbiAgICBjb25zdCB1c2VySWQgPSBnZXRVc2VySWQocmVxdWVzdCwgZmFsc2UpO1xyXG4gICAgY29uc3Qgb3BBcmdzID0ge307XHJcbiAgICBpZiAoYXJncy5xdWVyeSkge1xyXG4gICAgICBvcEFyZ3Mud2hlcmUgPSB7XHJcbiAgICAgICAgaWQ6IGFyZ3MuaWQsXHJcbiAgICAgICAgT1I6IFt7XHJcbiAgICAgICAgICBwdWJsaXNoZWQ6IHRydWVcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgIGF1dGhvcjoge1xyXG4gICAgICAgICAgICBpZDogdXNlcklkXHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfV1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgY29uc3QgcG9zdHMgPSBhd2FpdCBwcmlzbWEucXVlcnkucG9zdHMob3BBcmdzLCBpbmZvKTtcclxuICAgIGlmIChwb3N0cy5sZW5ndGggPD0gMClcclxuICAgICAgdGhyb3cgbmV3IEVycm9yIChcIlBvc3Qgbm90IGZvdW5kLlwiKTtcclxuICAgIHJldHVybiBwb3N0c1swXTtcclxuICB9LFxyXG4gIGNvbW1lbnRzKHBhcmVudCwgYXJncywgeyBkYiwgcHJpc21hIH0sIGluZm8pIHtcclxuICAgIGNvbnN0IG9wQXJncyA9IHtcclxuICAgICAgZmlyc3Q6IGFyZ3MuZmlyc3QsXHJcbiAgICAgIHNraXA6IGFyZ3Muc2tpcCxcclxuICAgICAgYWZ0ZXI6IGFyZ3MuYWZ0ZXIsXHJcbiAgICAgIG9yZGVyQnk6IGFyZ3Mub3JkZXJCeVxyXG4gICAgfVxyXG4gICAgaWYgKGFyZ3MucXVlcnkpIHtcclxuICAgICAgb3BBcmdzLndoZXJlID0ge1xyXG4gICAgICAgIHRleHRfY29udGFpbnM6IGFyZ3MucXVlcnlcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgcmV0dXJuIHByaXNtYS5xdWVyeS5jb21tZW50cyhvcEFyZ3MsIGluZm8pO1xyXG4gICAgLy8gcmV0dXJuIGRiLmNvbW1lbnRMaXN0O1xyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IHsgUXVlcnkgYXMgZGVmYXVsdCB9XHJcbiJdfQ==