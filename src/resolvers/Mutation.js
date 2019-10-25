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




module.exports = {
    createBook,
    createAuthor,
}