type Level = number;
type Report = Array<Level>;

export class Solver {
  private input: string;

  public constructor(input: string) {
    this.input = input;
  }

  public solvePart1(): number {
    const reports = this.parseInput();
    return reports.map(report => this.testReport(report))
      .filter(reportOk => !!reportOk)
      .length;
  }

  public solvePart2(): number {
    const reports = this.parseInput();
    return reports.map(report => this.iterateReports(report))
      .filter(reportOk => !!reportOk)
      .length;
  }

  public parseInput(): Array<Report> {
    return this.input
      .trim()
      .split('\n')
      .map(report => report
        .split(' ')
        .map(level => parseInt(level, 10))
        .filter(level => !isNaN(level))
      );
  }

  public iterateReports(report: Report): boolean {
    const initialOk = this.testReport(report);

    if (initialOk) {
      return true;
    }

    return report.some((_, i) => {
      const subReport = report.filter((_, fi) => fi !== i);
      const subReportResult = this.testReport(subReport);

      return subReportResult;
    })
  }

  public testReport(report: Report): boolean {
    if (report.length < 2) {
      throw new Error(`Bad report received: ${report}`);
    }

    let direction: 1 | -1 | null = null;
    const maxDifference = 3;

    const compareLevels = (level1: Level, level2: Level): boolean => {
      if (direction === null) {
        if (level1 > level2) {
          direction = -1;
        } else if (level1 < level2) {
          direction = 1
        } else {
          return false;
        }
      }

      const diff = level2 - level1;
      return diff * direction > 0 && diff * direction <= maxDifference;
    }

    let previousLevel: Level = report[0];

    for (let i = 1; i < report.length; i++) {
      const currentLevel = report[i];

      const levelOk = compareLevels(previousLevel, currentLevel);

      if (!levelOk) {
        return false;
      }

      previousLevel = currentLevel;
    }

    return true;
  }
}
