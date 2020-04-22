import { PrismaClient } from '@prisma/client'
import fs from 'fs'

const prismaClient = new PrismaClient()

const people = fs.readFileSync('prisma/data/people.json')

function loadPeople() {
  const list = JSON.parse(people)
  
 return list.map(person => {
    return {
      data: {
        name: person.name,
        age: person.age
      }
    }
  })
}

async function main() {
  try {
    const allPeople = loadPeople()
    for(let person of allPeople) {
      await prismaClient.person.create(person)
      .catch(err => console.error(`Error trying to generate people `))
    } 
  } catch(err) {
    console.log(err)
  }
}


/* async function createPerson() {
  try {
    await prismaClient.person.create({
      data: {
        name: 'Test Person',
        age: 100,
      },
    })
  } catch (err) {
    console.log(err)
  }
}

async function main() {
  try {
    await createPerson()
  } catch(err) {
    console.log(err)
  }
} */

main()
.catch(e => console.error(e))
.finally(async () => {
  await prismaClient.disconnect()
})