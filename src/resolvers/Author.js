function books(parent, args, context, info) {
    context.prisma.author({id: parent.id}).books()
}