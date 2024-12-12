import { getInput } from '../utils/get-input'
import { Solver } from './Solver'

const input = await getInput(1, 2024)
const solver = new Solver(input);

const result1 = solver.solvePart1();
console.log(`Result, part 1: ${result1}`);

const result2 = solver.solvePart2();
console.log(`Result, part 2: ${result2}`);
