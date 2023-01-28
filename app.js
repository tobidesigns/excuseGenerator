//pip3 install flask && python3 server.py

let who = ['my daughter','my dog', 'my alter-ego', 'my bird'];
let action = ['ate', 'crushed', 'destroyed', 'damaged'];
let what = ['my homework', 'the car', 'the cake', 'my phone'];
let when = ['right now', 'before class', 'last week', 'many moons ago']

function randomise(){
    
    let whoHolder = who[Math.floor(Math.random()*who.length)]
    let actionHolder = action[Math.floor(Math.random()* action.length)]
    let whatHolder =what[Math.floor(Math.random()* what.length)]
    let whenHolder =when[Math.floor(Math.random()* when.length)]

    document.getElementById('excuse').innerHTML = whoHolder + ' ' + actionHolder + ' ' + whatHolder + ' ' + whenHolder
}

window.onload 

randomise();


//document.getElementById(excuse).innerHTML = randomise()