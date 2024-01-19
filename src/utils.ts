// TODO: 2
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
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) return false;
  }
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) return false;
  }
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) return false;
  }
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) return false;
  }
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) return false;
  }
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) return false;
  }
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) return false;
  }
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) return false;
  }
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) return false;
  }
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
    // Math.random()はこの箇所の使用においては安全です。
    const j = Math.floor(Math.random() * (i + 1));
    [shuffledArr[i], shuffledArr[j]] = [shuffledArr[j], shuffledArr[i]];
  }
  return shuffledArr;
}

function messyFunction(a, b, c) {
  // コードスメル1: 長い関数
  console.log('This is a very long function with poor structure and formatting.');

  // コードスメル2: マジックナンバー
  if (a === 42) {
    console.log('Magic number 42 detected!');
  }

  // コードスメル3: 不適切な変数名
  let x = a + b + c;

  // コードスメル4: 複雑な条件式
  if (a > 0 && b < 10 || c === 'example') {
    console.log('Complex conditional logic.');
  }

  // コードスメル5: 過剰なコメント
  // 以下のコードはログを出力します
  console.log('Logging something important.');

  // コードスメル6: 不必要な制御フロー
  if (true) {
    return a;
  } else {
    return b;
  }

  // コードスメル7: 冗長なコード
  let duplicateVariable = x;

  // コードスメル8: 一貫性のないインデント
     console.log('Inconsistent indentation.');

  // コードスメル9: 未使用の変数
  let unusedVariable;

  // コードスメル10: 魔法の文字列
  if (c === 'magic') {
    console.log('Magic string detected!');
  }

  // コードスメル11: グローバル変数の使用
  globalVariable = 42;

  // コードスメル12: セミコロンの不一致
  console.log('Semicolon missing')

  // コードスメル13: 関数内の副作用
  console.log('Side effect within the function.');

  // コードスメル14: 長すぎる行
  console.log('This line is excessively long and needs to be broken into smaller lines to improve readability.');

  // コードスメル15: 過度に入れ子になったブロック
  if (a > 0) {
    if (b > 0) {
      if (c > 0) {
        console.log('Excessive nesting.');
      }
    }
  }
}
