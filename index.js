// 1
const numbs = [1, 5, 4, 10, 0, 3];

for (let i = 0; i < numbs.length; i++) {
    console.log(numbs[i]);
    if (numbs[i] == 10) break;
}

// 1

const numbers = [1, 5, 4, 10, 0, 3];

numbers.forEach((el, index) => {
    if (el == 4) {
        console.log(`${el} : ${index}`);
    }
});

// 3

let days = [1, 3, 5, 10, 20];

days = days.join(' ');
console.log(days);

// 4

let ten = [];

for (let i = 0; i < 10; i++) {
    ten.push(Math.round(Math.random() * 10));
}

let evenNumber = ten.filter(function (elem) {
    if (elem % 2) {
        return false;
    } else {
        return true;
    }
})
console.log(ten);
console.log(evenNumber);

// 5

const M = 3, N = 3;

let matrix = new Array(M);
for (let i = 0; i < M; i++) {
    matrix[i] = new Array(N);
    for (let j = 0; j < N; j++) {
        matrix[i][j] = 1;
    }
}

console.log(matrix);


// 6

let two = [1, 1, 1];

two.push(2, 2, 2);

console.log(two);


// 7

let arrA = [9, 8, 7, 'a', 6, 5];

arrA = arrA.sort();

arrA.pop();

console.log(arrA);


// 8

let arrNumb = [9, 8, 7, 6, 5];

let userNumbers = Number(prompt(`Введите число`));

let search = arrNumb.includes(userNumbers);

console.log(search);

// 9

let word = 'abcdef';
word = word.split('');
word = word.reverse('');
word = word.join('');
console.log(word);

//10 

let six = [];

for (let i = 0; i < 6; i++) {
    six.push(Math.round(Math.random() * 10));
}

console.log(six);
let sum = six.reduce(function (sum, elem) {
    return sum += elem;
}, 0);

let result = sum / six.length;
console.log(result);

// 11

let arrayOfTwo = [[1, 2, 3,], [4, 5, 6]];

let generalArray = [].concat(...arrayOfTwo);
console.log(generalArray);

// 12

let arrOfTen = [1, 5, 3, 7, 2, 8, 5, 3, 9, 0];

for (let i = 0; i < arrOfTen.length - 1; i++) {
    let sum = arrOfTen[i] + arrOfTen[i + 1];
    console.log(sum);
}








