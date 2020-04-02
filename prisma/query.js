import { idArg, queryType, stringArg } from "nexus";

export const Query = queryType({
  definition(t) {
    t.field("game", {
      type: "game",
      nullable: true,
      args: { id: idArg() },
      resolve: (parent, { make }, ctx) => {
        return ctx.prisma.game.findOne({
          where: {
            make
          }
        });
      }
    });

    t.list.field("game", {
      type: "game",
      args: {
        searchString: stringArg({ nullable: true })
      },
      resolve: (parent, { searchString }, ctx) => {
        return ctx.prisma.game.findMany({
          where: {
            OR: [
              { make: { contains: searchString } },
            ]
          }
        });
      }
    });

    // for finding Trucks, Cars, SUV's
    t.list.field('game', {
      type: 'game',
      args: {
        searchString: stringArg({ nullable: true }),
      },
      resolve: (parent, { searchString }, ctx) => {
        return ctx.prisma.game.findMany({
          where: {
            OR: [{ type: { contains: searchString } }],
          },
        })
      },
    })

  }
});
