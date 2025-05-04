/*
let color = ["yellow", "red", "purple","coral","#464444"];
let bodycolor = document.body;
let k=0;

function color_() {
   bodycolor.style.backgroundColor = color[k];
   if (k<color.length){
      k++;
   }else{
      k=0;
      bodycolor.style.backgroundColor = color[k];
      k++;  
   }
}
*/
let image = ["img/code.jpeg",
            "img/slider2.png",
            "img/slider3.png"]

let slide = document.getElementById("slider-img")
let index=0;

function next_img(){
   index++;
   if (index>=image.length){
      index=0;
   }
   slide.src=image[index];
}

function prev_img(){
   index--;
   if (index<0){
      index=image.length-1;
   }
   slide.src=image[index];
}

function auto_slide(){
   next_img();
}

setInterval(auto_slide,3000);

let runBtn = document.getElementById("run_button");

runBtn.addEventListener("mouseover", function(){
   let x = Math.random()*(window.innerWidth-100);
   let y = Math.random()*(window.innerHeight-50);
   
   runBtn.style.left= `${x}px`;
   runBtn.style.top= `${y}px`;
})

let crcl = document.getElementById("circle");
/*
document.addEventListener("mousemove", function(event) {
    crcl.style.position = "absolute"; // Убеждаемся, что элемент абсолютно позиционирован
    crcl.style.left = `${event.pageX-15}px`;
    crcl.style.top = `${event.pageY-15}px`;
});
*/
let scrollToTopBtn = document.getElementById("scrollToTop");

// Отслеживаем прокрутку страницы
window.addEventListener("scroll", function () {
    if (window.scrollY > 300) { // Если проскроллили 300px вниз
        scrollToTopBtn.classList.add("show");
    } else {
        scrollToTopBtn.classList.remove("show");
    }
});

// Добавляем клик для возврата наверх
scrollToTopBtn.addEventListener("click", function () {
    window.scrollTo({
        top: 0,
        behavior: "smooth" // Плавная прокрутка
    });
});

let burger = document.getElementById("burger");
let menu = document.querySelector(".nav_menu");
let content = document.querySelector(".content");

burger.addEventListener("click", () => {
   if (menu.classList.contains("active")) {
       menu.style.height = "0px";
       content.style.marginTop = "0px";
   } else {
       menu.style.height = menu.scrollHeight + "px";
       content.style.marginTop = menu.scrollHeight + "px";
   }
   menu.classList.toggle("active");
});

// Закрытие при клике вне меню
document.addEventListener("click", (event) => {
   if (!event.target.closest("header") && menu.classList.contains("active")) {
      menu.classList.remove("active");
      menu.style.height = "0px";
      content.style.marginTop = "0px";
   }
});



let modal = document.querySelector(".modal");
let modal_cont = document.querySelector(".modal-content");
let close = document.querySelector(".close");

let isModal = false;

window.addEventListener("mousemove", (event)=>{
   if (event.clientY < 10 && !isModal){
      modal.style.display = "flex";
      isModal = true;
      document.body.style.overflowY = "hidden";
      
   }
})

modal.addEventListener("click",(event)=>{
   modal.style.display = "none";
   isModal = false;
   document.body.style.overflowY = "visible";
   event.stopPropagation();
})

modal_cont.addEventListener("click",(event)=>{
   event.stopPropagation();
})

/*
let burger = document.getElementById("burger");
let menu = document.querySelector(".nav_menu");




burger.addEventListener("click", ()=>{
    menu.classList.toggle("active");
})
/*
document.addEventListener("click", (event)=>{
    if (!event.target.closest("header")){
        menu.classList.remove("active");
    }

})
*/

/*
let a=5;
*/
/* Объем параллелограмма

let a=prompt("Введите длину",6);
let b=prompt("Введите ширину",4);
let c=prompt("Введите высоту",10);

console.log(Number(a)*Number(b)*Number(c));
*/

/*

 let a=prompt();

 if(a%2==0){
    console.log("Число А - четное");
 }
 else{
    console.log("Нечетное");
 }

*/

/*
let n=prompt();
let c=0;
for(let i=0;i<=n;i++){
   c=c+(1/i);
   console.log(c);

}
console.log(c);
*/

//Массивы и объекты

//console.log(Math.floor(Math.random()*+50)) //Math.floor(Math.random()*(max-min+1)+min)
/*
let n=prompt("Кол-во чисел")
let b=[]
let sum=0

for (let i=0; i<n; i++)
{
   b.push(Math.floor(Math.random()*10))
}

for (let i=0;i<b.length;i++){
   sum+=b[i]
}

console.log(sum/b.length)


let book = {
   title: 'Война и мир',
   author: 'Л.Толстой',
   year: 1950,
}

console.log(book.author)
*/


//Массивы

/*let books = ["Шинель","Война и мир","Колобок", "Вий"];

books.push("Репка");
books.push("Горе от ума");

console.log(books[books.length-1]);*/
/*
n=prompt("Кол-во чисел: ");
let a=[];
let sum=0;

for (let i=0;i<n;i++){
   a[i]=Number(prompt("Введите число"));
   sum=sum+a[i];
}
*/

/*
let n = prompt("Введите число") //n=5
let factorial=1;
for (let i=1;i<=n;i++){
   factorial=factorial*i;
}

console.log(factorial);
*/
/*
let a=[];
let b=[];
let c=[];

let n=Math.floor(Math.random()*(10-5+1))+5;

for (let i=0;i<n;i++){
   a[i]=Math.floor(Math.random()*10);
   b[i]=Math.floor(Math.random()*10);
   c[i]=a[i]*b[i];
}

console.log(a);
console.log(b);

for (let i=0;i<c.length;i++){
   console.log(c[i]);
}

//console.log(Math.floor(Math.random()*10)); //Math.floor(Math.random() * (max - min + 1)) + min

*/


//
/*
a=[];
b=[];//длина массива выбирается случайным образом от 5 до 10
c=[];

//массивы заполняются случайными числами от 1 до 100
//Нужно вывести массив "c", с суммой i элементов массива 

let l = Math.floor(Math.random()*(10-5+1))+5; //длина массивов (рандомно) //Math.floor(Math.random()*(max-min+1))+min

for(let i=0;i<l;i++){
   a[i]=(Math.floor(Math.random()*100)+1);
   b[i]=(Math.floor(Math.random()*100)+1);
   c[i]=a[i]+b[i];
}

console.log(a);
console.log(b);
console.log(c);

*/
/*
//11. В заданном одномерном  массиве, состоящем из n  целых чисел, 
// подсчитать количество четных элементов. N чисел вводится с клавиатуры. Числа в массив заносятся рандомные
от -100 до 100 +//вывести кол-во положительных четных чисел
*/
/*

let a=[];   
let k=0;
let n=prompt("Ввведите кол-во чисел",5);

for(let i=0;i<n;i++){
   a[i]=(Math.floor(Math.random()*(100-(-100)+1))-100);
   if (a[i]%2==0 && a[i]>0){
      k++;
   }
}
console.log(a);
console.log(k);
*/


/*Задача:
Напишите программу, которая создает два массива 
одинаковой длины. Длина массива определяется 
случайно: от 5 до 11.
Эти два массива заполняются случайными числами 
от 2 до 20.

Создайте третий массив, в который попадут:
- Все числа из первого массива, которые больше 
чисел с таким же индексом 1, 50, 20, 58, 100во втором массиве.
- Если число из первого массива меньше или равно 
числу из второго, вместо него добавьте 0*/
/*
let a=[1, 500, 42,45,566, 5343,4343, "Hello world!"];

let listElement = document.getElementById("numberList");

for (let i=0; i<a.length;i++){
   let listItem = document.createElement("li");
   listItem.textContent=a[i]
   listElement.appendChild(listItem)
}
*/
/*
let title = document.querySelectorAll("p");

a=[4,56,7,8]//длина - 4, а номер последнего элемента 4-1

console.log(title[title.length-1].textContent)

let a=[] //длина массива - 4 элемента
let b=[50,70,33,3]

for(let i=0;i<4;i++){
   a[i]=prompt() 
}
*/
/*
let a=["Привет","Как дела"]
let n=0;
let title = document.querySelector("h1");

function change_title(){
   console.log(title);
   if (n>a.length-1){
      n=0
   }
   title.innerHTML=a[n]
   n++;

}
*/






/* 
let a=5;
*/
/* Объем параллелограмма

let a=prompt("Введите длину",6);
let b=prompt("Введите ширину",4);
let c=prompt("Введите высоту",10);

console.log(Number(a)*Number(b)*Number(c));
*/



 let a=prompt();

 if(a%2==0){
    console.log("Число А - четное");
 }
 else{
    console.log("Нечетное");
 }






