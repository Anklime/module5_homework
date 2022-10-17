//задание 2

let x;

if ((typeof(x) == 'number')&&(!isNaN(x))) {
    console.log("х - это номер");
} else if (typeof(x) == 'string') {
    console.log("х - это строка");
} else if (typeof(x) == 'boolean') {
    console.log("х - это логический тип");
} else {
    console.log("Тип х не определен");
}