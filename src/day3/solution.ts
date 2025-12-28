export function solvePart1(input: string): number {
  const mulNumbers = findMul(input);
  const total = mulNumbers
    .map(([numA, numB]) => numA * numB)
    .reduce((total, cur) => total += cur, 0);
  
  return total;
}

function findMul(input: string): [number, number][] {
  const mulRE = /mul\((\d+),(\d+)\)/g;
  const matches = input.matchAll(mulRE);
  const results: [number, number][] = [];
  
  for (const match of matches) {
    results.push([parseInt(match[1], 10), parseInt(match[2], 10)]);
  }

  return results;
}

export function solvePart2(input: string): number {
  return solvePart1(prepareInput(input));
}

function prepareInput(input: string): string {
  const end = 'do()';
  const start = 'don\'t()';

  while (input.indexOf(start) !== -1) {
    const startPos = input.indexOf(start);
    const endPos = input.indexOf(end, startPos);

    input = [input.slice(0, startPos), input.slice(endPos)].join();
  }

  return input;
}
