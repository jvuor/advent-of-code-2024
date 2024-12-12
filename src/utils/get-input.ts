import fetch from 'node-fetch'
import * as fs from 'fs';
import * as fsp from 'fs/promises';

export function getInput(day: number, year: number): Promise<string> {
  const session = fs.readFileSync('src/utils/session.txt', { encoding: 'utf8' }).trim();
  const cookie = `session=${session}`;
  const headers = { cookie };
  const url = `https://adventofcode.com/${year}/day/${day}/input`;

  if (checkCachedVersion(day, year)) {
    return getCachedVersion(day, year);
  }

  return fetch (url, { headers }).then(res => {
    const text = res.text();
    if (Array.isArray(text)) {
      return text.join('\n');
    }

    return new Promise((res, rej) => {
      text.then(t => {
        cacheData(day, year, t);
        res(t);
      });
    })
  });
}

function resolveCachedFileName(day: number, year: number): string {
  return `src/utils/.cache/${day}-${year}`;
}

function checkCachedVersion(day: number, year: number): boolean {
  return fs.existsSync(resolveCachedFileName(day, year));
}

function getCachedVersion(day: number, year: number): Promise<string> {
  return fsp.readFile(resolveCachedFileName(day, year), { encoding: 'utf8' });
}

function cacheData(day: number, year: number, data: string): void {
  fs.writeFileSync(resolveCachedFileName(day, year), data, { encoding: 'utf8' });
}
