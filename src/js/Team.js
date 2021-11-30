import Person from './Person';

export default class Team {
  constructor(...rest) {
    this.characters = [];
    this.characters.push(...rest);
  }


  [Symbol.iterator]() {
    let numberOfPerson = -1;
    const { characters } = this;
    return {
      next() {
        if (numberOfPerson <= characters.length) {
          numberOfPerson += 1;
          return {
            done: false,
            value: characters[numberOfPerson],
          };
        }

        return {
          done: true,
        };
      },
    };
  }
}

const bowerman = new Person('Лучник', 'Bowman');
const zombie = new Person('Маг', 'Zombie');
const daemon = new Person('Рыцарь', 'Daemon');
const team = new Team(bowerman, zombie, daemon);

for (const item of team) {
  console.log(item);
}
