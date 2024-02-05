// 변수 선언 및 입력
const fs = require("fs");
let input = fs.readFileSync(0).toString().trim();

// 문자열의 길이를 구합니다.
let length = input.length;

// 문자열의 앞에서 두 번째 원소와 뒤에서 두 번째 원소를 'a'로 대체합니다.
input = input.slice(0, 1) + 'a' + input.slice(2);
input = input.slice(0, length - 2) + 'a' + input.slice(length - 1);

// 대체된 이후의 문자열을 출력합니다
console.log(input);