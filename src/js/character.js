export default class Character {
  constructor(name, type) {
    try {
      if (name.length < 2 || name.length > 10) {
        throw new Error('Имя неправильное');
      }
      if (type !== 'Bowman' && type !== 'Swordsman' && type !== 'Magician' && type !== 'Daemon' && type !== 'Undead' && type !== 'Zombie') {
        throw new Error('Тип неправильный');
      }
      this.name = name;
      this.health = 100;
      this.level = 1;
      this.type = type;
    } catch (error) {
      throw error;
    }
  }

  levelUp() {
    try {
      if (this.health <= 0) {
        throw new Error('Жизнь = 0');
      }
      this.level += 1;
      this.attack += this.attack / 100 * 20;
      this.defence += this.defence / 100 * 20;
      this.health = 100;
    } catch (error) {
      throw error;
    }
  }
  damage(points) {
    if (this.health <= 0) return false;
      this.health -= points * (1 - this.defence / 100);
  }
}
