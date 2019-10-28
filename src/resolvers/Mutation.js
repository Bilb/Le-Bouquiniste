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
    const sample = await context.prisma.sample({id: args.id})
    if (!sample) {
        throw new Error('No such sample found with id', args.id)
    }
    data = {}
    if(args.isbn) {
        data.isbn = args.isbn
    }

    if(args.title) {
        data.title = args.title
    }

    if(args.author) {
        data.author = args.author
    }

    return context.prisma.updateSample({
       where: {id: args.id},
       data
    })
}

module.exports = {
    createSample,
    deleteSample,
    updateSample
}