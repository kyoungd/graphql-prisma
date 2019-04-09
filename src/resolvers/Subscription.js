import { getUserId } from "../utils/jwtToken";

const Subscription = {
  comment: {
    subscribe(parent, { postId }, { prisma }, info) {
      return prisma.subscription.comment({
        where: {
          node: {
            post: {
              id: postId
            }
          }
        }
      }, info);
    }
  },
  post: {       // subscribe post of any user/author
    subscribe(parent, { userId }, { prisma }, info) {
      return prisma.subscription.post({
        where: {
          node: {
            author: {
              id: userId
            }
          }
        }
      }, info);
    }
  },
  mypost: {     // subscribe to my post only
    subscribe(parent, args, { request, prisma }, info) {
      const userId = getUserId(request);
      return prisma.subscription.post({
        where: {
          node: {
            author: {
              id: userId
            }
          }
        }
      }, info);
    }
  }
}

export { Subscription as default} 