import {Bowman, Swordsman, Magician, Daemon, Undead, Zombie} from './classes';

test('Лучник создался, атака соответствует классу', () => {
    const testCharacter = new Bowman('Лучник');
    expect(testCharacter.attack).toBe(25);
});
test('Мечник создался, атака соответствует классу', () => {
    const testCharacter = new Swordsman('Мечник');
    expect(testCharacter.attack).toBe(40);
});
test('Маг создался, атака соответствует классу', () => {
    const testCharacter = new Magician('Маг');
    expect(testCharacter.attack).toBe(10);
});
test('Daemon создался, атака соответствует классу', () => {
    const testCharacter = new Daemon('Daemon');
    expect(testCharacter.attack).toBe(10);
});
test('Undead создался, атака соответствует классу', () => {
    const testCharacter = new Undead('Undead');
    expect(testCharacter.attack).toBe(25);
});
test('Zombie создался, атака соответствует классу', () => {
    const testCharacter = new Zombie('Zombie');
    expect(testCharacter.attack).toBe(40);
});
