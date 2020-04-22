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
            resolve: (parent, { name, age }, ctx) => {
                return ctx.prisma.person.create({
                    data: {
                        name,
                        age,
                    }
                })
            }
        })

        t.field('updatePerson', {
            type: 'Person',
            args: { 
                id: idArg(),
                name: stringArg(),
                age: intArg()
            },
            resolve: (parent, { id, name, age}, ctx) => {
                return ctx.prisma.person.update({
                    where: {
                        id
                    },
                    data: {
                        name,
                        age
                    }
                })
            }
        })
    }
})