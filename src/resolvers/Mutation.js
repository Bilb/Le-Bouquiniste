function createBook(parent, args, context, info) {
    return context.prisma.createBook({
        isbn: args.isbn,
        title: args.title,
        authors: args.authors
    })
}


function createAuthor(parent, args, context, info) {
    return context.prisma.createAuthor( {fullname: args.fullname})
}

function deleteBook(parent, args, context, info) {
    return context.prisma.deleteBook({id: args.id})
}


module.exports = {
    createBook,
    createAuthor,
    deleteBook,
}