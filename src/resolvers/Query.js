import { makeToken, getUserId } from "../utils/jwtToken";

const Query = {
  users(parent, args, { db, prisma }, info) {
    // opArgs.  Which operation does it support?
    // look under the shcema in the graphql browser for users: where, orderBy, skip, after, ...
    const opArgs = {
      first: args.first,
      skip: args.skip,
      after: args.after,
      orderBy: args.orderBy
    }
    if (args.query) {
      opArgs.where = {
        name_contains: args.query
        // name_contains: args.query
        // OR: [{
        //   name_contains: args.query
        // }, {
        //   email_contains: args.query
        // }]
      }
    }

    // second parameter can be null, string or object;
    // info - it has original information of the GraphQL request
    return prisma.query.users(opArgs, info);

    // if (!args.query) {
    //   return db.userList;
    // }
    // return db.userList.filter((user) => {
    //   return user.name.toLowerCase().includes(args.query.toLowerCase())
    // });
  },
  me(parent, args, { db, prisma, request }, info) {
    const userId = getUserId(request);
    return prisma.query.user({where: {id: userId}});
  },
  posts(parent, args, { db, prisma, request }, info) {
    const opArgs = {
      first: args.first,
      skip: args.skip,
      after: args.after,
      orderBy: args.orderBy
    }
    const userId = getUserId(request, false);
    if (userId)
      opArgs.where = {
        author: {
          id: userId
        }
      };
    else
      opArgs.where = {
        published: true
      };
    if (args.query) {
      opArgs.where.OR = [{
          title_contains: args.query
        }, {
          body_contains: args.query
        }]
    }
    // second parameter can be null, string or object;
    // info - it has original information of the GraphQL request
    return prisma.query.posts(opArgs, info);
    // if (!args.query) {
    //   return db.postList;
    // }
    // return db.postList.filter((post)=> {
    //   return post.title.toLowerCase().includes(args.query.toLowerCase());
    // });
  },
  async post(parent, args, { prisma, request }, info) {
    const userId = getUserId(request, false);
    const opArgs = {};
    if (args.query) {
      opArgs.where = {
        id: args.id,
        OR: [{
          published: true
        },
        {
          author: {
            id: userId
          }
        }]
      }
    }
    const posts = await prisma.query.posts(opArgs, info);
    if (posts.length <= 0)
      throw new Error ("Post not found.");
    return posts[0];
  },
  comments(parent, args, { db, prisma }, info) {
    const opArgs = {
      first: args.first,
      skip: args.skip,
      after: args.after,
      orderBy: args.orderBy
    }
    if (args.query) {
      opArgs.where = {
        text_contains: args.query
      }
    }
    return prisma.query.comments(opArgs, info);
    // return db.commentList;
  }
}

export { Query as default }
