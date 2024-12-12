import { Solver } from '../Solver';

const testInput = `3   4
4   3
2   5
1   3
3   9
3   3`

describe('Day 1 tests', () => {
  test('Part 1 tests', () => {
    const solver = new Solver(testInput);
    const result = solver.solvePart1();

    expect(result).toBe(11);
  })

  test('Part 2 tests', () => {
    const solver = new Solver(testInput);
    const result = solver.solvePart2();

    expect(result).toBe(31);
  })
});
