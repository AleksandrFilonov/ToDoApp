function trafficlightNextColors(color, n) {
    let colors = ["green", "yellow", "red", "yellow"]; // Массив с цветами, по их порядку появления
    let ind = 0; // Индекс текущего цвета
    switch (color){ // Меняем в зависимости от переменной color
        case "yellow":
            ind = 1;
            break;
        case "red":
            ind = 2;
            break;
    }
    let result = []; // Массив со следующими цветами
    for (let i = ind + 1; i <= ind + n; i++) { // начинаем с ind + 1 т.к мы должны начать со следующего цвета и идем до ind + n
        result.push(colors[i % 4]); // За счет %4 Мы по сути зацикливаем наш массив colors и получаем только индексы 0, 1, 2, 3, 0, 1, 2, 3, 0 и т.п
    }
    return result.join(" "); // Склеиваем ответ в одну строку и возвращаем результат.
}


console.log(trafficlightNextColors("green", 4))  //return "yellow red yellow green"
console.log(trafficlightNextColors("yellow", 1))  //return "red"
console.log(trafficlightNextColors("red", 5))  //return "yellow green yellow red yellow"
