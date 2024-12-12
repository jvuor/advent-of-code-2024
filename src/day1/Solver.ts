type ListType = Array<number | null>;

export class Solver {
  private input: string;

  public constructor(input: string) {
    this.input = input;
  }

  public solvePart1(): number {
    const [listA, listB] = this.parseInput();
    listA.sort();
    listB.sort();

    let total = 0;

    for (let i = 0; i < listA.length; i++) {
      const result = Math.abs(listA[i] - listB[i]);
      total += result;
    }

    return total;
  }

  public solvePart2(): number {
    const [listA, listB] = this.parseInput();

    let total = 0;

    for (let i = 0; i < listA.length; i++) {
      const result = listA[i] * listB.filter(value => value === listA[i]).length;
      total += result;
    }
    
    return total;
  }

  private parseInput(): [number[], number[]] {
    const listA: number[] = [];
    const listB: number[] = [];

    this.input
      .trim()
      .split('\n')
      .forEach((row) => {
        const values = row.split('   ').map(v => parseInt(v, 10));
        if (values.length < 2 || values.some(v => isNaN(v))) {
          console.error(values);
          throw new Error('bad input');
        }

        const [a, b] = values;

        listA.push(a);
        listB.push(b);
      });

    return [listA, listB];
  }
}
