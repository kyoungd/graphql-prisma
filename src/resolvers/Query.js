const Query = {
  users(parent, args, { db, prisma }, info) {
    // opArgs.  Which operation does it support?
    // look under the shcema in the graphql browser for users: where, orderBy, skip, after, ...
    const opArgs = {}
    if (args.query) {
      opArgs.where = {
        // name_contains: args.query
        OR: [{
          name_contains: args.query
        }, {
          email_contains: args.query
        }]
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
  me(parent, args, { db }, info) {
    return {
      id: '123098',
      name: 'Jim',
      email: 'jim@email.com'
    }
  },
  posts(parent, args, { db, prisma }, info) {
    const opArgs = {};
    if (args.query) {
      opArgs.where = {
        OR: [{
          title_contains: args.query
        }, {
          body_contains: args.query
        }]
      }
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
  comments(parent, args, { db, prisma }, info) {
    const opArgs = {}
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
