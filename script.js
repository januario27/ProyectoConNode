// console.log("Hola mundo");

var moment = require('moment');
moment.locale('es');

/* 
let now =  moment().format();
console.log("Ahora", now);

let valid = moment("2020-02-29").isValid();
console.log('Febrero', valid);

let today = moment().format("YYYY");
console.log('Hoy', today); */

// EJERCICIO CLASE 3
// 1. Mostrar fecha mes(nombre del mes) dia año
let today = moment().format("MMMM DD YYYY");
console.log('1. Mostrar fecha mes(nombre del mes) dia año => ', today);

// 2. Mostar que dia fue el dia que naci: Jueves
let birthday = moment("1990-07-27").format("dddd");
console.log('2. Mostar que dia fue el dia que naci => ', birthday);

// 3. Mostrar hace cuantos años naciste
var fecha1 = moment('1990-07-27');
var fecha2 = moment();
console.log("3. Mostrar hace cuantos años naciste => ", fecha2.diff(fecha1, 'years'));

// 4. Mostrar que fecha sera en 258 dias (dia-mes-año)
console.log("4. Mostrar que fecha sera en 258 dias (dia-mes-año) => ", moment().add(258, 'days').format("DD-MM-YYYY"));

// 5. Mostrar que fecha sera en 4 semanas (dia-mes-año)
console.log("5. Mostrar que fecha sera en 4 semanas (dia-mes-año) => ", moment().add(4, 'weeks').format("DD-MM-YYYY"));
