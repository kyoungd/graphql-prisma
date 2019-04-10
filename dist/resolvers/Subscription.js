"use strict";Object.defineProperty(exports, "__esModule", { value: true });exports.default = undefined;var _jwtToken = require("../utils/jwtToken");

var Subscription = {
  comment: {
    subscribe: function subscribe(parent, _ref, _ref2, info) {var postId = _ref.postId;var prisma = _ref2.prisma;
      return prisma.subscription.comment({
        where: {
          node: {
            post: {
              id: postId } } } },



      info);
    } },

  post: { // subscribe post of any user/author
    subscribe: function subscribe(parent, _ref3, _ref4, info) {var userId = _ref3.userId;var prisma = _ref4.prisma;
      return prisma.subscription.post({
        where: {
          node: {
            author: {
              id: userId } } } },



      info);
    } },

  mypost: { // subscribe to my post only
    subscribe: function subscribe(parent, args, _ref5, info) {var request = _ref5.request,prisma = _ref5.prisma;
      var userId = (0, _jwtToken.getUserId)(request);
      return prisma.subscription.post({
        where: {
          node: {
            author: {
              id: userId } } } },



      info);
    } } };exports.



default = Subscription;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9yZXNvbHZlcnMvU3Vic2NyaXB0aW9uLmpzIl0sIm5hbWVzIjpbIlN1YnNjcmlwdGlvbiIsImNvbW1lbnQiLCJzdWJzY3JpYmUiLCJwYXJlbnQiLCJpbmZvIiwicG9zdElkIiwicHJpc21hIiwic3Vic2NyaXB0aW9uIiwid2hlcmUiLCJub2RlIiwicG9zdCIsImlkIiwidXNlcklkIiwiYXV0aG9yIiwibXlwb3N0IiwiYXJncyIsInJlcXVlc3QiLCJkZWZhdWx0Il0sIm1hcHBpbmdzIjoidUdBQUE7O0FBRUEsSUFBTUEsZUFBZTtBQUNuQkMsV0FBUztBQUNQQyxhQURPLHFCQUNHQyxNQURILGVBQ21DQyxJQURuQyxFQUN5QyxLQUE1QkMsTUFBNEIsUUFBNUJBLE1BQTRCLEtBQWhCQyxNQUFnQixTQUFoQkEsTUFBZ0I7QUFDOUMsYUFBT0EsT0FBT0MsWUFBUCxDQUFvQk4sT0FBcEIsQ0FBNEI7QUFDakNPLGVBQU87QUFDTEMsZ0JBQU07QUFDSkMsa0JBQU07QUFDSkMsa0JBQUlOLE1BREEsRUFERixFQURELEVBRDBCLEVBQTVCOzs7O0FBUUpELFVBUkksQ0FBUDtBQVNELEtBWE0sRUFEVTs7QUFjbkJNLFFBQU0sRUFBUTtBQUNaUixhQURJLHFCQUNNQyxNQUROLGdCQUNzQ0MsSUFEdEMsRUFDNEMsS0FBNUJRLE1BQTRCLFNBQTVCQSxNQUE0QixLQUFoQk4sTUFBZ0IsU0FBaEJBLE1BQWdCO0FBQzlDLGFBQU9BLE9BQU9DLFlBQVAsQ0FBb0JHLElBQXBCLENBQXlCO0FBQzlCRixlQUFPO0FBQ0xDLGdCQUFNO0FBQ0pJLG9CQUFRO0FBQ05GLGtCQUFJQyxNQURFLEVBREosRUFERCxFQUR1QixFQUF6Qjs7OztBQVFKUixVQVJJLENBQVA7QUFTRCxLQVhHLEVBZGE7O0FBMkJuQlUsVUFBUSxFQUFNO0FBQ1paLGFBRE0scUJBQ0lDLE1BREosRUFDWVksSUFEWixTQUN1Q1gsSUFEdkMsRUFDNkMsS0FBekJZLE9BQXlCLFNBQXpCQSxPQUF5QixDQUFoQlYsTUFBZ0IsU0FBaEJBLE1BQWdCO0FBQ2pELFVBQU1NLFNBQVMseUJBQVVJLE9BQVYsQ0FBZjtBQUNBLGFBQU9WLE9BQU9DLFlBQVAsQ0FBb0JHLElBQXBCLENBQXlCO0FBQzlCRixlQUFPO0FBQ0xDLGdCQUFNO0FBQ0pJLG9CQUFRO0FBQ05GLGtCQUFJQyxNQURFLEVBREosRUFERCxFQUR1QixFQUF6Qjs7OztBQVFKUixVQVJJLENBQVA7QUFTRCxLQVpLLEVBM0JXLEVBQXJCLEM7Ozs7QUEyQ3lCYSxPLEdBQWhCakIsWSIsImZpbGUiOiJTdWJzY3JpcHRpb24uanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBnZXRVc2VySWQgfSBmcm9tIFwiLi4vdXRpbHMvand0VG9rZW5cIjtcclxuXHJcbmNvbnN0IFN1YnNjcmlwdGlvbiA9IHtcclxuICBjb21tZW50OiB7XHJcbiAgICBzdWJzY3JpYmUocGFyZW50LCB7IHBvc3RJZCB9LCB7IHByaXNtYSB9LCBpbmZvKSB7XHJcbiAgICAgIHJldHVybiBwcmlzbWEuc3Vic2NyaXB0aW9uLmNvbW1lbnQoe1xyXG4gICAgICAgIHdoZXJlOiB7XHJcbiAgICAgICAgICBub2RlOiB7XHJcbiAgICAgICAgICAgIHBvc3Q6IHtcclxuICAgICAgICAgICAgICBpZDogcG9zdElkXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgIH0sIGluZm8pO1xyXG4gICAgfVxyXG4gIH0sXHJcbiAgcG9zdDogeyAgICAgICAvLyBzdWJzY3JpYmUgcG9zdCBvZiBhbnkgdXNlci9hdXRob3JcclxuICAgIHN1YnNjcmliZShwYXJlbnQsIHsgdXNlcklkIH0sIHsgcHJpc21hIH0sIGluZm8pIHtcclxuICAgICAgcmV0dXJuIHByaXNtYS5zdWJzY3JpcHRpb24ucG9zdCh7XHJcbiAgICAgICAgd2hlcmU6IHtcclxuICAgICAgICAgIG5vZGU6IHtcclxuICAgICAgICAgICAgYXV0aG9yOiB7XHJcbiAgICAgICAgICAgICAgaWQ6IHVzZXJJZFxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICB9LCBpbmZvKTtcclxuICAgIH1cclxuICB9LFxyXG4gIG15cG9zdDogeyAgICAgLy8gc3Vic2NyaWJlIHRvIG15IHBvc3Qgb25seVxyXG4gICAgc3Vic2NyaWJlKHBhcmVudCwgYXJncywgeyByZXF1ZXN0LCBwcmlzbWEgfSwgaW5mbykge1xyXG4gICAgICBjb25zdCB1c2VySWQgPSBnZXRVc2VySWQocmVxdWVzdCk7XHJcbiAgICAgIHJldHVybiBwcmlzbWEuc3Vic2NyaXB0aW9uLnBvc3Qoe1xyXG4gICAgICAgIHdoZXJlOiB7XHJcbiAgICAgICAgICBub2RlOiB7XHJcbiAgICAgICAgICAgIGF1dGhvcjoge1xyXG4gICAgICAgICAgICAgIGlkOiB1c2VySWRcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgfSwgaW5mbyk7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgeyBTdWJzY3JpcHRpb24gYXMgZGVmYXVsdH0gIl19