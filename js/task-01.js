//1.Посчитает и выведет в консоль количество категорий в ul#categories, то есть элементов li.item.

const numberCategories = document.querySelector("#categories");
console.log('Number of categories:', numberCategories.children.length);

//2.Для каждого элемента li.item в списке ul#categories, найдет и выведет в консоль текст заголовка 
//элемента(тега < h2 >) и количество элементов в категории(всех вложенных в него < li >).

const title = document.querySelectorAll("li.item");
title.forEach(element => {
    console.log('Category:', element.firstElementChild.textContent);
    console.log('Elements:', element.lastElementChild.children.length);
})