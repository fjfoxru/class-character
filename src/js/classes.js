import Character from './character';
export class Bowman extends Character {
    constructor(name) {
        super(name);
        this.attack = 25;
        this.defence = 25;
        this.type = 'Bowman';
    }
}
export class Swordsman extends Character {
    constructor(name) {
        super(name);
        this.attack = 40;
        this.defence = 10;
        this.type = 'Swordsman';
    }
}
export class Magician extends Character {
    constructor(name) {
        super(name);
        this.attack = 10;
        this.defence = 40;
        this.type = 'Magician';
    }
}
export class Daemon extends Character {
    constructor(name) {
        super(name);
        this.attack = 10;
        this.defence = 40;
        this.type = 'Daemon';
    }
}
export class Undead extends Character {
    constructor(name) {
        super(name);
        this.attack = 25;
        this.defence = 25;
        this.type = 'Undead';
    }
}
export class Zombie extends Character {
    constructor(name) {
        super(name);
        this.attack = 40;
        this.defence = 10;
        this.type = 'Zombie';
    }
}