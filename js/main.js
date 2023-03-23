// 1. Вивести числа від 20 до 30 через пропуск, використовуючи крок 0,5 (20 20,5 21 21,5….).
console.log("Task 1");
for (let i = 20; i <= 30; i += 0.5) {
    // console.log(i.toFixed(1));
    console.log(i);
  }

// 2.Один долар коштує 27 гривень. Вивести дані з розрахунком вартості 10, 20, 30... 100 доларів.
  console.log("Task 2");

  const oneDollarInHrivna = 27;

  for (i = 10; i <= 100; i +=10){
    hryvnias =  i * oneDollarInHrivna;
    console.log(`Доллары ${i} = Гривны ${hryvnias} `);
  }

// 3.Дане ціле число. Вивести всі цілі числа від 1 до 100, квадрат яких не перевищує числа N.
    console.log("Task 3");
    
    const N = 100; // the given integer

    for (let i = 1; i * i <= N; i++) {
    console.log(i);
    }
// 4.Дане ціле число. З'ясувати, чи є воно простим (простим називається число, більше 1, які не мають інших дільників крім 1 і себе).
    console.log("Task 4");
    const numberToCheck = Number(prompt('Введите число:'));

if (isNaN(numberToCheck)) {
  console.log('Вы ввели некорректное значение. Введите число.');
} else {
  let isPrime = true;

  if (numberToCheck < 2) {
    console.log(`Число ${numberToCheck} не является простым`);
  } else {
    
    for (let i = 2; i <= Math.sqrt(numberToCheck); i++) {
      if (numberToCheck % i === 0) {
        isPrime = false;
        console.log(`Число ${numberToCheck} не является простым`);
        break;
      }
    }
    if (isPrime) {
      console.log(`Число ${numberToCheck} является простым`);
    }
  }
}



    // 5.Дане деяке число. Визначити, чи можна одержати це число шляхом зведення числа 3 у деякий ступінь. (Наприклад, числа 9, 81 можна отримати, а 13 - не можна).
    console.log("Task 5");
  
    function isPowerOfThree(num) {
		for (let i = 0; i <= num; i++) {
		  if (Math.pow(3, i) === num) {
			 return true;
		  } else if (Math.pow(3, i) > num) {
			 return false;
		  }
		}
		return false;
	 }
	 
	 let num = prompt("Enter a number:");
	 num = Number(num);
	 if (isNaN(num)) { 
		console.log("Ваши данные не корректны - введите число");
	 } else if (isPowerOfThree(num)) {
		console.log(num + " в степень ДА");
	 } else {
		console.log(num + " в степень НЕТ");
	 }
	 
