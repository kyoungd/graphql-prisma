"use strict";Object.defineProperty(exports, "__esModule", { value: true });exports.hashPassword = exports.makeToken = exports.getUserId = undefined;var _jsonwebtoken = require("jsonwebtoken");var _jsonwebtoken2 = _interopRequireDefault(_jsonwebtoken);
var _config = require("../../config");var _config2 = _interopRequireDefault(_config);
var _bcryptjs = require("bcryptjs");var _bcryptjs2 = _interopRequireDefault(_bcryptjs);function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}function _asyncToGenerator(fn) {return function () {var gen = fn.apply(this, arguments);return new Promise(function (resolve, reject) {function step(key, arg) {try {var info = gen[key](arg);var value = info.value;} catch (error) {reject(error);return;}if (info.done) {resolve(value);} else {return Promise.resolve(value).then(function (value) {step("next", value);}, function (err) {step("throw", err);});}}return step("next");});};}

var getUserId = function getUserId(request) {var requireAuth = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
  var header = request.request ?
  request.request.headers.authorization // queries and mutation
  : request.connection.context.Authorization; // subscription
  if (header) {
    var token = header.replace("Bearer ", "");
    var decoded = _jsonwebtoken2.default.verify(token, _config2.default.secret);
    return decoded.userId;
  }
  if (requireAuth)
  throw new Error("Authentication required.");
  // default action 
  return null;
};

var makeToken = function makeToken(userId) {
  return _jsonwebtoken2.default.sign({ userId: userId }, _config2.default.secret, { expires: '30m' });
};

var hashPassword = function () {var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(password) {return regeneratorRuntime.wrap(function _callee$(_context) {while (1) {switch (_context.prev = _context.next) {case 0:_context.next = 2;return (
              _bcryptjs2.default.hash(password, _config2.default.saltRound));case 2:return _context.abrupt("return", _context.sent);case 3:case "end":return _context.stop();}}}, _callee, undefined);}));return function hashPassword(_x2) {return _ref.apply(this, arguments);};}();exports.


getUserId = getUserId;exports.makeToken = makeToken;exports.hashPassword = hashPassword;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy91dGlscy9qd3RUb2tlbi5qcyJdLCJuYW1lcyI6WyJnZXRVc2VySWQiLCJyZXF1ZXN0IiwicmVxdWlyZUF1dGgiLCJoZWFkZXIiLCJoZWFkZXJzIiwiYXV0aG9yaXphdGlvbiIsImNvbm5lY3Rpb24iLCJjb250ZXh0IiwiQXV0aG9yaXphdGlvbiIsInRva2VuIiwicmVwbGFjZSIsImRlY29kZWQiLCJqd3QiLCJ2ZXJpZnkiLCJjb25maWciLCJzZWNyZXQiLCJ1c2VySWQiLCJFcnJvciIsIm1ha2VUb2tlbiIsInNpZ24iLCJleHBpcmVzIiwiaGFzaFBhc3N3b3JkIiwicGFzc3dvcmQiLCJiY3J5cHQiLCJoYXNoIiwic2FsdFJvdW5kIl0sIm1hcHBpbmdzIjoib0pBQUEsNEM7QUFDQSxzQztBQUNBLG9DOztBQUVBLElBQU1BLFlBQVksU0FBWkEsU0FBWSxDQUFDQyxPQUFELEVBQWlDLEtBQXZCQyxXQUF1Qix1RUFBVCxJQUFTO0FBQ2pELE1BQU1DLFNBQVVGLFFBQVFBLE9BQVI7QUFDWkEsVUFBUUEsT0FBUixDQUFnQkcsT0FBaEIsQ0FBd0JDLGFBRFosQ0FDZ0M7QUFEaEMsSUFFWkosUUFBUUssVUFBUixDQUFtQkMsT0FBbkIsQ0FBMkJDLGFBRi9CLENBRGlELENBR0Q7QUFDaEQsTUFBSUwsTUFBSixFQUFZO0FBQ1YsUUFBTU0sUUFBUU4sT0FBT08sT0FBUCxDQUFlLFNBQWYsRUFBMEIsRUFBMUIsQ0FBZDtBQUNBLFFBQU1DLFVBQVVDLHVCQUFJQyxNQUFKLENBQVdKLEtBQVgsRUFBa0JLLGlCQUFPQyxNQUF6QixDQUFoQjtBQUNBLFdBQU9KLFFBQVFLLE1BQWY7QUFDRDtBQUNELE1BQUlkLFdBQUo7QUFDRSxRQUFNLElBQUllLEtBQUosQ0FBVSwwQkFBVixDQUFOO0FBQ0Y7QUFDQSxTQUFPLElBQVA7QUFDRCxDQWJEOztBQWVBLElBQU1DLFlBQVksU0FBWkEsU0FBWSxDQUFDRixNQUFELEVBQVk7QUFDNUIsU0FBT0osdUJBQUlPLElBQUosQ0FBUyxFQUFDSCxjQUFELEVBQVQsRUFBbUJGLGlCQUFPQyxNQUExQixFQUFrQyxFQUFFSyxTQUFTLEtBQVgsRUFBbEMsQ0FBUDtBQUNELENBRkQ7O0FBSUEsSUFBTUMsK0ZBQWUsaUJBQU9DLFFBQVA7QUFDTkMsaUNBQU9DLElBQVAsQ0FBWUYsUUFBWixFQUFzQlIsaUJBQU9XLFNBQTdCLENBRE0sNEhBQWYsOEVBQU4sQzs7O0FBSVN6QixTLEdBQUFBLFMsU0FBV2tCLFMsR0FBQUEsUyxTQUFXRyxZLEdBQUFBLFkiLCJmaWxlIjoiand0VG9rZW4uanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgand0IGZyb20gXCJqc29ud2VidG9rZW5cIjtcclxuaW1wb3J0IGNvbmZpZyBmcm9tIFwiLi4vLi4vY29uZmlnXCI7XHJcbmltcG9ydCBiY3J5cHQgZnJvbSBcImJjcnlwdGpzXCI7XHJcblxyXG5jb25zdCBnZXRVc2VySWQgPSAocmVxdWVzdCwgcmVxdWlyZUF1dGggPSB0cnVlKSA9PiB7XHJcbiAgY29uc3QgaGVhZGVyID0gKHJlcXVlc3QucmVxdWVzdCBcclxuICAgID8gcmVxdWVzdC5yZXF1ZXN0LmhlYWRlcnMuYXV0aG9yaXphdGlvbiAgICAgICAvLyBxdWVyaWVzIGFuZCBtdXRhdGlvblxyXG4gICAgOiByZXF1ZXN0LmNvbm5lY3Rpb24uY29udGV4dC5BdXRob3JpemF0aW9uKTsgIC8vIHN1YnNjcmlwdGlvblxyXG4gIGlmIChoZWFkZXIpIHtcclxuICAgIGNvbnN0IHRva2VuID0gaGVhZGVyLnJlcGxhY2UoXCJCZWFyZXIgXCIsIFwiXCIpO1xyXG4gICAgY29uc3QgZGVjb2RlZCA9IGp3dC52ZXJpZnkodG9rZW4sIGNvbmZpZy5zZWNyZXQpO1xyXG4gICAgcmV0dXJuIGRlY29kZWQudXNlcklkO1xyXG4gIH1cclxuICBpZiAocmVxdWlyZUF1dGgpXHJcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJBdXRoZW50aWNhdGlvbiByZXF1aXJlZC5cIik7XHJcbiAgLy8gZGVmYXVsdCBhY3Rpb24gXHJcbiAgcmV0dXJuIG51bGxcclxufVxyXG5cclxuY29uc3QgbWFrZVRva2VuID0gKHVzZXJJZCkgPT4ge1xyXG4gIHJldHVybiBqd3Quc2lnbih7dXNlcklkfSwgY29uZmlnLnNlY3JldCwgeyBleHBpcmVzOiAnMzBtJyB9KTtcclxufVxyXG5cclxuY29uc3QgaGFzaFBhc3N3b3JkID0gYXN5bmMgKHBhc3N3b3JkKSA9PiB7XHJcbiAgcmV0dXJuIGF3YWl0IGJjcnlwdC5oYXNoKHBhc3N3b3JkLCBjb25maWcuc2FsdFJvdW5kKTtcclxufVxyXG5cclxuZXhwb3J0IHsgZ2V0VXNlcklkLCBtYWtlVG9rZW4sIGhhc2hQYXNzd29yZCB9XHJcbiJdfQ==