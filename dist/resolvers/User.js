"use strict";Object.defineProperty(exports, "__esModule", { value: true });exports.default = undefined;var _jwtToken = require("../utils/jwtToken");

var User = {
  posts: {
    fragment: "fragment userId on User { id }",
    resolve: function resolve(parent, args, _ref, info) {var prisma = _ref.prisma;
      return prisma.query.posts({
        where: {
          published: true,
          author: {
            id: parent.id } } },


      info);
    } },

  email: {
    fragment: "fragment userId on User { id } ", // fragment (reserved word) userId (name, anything is good) on User (type) { id } (data item)
    resolve: function resolve(parent, args, _ref2, info) {var request = _ref2.request;
      var userId = (0, _jwtToken.getUserId)(request, false);

      // console.log('parent id: ', parent.id)
      if (userId && userId === parent.id)
      return parent.email;else

      return null;
    } }



  // const User = {
  //     // this is the metho that calls every time User query gets executed even if it
  //     // is a subquery return, like comment.User.
  //     email (parent, args, { request, prisma }, info) {
  //       const userId = getUserId(request, false);

  //     // console.log('parent id: ', parent.id)
  //     if (userId && userId === parent.id)
  //       return parent.email;
  //     else
  //       return null;
  //     } 
  //   // info - has all the information for relationsihp.
  //   // 
  //   // posts(parent, args, { db }, info) {
  //   //   return db.postList.filter((post) => {
  //   //     return post.author === parent.id
  //   //   })
  //   // }
  // }
};exports.
default = User;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9yZXNvbHZlcnMvVXNlci5qcyJdLCJuYW1lcyI6WyJVc2VyIiwicG9zdHMiLCJmcmFnbWVudCIsInJlc29sdmUiLCJwYXJlbnQiLCJhcmdzIiwiaW5mbyIsInByaXNtYSIsInF1ZXJ5Iiwid2hlcmUiLCJwdWJsaXNoZWQiLCJhdXRob3IiLCJpZCIsImVtYWlsIiwicmVxdWVzdCIsInVzZXJJZCIsImRlZmF1bHQiXSwibWFwcGluZ3MiOiJ1R0FBQTs7QUFFQSxJQUFNQSxPQUFPO0FBQ1hDLFNBQU87QUFDTEMsY0FBUyxnQ0FESjtBQUVMQyxXQUZLLG1CQUVHQyxNQUZILEVBRVdDLElBRlgsUUFFNkJDLElBRjdCLEVBRW1DLEtBQWhCQyxNQUFnQixRQUFoQkEsTUFBZ0I7QUFDdEMsYUFBT0EsT0FBT0MsS0FBUCxDQUFhUCxLQUFiLENBQW1CO0FBQ3hCUSxlQUFPO0FBQ0xDLHFCQUFXLElBRE47QUFFTEMsa0JBQVE7QUFDTkMsZ0JBQUlSLE9BQU9RLEVBREwsRUFGSCxFQURpQixFQUFuQjs7O0FBT0pOLFVBUEksQ0FBUDtBQVFELEtBWEksRUFESTs7QUFjWE8sU0FBTztBQUNMWCxjQUFVLGlDQURMLEVBQ3lDO0FBQzlDQyxXQUZLLG1CQUVHQyxNQUZILEVBRVdDLElBRlgsU0FFOEJDLElBRjlCLEVBRXFDLEtBQWxCUSxPQUFrQixTQUFsQkEsT0FBa0I7QUFDeEMsVUFBTUMsU0FBUyx5QkFBVUQsT0FBVixFQUFtQixLQUFuQixDQUFmOztBQUVBO0FBQ0EsVUFBSUMsVUFBVUEsV0FBV1gsT0FBT1EsRUFBaEM7QUFDRSxhQUFPUixPQUFPUyxLQUFkLENBREY7O0FBR0UsYUFBTyxJQUFQO0FBQ0gsS0FWSTs7OztBQWNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQS9DYSxDQUFiLEM7QUFpRGlCRyxPLEdBQVJoQixJIiwiZmlsZSI6IlVzZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBtYWtlVG9rZW4sIGdldFVzZXJJZCB9IGZyb20gXCIuLi91dGlscy9qd3RUb2tlblwiO1xyXG5cclxuY29uc3QgVXNlciA9IHtcclxuICBwb3N0czoge1xyXG4gICAgZnJhZ21lbnQ6XCJmcmFnbWVudCB1c2VySWQgb24gVXNlciB7IGlkIH1cIixcclxuICAgIHJlc29sdmUocGFyZW50LCBhcmdzLCB7IHByaXNtYSB9LCBpbmZvKSB7XHJcbiAgICAgIHJldHVybiBwcmlzbWEucXVlcnkucG9zdHMoe1xyXG4gICAgICAgIHdoZXJlOiB7XHJcbiAgICAgICAgICBwdWJsaXNoZWQ6IHRydWUsXHJcbiAgICAgICAgICBhdXRob3I6IHtcclxuICAgICAgICAgICAgaWQ6IHBhcmVudC5pZFxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgfSwgaW5mbyk7XHJcbiAgICB9XHJcbiAgfSxcclxuICBlbWFpbDoge1xyXG4gICAgZnJhZ21lbnQ6IFwiZnJhZ21lbnQgdXNlcklkIG9uIFVzZXIgeyBpZCB9IFwiLCAgLy8gZnJhZ21lbnQgKHJlc2VydmVkIHdvcmQpIHVzZXJJZCAobmFtZSwgYW55dGhpbmcgaXMgZ29vZCkgb24gVXNlciAodHlwZSkgeyBpZCB9IChkYXRhIGl0ZW0pXHJcbiAgICByZXNvbHZlKHBhcmVudCwgYXJncywgeyByZXF1ZXN0IH0sIGluZm8gKSB7XHJcbiAgICAgIGNvbnN0IHVzZXJJZCA9IGdldFVzZXJJZChyZXF1ZXN0LCBmYWxzZSk7XHJcblxyXG4gICAgICAvLyBjb25zb2xlLmxvZygncGFyZW50IGlkOiAnLCBwYXJlbnQuaWQpXHJcbiAgICAgIGlmICh1c2VySWQgJiYgdXNlcklkID09PSBwYXJlbnQuaWQpXHJcbiAgICAgICAgcmV0dXJuIHBhcmVudC5lbWFpbDtcclxuICAgICAgZWxzZVxyXG4gICAgICAgIHJldHVybiBudWxsO1xyXG4gICAgfSBcclxuICB9XHJcbn1cclxuXHJcbi8vIGNvbnN0IFVzZXIgPSB7XHJcbi8vICAgICAvLyB0aGlzIGlzIHRoZSBtZXRobyB0aGF0IGNhbGxzIGV2ZXJ5IHRpbWUgVXNlciBxdWVyeSBnZXRzIGV4ZWN1dGVkIGV2ZW4gaWYgaXRcclxuLy8gICAgIC8vIGlzIGEgc3VicXVlcnkgcmV0dXJuLCBsaWtlIGNvbW1lbnQuVXNlci5cclxuLy8gICAgIGVtYWlsIChwYXJlbnQsIGFyZ3MsIHsgcmVxdWVzdCwgcHJpc21hIH0sIGluZm8pIHtcclxuLy8gICAgICAgY29uc3QgdXNlcklkID0gZ2V0VXNlcklkKHJlcXVlc3QsIGZhbHNlKTtcclxuXHJcbi8vICAgICAvLyBjb25zb2xlLmxvZygncGFyZW50IGlkOiAnLCBwYXJlbnQuaWQpXHJcbi8vICAgICBpZiAodXNlcklkICYmIHVzZXJJZCA9PT0gcGFyZW50LmlkKVxyXG4vLyAgICAgICByZXR1cm4gcGFyZW50LmVtYWlsO1xyXG4vLyAgICAgZWxzZVxyXG4vLyAgICAgICByZXR1cm4gbnVsbDtcclxuLy8gICAgIH0gXHJcbi8vICAgLy8gaW5mbyAtIGhhcyBhbGwgdGhlIGluZm9ybWF0aW9uIGZvciByZWxhdGlvbnNpaHAuXHJcbi8vICAgLy8gXHJcbi8vICAgLy8gcG9zdHMocGFyZW50LCBhcmdzLCB7IGRiIH0sIGluZm8pIHtcclxuLy8gICAvLyAgIHJldHVybiBkYi5wb3N0TGlzdC5maWx0ZXIoKHBvc3QpID0+IHtcclxuLy8gICAvLyAgICAgcmV0dXJuIHBvc3QuYXV0aG9yID09PSBwYXJlbnQuaWRcclxuLy8gICAvLyAgIH0pXHJcbi8vICAgLy8gfVxyXG4vLyB9XHJcblxyXG5leHBvcnQgeyBVc2VyIGFzIGRlZmF1bHQgfVxyXG4iXX0=