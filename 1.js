var name_0 = prompt ('Кто колобок?');
var name_1 = prompt ('Кто дед?');
var name_2 = prompt ('Кто бабка?');
var name_3 = prompt ('Кто рассказчик?');
var name_4 = prompt ('Кто медведь?');
var name_5 = prompt ('Кто заяц?');
var name_6 = prompt ('Кто волк?');
var name_7 = prompt ('Кто лиса?');

let div_1 = document.createElement('div');
div_1.className = "msg_1";
let div_2 = document.createElement('div');
div_2.className = "msg_2";
let div_3 = document.createElement('div');
div_3.className = "msg_3";
let div_4 = document.createElement('div');
div_4.className = "msg_2";


div_1.innerHTML = `${name_3} : Жили-были дед да бабка. Как-то сидел дед и есть захотел. Вот говорит бабке.`;
document.body.append(div_1);

div_2.innerHTML = `<br>${name_1}: Испеки, бабка, колобок.`;
document.body.append(div_2);

div_3.innerHTML = `<br>${name_2}: Из чего печь-то? Муки нет.`;
document.body.append(div_3);

div_4.innerHTML =  `<br>${name_1}: А ты, бабка, пойди, по сусекам поскреби, по амбару помети! Авось муки и наберется.`;
document.body.append(div_4);








