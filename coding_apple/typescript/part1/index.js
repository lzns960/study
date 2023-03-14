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
    adult: true,
};
console.log(회원가입정보2);
// TS part1 8 강의중간 퀴즈
function 가위바위보(a) {
    return ["가위", "보"];
}
var 회원정보 = {
    name: "kim",
    age: 30,
    plusOne: function (x) {
        return x + 1;
    },
    changeName: function () {
        console.log("안녕");
    },
};
console.log(회원정보.plusOne(1));
회원정보.changeName();
var cutZero = function (x) {
    var result = x.replace(/^0/, "");
    return result;
};
function removeDash(x) {
    var result = x.replace(/-/g, "");
    return parseInt(result);
}
function 만들함수(a, func1, func2) {
    var result = func1(a);
    var result2 = func2(result);
    console.log(result2);
}
만들함수("010-1111-2222", cutZero, removeDash);
// TS part1 10 강의 숙제
var 링크 = document.querySelector(".link");
if (링크 instanceof HTMLAnchorElement) {
    링크.href = "https://kakao.com";
}
var 이미지 = document.querySelector("#image");
if (이미지 instanceof HTMLImageElement) {
    이미지.src = "change.jpg";
}
var 링크들 = document.querySelectorAll(".naver");
링크들.forEach(function (a) {
    if (a instanceof HTMLAnchorElement) {
        a.href = "https://kakao.com";
    }
});
// TS part1 13 숙제
var Car = /** @class */ (function () {
    function Car(a, b) {
        this.model = a;
        this.price = b;
    }
    Car.prototype.tax = function () {
        return this.price * 0.1;
    };
    return Car;
}());
var car1 = new Car("소나타", 3000);
console.log(car1); //콘솔창 출력결과는 { model : '소나타', price : 3000 }
console.log(car1.tax()); //콘솔창 출력결과는 300
var Word = /** @class */ (function () {
    function Word() {
        var param = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            param[_i] = arguments[_i];
        }
        var 숫자들 = [];
        var 문자들 = [];
        param.forEach(function (i) {
            if (typeof i === "string") {
                문자들.push(i);
            }
            else {
                숫자들.push(i);
            }
        });
        this.num = 숫자들;
        this.str = 문자들;
    }
    return Word;
}());
var obj = new Word("kim", 3, 5, "park");
console.log(obj.num); //[3,5]
console.log(obj.str); //['kim', 'park']
