
let countEl = document.getElementById("count-el")
let lapsRan = document.getElementById("laps-ran")

let count = 0


function addLap () {
    count += 1
    countEl.textContent = count
}

function saveLap () {
    let ranStr =+ + count + " - "
    count = 0
    countEl.textContent = count
    lapsRan.textContent += ranStr


}