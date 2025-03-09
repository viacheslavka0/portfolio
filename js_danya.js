//код для изменения цвета фона
let color_array=["yellow","pink", "red", "green"];
k=0
function color_(){
   document.body.style.backgroundColor = color_array[k];
   k++;
}

//код для добавления элементов li на страницу
let a=[1, 500, 42,45,566, 5343,4343, "Hello world!"];

let listElement = document.getElementById("numberList");

for (let i=0; i<a.length;i++){
   let listItem = document.createElement("li");
   listItem.textContent=a[i]
   listElement.appendChild(listItem)
}

//перебор всех тегов p на сайте и вывод текстового контента послднего тега

let title = document.querySelectorAll("p");

a=[4,56,7,8]//длина - 4, а номер последнего элемента 4-1

console.log(title[title.length-1].textContent)