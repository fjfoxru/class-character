import Character from './character';

test('Персонаж создался, имя добавилось', () => {
  const testCharacter = new Character('Имя', 'Swordsman');
  expect(testCharacter.name).toBe('Имя');
});

test('Персонаж несуществующего класса не создастся, будет выброс ошибки', () => {
    expect(() => {
        const testCharacter = new Character('Имя', 'Swor');
    }).toThrowError();
  });   

test('Нельзя сделать имя меньше 2 символов, будет выброс ошибки', () => {
    expect(() => {
        const testCharacter = new Character('И', 'Swordsman');
    }).toThrowError();
  });
  test('Нельзя сделать имя больше 2 символов, будет выброс ошибки', () => {
    expect(() => {
        const testCharacter = new Character('Иииииииииииииииииииииииииии');
    }).toThrowError();
  });  


test('Уровень поднялся на 1', () => {
    const testCharacter = new Character('Имя', 'Swordsman');
    testCharacter.levelUp();
    expect(testCharacter.level).toBe(2);
  });


  test('Уровень не поднимется с 0 жизнью, произойдет выброс ошибки', () => {
    expect(() => {
        const testCharacter = new Character('Имя', 'Swordsman');
        testCharacter.health = 0;
        testCharacter.levelUp();
    }).toThrowError();
  });

  test('Уровень не поднимется с отрицательной жизнью, произойдет выброс ошибки', () => {
    expect(() => {
        const testCharacter = new Character('Имя', 'Swordsman');
        testCharacter.health = -10;
        testCharacter.levelUp();
    }).toThrowError();
  });


  test('Уровень поднимает атаку на 20%', () => {
    const testCharacter = new Character('Имя', 'Swordsman');
    testCharacter.attack = 50;
    testCharacter.levelUp();
    expect(testCharacter.attack).toBe(60);
  });

  test('Уровень поднимает защиту на 20%', () => {
    const testCharacter = new Character('Имя', 'Swordsman');
    testCharacter.defence = 50;
    testCharacter.levelUp();
    expect(testCharacter.defence).toBe(60);
  });

  test('Уровень поднимает жизнь до 100', () => {
    const testCharacter = new Character('Имя', 'Swordsman');
    testCharacter.health = 10;
    testCharacter.levelUp();
    expect(testCharacter.health).toBe(100);
  });

  test('Жизнь после дамага правильно считается', () => {
    const testCharacter = new Character('Имя', 'Swordsman');
    testCharacter.defence = 90;
    testCharacter.damage(20);
    expect(testCharacter.health).toBe(98);
  });

  test('Дамаг не сработает, если жизнь равна 0', () => {
    const testCharacter = new Character('Имя', 'Swordsman');
    testCharacter.defence = 90;
    testCharacter.health = 0;
    testCharacter.damage(20);
    expect(testCharacter.health).toBe(0);
  });
