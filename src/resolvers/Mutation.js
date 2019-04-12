import bcrypt from "bcryptjs";
import { makeToken, getUserId, hashPassword } from "../utils/jwtToken";

const Mutation = {
  async loginUser(parent, args, {prisma}, info) {
    const users = await prisma.query.users({ 
      where: {
        email: args.data.email
        } 
    });
    if (!users || users.length <= 0)
      throw new Error (' * username and password does not match 1');
    const user = users[0];
    // console.log('*********************************');
    // console.log(users);
    // console.log('*********************************');
    // console.log(args);
    // console.log('*********************************');
    const isMatch = await bcrypt.compare(args.data.password, user.password);
    if (isMatch) {
      return {
        user:user,
        token: makeToken(user.id)
      }
    }
    else
      throw new Error (errMsg + '* username and password does not match 2');
  },
  async createUser(parent, args, { db, prisma }, info) {
    if (args.data.password.length < 8) {
      throw new Error('Password must be 8 characters or longer');
    }

    const password = await hashPassword(args.data.password);
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
      token: makeToken(user.id)
    }
  },
  async deleteUser(parent, args, { prisma, request }, info) {
    const userId = getUserId(request);
    return prisma.mutation.deleteUser( { where: {
      id: userId} }, info );
  },
  async updateUser(parent, args, { prisma, request }, info) {
    const userId = getUserId(request);
    return prisma.mutation.updateUser( { where: 
      { id: userId },
      data: args.data
    }, info);
  },
  createPost(parent, args, { prisma, request }, info) {
    const userId = getUserId(request);
    return prisma.mutation.createPost( {
      data: {
        title: args.data.title,
        body: args.data.body,
        published: args.data.published,
        author: {
          connect: {
            id: userId
          }
        }
      }
    }, info);
  },
  async updatePost(parent, args, { db, pubsub, prisma, request }, info) {
    const userId = getUserId(request);
    const postExists = await prisma.exists.Post({
      id: args.id,
      author: {
        id: userId
      }
    })
    if (!postExists)
      throw new Error ("User does not own the post");
    if (!args.data.published) {
        prisma.mutation.deleteManyComments({where: {post: {id: args.id}}});
    }
    return await prisma.mutation.updatePost({where: { id: args.id }, data: args.data}, info)
  },
  async deletePost(parent, args, { pubsub, request }, info) {
    const userId = getUesrId(request);
    const postExists = await prisma.exists.Post({
      id: args.id,
      author: {
        id: userId
      }
    })
    if (!postExists)
      throw new Error ("User does not own the post");
    return prisma.mutation.deletePost({where: {id: args.id}}, info );
  },
  async createComment(parent, args, { db, pubsub, prisma, request }, info) {
    const postId = args.data.post;
    const post = await prisma.query.post({
      where: {
        id: postId
      }
    });
    if (!post.published)
      throw new Error('Post is not published');
    const userId = getUserId(request);
    return prisma.mutation.createComment({
      data: {
        text: args.data.text,
        author: {
          connect: {
            id: userId
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
  async updateComment(parent, args, { pubsub, prisma, request }, info) {
    const userId = getUserId(request);
    const isCommentExist = prisma.exists.Comment({
      id: args.id,
      author: {
        id: userId
      }
    });
    if (!isCommentExist)
      throw new Error("Comment access authentication denied")
    return prisma.mutation.updateComment({
      where: {
        id: args.id
      },
      data: args.data
    }, info);
  },
  deleteComment(parent, args, { db, prisma, request }, info) {
    const userId = getUserId(request);
    const isCommentExist = prisma.exists.Comment({
      id: args.id,
      author: {
        id: userId
      }
    });
    if (!isCommentExist)
      throw new Error("Comment access authentication denied")
    return prisma.mutation.deleteComment({
      where: {
        id: args.id
      }
    });
  },
  async changePassword(parent, args, {prisma, request}, info) {
    const userId = getUserId(request);
    const oldUser = await prisma.query.user({where: {id: userId}});
    oldUser.password = await hashPassword(args.password);
    const user = await prisma.mutation.updateUser({
      where: { id: userId },
      data : { password: oldUser.password }
    })
    return user.password;
  }
}

export { Mutation as default }
