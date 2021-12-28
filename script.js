const niceList = document.getElementById("nice-list");
const naughtyList = document.getElementById("naughty-list");
const btnSort = document.getElementById("btn-sort");
const btnAdd = document.getElementById("btn-add");

const name = document.getElementById("fname");
const addNice = document.getElementById("nice");
const addNaugthy = document.getElementById("naughty");

const sorteesArr = [
    {
        name: "David",
        hasBeenGood: false
    },
    {
        name: "Del",
        hasBeenGood: true
    },
    {
        name: "Valerie",
        hasBeenGood: false
    },
    {
        name: "Astrid",
        hasBeenGood: true
    }
]


const sort = () => {
    const filterSorteesArr = sorteesArr.filter((el) => {
        const li = document.createElement("li");
        li.textContent = el.name;
        if (el.hasBeenGood) {
            niceList.appendChild(li);
        } else {
            naughtyList.appendChild(li);
        }
        el.name = "";
    })
}


function addToList () {
    if (name.value !== "") {
        let newPerson = {name: name.value, hasBeenGood: nice.checked};
        sorteesArr.push(newPerson);
        sort();
    name.value = ""; 
}}

btnSort.addEventListener("click", sort);
btnAdd.addEventListener("click", addToList);