// Задание 1
let admin;
let name;

name = "Магомед";
admin = name;

alert(admin); 

//////////////////////////////
// Задание 2
let cityName = prompt("Введите название города:");
let yearOfFoundation = prompt("Введите год основания города:");
let population = prompt("Введите население города:");

let currentYear = new Date().getFullYear();
let cityAge = currentYear - yearOfFoundation;

alert(`Городу ${cityName} исполнилось ${cityAge} лет с момента его образования. Население - ${population} человек.`);

//////////////////////////////
// Задание 3
let radius = prompt("Введите радиус круга:");
let area = Math.PI * Math.pow(radius, 2);

alert(`Площадь круга с радиусом ${radius} равна ${area.toFixed(2)} квадратных единиц.`);

//////////////////////////////
// Задание 4
let firstNumber = +prompt('Ввведите 1 число');
let secondNumber = +prompt('Ввведите 2 число');
alert (`Сумма = ${firstNumber + secondNumber}, Разность = ${firstNumber - secondNumber}, Частное = ${firstNumber / secondNumber}, Произведение = ${firstNumber * secondNumber} `);
