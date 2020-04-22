import { objectType } from 'nexus';

const Person = objectType({
    name: 'Person',
    definition(t) {
        t.model.id()
        t.model.created()
        t.model.updatedAt()
        t.model.name()
        t.model.age()
    }
})

export const Models = [
    Person
];