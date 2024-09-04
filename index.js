// 1.
// function z1() {
//     num1 = prompt()
//     num2= prompt()
//     num3= num1*num2
//     alert(num3)
// }
// z1()

// 2.
// function user(){
//     let surname = prompt("Введите вашу Фамилию:");
//     let name = prompt("Введите ваше Имя:");
//     let age = prompt("Введите ваш возраст:");
//     alert('Привет!' + surname + ' ' + name + 'с возрастом' + age)
// }
    
// user()

// 3.
// function gender() {
//     let gen = prompt("Введите ваш гендер:");

//     if (gen === "M") {
//         return "Вы выбрали мужской гендер.";
//     } else if (gen === "F") {
//         return "Вы выбрали женский гендер.";
//     } else {
//         return "Некорректный ввод. Пожалуйста, введите 'мужской' или 'женский'.";
//     }
// }

// alert(gender());

// 4.
// function getDayOfWeek(dayNumber) {
//     switch (dayNumber) {
//         case 1:
//             return "Понедельник";
//         case 2:
//             return "Вторник";
//         case 3:
//             return "Среда";
//         case 4:
//             return "Четверг";
//         case 5:
//             return "Пятница";
//         case 6:
//             return "Суббота";
//         case 7:
//             return "Воскресенье";
//         default:
//             return "Ошибка: число должно быть от 1 до 7.";
//     }
// }

// let user = prompt("Введите число от 1 до 7 для получения дня недели:");
// let dayNumber = parseInt(user, 10);

// let result = getDayOfWeek(dayNumber);
// alert(result);

// 5.
// for (let i = 1; i <= 100; i++) {
//     let ageStatus;

//     if (i >= 1 && i <= 17) {
//         ageStatus = 'ребенок';
//     } else if (i >= 18 && i <= 30) {
//         ageStatus = 'молодой';
//     } else if (i > 30 && i <= 55) {
//         ageStatus = 'зрелый';
//     } else {
//         ageStatus = 'старый';
//     }
//     console.log(i + '-' + ageStatus);
// }

// 6.
// function user() {
//     let ageStatus;
//     let name = prompt("Введите ваше Имя:");
//     let age = parseInt(prompt("Введите ваш возраст:"), 10);
//     if (age >= 1 && age <= 17) {
//         ageStatus = 'ребенок';
//     } else if (age >= 18 && age <= 30) {
//         ageStatus = 'молодой';
//     } else if (age > 30 && age <= 55) {
//         ageStatus = 'зрелый';
//     } else if (age > 55 && age <= 100) {
//         ageStatus = 'старый';
//     } else {
//         ageStatus = 'неверный возраст'; // Если введено число вне допустимого диапазона
//     }
//     alert(name + ' имеет возраст ' + age + ' и он ' + ageStatus);
// }
// user()

// 8.
// const fillButton = document.getElementById('Button');
// const emailInput = document.getElementById('Input');

// Button.addEventListener('click', function(){
//     emailInput.value = 'test@email.ru';
// })

// 9.
// const userInput = document.getElementById('userInput');
// const submitButton = document.getElementById('submitButton');

// submitButton.addEventListener('click', function() {
//     const inputText = userInput.value; 

//     if (inputText.trim() === '') {
//         alert('Вы ничего не ввели в поле.');
//     } else {
//         alert('Вы ввели' + inputText); 
//     }
// });

// 10.
// const blockButton = document.getElementById('blockButton');
// const unblockButton = document.getElementById('unblockButton');
// const inputField = document.getElementById('inputField');

// blockButton.addEventListener('click', function() {
//     inputField.disabled = true;
// });

// unblockButton.addEventListener('click', function() {
//     inputField.disabled = false;
// });

// 11.
// const square = document.getElementById('square');
// const toggleButton = document.getElementById('toggleButton');
// toggleButton.addEventListener('click', function() {
//     if (square.style.display === 'none') {
//         square.style.display = 'block';
//         toggleButton.textContent = 'Скрыть квадрат';
//     } else {
//         square.style.display = 'none';
//         toggleButton.textContent = 'Показать квадрат';
//     }
// });

// 12.
// const square = document.getElementById('square');
// square.addEventListener('mouseover', function() {
//     square.style.backgroundColor = 'green';
// });
// square.addEventListener('mouseout', function() {
//     square.style.backgroundColor = 'red'; //
// });