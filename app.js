//pip3 install flask && python3 server.py

let who = ['my daughter','my dog', 'my alter-ego', 'my bird'];
let action = ['ate', 'crushed', 'destroyed', 'damaged'];
let what = ['my homework', 'the car', 'the cake', 'my phone'];
let when = ['right now', 'before class', 'last week', 'many moons ago']


function randomiseRefactor (x){
    return x[Math.floor(Math.random()*x.length)]
}

document.getElementById('excuse').innerHTML = randomiseRefactor(who) + ' ' + randomiseRefactor(action) + ' ' + randomiseRefactor(what) + ' ' + randomiseRefactor(when)

window.onload = () => {
    document.querySelector('#btclick').addEventListener('click',() => {
        document.getElementById('excuse').innerHTML = randomiseRefactor(who) + ' ' + randomiseRefactor(action) + ' ' + randomiseRefactor(what) + ' ' + randomiseRefactor(when)
    });
}