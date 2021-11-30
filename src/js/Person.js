export default class Person {
  constructor(name, type) {
    this.health = 50;
    this.level = 1;
    this.name = name;
    this.type = type;
    if (type === 'Bowman') {
      this.attack = 25;
      this.defence = 25;
    } else if (type === 'Zombie') {
      this.attack = 40;
      this.defence = 10;
    } else if (type === 'Daemon') {
      this.attack = 10;
      this.defence = 40;
    }
  }
}
