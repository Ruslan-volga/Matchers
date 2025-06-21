import sortHeroes from '../sortHeroes';

test('should sort heroes by health in descending order', () => {
  const heroes = [
    { name: 'мечник', health: 10 },
    { name: 'маг', health: 100 },
    { name: 'лучник', health: 80 },
  ];

  const expected = [
    { name: 'маг', health: 100 },
    { name: 'лучник', health: 80 },
    { name: 'мечник', health: 10 },
  ];

  const result = sortHeroes(heroes);

  // Используем toEqual для глубокого сравнения объектов
  expect(result).toEqual(expected);

  // Проверяем, что исходный массив не изменился
  expect(heroes).toEqual([
    { name: 'мечник', health: 10 },
    { name: 'маг', health: 100 },
    { name: 'лучник', health: 80 },
  ]);
});

test('should handle empty array', () => {
  expect(sortHeroes([])).toEqual([]);
});

test('should handle single hero', () => {
  const heroes = [{ name: 'маг', health: 100 }];
  expect(sortHeroes(heroes)).toEqual(heroes);
});

test('should handle equal health values', () => {
  const heroes = [
    { name: 'герой1', health: 50 },
    { name: 'герой2', health: 50 },
  ];
  const result = sortHeroes(heroes);
  expect(result).toEqual(heroes);
});
