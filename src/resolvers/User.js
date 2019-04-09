import { makeToken, getUserId } from "../utils/jwtToken";

const User = {
  email: {
    fragment: "fragment userId on User { id } ",
    resolve(parent, args, { request }, info ) {
      const userId = getUserId(request, false);

      // console.log('parent id: ', parent.id)
      if (userId && userId === parent.id)
        return parent.email;
      else
        return null;
    } 
  }
}


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

export { User as default }
