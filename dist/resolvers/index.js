'use strict';Object.defineProperty(exports, "__esModule", { value: true });exports.fragmentReplacements = exports.resolvers = undefined;var _prismaBinding = require('prisma-binding');
var _Query = require('./Query');var _Query2 = _interopRequireDefault(_Query);
var _Mutation = require('./Mutation');var _Mutation2 = _interopRequireDefault(_Mutation);
var _Comment = require('./Comment');var _Comment2 = _interopRequireDefault(_Comment);
var _Post = require('./Post');var _Post2 = _interopRequireDefault(_Post);
var _User = require('./User');var _User2 = _interopRequireDefault(_User);
var _Subscription = require('./Subscription');var _Subscription2 = _interopRequireDefault(_Subscription);function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}

var resolvers = {
  Query: _Query2.default,
  Mutation: _Mutation2.default,
  Subscription: _Subscription2.default,
  Comment: _Comment2.default,
  Post: _Post2.default,
  User: _User2.default };


var fragmentReplacements = (0, _prismaBinding.extractFragmentReplacements)(resolvers);exports.

resolvers = resolvers;exports.fragmentReplacements = fragmentReplacements;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9yZXNvbHZlcnMvaW5kZXguanMiXSwibmFtZXMiOlsicmVzb2x2ZXJzIiwiUXVlcnkiLCJNdXRhdGlvbiIsIlN1YnNjcmlwdGlvbiIsIkNvbW1lbnQiLCJQb3N0IiwiVXNlciIsImZyYWdtZW50UmVwbGFjZW1lbnRzIl0sIm1hcHBpbmdzIjoid0lBQUE7QUFDQSxnQztBQUNBLHNDO0FBQ0Esb0M7QUFDQSw4QjtBQUNBLDhCO0FBQ0EsOEM7O0FBRUEsSUFBTUEsWUFBWTtBQUNoQkMsd0JBRGdCO0FBRWhCQyw4QkFGZ0I7QUFHaEJDLHNDQUhnQjtBQUloQkMsNEJBSmdCO0FBS2hCQyxzQkFMZ0I7QUFNaEJDLHNCQU5nQixFQUFsQjs7O0FBU0EsSUFBTUMsdUJBQXVCLGdEQUE0QlAsU0FBNUIsQ0FBN0IsQzs7QUFFU0EsUyxHQUFBQSxTLFNBQVdPLG9CLEdBQUFBLG9CIiwiZmlsZSI6ImluZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgZXh0cmFjdEZyYWdtZW50UmVwbGFjZW1lbnRzIH0gZnJvbSAncHJpc21hLWJpbmRpbmcnO1xyXG5pbXBvcnQgUXVlcnkgZnJvbSAnLi9RdWVyeSc7XHJcbmltcG9ydCBNdXRhdGlvbiBmcm9tICcuL011dGF0aW9uJztcclxuaW1wb3J0IENvbW1lbnQgZnJvbSAnLi9Db21tZW50JztcclxuaW1wb3J0IFBvc3QgZnJvbSAnLi9Qb3N0JztcclxuaW1wb3J0IFVzZXIgZnJvbSAnLi9Vc2VyJztcclxuaW1wb3J0IFN1YnNjcmlwdGlvbiBmcm9tICcuL1N1YnNjcmlwdGlvbic7XHJcblxyXG5jb25zdCByZXNvbHZlcnMgPSB7XHJcbiAgUXVlcnksXHJcbiAgTXV0YXRpb24sXHJcbiAgU3Vic2NyaXB0aW9uLFxyXG4gIENvbW1lbnQsXHJcbiAgUG9zdCxcclxuICBVc2VyICBcclxufVxyXG5cclxuY29uc3QgZnJhZ21lbnRSZXBsYWNlbWVudHMgPSBleHRyYWN0RnJhZ21lbnRSZXBsYWNlbWVudHMocmVzb2x2ZXJzKTtcclxuXHJcbmV4cG9ydCB7IHJlc29sdmVycywgZnJhZ21lbnRSZXBsYWNlbWVudHMgfVxyXG4iXX0=