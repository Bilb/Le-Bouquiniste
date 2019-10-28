
function samples(parent, args, context, info) {
    const where = args.filter ? { title: args.filter} : {}

    const samples = context.prisma.samples({
        where,
        skip: args.skip,
        first: args.first,
        orderBy: args.orderBy})

    const count = context.prisma.samplesConnection({where})
        .aggregate()
        .count()

    return { 
        samples,
        count,
    }
    return 
}

async function sample(parent, args, context, info) {
    return await context.prisma.sample({id: args.id})
}




module.exports = {
    sample,
    samples,
}