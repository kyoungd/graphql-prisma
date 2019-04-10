'use strict';Object.defineProperty(exports, "__esModule", { value: true });
var userList = [{
  id: '1',
  name: 'James',
  email: 'kirk@enterprise.com',
  age: 34 },

{
  id: '2',
  name: 'Sarah',
  email: 'sarah@enterprise.com',
  age: 24 },

{
  id: '3',
  name: 'Spock',
  email: 'spock@enterprise.com',
  age: 94 }];


var postList = [
{
  id: "1",
  title: "hitchhiker's guide to the galaxy",
  body: "See the galaxy.  Hitchhike and make friends.",
  published: true,
  author: "1" },

{
  id: "2",
  title: "restaurant at the end of the universe",
  body: "See the galaxy.  Hitchhike and make friends.",
  published: true,
  author: "2" },

{
  id: "3",
  title: "life, universe and everything",
  body: "See the galaxy.  Hitchhike and make friends.",
  published: true,
  author: "3" },

{
  id: "4",
  title: "So long and thanks for all the fish",
  body: "See the galaxy.  Hitchhike and make friends.",
  published: true,
  author: "3" }];



var commentList = [
{ id: "1", text: "nice.", entry: "1" },
{ id: "2", text: "ditto.", entry: "1" },
{ id: "3", text: "cool.", entry: "2" },
{ id: "4", text: "excellent.", entry: "2" },
{ id: "5", text: "awesome.", entry: "3" },
{ id: "6", text: "fine.", entry: "3" },
{ id: "7", text: "impressive.", entry: "4" },
{ id: "8", text: "wow.", entry: "4" }];


var db = {
  userList: userList,
  postList: postList,
  commentList: commentList };exports.


default = db;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9kYi5qcyJdLCJuYW1lcyI6WyJ1c2VyTGlzdCIsImlkIiwibmFtZSIsImVtYWlsIiwiYWdlIiwicG9zdExpc3QiLCJ0aXRsZSIsImJvZHkiLCJwdWJsaXNoZWQiLCJhdXRob3IiLCJjb21tZW50TGlzdCIsInRleHQiLCJlbnRyeSIsImRiIiwiZGVmYXVsdCJdLCJtYXBwaW5ncyI6IjtBQUNBLElBQU1BLFdBQVcsQ0FBQztBQUNoQkMsTUFBSSxHQURZO0FBRWhCQyxRQUFNLE9BRlU7QUFHaEJDLFNBQU8scUJBSFM7QUFJaEJDLE9BQUssRUFKVyxFQUFEOztBQU1qQjtBQUNFSCxNQUFJLEdBRE47QUFFRUMsUUFBTSxPQUZSO0FBR0VDLFNBQU8sc0JBSFQ7QUFJRUMsT0FBSyxFQUpQLEVBTmlCOztBQVlqQjtBQUNFSCxNQUFJLEdBRE47QUFFRUMsUUFBTSxPQUZSO0FBR0VDLFNBQU8sc0JBSFQ7QUFJRUMsT0FBSyxFQUpQLEVBWmlCLENBQWpCOzs7QUFtQkEsSUFBTUMsV0FBVztBQUNqQjtBQUNFSixNQUFJLEdBRE47QUFFRUssU0FBTyxrQ0FGVDtBQUdFQyxRQUFNLDhDQUhSO0FBSUVDLGFBQVcsSUFKYjtBQUtFQyxVQUFRLEdBTFYsRUFEaUI7O0FBUWpCO0FBQ0VSLE1BQUksR0FETjtBQUVFSyxTQUFPLHVDQUZUO0FBR0VDLFFBQU0sOENBSFI7QUFJRUMsYUFBVyxJQUpiO0FBS0VDLFVBQVEsR0FMVixFQVJpQjs7QUFlakI7QUFDRVIsTUFBSSxHQUROO0FBRUVLLFNBQU8sK0JBRlQ7QUFHRUMsUUFBTSw4Q0FIUjtBQUlFQyxhQUFXLElBSmI7QUFLRUMsVUFBUSxHQUxWLEVBZmlCOztBQXNCakI7QUFDRVIsTUFBSSxHQUROO0FBRUVLLFNBQU8scUNBRlQ7QUFHRUMsUUFBTSw4Q0FIUjtBQUlFQyxhQUFXLElBSmI7QUFLRUMsVUFBUSxHQUxWLEVBdEJpQixDQUFqQjs7OztBQStCQSxJQUFNQyxjQUFjO0FBQ2xCLEVBQUNULElBQUksR0FBTCxFQUFVVSxNQUFNLE9BQWhCLEVBQXlCQyxPQUFPLEdBQWhDLEVBRGtCO0FBRWxCLEVBQUNYLElBQUksR0FBTCxFQUFVVSxNQUFNLFFBQWhCLEVBQTBCQyxPQUFPLEdBQWpDLEVBRmtCO0FBR2xCLEVBQUNYLElBQUksR0FBTCxFQUFVVSxNQUFNLE9BQWhCLEVBQXlCQyxPQUFPLEdBQWhDLEVBSGtCO0FBSWxCLEVBQUNYLElBQUksR0FBTCxFQUFVVSxNQUFNLFlBQWhCLEVBQThCQyxPQUFPLEdBQXJDLEVBSmtCO0FBS2xCLEVBQUNYLElBQUksR0FBTCxFQUFVVSxNQUFNLFVBQWhCLEVBQTRCQyxPQUFPLEdBQW5DLEVBTGtCO0FBTWxCLEVBQUNYLElBQUksR0FBTCxFQUFVVSxNQUFNLE9BQWhCLEVBQXlCQyxPQUFPLEdBQWhDLEVBTmtCO0FBT2xCLEVBQUNYLElBQUksR0FBTCxFQUFVVSxNQUFNLGFBQWhCLEVBQStCQyxPQUFPLEdBQXRDLEVBUGtCO0FBUWxCLEVBQUNYLElBQUksR0FBTCxFQUFVVSxNQUFNLE1BQWhCLEVBQXdCQyxPQUFPLEdBQS9CLEVBUmtCLENBQXBCOzs7QUFXQSxJQUFNQyxLQUFLO0FBQ1RiLG9CQURTO0FBRVRLLG9CQUZTO0FBR1RLLDBCQUhTLEVBQVgsQzs7O0FBTWVJLE8sR0FBTkQsRSIsImZpbGUiOiJkYi5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG5jb25zdCB1c2VyTGlzdCA9IFt7XHJcbiAgaWQ6ICcxJyxcclxuICBuYW1lOiAnSmFtZXMnLFxyXG4gIGVtYWlsOiAna2lya0BlbnRlcnByaXNlLmNvbScsXHJcbiAgYWdlOiAzNFxyXG59LFxyXG57XHJcbiAgaWQ6ICcyJyxcclxuICBuYW1lOiAnU2FyYWgnLFxyXG4gIGVtYWlsOiAnc2FyYWhAZW50ZXJwcmlzZS5jb20nLFxyXG4gIGFnZTogMjRcclxufSxcclxue1xyXG4gIGlkOiAnMycsXHJcbiAgbmFtZTogJ1Nwb2NrJyxcclxuICBlbWFpbDogJ3Nwb2NrQGVudGVycHJpc2UuY29tJyxcclxuICBhZ2U6IDk0XHJcbn1dXHJcblxyXG5jb25zdCBwb3N0TGlzdCA9IFtcclxue1xyXG4gIGlkOiBcIjFcIixcclxuICB0aXRsZTogXCJoaXRjaGhpa2VyJ3MgZ3VpZGUgdG8gdGhlIGdhbGF4eVwiLFxyXG4gIGJvZHk6IFwiU2VlIHRoZSBnYWxheHkuICBIaXRjaGhpa2UgYW5kIG1ha2UgZnJpZW5kcy5cIixcclxuICBwdWJsaXNoZWQ6IHRydWUsXHJcbiAgYXV0aG9yOiBcIjFcIixcclxufSxcclxue1xyXG4gIGlkOiBcIjJcIixcclxuICB0aXRsZTogXCJyZXN0YXVyYW50IGF0IHRoZSBlbmQgb2YgdGhlIHVuaXZlcnNlXCIsXHJcbiAgYm9keTogXCJTZWUgdGhlIGdhbGF4eS4gIEhpdGNoaGlrZSBhbmQgbWFrZSBmcmllbmRzLlwiLFxyXG4gIHB1Ymxpc2hlZDogdHJ1ZSxcclxuICBhdXRob3I6IFwiMlwiLFxyXG59LFxyXG57XHJcbiAgaWQ6IFwiM1wiLFxyXG4gIHRpdGxlOiBcImxpZmUsIHVuaXZlcnNlIGFuZCBldmVyeXRoaW5nXCIsXHJcbiAgYm9keTogXCJTZWUgdGhlIGdhbGF4eS4gIEhpdGNoaGlrZSBhbmQgbWFrZSBmcmllbmRzLlwiLFxyXG4gIHB1Ymxpc2hlZDogdHJ1ZSxcclxuICBhdXRob3I6IFwiM1wiLFxyXG59LFxyXG57XHJcbiAgaWQ6IFwiNFwiLFxyXG4gIHRpdGxlOiBcIlNvIGxvbmcgYW5kIHRoYW5rcyBmb3IgYWxsIHRoZSBmaXNoXCIsXHJcbiAgYm9keTogXCJTZWUgdGhlIGdhbGF4eS4gIEhpdGNoaGlrZSBhbmQgbWFrZSBmcmllbmRzLlwiLFxyXG4gIHB1Ymxpc2hlZDogdHJ1ZSxcclxuICBhdXRob3I6IFwiM1wiLFxyXG59XHJcbl1cclxuXHJcbmNvbnN0IGNvbW1lbnRMaXN0ID0gW1xyXG4gIHtpZDogXCIxXCIsIHRleHQ6IFwibmljZS5cIiwgZW50cnk6IFwiMVwiIH0sXHJcbiAge2lkOiBcIjJcIiwgdGV4dDogXCJkaXR0by5cIiwgZW50cnk6IFwiMVwiIH0sXHJcbiAge2lkOiBcIjNcIiwgdGV4dDogXCJjb29sLlwiLCBlbnRyeTogXCIyXCIgfSxcclxuICB7aWQ6IFwiNFwiLCB0ZXh0OiBcImV4Y2VsbGVudC5cIiwgZW50cnk6IFwiMlwiIH0sXHJcbiAge2lkOiBcIjVcIiwgdGV4dDogXCJhd2Vzb21lLlwiLCBlbnRyeTogXCIzXCIgfSxcclxuICB7aWQ6IFwiNlwiLCB0ZXh0OiBcImZpbmUuXCIsIGVudHJ5OiBcIjNcIiB9LFxyXG4gIHtpZDogXCI3XCIsIHRleHQ6IFwiaW1wcmVzc2l2ZS5cIiwgZW50cnk6IFwiNFwiIH0sXHJcbiAge2lkOiBcIjhcIiwgdGV4dDogXCJ3b3cuXCIsIGVudHJ5OiBcIjRcIiB9XHJcbl1cclxuXHJcbmNvbnN0IGRiID0ge1xyXG4gIHVzZXJMaXN0LFxyXG4gIHBvc3RMaXN0LFxyXG4gIGNvbW1lbnRMaXN0LFxyXG59XHJcblxyXG5leHBvcnQgeyBkYiBhcyBkZWZhdWx0IH1cclxuIl19