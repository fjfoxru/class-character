import {Bowman, Swordsman, Magician, Daemon, Undead, Zombie} from './classes';
const myCharacter = new Zombie('Монстр');
console.log(myCharacter);
myCharacter.levelUp();
console.log(myCharacter);
myCharacter.damage(10);
console.log(myCharacter);