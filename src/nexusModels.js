import { objectType } from "nexus";

const Game = objectType({
  name: "Game",
  definition(t) {
    t.model.id(); 
    t.model.createdAt();
    t.model.updatedAt();
    t.model.name()
    t.model.system()
    t.model.date_completed()
    t.model.rating()
  }
});

export const Models = [Game];
