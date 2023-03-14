// TS part1 3 숙제

let 이름: string = "박수지";
let 나이: number = 28;
let 출생지역: string = "울산";

type 좋아하는거 = {
  song: string | number;
  singer: string | number;
};

let 내가좋아하는거: 좋아하는거 = { song: "Ditto", singer: "뉴진스" };

let project: { member: string[]; days: number; started: boolean } = {
  member: ["kim", "park"],
  days: 30,
  started: true,
};

// TS part1 4 숙제
let user: string = "kim";
let age: undefined | number = undefined;
let married: boolean = false;
let 철수: (string | boolean | undefined | number)[] = [user, age, married];

let 학교: {
  score: (number | boolean)[];
  teacher: string;
  friend: string | string[];
} = {
  score: [100, 97, 84],
  teacher: "Phil",
  friend: "John",
};
학교.score[4] = false;
학교.friend = ["Lee", 학교.teacher];

// TS part1 5 숙제
function 인사(name?: string): void {
  if (name) {
    console.log("안녕하세요" + name);
  } else {
    console.log("이름이 없습니다.");
  }
}

function 자릿수(x: number | string): number {
  return x.toString.length;
}

function 결혼가능하냐(
  money: number,
  house: boolean,
  charm: string
): string | void {
  let score: number = 0;
  score += money;
  if (house === true) {
    score += 500;
  }
  if (charm === "상") {
    score += 100;
  }
  if (score >= 600) {
    return "결혼가능";
  }
}
console.log(결혼가능하냐(100, true, "상"));
console.log(결혼가능하냐(700, false, "중"));
console.log(결혼가능하냐(100, false, "상"));
// TS part1 6 숙제
function 클리닝함수(array: (number | string)[]) {
  let 클리닝완료: number[] = [];

  array.forEach((x) => {
    if (typeof x === "string") {
      클리닝완료.push(parseFloat(x));
    } else {
      클리닝완료.push(x);
    }
  });
  return 클리닝완료;
}
console.log(클리닝함수(["1", 2, "3"]));

let 철수쌤 = { subject: "math" };
let 영희쌤 = { subject: ["science", "english"] };
let 민수쌤 = { subject: ["science", "art", "korean"] };

function 과목찾기(x: { subject: string | string[] }) {
  if (typeof x.subject === "string") {
    return x.subject;
  } else if (Array.isArray(x.subject)) {
    return x.subject[x.subject.length - 1];
  } else {
    return "없는 선생님입니다.";
  }
}

console.log(과목찾기({ subject: ["english", "art"] }));

// TS part1 7 숙제
type Obj1 = {
  color: string;
  size: number;
};
type Obj2 = {
  color: string;
  text: string;
};
type Obj3 = Obj1 & Obj2;
let Obj3 = {
  color: "red",
  size: 11,
  text: "text",
};
/* 중복된 속성이 있는 Obj type alias 2개를 & 기호로 합치면, 
ts 오류메세지: An object literal cannot have multiple properties with the same name.
js: 마지막 properties로 컴파일된다. 
*/
console.log(Obj3);

type TypeTest = {
  color?: string;
  size: number;
  readonly position: number[];
};
let 테스트용변수: TypeTest = {
  size: 123,
  position: [1, 2, 3],
};
console.log(테스트용변수);

type User = {
  name: string;
  phone: number;
  email: string;
};
let 회원가입정보: User = {
  name: "kim",
  phone: 123,
  email: "abc@naver.com",
};
console.log(회원가입정보);

type Adult = {
  adult: boolean;
};
type NewUser = User & Adult;

let 회원가입정보2: NewUser = {
  name: "kim",
  phone: 123,
  email: "abc@naver.com",
  adult: true,
};
console.log(회원가입정보2);
// TS part1 8 강의중간 퀴즈
function 가위바위보(a: "가위" | "바위" | "보"): ("가위" | "바위" | "보")[] {
  return ["가위", "보"];
}
// Ts part1 9 숙제
type Member = {
  name: string;
  age: number;
  plusOne: (x: number) => number;
  changeName: () => void;
};
let 회원정보: Member = {
  name: "kim",
  age: 30,
  plusOne: (x) => {
    return x + 1;
  },
  changeName: () => {
    console.log("안녕");
  },
};
console.log(회원정보.plusOne(1));
회원정보.changeName();

type CutType = (x: string) => string;
let cutZero: CutType = function (x) {
  let result = x.replace(/^0/, "");
  return result;
};

function removeDash(x: string): number {
  let result = x.replace(/-/g, "");
  return parseInt(result);
}

function 만들함수(a, func1, func2) {
  let result = func1(a);
  let result2 = func2(result);
  console.log(result2);
}
만들함수("010-1111-2222", cutZero, removeDash);
// TS part1 10 강의 숙제
let 링크 = document.querySelector(".link");
if (링크 instanceof HTMLAnchorElement) {
  링크.href = "https://kakao.com";
}

let 이미지 = document.querySelector("#image");
if (이미지 instanceof HTMLImageElement) {
  이미지.src = "change.jpg";
}

let 링크들 = document.querySelectorAll(".naver");
링크들.forEach((a) => {
  if (a instanceof HTMLAnchorElement) {
    a.href = "https://kakao.com";
  }
});

// TS part1 13 숙제
class Car {
  model: string;
  price: number;
  constructor(a: string, b: number) {
    this.model = a;
    this.price = b;
  }

  tax(): number {
    return this.price * 0.1;
  }
}

let car1 = new Car("소나타", 3000);
console.log(car1); //콘솔창 출력결과는 { model : '소나타', price : 3000 }
console.log(car1.tax()); //콘솔창 출력결과는 300

class Word {
  num;
  str;

  constructor(...param) {
    let 숫자들: number[] = [];
    let 문자들: string[] = [];

    param.forEach((i) => {
      if (typeof i === "string") {
        문자들.push(i);
      } else {
        숫자들.push(i);
      }
    });

    this.num = 숫자들;
    this.str = 문자들;
  }
}

let obj = new Word("kim", 3, 5, "park");
console.log(obj.num); //[3,5]
console.log(obj.str); //['kim', 'park']
