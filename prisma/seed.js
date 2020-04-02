import { PrismaClient } from "@prisma/client";
import fs from 'fs'

const prismaClient = new PrismaClient();

const all_games = fs.readFileSync('prisma/games.json')

function loadGames() {
  const game = JSON.parse(all_games)
  const allGames = game.game
  return allGames.map(game => {
    return {
      data: {
        name: game.name,
        system: game.system,
        dateCompleted: game.date_completed,
        rating: game.rating
      },
    }
  })
}

async function main() {
  try {
    const allGames = loadGames()
    for (let game of allGames) {
      await prismaClient.game.create(game)
      .catch(err => console.log(`Error trying to add: ${err} game ${vhcls}`))
    }
  } catch (err) {
    console.log(err);
  }
}

main()
  .catch(e => console.error(e))
  .finally(async () => {
    await prismaClient.disconnect();
  });
