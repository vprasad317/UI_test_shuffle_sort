let data = [
    {
        "id": 0,
        "value": 1,
    },
    {
        "id": 1,
        "value": 2,
    },
    {
        "id": 2,
        "value": 3,
    },
    {
        "id": 3,
        "value": 4,
    },
    {
        "id": 4,
        "value": 5,
    },
    {
        "id": 5,
        "value": 6,
    },

    {
        "id": 6,
        "value": 7,
    },
    {
        "id": 7,
        "value": 8,
    },
    {
        "id": 8,
        "value": 9,
    },
    
];
let coloArr = ['6F98A8', '2B8EAD', '2F454E', '2B8EAD', '2F454E', 'BFBFBF', 'BFBFBF', '6F98A8', '2F454E'];

let container = document.getElementById(`data-holder`);
function dataLoad() {
    constructDivs(data);
}
dataLoad();

function constructDivs(data) {
    data.forEach(element => {
        let newElem = document.createElement(`div`);
        newElem.innerHTML = element.value;
        newElem.classList.add(`item`);
        newElem.classList.add(`color_${coloArr[element.id]}`);
        container.appendChild(newElem);
    })
}

function shuffleData() {
    let containerElem = document.getElementById(`data-holder`);
    containerElem.innerHTML = ``;
    let ElementData = data;
    let shuffleData = ElementData.sort(() => Math.random() - 0.5);
    constructDivs(shuffleData);
}

function sortData() {
    let containerElem = document.getElementById(`data-holder`);
    containerElem.innerHTML = ``;
    let ElementData = data;
    let sortData = ElementData.sort((a,b) => (a.id > b.id) ? 1 : ((b.id > a.id) ? -1 : 0)); 
    constructDivs(sortData);
}