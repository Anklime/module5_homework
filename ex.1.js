//задание 1

*let a = prompt ("Введите число");
a = +a;
console.log (typeof a);

if ((typeof(+a) == 'number') && (!isNaN(+a))){

 if (a % 2 === 0) {
  console.log ("четное");

 }
 else if (a % 1 === 0) {
  console.log ("нечетное");

 }
 else {
  console.log ("Упс, кажется вы ошиблись");
 }
}