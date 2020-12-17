//---------------1----------------
// const age=prompt('Введите свой возраст')
//     if(age>=0&&age<=2){
//         alert('ребенок');
// }
//     if(age>=12&&age<=18){
//         alert('подросток');
// }
//     if(age>=19&&age<=60){
//         alert('взрослый');
// }
//     if(age>=61){
//         alert('пенсионер');
// }
//     if(age>=3&&age<=11){
//         alert('беспечный');
// }

// -------------------2----------------------
// const number=Number(prompt('Введите число от 0 до 9'));
// switch(number){
//     case 0:alert(')');
//     break;
//     case 1:alert('!');
//     break;
//     case 2:alert('@');
//     break;
//     case 3:alert('#');
//     break;
//     case 4:alert('$');
//     break;
//     case 5:alert('%');
//     break;
//     case 6:alert('^');
//     break;
//     case 7:alert('&');
//     break;
//     case 8:alert('*');
//     break;
//     case 9:alert('(');
//     break;
//     default:alert('Funny');
//     break;
// }

//-------------------3----------------------
// const number=prompt('Введите трех значное число');
// const oneNumber=number.split('');
// if(oneNumber[0]===oneNumber[1]||oneNumber[0]===oneNumber[2]||oneNumber[1]===oneNumber[2])
// {
//     alert('есть одинаковые числа');
// }else{
//     alert('Нету одинаковых цифр');
// }

//----------------------4-------------
// const number=Number(prompt('Введите год'));
// if(number%4==0){
//     if(number%400==0)
//     {
//         alert('высокосный, кратен 400');
//     }else if(number%100==0){
//         alert('высокосный, кратен 100');
//     }else{
//         alert('высокосный');
//     }
// }else{
//     alert('не высокосный');
// }


//-------------5------------
// const number=prompt('Введите пяти значное число');
// const oneNumber=number.split('');
// if(oneNumber[0]===oneNumber[4]&&oneNumber[1]===oneNumber[3])
// {
//     alert('число палиндром');
// }else{
//     alert('число не палиндром');
// }



//-------------6------------
// const number=Number(prompt('Введите количество USD'));
// const valuta=prompt('Введите в какую валюту конвертирывать EUR, UAN или AZN');
// if(valuta=='EUR'){
//     alert('Получилось '+number*0.9+'EUR');
// }
// if(valuta=='UAN'){
//     alert('Получилось '+number*27+'UAN');
// }
// if(valuta=='AZN'){
//     alert('Получилось '+number*50+'AZN');
// }

//---------------7------------
// const number=Number(prompt('Введите сумму покупки'));
// if(number<200){
//     alert(number);
// }
// if(number>=200&&number<=300){
//     alert(number-number*0.03);
// }
// if(number>=300&&number<500){
//     alert(number-number*0.05);
// }
// if(number>=500){
//     alert(number-number*0.07);
// }

//------------8------------
// alert('Ответ вводите цифрой 1, 2 или 3');
// const questionFirst=Number(prompt('Год рождения Тараса Шевченка? Варианты 1.1864 2.1814 3.1862'));
// const questionSecond=Number(prompt('Что открыла Мария Кюри? 1.Радий 2.Калифорний 3.Зубную боль'));
// const questionThird=Number(prompt('Кто такой Джон Уик? 1.Садовник 2.Художник 3.Киллер'));
// let points=0;
// if(questionFirst==2){
//     points=points+2;
// }
// if(questionSecond==1){
//     points=points+2;
// }
// if(questionThird==3){
//     points=points+2;
// }
// alert('Колличество баллов = '+points);

//---------9-------------
// const day=Number(prompt('Введите день'));
// const month=Number(prompt('Введите месяц'));
// const year=Number(prompt('Введите год'));
// let date = new Date(year, month, day);
// date.setDate(date.getDate() + 1);
// alert(date);

