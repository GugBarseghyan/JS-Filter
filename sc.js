const container = document.querySelector(".container");
const allbtn = document.querySelector(".allbtn");
const one = document.querySelector(".one");
const two = document.querySelector(".two");
const three = document.querySelector(".three");

let object = [
    {
        name: "Caxik",
        ID: "All",
        ID2: "Gegharkunik"
    },
    {
        name: "Kov",
        ID: "All",
        ID2: "Aragacotn"
    }, 
    {
        name: "Hortik",
        ID: "All",
        ID2: "Syunik"
    },
    {
        name: "Caxik",
        ID: "All",
        ID2: "Gegharkunik"
    },
    {
        name: "Kov",
        ID: "All",
        ID2: "Aragacotn"
    }, 
    {
        name: "Kov",
        ID: "All",
        ID2: "Aragacotn"
    }, 
    {
        name: "Hortik",
        ID: "All",
        ID2: "Syunik"
    },
    {
        name: "Hortik",
        ID: "All",
        ID2: "Syunik"
    }
];

let All = object.filter((region) => region.ID == "All");
let Aragacotn = object.filter((region) => region.ID2 == "Aragacotn");
let Gegharkunik = object.filter((region) => region.ID2 == "Gegharkunik");
let Syunik = object.filter((region) => region.ID2 == "Syunik");
console.log(Aragacotn);
console.log(Gegharkunik);
console.log(Syunik);
console.log(object);

// for adding all items at browser leading
for(let i = 0; i < All.length; i++){
    let userDiv = document.createElement("Div");
    userDiv.classList.toggle(`${All[i].ID}`);
    userDiv.classList.toggle(`${All[i].ID2}`);
    userDiv.innerHTML= `
        <h1>${All[i].name}</h1>
        <h3>${All[i].ID}, ${All[i].ID2}</h3>
        <a href="#">Whatch</a>
    `;
    container.appendChild(userDiv);
}

//filter function
function filterFun(Region){
    container.innerHTML= ""

    infos = JSON.stringify(Region);
    info = localStorage.setItem("Value", infos);
    itemName = localStorage.getItem("Value");
    items = JSON.parse(itemName);
    console.log(items);

    for(let i = 0; i < items.length; i++){
        let userDiv = document.createElement("Div");
        userDiv.classList.toggle(`${items[i].ID}`);
        userDiv.classList.toggle(`${items[i].ID2}`);
        userDiv.innerHTML= `
            <h1>${items[i].name}</h1>
            <h3>${items[i].ID}, ${items[i].ID2}</h3>
            <a href="#">Whatch</a>
        `;
        container.appendChild(userDiv);
    }
}

allbtn.onclick = function(){
    filterFun(All);
}
one.onclick = function(){
    filterFun(Aragacotn);
}
two.onclick = function(){
    filterFun(Gegharkunik);
}
three.onclick = function(){
    filterFun(Syunik);
}