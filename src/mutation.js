import { idArg, mutationType, stringArg, intArg, floatArg } from 'nexus'

export const Mutation = mutationType({
    name: 'Mutation',
    definition(t) {
        t.crud.deleteOneGame()
        t.field('createGame', {
          type: 'Game',
          args: {
            name: stringArg({ nullable: false }),
            system: stringArg({ nullable: false }),
            date_completed: stringArg({ nullable: false }),
            rating: stringArg(),
          },
          resolve: (
            parent,
            {
              name,
              system,
              date_completed,
              rating
            },
            ctx,
          ) => {
            return ctx.prisma.game.create({
              data: {
                name,
                system,
                date_completed,
                rating
              },
            })
          },
        })
      
      t.field('updateGame', {
        type: 'Game',
        args: {
          id: idArg(),
          name: stringArg(),
          system: stringArg(),
          date_completed: stringArg(),
          rating: stringArg()
        },
        resolve: (
          parent,
          {
            name,
            system,
            date_completed,
            rating
          },
          ctx,
        ) => {
          return ctx.prisma.game.update({
            where: {
              id,
            },
            data: {
              name,
              system,
              date_completed,
              rating
            },
          })
        },
      })
    }
})