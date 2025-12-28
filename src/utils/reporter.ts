export function output(...results: Array<string | number>): void {
  results.forEach((res, i) => console.log(`Result ${i + 1}: ${res}`))
}
