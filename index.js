
let homeIncrementScore = document.getElementById("homeScore");
let guestIncrementScore = document.getElementById("guestScore");


let homeIncremented = 0;
function increment1(){
    homeIncremented += 1;
    homeIncrementScore.textContent = homeIncremented;
}
function increment2(){
    homeIncremented += 2;
    homeIncrementScore.textContent = homeIncremented;
}
function increment3(){
    homeIncremented += 3;
    homeIncrementScore.textContent = homeIncremented;
}
let guestIncremented = 0;
function gIncrement1(){
    guestIncremented += 1;
    guestIncrementScore.textContent = guestIncremented;
}
function gIncrement2(){
    guestIncremented += 2;
    guestIncrementScore.textContent = guestIncremented;
}
function gIncrement3(){
    guestIncremented += 3;
    guestIncrementScore.textContent = guestIncremented;
}