const { GraphQLServer } = require('graphql-yoga')
const { prisma } = require('./generated/prisma-client')
const Book = require('./resolvers/Book')
const Author = require('./resolvers/Author')
const Mutation = require('./resolvers/Mutation')
const Query = require('./resolvers/Query')


const resolvers = {
    Book,
    Author,
    Mutation,
    Query,
}

const server = new GraphQLServer({
    typeDefs: './src/schema.graphql',
    resolvers,
    context: request => {
        return {
        ...request,
            prisma,
            }
        },
})


server.start(() => {
    console.log('Server is running on http://localhost:4000 ')
})