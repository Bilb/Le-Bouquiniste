function createSample(parent, args, context, info) {
    //FIXME add the user to be linked once we have working oauth

    return context.prisma.createSample({
        isbn: args.isbn,
        title: args.title,
        author: args.author
    })
}

/*
console.log(args.authors.map(i => i))
return context.prisma.createSample({
        isbn: args.isbn,
        title: args.title,
        author: {
            connect: args.authors.map(p => ({id: p}))
        }
    })

*/


function deleteSample(parent, args, context, info) {
    return context.prisma.deleteSample({id: args.id})
}

async function updateSample(parent, args, context, info) {
    const book = await context.prisma.book({id: args.id})
    if (!book) {
        throw new Error('No such book found with id', args.id)
    }
    data = {}
    if(args.isbn) {
        data.isbn = isbn
    }

    if(args.title) {
        data.title = title
    }

    const currentAuthors = await context.prisma.book({id: args.id}).authors()

    if(args.authors) {
        console.log("current authors: ", currentAuthors)
        console.log("new authors: ", args.authors)

        data.authors = {
            connect: args.authors.map(p => ({id: p}))
        }
    }
    console.log('updating book to : ', data, data.authors)
    return context.prisma.updateBook({
       where: {id: args.id},
       data
    })
}

module.exports = {
    createSample,
    deleteSample,
    updateSample
}