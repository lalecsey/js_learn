let point = 0;
let answer = "";

answer = prompt("Какую птицу называют лесным доктором?");
if (answer == "дятел"){
    console.log("Верно");
    point = ++point;
}else{
    console.log("Неверно!");
}

answer = prompt("Самое глубокое пресноводное озеро в мире?");
if (answer == "Байкал"){
    console.log("Верно");
    point = ++point;
}else{
    console.log("Неверно!");
}

console.log("Вы набрали " + point + " баллов.")

