const { prisma } = require('./generated/prisma-client')
const { GraphQLServer } = require('graphql-yoga')

const resolvers = {
  Query: {
    project(root, args, context) {
      return context.prisma.project({ id: args.projectId })
    },
    projects(root, args, context) {
      return context.prisma.projects()
    },
    projectFrontEnd(root, args, context) {
      return context.prisma.projects({
        where: {
          devtype: "FRONT_END"
        }
      })
    },
    projectBackEnd(root, args, context) {
      return context.prisma.projects({
        where: {
          devtype: "BACK_END"
        }
      })
    },
    projectFullStack(root, args, context) {
      return context.prisma.projects({
        where: {
          devtype: "FULL_STACK"
        }
      })
    },
    projectDesign(root, args, context) {
      return context.prisma.projects({
        where: {
          devtype: "DESIGN"
        }
      })
    },
    projectPersonal(root, args, context) {
      return context.prisma.projects({
        where: { solo: true }
      })
    }
  },
  Mutation: {
    createProject(root, args, context) {
      return prisma.createProject(
        {
          
          title: args.title,
          description: args.description,
          devtype: args.devtype,
          solo: args.solo
        
      }
      )
    },
    updateProject(root, args, context) {
      return context.prisma.updateProject(
        {
          where: {id: args.id },
          data: {
            title: args.title,
            description: args.description,
            devtype: args.devtype,
            solo: args.solo
          }
        }
      )
    },
    deleteProject(root, args, context) {
      return context.prisma.deleteProject(
        {id: args.id}
      )
    }
 

}
}

const server = new GraphQLServer({
  typeDefs: './schema.graphql',
  resolvers,
  context: {
    prisma
  },
})
server.start(() => console.log('Server is running on http://localhost:4000'))