// TS part1 3 숙제

let 이름 :string = '박수지';
let 나이 :number = 28;
let 출생지역 :string = '울산';

type 좋아하는거 = {
  song: string | number,
  singer: string | number 
};

let 내가좋아하는거 : 좋아하는거 = { song: 'Ditto', singer: '뉴진스'};

let project :{ member: string[], days: number, started: boolean } = {
  member : ['kim', 'park'],
  days: 30,
  started: true,
}

// TS part1 4 숙제
let user :string = "kim";
let age :undefined | number = undefined;
let married :boolean = false;
let 철수 :(string|boolean|undefined|number)[]= [user, age, married];

let 학교: { 
  score: (number|boolean)[],
  teacher: string,
  friend: string| string[]
}  =  {
  score  : [100, 97, 84],
  teacher : 'Phil',
  friend: 'John'
}
학교.score[4] = false;
학교.friend = ['Lee', 학교.teacher]