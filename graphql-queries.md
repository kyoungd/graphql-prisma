mutation {
  createUser (data: {
    name: "JK Rowlins"
    email: "jk1@hp.com"
    password: "onetwothree"
  }) {
    user {
      id
    	name
    	email
    }
    token
  }
}

query {
  users {
    id
    name
    email
  }
}

query {
  comments {
    id
    text
    author {
      name
      email
    }
  }
}

mutation {
  updatePost (id: "cju2tt0zt000j0890pilkgor1", data: {
    body: "is this book the greatest sci-fi ever?  Yes."
  }) {
    id
    title
    body
    author {
      id
      name
    }
  }
}

mutation {
  createComment(data: {
    text: "New Comment 2. Great book.  Love it."
    author: "cju02yv7f002f0890ebmk64mi"
    post: "cju2tt0zt000j0890pilkgor1"
  }) {
    id
    text
    author {
      name
    }
    post {
      title
    }
  }
}

mutation {
  updateComment (id: "cju2w9xcj001x0890xz25226o", data: {text: "Update 1"})
  {
    id
    text
    author {
      name
      email
    }
  }
}

mutation {
  createPost(
    data: {
      title: "Harry Potter and the Secret Chamber"
      body: " 2 of 7 books "
      published: true
    }
  ) {
    id
    title
    body
    published
    author {
      id
      name
    }
  }
}

mutation {
  deleteComment(id: "cju371il3005d0890pssc8evd") {
    id
    text
  }
}

subscription {
  comment(postId: "cju2tt0zt000j0890pilkgor1") {
    mutation
		node {
      id
      text
    }    
  }
}

mutation {
  updatePost (id: "cju2tt0zt000j0890pilkgor1", data: {
    body: "is this book the greatest sci-fi ever?  Yes."
  }) {
    id
    title
    body
    author {
      id
      name
    }
  }
}

mutation {
  loginUser (data: {
    email: "jk2@hp.com"
    password: "onetwothree"
  }) {
    user {
      id
      name
      email
    }
    token
  }
}

mutation {
  updateUser(data: {
    name: "JK Rowlin"
  }) {
    id
    name
    email
  }
}

* authorization for user.  user token is unique.
{
"Authorization":"Bearer "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiJjanU0a3BwM2UwMDBxMDg5MGE1ZTVmaGo3IiwiaWF0IjoxNTU0NzQxNzI1fQ.Kcbymj-NgC4E8ZFa96xY2OrtG-I_ydYeZjnQTUWDpwU"
}

* authorization token for the docker prisma server
{
  "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJkYXRhIjp7InNlcnZpY2UiOiJkZWZhdWx0QGRlZmF1bHQiLCJyb2xlcyI6WyJhZG1pbiJdfSwiaWF0IjoxNTU0NDE3NjAzLCJleHAiOjE1NTUwMjI0MDN9.4YXIk9LhMrTFlNL2PE6isuqxjSAM12i0Wmc1R4EsZsk"
}

mutation {
	createComment (data: {
    text: "It is great."
    post: "cju8kkboh00060890cdhvj99g"
  })
  {
    id
    text
  }
}

mutation {
  deleteComment(id: "cju8ojw30001m0890x838s7z3") {
    id
    text
  }
}
