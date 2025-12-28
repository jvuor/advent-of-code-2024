import { solvePart1, solvePart2 } from '../solution';

const testInput = 'xmul(2,4)%&mul[3,7]!@^do_not_mul(5,5)+mul(32,64]then(mul(11,8)mul(8,5))';
const testInput2 = "xmul(2,4)&mul[3,7]!^don't()_mul(5,5)+mul(32,64](mul(11,8)undo()?mul(8,5))";

describe('Day 3 tests', () => {
  test('Part 1 tests', () => {
    const result = solvePart1(testInput)

    expect(result).toBe(161);
  });

  test('Part 2 tests', () => {
    const result = solvePart2(testInput2)

    expect(result).toBe(48);
  })
});
