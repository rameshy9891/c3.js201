// --- do not touch  ↓↓↓↓↓↓↓↓↓↓↓↓ ----------
const baseServerURL = `http://127.0.0.1:${ import.meta && import.meta.env && import.meta.env.REACT_APP_JSON_SERVER_PORT ? import.meta.env.REACT_APP_JSON_SERVER_PORT : 9090 }`;
// --- do not touch  ↑↑↑↑↑↑↑↑↑↑↑↑ ----------

// ***** Constants / Variables ***** //

let mainSection = document.getElementById("data-list-wrapper");

let sortAtoZBtn = document.getElementById("sort-low-to-high");
let sortZtoABtn = document.getElementById("sort-high-to-low");

let fetchRecipesBtn = document.getElementById('fetch-recipes');
let fetchEmployeesBtn = document.getElementById('fetch-employees');

let filterLessThan50Btn = document.getElementById("filter-less-than-50");
let filterMoreThanEqual50Btn = document.getElementById("filter-more-than-equal-50");

let catsData = [];



window.addEventListener("load",()=>{
   
        fetch(`${baseServerURL}/cats`)
        .then((res)=>{
            console.log(res)
            return res.json()
        })
    .then((data)=>{
        console.log(data)
        let carddata=data.map((item)=>{
            return {
    id:item.id,
    title:item.name,
    dept:item.description?item.description.substring(0,100):"NO",
    img:baseServerURL+item.image,
    salary:item.cost
            }
        })
        render(carddata)
    })
    })






fetchEmployeesBtn.addEventListener("click",()=>{
    fetch(`${baseServerURL}/employees`)
    .then((res)=>{
        console.log(res)
        return res.json()
    })
.then((data)=>{
    console.log(data)
    let carddata=data.map((item)=>{
        return {
id:item.id,
title:item.name,
dept:item.department,
img:baseServerURL+item.image,
salary:item.salary
        }
    })
    render(carddata)
})
})
fetchRecipesBtn.addEventListener("click",()=>{
    fetch(`${baseServerURL}/recipes`)
    .then((res)=>{
        console.log(res)
        return res.json()
    })
.then((data)=>{
    console.log(data)
    let carddata=data.map((item)=>{
        return {
id:item.id,
title:item.name,
dept:item.instructions? item.instructions.substring(0,100):"NO",
img:baseServerURL+item.image,
salary:item.price
        }
    })
    render(carddata)
})
})

function render(data){
    let list=`
<div class="card-list">
${data.map(item=> getcard(item.id,item.title,item.dept,item.img,item.salary)).join("")}
</div>
    `
    mainSection.innerHTML=list
console.log(list)
}

function getcard(id,title,dept,image,salary){
    let card=`
    <div class="card" data-id=${id}>
    <div class="card-image">
    <img src="${image}" alt="food">
</div>
<div class="card-body" >
<h3 class "card-item card-title">${title}</h3>
<div class ="card-tem card-decription">
${dept}
</div>
<div clas="card-item card-additional-info">${salary} </div> 
</div>
</div>
`
return card

}
