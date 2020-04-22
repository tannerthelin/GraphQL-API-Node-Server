import { idArg, queryType, stringArg } from 'nexus';

export const Query = queryType({
    definition(t) {
        t.field('Person', {
            type:'Person',
            nullable: true,
            args: { id: idArg() },
            resolve: (parent, { id }, ctx) => {
                return ctx.prisma.person.findOne({
                    where: {
                        id,
                    }
                })
            }
        })

        t.list.field('People', {
            type: 'Person',
            resolve: (parent, arg, ctx) => {
                return ctx.prisma.person.findMany()
            }
        })

        t.list.field('filterPeople', {
            type: 'Person',
            args: {
                searchstring: stringArg({ nullable: true }),
            },
            resolve: (parent, { searchstring }, ctx) => {
                return ctx.prisma.person.findMany({
                    where: {
                        OR: [
                            { name: {contains: searchstring }},
                            { age: {contains: searchstring }},
                            { years_on_show: {contains: searchstring }}
                        ],
                    },
                })
            }
        })
    }
})