/* Первое задание */

alert('ПЕРВОЕ ЗАДАНИЕ');

var age = +prompt('Введите свой возраст');

if(age <= 18) {
    alert('Вы ещё молоды, Вам нужно учиться');
} else if(age > 18 && age <= 50) {
    alert('Вам нужно работать');    
} else if(age > 50 && age <=59) {
    alert('Вам скоро на пенсию');
} else if(age > 59 && age <=100) {
    alert('Вы пенсионер');
} else {
    alert('Стыдно вводить непрпавильные значения');
}


/* Второе задание */

alert('ВТОРОЕ ЗАДАНИЕ');

var time = +prompt('Который час? Введите круглое число');

switch(time) {
    case 0:
        alert(time + ' часов ночи')
        break;
    case 1:
        alert(time + ' час ночи')
        break;
    case 2:
        alert(time + ' часа ночи')
        break;
    case 3:
        alert(time + ' часа ночи')
        break;
    case 4:
        alert(time + ' часа ночи')
        break;
    case 5:
        alert(time + ' часов ночи')
        break;
    case 6:
        alert(time + ' часов ночи')
        break;
    case 7:
        alert(time + ' часов утра')
        break;
    case 8:
        alert(time + ' часов утра')
        break;
    case 9:
        alert(time + ' часов утра')
        break;
    case 10:
        alert(time + ' часов утра')
        break;
    case 11:
        alert(time + ' часов дня')
        break;
    case 12:
        alert(time + ' часов дня')
        break;
    case 13:
        alert(time + ' часов дня')
        break;
    case 14:
        alert(time + ' часов дня')
        break;
    case 15:
        alert(time + ' часов дня')
        break;
    case 16:
        alert(time + ' часов вечера')
        break;
    case 17:
        alert(time + ' часов вечера')
        break;
    case 18:
        alert(time + ' часов вечера')
        break;
    case 19:
        alert(time + ' часов вечера')
        break;
    case 20:
        alert(time + ' часов вечера')
        break;
    case 21:
        alert(time + ' час вечера')
        break;
    case 22:
        alert(time + ' часа вечера')
        break;
    case 23:
        alert(time + ' иди спать уже')
        break;
    default:
        alert('Такого времени не существует')
        break;
}



/* Третье задание */

alert('ТРЕТЬЕ ЗАДАНИЕ');

var a = +prompt('Введите первое число из трех');

var b = +prompt('Введите второе число из трех');

var c = +prompt('Введите третье число из трех');

if(a > b && a < c) {
    alert(a + ' серединное значение');
} else if (a > c && a < b) {
    alert(a + ' серединное значение');
} else if (b > c && b < a) {
    alert(b + ' серединное значение');
} else if (b > a && b < c) {
    alert(b + ' серединное значение');
} else if (c > a && c < b) {
    alert(c + ' серединное значение');
} else if (c > b && c < a) {
    alert(c + ' серединное значение');
} else {
    alert('Что-то где-то вы неправильно ввели');
}



