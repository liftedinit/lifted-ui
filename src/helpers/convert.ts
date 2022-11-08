export const Uint8Array2Hex = (input: Uint8Array) => {
  return Buffer.from(input).toString('hex');
}

export const Hex2Base64 = (input: string) => {
  return Buffer.from(input, 'hex').toString('base64')
}

export const base64ToArrayBuffer = (str: string): ArrayBuffer =>
  Buffer.from(str, "base64")

export const arrayBufferToBase64 = (buffer: ArrayBuffer): string =>
  Buffer.from(buffer).toString("base64")

export const base64UrlToArrayBuffer = (str: string): ArrayBuffer =>
    // Add back the `===` that were missing. These are between 0 and 3,
    // depending on if there are any remainder to the base64 string.
    // Base64 are always multiples of 4.
    base64ToArrayBuffer(str + "===".slice(0, str.length % 4))

export const arrayBufferToBase64Url = (buffer: ArrayBuffer): string =>
    // Remove the === at the end to make it base64url.
    // `base64url` encoding is supported by Node but not the version of `buffer`
    // we actually install and use.
    arrayBufferToBase64(buffer).replace(/=+$/, "")


export const fromDateTime = (date: Date) => {
  const rft = new Intl.RelativeTimeFormat(undefined, { numeric: "auto" })

  const SECOND = 1000;
  const MINUTE = 60 * SECOND;
  const HOUR = 60 * MINUTE;
  const DAY = 24 * HOUR;
  const WEEK = 7 * DAY;
  const MONTH = 30 * DAY;
  const YEAR = 365 * DAY;

  const intervals = [
      { ge: YEAR, divisor: YEAR, unit: 'year' },
      { ge: MONTH, divisor: MONTH, unit: 'month' },
      { ge: WEEK, divisor: WEEK, unit: 'week' },
      { ge: DAY, divisor: DAY, unit: 'day' },
      { ge: HOUR, divisor: HOUR, unit: 'hour' },
      { ge: MINUTE, divisor: MINUTE, unit: 'minute' },
      { ge: 30 * SECOND, divisor: SECOND, unit: 'seconds' },
      { ge: 0, divisor: 1, text: 'just now' },
  ];

  const now: number = new Date(Date.now()).getTime();
  const diff: number = now - (typeof date === 'object' ? date : new Date(date)).getTime();
  const diffAbs: number = Math.abs(diff);

  for (const interval of intervals) {
    if (diffAbs >= interval.ge) {
        const x = Math.round(Math.abs(diff) / interval.divisor);
        const isFuture = diff < 0;
        const unit: any = interval.unit
        return interval.unit ? rft.format(isFuture ? x : -x, unit) : interval.text;
    }
  }
}

const ONE_HOUR_IN_SECS = 3600
const SIXTY = 60
export function getHoursMinutesSecondsFromSeconds(_seconds: number): {
  hours: number
  minutes: number
  seconds: number
} {
  const hours = Math.floor(_seconds / ONE_HOUR_IN_SECS)
  const minutes = Math.floor((_seconds % ONE_HOUR_IN_SECS) / SIXTY)
  const seconds = _seconds % SIXTY
  return { hours, minutes, seconds }
}

export function getSecondsFromHoursMinutesSeconds(
  hours: number = 0,
  minutes: number = 0,
  seconds: number = 0,
) {
  const hoursInSecs = hours * ONE_HOUR_IN_SECS
  const minutesInSecs = minutes * SIXTY
  return hoursInSecs + minutesInSecs + seconds
}
