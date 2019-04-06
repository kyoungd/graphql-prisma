import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import config from "../../config";

const Mutation = {
  async loginUser(parent, args, {prisma}, info) {
    const user = await prisma.query.user({ 
      where: {
        email: args.data.email
        } 
    });
    if (!user)
      throw new Error ('username and password does not match');
    const isMatch = await bcrypt.compare(args.data.password, user.password);
    const errMsg = "text"
    if (isMatch) {
      return {
        user:user,
        token: jwt.sign({userId: user.id}, config.secret)
      }
    }
    else
      throw new Error (errMsg + 'Username and password does not match');
  },
  async createUser(parent, args, { db, prisma }, info) {
    if (args.data.password.length < 8) {
      throw new Error('Password must be 8 characters or longer');
    }
    const password = await bcrypt.hash(args.data.password, config.saltRound);
    // info is the return selection information
    const user = prisma.mutation.createUser({ 
      data: {
        ...args.data,
        password
      }
    // }, info);  // remove info when returning custom data instead of returning prisma data
    });
    // this will make all fields scalar data type.npm
    // return user;
   
    return {
      user,
      token: jwt.sign({userId: user.id}, config.secret)
    }
  },
  async deleteUser(parent, args, { db, prisma }, info) {
    const isUserExist = await prisma.exists.User({id: args.id});
    if (!isUserExist) {
      throw new Error('This user does not exist');
    }
    return prisma.mutation.deleteUser( { where: {
      id: args.id} }, info );
  },
  async updateUser(parent, args, { db, prisma }, info) {
    const isUserExist = await prisma.exists.User({id: args.id});
    if (!isUserExist) {
      throw new Error('This user does not exist');
    }
    return prisma.mutation.updateUser( { where: {
      id: args.id },
      data: args.data
    }, info);
  },
  createPost(parent, args, { db, pubsub, prisma }, info) {
    return prisma.mutation.createPost( {
      data: {
        title: args.data.title,
        body: args.data.body,
        published: args.data.published,
        author: {
          connect: {
            id: args.data.author
          }
        }
      }
    }, info);
  },
  updatePost(parent, args, { db, pubsub, prisma }, info) {
    return prisma.mutation.updatePost({where: { id: args.id }, data: args.data}, info)
  },
  deletePost(parent, args, { db, pubsub }, info) {
    return prisma.mutation.deletePost({where: {id: args.id}}, info );
  },
  createComment(parent, args, { db, pubsub, prisma }, info) {
    return prisma.mutation.createComment({
      data: {
        text: args.data.text,
        author: {
          connect: {
            id: args.data.author
          }
        },
        post: {
          connect: {
            id: args.data.post
          }
        }
      }
    }, info);
  },
  updateComment(parent, args, { db, prisma }, info) {
    return prisma.mutation.updateComment({
      where: {
        id: args.id
      },
      data: args.data
    }, info);
  },
  deleteComment(parent, args, { db, prisma }, info) {
    return prisma.mutation.deleteComment({
      where: {
        id: args.id
      }
    });
  }
}

export { Mutation as default }
