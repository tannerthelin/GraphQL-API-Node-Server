import { objectType } from 'nexus';

const Person = objectType({
    name: 'Person Testhere',
    definition(t) {
        t.model.id()
        t.model.created()
        t.model.updatedAt()
        t.model.name()
        t.model.age()
        t.mode.years_on_show()
    }
})

export const Models = [
    Person
];