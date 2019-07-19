// Mario Kart Simulator
'use strict';

// Global Variables
let numBanana = 0;
let numShell = 0;
let numStar = 0;
let numMushroom = 0;
let numBill = 0;
let position = Number(document.getElementById("input").value);


// Event Listeners
document.getElementById("simulate").addEventListener("click", simulate);
document.getElementById("p100").addEventListener("click", plus100);
document.getElementById("clear").addEventListener('click', clear);
document.getElementById("p10").addEventListener("click", plus10);
document.getElementById("pinp").addEventListener("click", plusPlayer);
document.getElementById("shroom").addEventListener("click", shroom)
// Event Function
function simulate() {
    position = Number(document.getElementById("input").value);
    // Generate Random Number
    if (position >= 1 && position <= 6) {
        // Simulate Result
        let randNum = Math.random(); // Random Decimal from 0-1
        if (randNum < 0.45) {
            // Banana
            numBanana++;
            document.getElementById("banana").innerHTML = numBanana;
            document.getElementById("results").innerHTML += '<img src ="Banana.png">';
        } else if (randNum < 0.80) {
            // Green Shells
            numShell++;
            document.getElementById("shell").innerHTML = numShell;
            document.getElementById("results").innerHTML += '<img src ="Shell.png">';
        } else if (randNum < 0.95) {
            // Star
            numStar++;
            document.getElementById("star").innerHTML = numStar;
            document.getElementById("results").innerHTML += '<img src ="Star.png">';
        } else if (randNum < 0.99) {
            // Golden Mushroom
            numMushroom++;
            document.getElementById("mushroom").innerHTML = numMushroom;
            document.getElementById("results").innerHTML += '<img src ="Mushroom.png">';
        } else {
            // Bullet Bill
            numBill++;
            document.getElementById("bill").innerHTML = numBill;
            document.getElementById("results").innerHTML += '<img src ="Bullet_Bill.png">';
        }
    } else if (position >= 7 && position <= 12) {
        // Simulate Result
        let randNum = Math.random(); // Random Decimal from 0-1
        if (randNum < 0.05) {
            // Banana
            numBanana++;
            document.getElementById("banana").innerHTML = numBanana;
            document.getElementById("results").innerHTML += '<img src ="Banana.png">';
        } else if (randNum < 0.10) {
            // Green Shells
            numShell++;
            document.getElementById("shell").innerHTML = numShell;
            document.getElementById("results").innerHTML += '<img src ="Shell.png">';
        } else if (randNum < 0.35) {
            // Star
            numStar++;
            document.getElementById("star").innerHTML = numStar;
            document.getElementById("results").innerHTML += '<img src ="Star.png">';
        } else if (randNum < 0.70) {
            // Golden Mushroom
            numMushroom++;
            document.getElementById("mushroom").innerHTML = numMushroom;
            document.getElementById("results").innerHTML += '<img src ="Mushroom.png">';
        } else if (randNum < 1.00) {
            // Bullet Bill
            numBill++;
            document.getElementById("bill").innerHTML = numBill;
            document.getElementById("results").innerHTML += '<img src ="Bullet_Bill.png">';
        }
    }
}

function plus100() {
    for (let n = 0; n < 100; n++) {
        simulate();
    }
}

function plus10() {
    for (let n = 0; n < 10; n++) {
        simulate();
    }
}

function plusPlayer() {
    for (let n = 0; n < Number(document.getElementById('inp').value); n++) {
        simulate();
    }
}

function clear() {
    numBanana = 0;
    numShell = 0;
    numStar = 0;
    numMushroom = 0;
    numBill = 0;
    document.getElementById("bill").innerHTML = numBill;
    document.getElementById("banana").innerHTML = numBanana;
    document.getElementById("shell").innerHTML = numShell;
    document.getElementById("star").innerHTML = numStar;
    document.getElementById("mushroom").innerHTML = numMushroom;
    document.getElementById("results").innerHTML = null;
}

function shroom() {
    while (true) {
        simulate();
            if (numMushroom == 1) {
                break;
            }
        }
    }
