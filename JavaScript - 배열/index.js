let ranking = ["Jason", "Alice", "Chris", "Jane", "Tom"];

console.log(ranking[0]);
console.log(ranking[1]);
console.log(ranking[2]);
console.log(ranking[3]);
console.log(ranking[4]);

// 배열의 길이
console.log(ranking.length);

// 배열 요소 추가
ranking.push("BeomBeomJoJo");
console.log(ranking[5]);
console.log(ranking.length);

// 배열 요소 삭제
console.log(ranking.pop());
console.log(ranking.length);

// 배열 존재 여부
console.log(ranking.includes("Jason"));
console.log(ranking.includes("Bjoakwe"));

// IndexOf
console.log(ranking.indexOf("Jason"));
console.log(ranking.indexOf("Alice"));
console.log(ranking.indexOf("Chris"));
console.log(ranking.indexOf("Jane"));

// 객체
let userData = {
    name: "jason",
    age: 25,
    gender: "Male",
};

// Dot notation
console.log(userData.name);
console.log(userData.age);
console.log(userData.gender);

// Bracket notation
console.log(userData["name"]);
console.log(userData["age"]);
console.log(userData["gender"]);

console.log(Object.keys(userData));

let result = Object.keys(userData);

console.log(result.includes("name"));
console.log(result.includes("age"));
console.log(result.includes("gender"));

console.log(userData[result[0]]);
console.log(userData[result[1]]);
console.log(userData[result[2]]);

console.log(Object.values(userData));

userData.favoriteFood = ["rice", "noodle", "pizza"];

console.log(Object.values(userData));
