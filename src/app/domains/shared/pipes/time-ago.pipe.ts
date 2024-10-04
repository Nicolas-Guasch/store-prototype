import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'timeAgo',
  standalone: true,
})
export class TimeAgoPipe implements PipeTransform {
  private second = 1000;
  private minute = this.second * 60;
  private hour = this.minute * 60;
  private day = this.hour * 24;
  private month = this.day * 30;
  private year = this.day * 365;
  private timeframe: Map<number, string> = new Map([
    [this.second, 'second'],
    [this.minute, 'minute'],
    [this.hour, 'hour'],
    [this.day, 'day'],
    [this.month, 'month'],
    [this.year, 'year'],
  ]);

  transform(value: string): string {
    const date = new Date(value);
    const now: number = Date.now();
    const interval: number = now - date.getTime();
    let answer: string = '';
    for (let [time, label] of this.timeframe) {
      if (interval / time >= 1) {
        answer = Math.trunc(interval / time) + ' ' + label;
        if (interval / time >= 2) {
          answer += 's';
        }
      }
    }
    return answer + ' ago';
  }
}
