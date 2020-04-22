import { idArg, mutationType, stringArg, intArg } from 'nexus';

export const Mutation = mutationType({
    name: 'Mutation',
    definition(t) {
        t.crud.deleteOnePerson()

        t.field('createPerson', {
            type: 'Person',
            args: {
                name: stringArg({ nullable: false }),
                age: intArg({ nullable: false })
            },
            resolve: (parent, { name, age, years_on_show }, ctx) => {
                return ctx.prisma.person.create({
                    data: {
                        name,
                        age,
                        years_on_show
                    }
                })
            }
        })

        t.field('updatePerson', {
            type: 'Person',
            args: { 
                id: idArg(),
                name: stringArg(),
                age: intArg(),
                years_on_show: intArg()
            },
            resolve: (parent, { id, name, age, years_on_show}, ctx) => {
                return ctx.prisma.person.update({
                    where: {
                        id
                    },
                    data: {
                        name,
                        age,
                        years_on_show
                    }
                })
            }
        })
    }
})