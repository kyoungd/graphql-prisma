"use strict";Object.defineProperty(exports, "__esModule", { value: true });exports.default = undefined;var _extends = Object.assign || function (target) {for (var i = 1; i < arguments.length; i++) {var source = arguments[i];for (var key in source) {if (Object.prototype.hasOwnProperty.call(source, key)) {target[key] = source[key];}}}return target;};var _bcryptjs = require("bcryptjs");var _bcryptjs2 = _interopRequireDefault(_bcryptjs);
var _config = require("../../config");var _config2 = _interopRequireDefault(_config);
var _jwtToken = require("../utils/jwtToken");function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}function _asyncToGenerator(fn) {return function () {var gen = fn.apply(this, arguments);return new Promise(function (resolve, reject) {function step(key, arg) {try {var info = gen[key](arg);var value = info.value;} catch (error) {reject(error);return;}if (info.done) {resolve(value);} else {return Promise.resolve(value).then(function (value) {step("next", value);}, function (err) {step("throw", err);});}}return step("next");});};}

var Mutation = {
  loginUser: function () {var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(parent, args, _ref, info) {var prisma = _ref.prisma;var users, user, isMatch, errMsg;return regeneratorRuntime.wrap(function _callee$(_context) {while (1) {switch (_context.prev = _context.next) {case 0:_context.next = 2;return (
                prisma.query.users({
                  where: {
                    email: args.data.email } }));case 2:users = _context.sent;if (


              users) {_context.next = 5;break;}throw (
                new Error('username and password does not match'));case 5:
              user = users[0];_context.next = 8;return (
                _bcryptjs2.default.compare(args.data.password, user.password));case 8:isMatch = _context.sent;
              errMsg = "text";if (!
              isMatch) {_context.next = 14;break;}return _context.abrupt("return",
              {
                user: user,
                token: (0, _jwtToken.makeToken)(user.id) });case 14:throw (



                new Error(errMsg + 'Username and password does not match'));case 15:case "end":return _context.stop();}}}, _callee, this);}));function loginUser(_x, _x2, _x3, _x4) {return _ref2.apply(this, arguments);}return loginUser;}(),

  createUser: function () {var _ref4 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(parent, args, _ref3, info) {var db = _ref3.db,prisma = _ref3.prisma;var password, user;return regeneratorRuntime.wrap(function _callee2$(_context2) {while (1) {switch (_context2.prev = _context2.next) {case 0:if (!(
              args.data.password.length < 8)) {_context2.next = 2;break;}throw (
                new Error('Password must be 8 characters or longer'));case 2:_context2.next = 4;return (


                (0, _jwtToken.hashPassword)(args.data.password));case 4:password = _context2.sent;
              // info is the return selection information
              user = prisma.mutation.createUser({
                data: _extends({},
                args.data, {
                  password: password

                  // }, info);  // remove info when returning custom data instead of returning prisma data
                }) });
              // this will make all fields scalar data type.npm
              // return user;
              return _context2.abrupt("return",
              {
                user: user,
                token: (0, _jwtToken.makeToken)(user.id) });case 7:case "end":return _context2.stop();}}}, _callee2, this);}));function createUser(_x5, _x6, _x7, _x8) {return _ref4.apply(this, arguments);}return createUser;}(),


  deleteUser: function () {var _ref6 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(parent, args, _ref5, info) {var prisma = _ref5.prisma,request = _ref5.request;var userId;return regeneratorRuntime.wrap(function _callee3$(_context3) {while (1) {switch (_context3.prev = _context3.next) {case 0:
              userId = (0, _jwtToken.getUserId)(request);return _context3.abrupt("return",
              prisma.mutation.deleteUser({ where: {
                  id: userId } }, info));case 2:case "end":return _context3.stop();}}}, _callee3, this);}));function deleteUser(_x9, _x10, _x11, _x12) {return _ref6.apply(this, arguments);}return deleteUser;}(),

  updateUser: function () {var _ref8 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4(parent, args, _ref7, info) {var prisma = _ref7.prisma,request = _ref7.request;var userId;return regeneratorRuntime.wrap(function _callee4$(_context4) {while (1) {switch (_context4.prev = _context4.next) {case 0:
              userId = (0, _jwtToken.getUserId)(request);return _context4.abrupt("return",
              prisma.mutation.updateUser({ where:
                { id: userId },
                data: args.data },
              info));case 2:case "end":return _context4.stop();}}}, _callee4, this);}));function updateUser(_x13, _x14, _x15, _x16) {return _ref8.apply(this, arguments);}return updateUser;}(),

  createPost: function createPost(parent, args, _ref9, info) {var prisma = _ref9.prisma,request = _ref9.request;
    var userId = (0, _jwtToken.getUserId)(request);
    return prisma.mutation.createPost({
      data: {
        title: args.data.title,
        body: args.data.body,
        published: args.data.published,
        author: {
          connect: {
            id: userId } } } },



    info);
  },
  updatePost: function () {var _ref11 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee5(parent, args, _ref10, info) {var db = _ref10.db,pubsub = _ref10.pubsub,prisma = _ref10.prisma,request = _ref10.request;var userId, postExists, isCommentExist;return regeneratorRuntime.wrap(function _callee5$(_context5) {while (1) {switch (_context5.prev = _context5.next) {case 0:
              userId = (0, _jwtToken.getUserId)(request);_context5.next = 3;return (
                prisma.exists.Post({
                  id: args.id,
                  author: {
                    id: userId } }));case 3:postExists = _context5.sent;if (


              postExists) {_context5.next = 6;break;}throw (
                new Error("User does not own the post"));case 6:if (
              args.data.published) {_context5.next = 11;break;}_context5.next = 9;return (
                prisma.exists.comments({ where: { post: { id: args.id } } }));case 9:isCommentExist = _context5.sent;
              if (isCommentExist)
              prisma.mutation.deleteManyComments({ where: { post: { id: args.id } } });case 11:_context5.next = 13;return (

                prisma.mutation.updatePost({ where: { id: args.id }, data: args.data }, info));case 13:return _context5.abrupt("return", _context5.sent);case 14:case "end":return _context5.stop();}}}, _callee5, this);}));function updatePost(_x17, _x18, _x19, _x20) {return _ref11.apply(this, arguments);}return updatePost;}(),

  deletePost: function () {var _ref13 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee6(parent, args, _ref12, info) {var pubsub = _ref12.pubsub,request = _ref12.request;var userId, postExists;return regeneratorRuntime.wrap(function _callee6$(_context6) {while (1) {switch (_context6.prev = _context6.next) {case 0:
              userId = getUesrId(request);_context6.next = 3;return (
                prisma.exists.Post({
                  id: args.id,
                  author: {
                    id: userId } }));case 3:postExists = _context6.sent;if (


              postExists) {_context6.next = 6;break;}throw (
                new Error("User does not own the post"));case 6:return _context6.abrupt("return",
              prisma.mutation.deletePost({ where: { id: args.id } }, info));case 7:case "end":return _context6.stop();}}}, _callee6, this);}));function deletePost(_x21, _x22, _x23, _x24) {return _ref13.apply(this, arguments);}return deletePost;}(),

  createComment: function () {var _ref15 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee7(parent, args, _ref14, info) {var db = _ref14.db,pubsub = _ref14.pubsub,prisma = _ref14.prisma,request = _ref14.request;var postId, post, userId;return regeneratorRuntime.wrap(function _callee7$(_context7) {while (1) {switch (_context7.prev = _context7.next) {case 0:
              postId = args.data.post;_context7.next = 3;return (
                prisma.query.post({
                  where: {
                    id: postId } }));case 3:post = _context7.sent;


              console.log(post);if (
              post.published) {_context7.next = 7;break;}throw (
                new Error('Post is not published'));case 7:
              userId = (0, _jwtToken.getUserId)(request);return _context7.abrupt("return",
              prisma.mutation.createComment({
                data: {
                  text: args.data.text,
                  author: {
                    connect: {
                      id: userId } },


                  post: {
                    connect: {
                      id: args.data.post } } } },



              info));case 9:case "end":return _context7.stop();}}}, _callee7, this);}));function createComment(_x25, _x26, _x27, _x28) {return _ref15.apply(this, arguments);}return createComment;}(),

  updateComment: function () {var _ref17 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee8(parent, args, _ref16, info) {var pubsub = _ref16.pubsub,prisma = _ref16.prisma,request = _ref16.request;var userId, isCommentExist;return regeneratorRuntime.wrap(function _callee8$(_context8) {while (1) {switch (_context8.prev = _context8.next) {case 0:
              userId = (0, _jwtToken.getUserId)(request);
              isCommentExist = prisma.exists.Comment({
                id: args.id,
                author: {
                  id: userId } });if (


              isCommentExist) {_context8.next = 4;break;}throw (
                new Error("Comment access authentication denied"));case 4:return _context8.abrupt("return",
              prisma.mutation.updateComment({
                where: {
                  id: args.id },

                data: args.data },
              info));case 5:case "end":return _context8.stop();}}}, _callee8, this);}));function updateComment(_x29, _x30, _x31, _x32) {return _ref17.apply(this, arguments);}return updateComment;}(),

  deleteComment: function deleteComment(parent, args, _ref18, info) {var db = _ref18.db,prisma = _ref18.prisma,request = _ref18.request;
    var userId = (0, _jwtToken.getUserId)(request);
    var isCommentExist = prisma.exists.Comment({
      id: args.id,
      author: {
        id: userId } });


    if (!isCommentExist)
    throw new Error("Comment access authentication denied");
    return prisma.mutation.deleteComment({
      where: {
        id: args.id } });


  },
  changePassword: function () {var _ref20 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee9(parent, args, _ref19, info) {var prisma = _ref19.prisma,request = _ref19.request;var userId, oldUser, user;return regeneratorRuntime.wrap(function _callee9$(_context9) {while (1) {switch (_context9.prev = _context9.next) {case 0:
              userId = (0, _jwtToken.getUserId)(request);_context9.next = 3;return (
                prisma.query.user({ where: { id: userId } }));case 3:oldUser = _context9.sent;_context9.next = 6;return (
                (0, _jwtToken.hashPassword)(args.password));case 6:oldUser.password = _context9.sent;_context9.next = 9;return (
                prisma.mutation.updateUser({
                  where: { id: userId },
                  data: { password: oldUser.password } }));case 9:user = _context9.sent;return _context9.abrupt("return",

              user.password);case 11:case "end":return _context9.stop();}}}, _callee9, this);}));function changePassword(_x33, _x34, _x35, _x36) {return _ref20.apply(this, arguments);}return changePassword;}() };exports.



default = Mutation;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9yZXNvbHZlcnMvTXV0YXRpb24uanMiXSwibmFtZXMiOlsiTXV0YXRpb24iLCJsb2dpblVzZXIiLCJwYXJlbnQiLCJhcmdzIiwiaW5mbyIsInByaXNtYSIsInF1ZXJ5IiwidXNlcnMiLCJ3aGVyZSIsImVtYWlsIiwiZGF0YSIsIkVycm9yIiwidXNlciIsImJjcnlwdCIsImNvbXBhcmUiLCJwYXNzd29yZCIsImlzTWF0Y2giLCJlcnJNc2ciLCJ0b2tlbiIsImlkIiwiY3JlYXRlVXNlciIsImRiIiwibGVuZ3RoIiwibXV0YXRpb24iLCJkZWxldGVVc2VyIiwicmVxdWVzdCIsInVzZXJJZCIsInVwZGF0ZVVzZXIiLCJjcmVhdGVQb3N0IiwidGl0bGUiLCJib2R5IiwicHVibGlzaGVkIiwiYXV0aG9yIiwiY29ubmVjdCIsInVwZGF0ZVBvc3QiLCJwdWJzdWIiLCJleGlzdHMiLCJQb3N0IiwicG9zdEV4aXN0cyIsImNvbW1lbnRzIiwicG9zdCIsImlzQ29tbWVudEV4aXN0IiwiZGVsZXRlTWFueUNvbW1lbnRzIiwiZGVsZXRlUG9zdCIsImdldFVlc3JJZCIsImNyZWF0ZUNvbW1lbnQiLCJwb3N0SWQiLCJjb25zb2xlIiwibG9nIiwidGV4dCIsInVwZGF0ZUNvbW1lbnQiLCJDb21tZW50IiwiZGVsZXRlQ29tbWVudCIsImNoYW5nZVBhc3N3b3JkIiwib2xkVXNlciIsImRlZmF1bHQiXSwibWFwcGluZ3MiOiI4VkFBQSxvQztBQUNBLHNDO0FBQ0EsNkM7O0FBRUEsSUFBTUEsV0FBVztBQUNUQyxXQURTLG9HQUNDQyxNQURELEVBQ1NDLElBRFQsUUFDeUJDLElBRHpCLE9BQ2dCQyxNQURoQixRQUNnQkEsTUFEaEI7QUFFT0EsdUJBQU9DLEtBQVAsQ0FBYUMsS0FBYixDQUFtQjtBQUNyQ0MseUJBQU87QUFDTEMsMkJBQU9OLEtBQUtPLElBQUwsQ0FBVUQsS0FEWixFQUQ4QixFQUFuQixDQUZQLFNBRVBGLEtBRk87OztBQU9SQSxtQkFQUTtBQVFMLG9C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TUEsUUFBSSxDQUFDZSxjQUFMO0FBQ0UsVUFBTSxJQUFJOUIsS0FBSixDQUFVLHNDQUFWLENBQU47QUFDRixXQUFPTixPQUFPa0IsUUFBUCxDQUFnQjZCLGFBQWhCLENBQThCO0FBQ25DNUMsYUFBTztBQUNMVyxZQUFJaEIsS0FBS2dCLEVBREosRUFENEIsRUFBOUIsQ0FBUDs7O0FBS0QsR0E5SmM7QUErSlRrQyxnQkEvSlMsc0dBK0pNbkQsTUEvSk4sRUErSmNDLElBL0pkLFVBK0p1Q0MsSUEvSnZDLE9BK0pxQkMsTUEvSnJCLFVBK0pxQkEsTUEvSnJCLENBK0o2Qm9CLE9BL0o3QixVQStKNkJBLE9BL0o3QjtBQWdLUEMsb0JBaEtPLEdBZ0tFLHlCQUFVRCxPQUFWLENBaEtGO0FBaUtTcEIsdUJBQU9DLEtBQVAsQ0FBYU0sSUFBYixDQUFrQixFQUFDSixPQUFPLEVBQUNXLElBQUlPLE1BQUwsRUFBUixFQUFsQixDQWpLVCxTQWlLUDRCLE9BaktPO0FBa0tZLDRDQUFhbkQsS0FBS1ksUUFBbEIsQ0FsS1osU0FrS2J1QyxRQUFRdkMsUUFsS0s7QUFtS01WLHVCQUFPa0IsUUFBUCxDQUFnQkksVUFBaEIsQ0FBMkI7QUFDNUNuQix5QkFBTyxFQUFFVyxJQUFJTyxNQUFOLEVBRHFDO0FBRTVDaEIsd0JBQU8sRUFBRUssVUFBVXVDLFFBQVF2QyxRQUFwQixFQUZxQyxFQUEzQixDQW5LTixTQW1LUEgsSUFuS087O0FBdUtOQSxtQkFBS0csUUF2S0Msd0xBQWpCLEM7Ozs7QUEyS3FCd0MsTyxHQUFadkQsUSIsImZpbGUiOiJNdXRhdGlvbi5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBiY3J5cHQgZnJvbSBcImJjcnlwdGpzXCI7XHJcbmltcG9ydCBjb25maWcgZnJvbSBcIi4uLy4uL2NvbmZpZ1wiO1xyXG5pbXBvcnQgeyBtYWtlVG9rZW4sIGdldFVzZXJJZCwgaGFzaFBhc3N3b3JkIH0gZnJvbSBcIi4uL3V0aWxzL2p3dFRva2VuXCI7XHJcblxyXG5jb25zdCBNdXRhdGlvbiA9IHtcclxuICBhc3luYyBsb2dpblVzZXIocGFyZW50LCBhcmdzLCB7cHJpc21hfSwgaW5mbykge1xyXG4gICAgY29uc3QgdXNlcnMgPSBhd2FpdCBwcmlzbWEucXVlcnkudXNlcnMoeyBcclxuICAgICAgd2hlcmU6IHtcclxuICAgICAgICBlbWFpbDogYXJncy5kYXRhLmVtYWlsXHJcbiAgICAgICAgfSBcclxuICAgIH0pO1xyXG4gICAgaWYgKCF1c2VycylcclxuICAgICAgdGhyb3cgbmV3IEVycm9yICgndXNlcm5hbWUgYW5kIHBhc3N3b3JkIGRvZXMgbm90IG1hdGNoJyk7XHJcbiAgICBjb25zdCB1c2VyID0gdXNlcnNbMF07XHJcbiAgICBjb25zdCBpc01hdGNoID0gYXdhaXQgYmNyeXB0LmNvbXBhcmUoYXJncy5kYXRhLnBhc3N3b3JkLCB1c2VyLnBhc3N3b3JkKTtcclxuICAgIGNvbnN0IGVyck1zZyA9IFwidGV4dFwiXHJcbiAgICBpZiAoaXNNYXRjaCkge1xyXG4gICAgICByZXR1cm4ge1xyXG4gICAgICAgIHVzZXI6dXNlcixcclxuICAgICAgICB0b2tlbjogbWFrZVRva2VuKHVzZXIuaWQpXHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIGVsc2VcclxuICAgICAgdGhyb3cgbmV3IEVycm9yIChlcnJNc2cgKyAnVXNlcm5hbWUgYW5kIHBhc3N3b3JkIGRvZXMgbm90IG1hdGNoJyk7XHJcbiAgfSxcclxuICBhc3luYyBjcmVhdGVVc2VyKHBhcmVudCwgYXJncywgeyBkYiwgcHJpc21hIH0sIGluZm8pIHtcclxuICAgIGlmIChhcmdzLmRhdGEucGFzc3dvcmQubGVuZ3RoIDwgOCkge1xyXG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ1Bhc3N3b3JkIG11c3QgYmUgOCBjaGFyYWN0ZXJzIG9yIGxvbmdlcicpO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IHBhc3N3b3JkID0gYXdhaXQgaGFzaFBhc3N3b3JkKGFyZ3MuZGF0YS5wYXNzd29yZCk7XHJcbiAgICAvLyBpbmZvIGlzIHRoZSByZXR1cm4gc2VsZWN0aW9uIGluZm9ybWF0aW9uXHJcbiAgICBjb25zdCB1c2VyID0gcHJpc21hLm11dGF0aW9uLmNyZWF0ZVVzZXIoeyBcclxuICAgICAgZGF0YToge1xyXG4gICAgICAgIC4uLmFyZ3MuZGF0YSxcclxuICAgICAgICBwYXNzd29yZFxyXG4gICAgICB9XHJcbiAgICAvLyB9LCBpbmZvKTsgIC8vIHJlbW92ZSBpbmZvIHdoZW4gcmV0dXJuaW5nIGN1c3RvbSBkYXRhIGluc3RlYWQgb2YgcmV0dXJuaW5nIHByaXNtYSBkYXRhXHJcbiAgICB9KTtcclxuICAgIC8vIHRoaXMgd2lsbCBtYWtlIGFsbCBmaWVsZHMgc2NhbGFyIGRhdGEgdHlwZS5ucG1cclxuICAgIC8vIHJldHVybiB1c2VyO1xyXG4gICBcclxuICAgIHJldHVybiB7XHJcbiAgICAgIHVzZXIsXHJcbiAgICAgIHRva2VuOiBtYWtlVG9rZW4odXNlci5pZClcclxuICAgIH1cclxuICB9LFxyXG4gIGFzeW5jIGRlbGV0ZVVzZXIocGFyZW50LCBhcmdzLCB7IHByaXNtYSwgcmVxdWVzdCB9LCBpbmZvKSB7XHJcbiAgICBjb25zdCB1c2VySWQgPSBnZXRVc2VySWQocmVxdWVzdCk7XHJcbiAgICByZXR1cm4gcHJpc21hLm11dGF0aW9uLmRlbGV0ZVVzZXIoIHsgd2hlcmU6IHtcclxuICAgICAgaWQ6IHVzZXJJZH0gfSwgaW5mbyApO1xyXG4gIH0sXHJcbiAgYXN5bmMgdXBkYXRlVXNlcihwYXJlbnQsIGFyZ3MsIHsgcHJpc21hLCByZXF1ZXN0IH0sIGluZm8pIHtcclxuICAgIGNvbnN0IHVzZXJJZCA9IGdldFVzZXJJZChyZXF1ZXN0KTtcclxuICAgIHJldHVybiBwcmlzbWEubXV0YXRpb24udXBkYXRlVXNlciggeyB3aGVyZTogXHJcbiAgICAgIHsgaWQ6IHVzZXJJZCB9LFxyXG4gICAgICBkYXRhOiBhcmdzLmRhdGFcclxuICAgIH0sIGluZm8pO1xyXG4gIH0sXHJcbiAgY3JlYXRlUG9zdChwYXJlbnQsIGFyZ3MsIHsgcHJpc21hLCByZXF1ZXN0IH0sIGluZm8pIHtcclxuICAgIGNvbnN0IHVzZXJJZCA9IGdldFVzZXJJZChyZXF1ZXN0KTtcclxuICAgIHJldHVybiBwcmlzbWEubXV0YXRpb24uY3JlYXRlUG9zdCgge1xyXG4gICAgICBkYXRhOiB7XHJcbiAgICAgICAgdGl0bGU6IGFyZ3MuZGF0YS50aXRsZSxcclxuICAgICAgICBib2R5OiBhcmdzLmRhdGEuYm9keSxcclxuICAgICAgICBwdWJsaXNoZWQ6IGFyZ3MuZGF0YS5wdWJsaXNoZWQsXHJcbiAgICAgICAgYXV0aG9yOiB7XHJcbiAgICAgICAgICBjb25uZWN0OiB7XHJcbiAgICAgICAgICAgIGlkOiB1c2VySWRcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH0sIGluZm8pO1xyXG4gIH0sXHJcbiAgYXN5bmMgdXBkYXRlUG9zdChwYXJlbnQsIGFyZ3MsIHsgZGIsIHB1YnN1YiwgcHJpc21hLCByZXF1ZXN0IH0sIGluZm8pIHtcclxuICAgIGNvbnN0IHVzZXJJZCA9IGdldFVzZXJJZChyZXF1ZXN0KTtcclxuICAgIGNvbnN0IHBvc3RFeGlzdHMgPSBhd2FpdCBwcmlzbWEuZXhpc3RzLlBvc3Qoe1xyXG4gICAgICBpZDogYXJncy5pZCxcclxuICAgICAgYXV0aG9yOiB7XHJcbiAgICAgICAgaWQ6IHVzZXJJZFxyXG4gICAgICB9XHJcbiAgICB9KVxyXG4gICAgaWYgKCFwb3N0RXhpc3RzKVxyXG4gICAgICB0aHJvdyBuZXcgRXJyb3IgKFwiVXNlciBkb2VzIG5vdCBvd24gdGhlIHBvc3RcIik7XHJcbiAgICBpZiAoIWFyZ3MuZGF0YS5wdWJsaXNoZWQpIHtcclxuICAgICAgY29uc3QgaXNDb21tZW50RXhpc3QgPSBhd2FpdCBwcmlzbWEuZXhpc3RzLmNvbW1lbnRzKHt3aGVyZToge3Bvc3Q6IHtpZDogYXJncy5pZH19fSk7XHJcbiAgICAgIGlmIChpc0NvbW1lbnRFeGlzdClcclxuICAgICAgICBwcmlzbWEubXV0YXRpb24uZGVsZXRlTWFueUNvbW1lbnRzKHt3aGVyZToge3Bvc3Q6IHtpZDogYXJncy5pZH19fSk7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gYXdhaXQgcHJpc21hLm11dGF0aW9uLnVwZGF0ZVBvc3Qoe3doZXJlOiB7IGlkOiBhcmdzLmlkIH0sIGRhdGE6IGFyZ3MuZGF0YX0sIGluZm8pXHJcbiAgfSxcclxuICBhc3luYyBkZWxldGVQb3N0KHBhcmVudCwgYXJncywgeyBwdWJzdWIsIHJlcXVlc3QgfSwgaW5mbykge1xyXG4gICAgY29uc3QgdXNlcklkID0gZ2V0VWVzcklkKHJlcXVlc3QpO1xyXG4gICAgY29uc3QgcG9zdEV4aXN0cyA9IGF3YWl0IHByaXNtYS5leGlzdHMuUG9zdCh7XHJcbiAgICAgIGlkOiBhcmdzLmlkLFxyXG4gICAgICBhdXRob3I6IHtcclxuICAgICAgICBpZDogdXNlcklkXHJcbiAgICAgIH1cclxuICAgIH0pXHJcbiAgICBpZiAoIXBvc3RFeGlzdHMpXHJcbiAgICAgIHRocm93IG5ldyBFcnJvciAoXCJVc2VyIGRvZXMgbm90IG93biB0aGUgcG9zdFwiKTtcclxuICAgIHJldHVybiBwcmlzbWEubXV0YXRpb24uZGVsZXRlUG9zdCh7d2hlcmU6IHtpZDogYXJncy5pZH19LCBpbmZvICk7XHJcbiAgfSxcclxuICBhc3luYyBjcmVhdGVDb21tZW50KHBhcmVudCwgYXJncywgeyBkYiwgcHVic3ViLCBwcmlzbWEsIHJlcXVlc3QgfSwgaW5mbykge1xyXG4gICAgY29uc3QgcG9zdElkID0gYXJncy5kYXRhLnBvc3Q7XHJcbiAgICBjb25zdCBwb3N0ID0gYXdhaXQgcHJpc21hLnF1ZXJ5LnBvc3Qoe1xyXG4gICAgICB3aGVyZToge1xyXG4gICAgICAgIGlkOiBwb3N0SWRcclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgICBjb25zb2xlLmxvZyhwb3N0KTtcclxuICAgIGlmICghcG9zdC5wdWJsaXNoZWQpXHJcbiAgICAgIHRocm93IG5ldyBFcnJvcignUG9zdCBpcyBub3QgcHVibGlzaGVkJyk7XHJcbiAgICBjb25zdCB1c2VySWQgPSBnZXRVc2VySWQocmVxdWVzdCk7XHJcbiAgICByZXR1cm4gcHJpc21hLm11dGF0aW9uLmNyZWF0ZUNvbW1lbnQoe1xyXG4gICAgICBkYXRhOiB7XHJcbiAgICAgICAgdGV4dDogYXJncy5kYXRhLnRleHQsXHJcbiAgICAgICAgYXV0aG9yOiB7XHJcbiAgICAgICAgICBjb25uZWN0OiB7XHJcbiAgICAgICAgICAgIGlkOiB1c2VySWRcclxuICAgICAgICAgIH1cclxuICAgICAgICB9LFxyXG4gICAgICAgIHBvc3Q6IHtcclxuICAgICAgICAgIGNvbm5lY3Q6IHtcclxuICAgICAgICAgICAgaWQ6IGFyZ3MuZGF0YS5wb3N0XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9LCBpbmZvKTtcclxuICB9LFxyXG4gIGFzeW5jIHVwZGF0ZUNvbW1lbnQocGFyZW50LCBhcmdzLCB7IHB1YnN1YiwgcHJpc21hLCByZXF1ZXN0IH0sIGluZm8pIHtcclxuICAgIGNvbnN0IHVzZXJJZCA9IGdldFVzZXJJZChyZXF1ZXN0KTtcclxuICAgIGNvbnN0IGlzQ29tbWVudEV4aXN0ID0gcHJpc21hLmV4aXN0cy5Db21tZW50KHtcclxuICAgICAgaWQ6IGFyZ3MuaWQsXHJcbiAgICAgIGF1dGhvcjoge1xyXG4gICAgICAgIGlkOiB1c2VySWRcclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgICBpZiAoIWlzQ29tbWVudEV4aXN0KVxyXG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb21tZW50IGFjY2VzcyBhdXRoZW50aWNhdGlvbiBkZW5pZWRcIilcclxuICAgIHJldHVybiBwcmlzbWEubXV0YXRpb24udXBkYXRlQ29tbWVudCh7XHJcbiAgICAgIHdoZXJlOiB7XHJcbiAgICAgICAgaWQ6IGFyZ3MuaWRcclxuICAgICAgfSxcclxuICAgICAgZGF0YTogYXJncy5kYXRhXHJcbiAgICB9LCBpbmZvKTtcclxuICB9LFxyXG4gIGRlbGV0ZUNvbW1lbnQocGFyZW50LCBhcmdzLCB7IGRiLCBwcmlzbWEsIHJlcXVlc3QgfSwgaW5mbykge1xyXG4gICAgY29uc3QgdXNlcklkID0gZ2V0VXNlcklkKHJlcXVlc3QpO1xyXG4gICAgY29uc3QgaXNDb21tZW50RXhpc3QgPSBwcmlzbWEuZXhpc3RzLkNvbW1lbnQoe1xyXG4gICAgICBpZDogYXJncy5pZCxcclxuICAgICAgYXV0aG9yOiB7XHJcbiAgICAgICAgaWQ6IHVzZXJJZFxyXG4gICAgICB9XHJcbiAgICB9KTtcclxuICAgIGlmICghaXNDb21tZW50RXhpc3QpXHJcbiAgICAgIHRocm93IG5ldyBFcnJvcihcIkNvbW1lbnQgYWNjZXNzIGF1dGhlbnRpY2F0aW9uIGRlbmllZFwiKVxyXG4gICAgcmV0dXJuIHByaXNtYS5tdXRhdGlvbi5kZWxldGVDb21tZW50KHtcclxuICAgICAgd2hlcmU6IHtcclxuICAgICAgICBpZDogYXJncy5pZFxyXG4gICAgICB9XHJcbiAgICB9KTtcclxuICB9LFxyXG4gIGFzeW5jIGNoYW5nZVBhc3N3b3JkKHBhcmVudCwgYXJncywge3ByaXNtYSwgcmVxdWVzdH0sIGluZm8pIHtcclxuICAgIGNvbnN0IHVzZXJJZCA9IGdldFVzZXJJZChyZXF1ZXN0KTtcclxuICAgIGNvbnN0IG9sZFVzZXIgPSBhd2FpdCBwcmlzbWEucXVlcnkudXNlcih7d2hlcmU6IHtpZDogdXNlcklkfX0pO1xyXG4gICAgb2xkVXNlci5wYXNzd29yZCA9IGF3YWl0IGhhc2hQYXNzd29yZChhcmdzLnBhc3N3b3JkKTtcclxuICAgIGNvbnN0IHVzZXIgPSBhd2FpdCBwcmlzbWEubXV0YXRpb24udXBkYXRlVXNlcih7XHJcbiAgICAgIHdoZXJlOiB7IGlkOiB1c2VySWQgfSxcclxuICAgICAgZGF0YSA6IHsgcGFzc3dvcmQ6IG9sZFVzZXIucGFzc3dvcmQgfVxyXG4gICAgfSlcclxuICAgIHJldHVybiB1c2VyLnBhc3N3b3JkO1xyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IHsgTXV0YXRpb24gYXMgZGVmYXVsdCB9XHJcbiJdfQ==