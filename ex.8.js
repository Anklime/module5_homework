//задание 8

let users = new Map();
users.set("Иван", "23");
users.set("Богдан", "25");
users.set("Игорь", "33");
users.set("Павел", "24");
users.set("Алекс", "16");
users.set("Микки", "36");
users.set("Леон", "40");

for (let user of users.keys()){
    console.log(user + " - имя " + users.get(user) + ", - возраст " );
}
