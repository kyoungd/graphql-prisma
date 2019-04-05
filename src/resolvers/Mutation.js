import uuidv4 from 'uuid/v4';
import { pubsubPostName, pubsubCommentName } from '../util';

const Mutation = {
  async createUser(parent, args, { db, prisma }, info) {
    const isEmailTaken = await prisma.exists.User({email: args.data.email});
    if (isEmailTaken) {
      throw new Error('Email taken.');
    }
    // info is the return selection information
    return prisma.mutation.createUser({ data: args.data }, info);

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
