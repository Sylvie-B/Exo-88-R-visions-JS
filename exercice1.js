let button = document.getElementById('go');     // valider
button.style.marginBottom = "10px";
let alea = document.getElementById('alea');
let all = document.getElementById('all');
let suppr = document.getElementById('last');
let clear = document.getElementById('clear');


let table = [];
document.getElementById('name').focus();

let para = document.createElement('p');
para.innerHTML = "Entrez au moins 10 valeurs";
document.getElementById('request').appendChild(para);

button.addEventListener('click', function (){
    let userName = document.getElementById('name').value;
    let newTable = table.push(userName);
    document.getElementById('name').value = "";
    document.getElementById('name').focus();
    console.log(table)

    if(table.length === 10){
        let ref = Math.ceil(Math.random() * table.length-1);
        let newPara = document.createElement('div');
        newPara.innerHTML = table[ref];
        document.getElementById('random').appendChild(newPara);
        para.remove();
    }

    if(table.length === 5){
        let other = document.createElement('div');
        other.innerHTML = table[4];
        document.getElementById('random').appendChild(other);
    }
})

let aleaPara = document.createElement('p');
alea.addEventListener('click', function (){
    let x = Math.ceil(Math.random() * table.length-1);
    aleaPara.innerHTML = table[x];
    document.getElementById('random').appendChild(aleaPara);
})

let frame = document.createElement('div');
all.addEventListener('click', function (){
    for (let idx = 0 ; idx < table.length ; idx++){
        frame.innerHTML += idx + " - " + table[idx] + '<br>';
        document.getElementById('random').appendChild(frame);
    }
})

suppr.addEventListener('click', function (){
    let outItem = table.pop();
})

clear.addEventListener('click', function (){
    table.splice(0);
})
