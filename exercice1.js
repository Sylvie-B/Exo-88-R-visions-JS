let button = document.getElementById('go');
let alea = document.getElementById('alea');
let all = document.getElementById('all');

let table = [];
document.getElementById('name').focus();

let para = document.createElement('p');
para.innerHTML = "entrez au moins 10 valeurs";
document.getElementById('random').appendChild(para);

button.addEventListener('click', function (){
    let userName = document.getElementById('name').value;
    let newTable = table.push(userName);
    document.getElementById('name').value = "";
    document.getElementById('name').focus();
    if(table.length >= 10){
        let ref = Math.ceil(Math.random() * table.length-1);
        let para = document.createElement('div');
        para.innerHTML = table[ref];
        document.getElementById('random').appendChild(para);
    }

    if(table.length === 5){
        let other = document.createElement('div');
        other.innerHTML = table[4];
        document.getElementById('random').appendChild(other);
    }

})

alea.addEventListener('click', function (){
    let x = Math.round(Math.random() * table.length-1);
    let newPara = document.createElement('p');
    newPara.innerHTML = table[x];
    document.getElementById('random').appendChild(newPara);
})

all.addEventListener('click', function (){
    let frame = document.createElement('div');
    for (let i = 0 ; i < table.length ; i++){
        frame.innerHTML += i + " - " + table[i];
        document.getElementById('random').appendChild(frame);
    }

})