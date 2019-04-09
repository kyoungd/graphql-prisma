import jwt from "jsonwebtoken";
import config from "../../config";
import bcrypt from "bcryptjs";

const getUserId = (request, requireAuth = true) => {
  const header = (request.request 
    ? request.request.headers.authorization       // queries and mutation
    : request.connection.context.Authorization);  // subscription
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
  return jwt.sign({userId}, config.secret, { expires: '30m' });
}

const hashPassword = async (password) => {
  return await bcrypt.hash(password, config.saltRound);
}

export { getUserId, makeToken, hashPassword }
