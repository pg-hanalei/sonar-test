export const add = (x: number, y:number) => {
  return x + y
}

export const add2 = (x: number, y:number) => {
  return x + y
}

export const minus = (x: number, y:number) => {
  return x - y
}

// 1. 数値の合計を計算する関数
function sumNumbers(a: number, b: number): number {
  return a + b;
}

// 2. 文字列を大文字に変換する関数
function capitalizeString(str: string): string {
  return str.toUpperCase();
}

// 3. 配列から偶数を抽出する関数
function getEvenNumbers(arr: number[]): number[] {
  return arr.filter(num => num % 2 === 0);
}

// 4. 文字列を逆順にする関数
function reverseString(str: string): string {
  return str.split('').reverse().join('');
}

// 5. 与えられた数が素数かどうかを判定する関数
function isPrimeNumber(num: number): boolean {
  if (num <= 1) return false;
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) return false;
  }
  return true;
}

// 6. 二つの日付の差を計算する関数（日単位）
function dateDiffInDays(date1: Date, date2: Date): number {
  const timeDiff = Math.abs(date2.getTime() - date1.getTime());
  return Math.ceil(timeDiff / (1000 * 3600 * 24));
}

// 7. 文字列を指定した区切り文字で分割する関数
function splitString(str: string, delimiter: string): string[] {
  return str.split(delimiter);
}

// 8. オブジェクトのプロパティをマージする関数
function mergeObjects(obj1: object, obj2: object): object {
  return { ...obj1, ...obj2 };
}

// 9. 文字列がパリンドロームかどうかを判定する関数
function isPalindrome(str: string): boolean {
  const reversedStr = str.split('').reverse().join('');
  return str === reversedStr;
}

// 10. 配列内の要素をランダムにシャッフルする関数
function shuffleArray(arr: any[]): any[] {
  const shuffledArr = [...arr];
  for (let i = shuffledArr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffledArr[i], shuffledArr[j]] = [shuffledArr[j], shuffledArr[i]];
  }
  return shuffledArr;
}
