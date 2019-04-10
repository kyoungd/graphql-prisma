npm install babel-cli@6.26.0 babel-preset-env@1.7.0
-- add .babelrc file to the root folder
{
  "presets": [
    "env"
  ]
}

-- update package.json to use babel to compile.  Add "start" line under "script"
  "scripts": {
    "start": "babel-node src/index.js",
    "test": "echo \"Error: no test specified\" && exit 1"

-- install graphql (all packages included in this bundle)
npm install graphql-yoga@1.16.7

-- use nodemon
    "start": "nodemon src/index.js --exec babel-node",

-- universal UID generator
npm install uuid@3.3.2

-- add spread operator (...) for babel
npm install babel-plugin-transform-object-rest-spread@6.26.0
-- add to .babelrc
  "plugins": [
    "transform-object-rest-spread"
  ]

-- update nodemon to work with graphql extension
    "start": "nodemon src/index.js --ext js,graphql --exec babel-node",

-- heroku postgre database
* login to dashboard
* Create new app (DDL [New])
* Create app (Button)
* Overvew (Viewtab)
* Installed all-ons -- Configure Add on
* Add-ons : type heroku Postgres -> follow through with pricing
* Settings (View tab)
* View Credentials
Host
ec2-54-225-113-7.compute-1.amazonaws.com
Database
d787ao62d8lc4s
User
mqdkubanoizqvl
Port
5432
Password
e5e56e9ff5f2bc2c1154a28e302690e667a43c8439f472eb89c5314bb7844dad
URI
postgres://mqdkubanoizqvl:e5e56e9ff5f2bc2c1154a28e302690e667a43c8439f472eb89c5314bb7844dad@ec2-54-225-113-7.compute-1.amazonaws.com:5432/d787ao62d8lc4s
Heroku CLI
heroku pg:psql postgresql-sinuous-26932 --app prisma-dev-server-young

-- Run aplications
VirtualBox
pgAdmin 4 v4
docker Quickstart Terminal

npm install -g prisma@1.12.0

-- new folder
prisma init prisma
* name of existing schema? schema.graphql     : standard name


make the following changes to the docker-compose.yml
            # remove schema
            ## schema: graphql.schema
            # add ssl
            ssl: true

export COMPOSE_TLS_VERSION=TLSv1_2

cd prisma
docker-compose up -d
prisma deploy

http://192.168.99.101:4466  (ip is the address of the docker machine)

* install primsa binding
npm install prisma-binding@2.1.1
* install graphql-cli.  use this to get graphql schema inside nodejs app
npm install graphql-cli@2.16.4
* create a file to execute graphql-cli and get the graphql schema, 
.graphqlconfig (in the root directory.  change its format to json.  and set json data.)
* add to package.json
    "get-schema": "graphql get-schema -p prisma"
npm run get-schema
npm start


* create another prisma folder
* in the prisma yml file, the last two directory is the name of the schema and project.  reviews/dev or reviews/qa
* the if there is nothing there, it is set to default/default
endpoint: http://192.168.99.101:4466/reviews/default
* graphql site address
http://192.168.99.101:4466/reviews/default

secure prisma server
./prisma/prisma.yml (add the following)
secret: cju02yv7faa2f0890ebmk64mi
cd prisma
prismay deploy
./src/prismajs (add the following)
secret: "cju02yv7faa2f0890ebmk64mi"

Make the local playground function despite locking down prisma server
In the Graphql Playground, HTTP HEADERS (bottom left)
{
  "Authorization": "Bearer {TOKEN}"
}
* how to get {TOKEN}
cd prisma
prisma token
-- copy the token into {TOKEN}

* Delete existing database
primsa delete
* reploy schema
primsa deploy
* by adding this, we can run "npm run get-schema"
        "prisma": "prisma/prisma.yml",
* generate a new schema file
npm get-schema

npm uninstall uuid
npm install bcryptjs@2.4.3
npm install jsonwebtoken@8.3.0

* Authorization schema - HTTP Header
{
  "Authorization":"Bearer {LOGIN-TOKEN} 
}
* Retrieve login token by executing a mutation.loginUser.


* PRODUCTION
https://www.prisma.io/cloud
Create An Account

Services - A single instance of Prisma.  You can have multiple.
Servers - Actual container for Prisma server.

- Choose Servers
[Add Server]
server name: young-generic-prisma-server
server description:  my generic prisma server

Host
ec2-23-21-136-232.compute-1.amazonaws.com
Database
d3tdjeo0vovcq
User
dqjffkfdzbqtcp
Port
5432
Password
2711bb2f4fbcce91af7090b2862711eae609c623f1adf86d9c4312907414587a
URI
postgres://dqjffkfdzbqtcp:2711bb2f4fbcce91af7090b2862711eae609c623f1adf86d9c4312907414587a@ec2-23-21-136-232.compute-1.amazonaws.com:5432/d3tdjeo0vovcq
Heroku CLI
heroku pg:psql postgresql-dimensional-24845 --app young-kwon-blogging-612f67c38c

- create config folder
- create dev.env and prod.env
- change deploy statement
prisma deploy -e ../config/dev.env
- setup production environment
prisma login
prisma deploy -e ../config/prod.env
- setup prod.env file with new endpoint
prisma deploy -e ../config/prod.env
- https://www.prisma.io/cloud

- install heroku cli
npm install -g heroku
heroku login
- update src/index.js - port
- update prisma.js - env variables (config/dev.env, config/prod.env)
- install env-cmd
npm install env-cmd@8.0.2
  "scripts": {
    "dev": "env-cmd ./config/dev.env nodemon src/index.js --ext js,graphql --exec babel-node",
- heroku postbuild (ran by heroku after the build, but before running).
- src (input folder) dist(output folder)
  "scripts": {
    "heroku-postbuild": "babel src --out-dir dist" --copy-files,
    
-- install babel/polyfill (run time babel extra we need)
npm install @babel/polyfill@7.0.0
-- add to src/index.js
import '@babel/@polyfill'

-- run app locally
   "start": "env-cmd ./config/prod.env node dist/index.js",
-- run app on heroku
   "start": "node dist/index.js",

* create app in heroku-cli
heroku create
heroku config:set ENV_VAR_NAME=ENV_VAR_VALUE
# example: heroku config:set PRISMA_ENDPOINT=https://young-kwon-blogging-612f67c38c.herokuapp.com/young-prisma-blog/prod
git remote -v
git push heroku master

* move sensitive information to environment variables
-- set it in a config file
PRISMA_SECRET=cju02yv7faa2f0890ebmk64mi
-- in prisma.yml
secret: ${env:PRISMA_SECRET}
-- set heroku environment variable
heroku config:set PRISMA_SECRET=cju02yv7faa2f0890ebmk64mi
heroku config
