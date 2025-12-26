import { Solver } from '../Solver';

const testInput = `
7 6 4 2 1
1 2 7 8 9
9 7 6 2 1
1 3 2 4 5
8 6 4 4 1
1 3 6 7 9
`.trim();

describe('Day 2 tests', () => {
  test('Part 1 tests', () => {
    const solver = new Solver(testInput);
    const result = solver.solvePart1();

    expect(result).toBe(2);
  });

  test('Part 2 tests', () => {
    const solver = new Solver(testInput);
    const result = solver.solvePart2();

    expect(result).toBe(4);
  })
});
