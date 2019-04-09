import jwt from "jsonwebtoken";
import config from "../../config";

const getUserId = (request, requireAuth = true) => {
  const header = request.request.headers.authorization;
  if (header) {
    const token = header.replace("Bearer ", "");
    const decoded = jwt.verify(token, config.secret);
    return decoded.userId;
  }
  if (requireAuth)
    throw new Error("Authentication required.");
  // default action 
  return null
}

const makeToken = (userId) => {
  return jwt.sign({userId}, config.secret);
}

export { getUserId, makeToken }
