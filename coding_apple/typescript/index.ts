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

