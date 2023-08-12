/** @format */

const ulCategories = document.querySelector("#categories");
//console.log(ulCategories);

const liItems = document.querySelectorAll("li.item");
const totalCategories = liItems.length;
console.log(`Number of categories: ${totalCategories}`);

liItems.forEach((i) => {
  const title = i.querySelector("h2").textContent;
  const elements = i.querySelectorAll("li").length;
  console.log(`Category: ${title}`);
  console.log(`Elements: ${elements}`);
});
