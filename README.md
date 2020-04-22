# GraphQL Apollo Server Example

This example shows how to implement a **GraphQL server with JavaScript (Node.js)** based on  [Prisma Client](https://github.com/prisma/prisma2/blob/master/docs/prisma-client-js/api.md), [apollo-server](https://www.apollographql.com/docs/apollo-server/), PostgreSQL, and [GraphQL Nexus](https://nexus.js.org/). 

## How to use

### 1. Download example & install dependencies

Install npm dependencies:

```
cd into project
npm install
```

### 2. Run each npm script in package.json

```
npm run launchDocker
npm run createDB
npm run generate
npm run postinstall
npm run seed
npm run dev
```
In another terminal tab run

```
npm run start
```

### 3. Open in browser

* Navigate to [http://localhost:4000](http://localhost:4000) in your browser to explore the GraphQL Playground.
* Then navigate to [http://localhost:5555](http://localhost:5555) in your broswer to view Prisma Studio.

### Prisma as your data modeling tool
* [See Prisma Code](https://github.com/juliannehalversen/dgm4790-graphql-server/tree/master/prisma)

### Docker-based PostgreSQL, MySQL, or MongoDB as your data store
* [See Postgres in scripts](https://github.com/juliannehalversen/dgm4790-graphql-server/blob/master/package.json)

### At least 3 Query resolvers to get data from your server
#### * The id's in all queries and mutations are provided for a premade person for easy testing.  

#### Get all People
```graphql
query getAllPeople {
  People {
    id
    updatedAt
    name
    age
	}
}
```

#### Get a single Person
```graphql
query getPerson {
  Person (id: "ck8hvilvm0003xh14cgqfng3r") {
    name
    age
  }
}
```

#### Filter people based on a searchstring
```graphql
query filterPeople {
  filterPeople (searchstring: "100") {
    name
    age
  }
}
```

### At least 2 Mutation resolvers allowing users to create, update, or upsert an item.

#### Create Person
 ```graphql
mutation createPerson {
  createPerson(
    name:"New Person Example", 
    age: 0
  ) {
    id,
    updatedAt,
    name
    age
  }
}
```
#### Update Person
```graphql
mutation updatePerson {
  updatePerson(
    id: "ck8hviluf0000xh14ta14rgx7",
    name:"Updated Person", 
    age: 170
  ) {
    id,
    updatedAt,
    name
    age
  }
}
```


### At least 1 Mutation resolver allowing users to delete an item.
#### Delete Person
```graphql
mutation deleteOnePerson {
  deleteOnePerson(where: {
  id: "ck8hviluz0001xh14yaojpumg"})
  {
    id
    name
  }
}
```

### Your datastore will contain at least 25 items
* You can see the number of items in [Primsa Studio](http://localhost:5555/) or the [Seed File](https://github.com/juliannehalversen/dgm4790-graphql-server/blob/master/prisma/seed.js), and the data being seeded in the [People.json](https://github.com/juliannehalversen/dgm4790-graphql-server/blob/master/prisma/data/people.json)

### Your app will be deployable locally using Docker and will have seed data entered into the datastore.
* This can be seen in the npm scripts above and in the [package.json](https://github.com/juliannehalversen/dgm4790-graphql-server/blob/master/package.json)

