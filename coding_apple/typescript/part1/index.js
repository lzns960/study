// TS part1 3 숙제
var 이름 = "박수지";
var 나이 = 28;
var 출생지역 = "울산";
var 내가좋아하는거 = { song: "Ditto", singer: "뉴진스" };
var project = {
    member: ["kim", "park"],
    days: 30,
    started: true,
};
// TS part1 4 숙제
var user = "kim";
var age = undefined;
var married = false;
var 철수 = [user, age, married];
var 학교 = {
    score: [100, 97, 84],
    teacher: "Phil",
    friend: "John",
};
학교.score[4] = false;
학교.friend = ["Lee", 학교.teacher];
// TS part1 5 숙제
function 인사(name) {
    if (name) {
        console.log("안녕하세요" + name);
    }
    else {
        console.log("이름이 없습니다.");
    }
}
function 자릿수(x) {
    return x.toString.length;
}
function 결혼가능하냐(money, house, charm) {
    var score = 0;
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
function 클리닝함수(array) {
    var 클리닝완료 = [];
    array.forEach(function (x) {
        if (typeof x === "string") {
            클리닝완료.push(parseFloat(x));
        }
        else {
            클리닝완료.push(x);
        }
    });
    return 클리닝완료;
}
console.log(클리닝함수(["1", 2, "3"]));
var 철수쌤 = { subject: "math" };
var 영희쌤 = { subject: ["science", "english"] };
var 민수쌤 = { subject: ["science", "art", "korean"] };
function 과목찾기(x) {
    if (typeof x.subject === "string") {
        return x.subject;
    }
    else if (Array.isArray(x.subject)) {
        return x.subject[x.subject.length - 1];
    }
    else {
        return "없는 선생님입니다.";
    }
}
console.log(과목찾기({ subject: ["english", "art"] }));
var Obj3 = {
    color: "red",
    size: 11,
    text: "text",
};
/* 중복된 속성이 있는 Obj type alias 2개를 & 기호로 합치면,
ts 오류메세지: An object literal cannot have multiple properties with the same name.
js: 마지막 properties로 컴파일된다.
*/
console.log(Obj3);
var 테스트용변수 = {
    size: 123,
    position: [1, 2, 3],
};
console.log(테스트용변수);
var 회원가입정보 = {
    name: "kim",
    phone: 123,
    email: "abc@naver.com",
};
console.log(회원가입정보);
var 회원가입정보2 = {
    name: "kim",
    phone: 123,
    email: "abc@naver.com",
    child: true,
};
console.log(회원가입정보2);
