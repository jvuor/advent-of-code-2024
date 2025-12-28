import { getInput } from '../utils/get-input'
import { output } from '../utils/reporter';
import { solvePart1, solvePart2 } from './solution';

const input = await getInput(3, 2024)
output(solvePart1(input), solvePart2(input));
