export default class Character {
  constructor(name) {
    try {
      if (name.length < 2 || name.length > 10) {
        throw new Error('Имя неправильное');
      }
      this.name = name;
      this.health = 100;
      this.level = 1;
    } catch (error) {
      console.log(error);
    }
  }

  levelUp() {
    try {
      if (this.health == 0) {
        throw new Error('Жизнь = 0');
      }
      this.level += 1;
      this.attack += this.attack / 100 * 20;
      this.defence += this.defence / 100 * 20;
      this.health = 100;
    } catch (error) {
      console.log(error);
    }
  }
  damage(points) {
      if (this.health >= 0) {
        this.health -= points * (1 - this.defence / 100);
      }
  }
}
