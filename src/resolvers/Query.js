
function books(parent, args, context, info) {
    return context.prisma.books()
}

function authors(parent, args, context, info) {
    return context.prisma.authors()
}

async function book(parent, args, context, info) {
    return await context.prisma.book({id: args.id})
}

async function author(parent, args, context, info) {
    return await context.prisma.author({id: args.id})
}



module.exports = {
    books,
    authors,
    book,
    author
}