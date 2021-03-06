## GraphQL API Node Server

GraphQL API Node Server. Prisma is used to model the data with a Docker-based Postgres data store.

# Setting up

## Docker

Docker is required to run the local postgres database and prisma server.

Docker allows you to bring up limited virtual machines and run only services in them. For more info visit [https://www.docker.com/](https://www.docker.com/)

<details>
    <summary><strong>I don't have Docker installed on my machine</strong></summary>

To install docker follow the link that works for you:

[Docker for Mac](https://docs.docker.com/docker-for-mac/install/)

[Docker for Windows](https://docs.docker.com/docker-for-windows/install/)

</details>

## Setting up the server

While in the project directory, open a terminal and run

 `yarn install`
 
 To start docker, run
 
 `yarn dockerStart`
 
 start the server by running
 
 `yarn start`
 
 To deploy the Prisma API run
 
 `prisma deploy`
 
 and finally, seed the database by running
 
 `yarn seed`
 
 ## Using the playground
 
 
 After this, navigate to <localhost:4000> in a browser to view the playground.
 
 # Queries
 
 ### View all Projects 
 
 ```query{
  projects {
    title
    description
    id
    devtype
  }
}
```

### View Project by ID
```
query {
  project(projectId: "__PROJECT_ID_HERE__") {
    id
    title
    description
    solo
    devtype
  }
}
```
### View Project by type
```
query {
  projectType(projectType: BACK_END){
    title
    devtype
    id
    description
    solo
    imgurl
  }
}
```

# Mutations

### Create Project
```
mutation {
  createProject(
    title: "GraphQL API Node Server"
    description: "GraphQL server using Docker and Prisma"
    devtype: BACK_END
    solo: true
  ) {
    id
    title
    description
    devtype
    solo
  }
}
```

### Update Project 
  You may update any of the data fields using this mutation, in the example below I update ONLY the title.
```
mutation {
 updateProject(id: "__PROJECT_ID_HERE__",
  title: "Updated Project Title!!!!!!!!!!!!!!!!!!!"){
    title
    description
    devtype
    solo
  }
}
```

### Delete Project
```
mutation {
  deleteProject(id: "__PROJECT_ID_HERE__"){
    id
    title
  }
}
```
