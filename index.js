let homeScore = 0
let guestScore = 0

let homeScoreEl = document.getElementById("home-score")
let guestScoreEl = document.getElementById("guest-score")


function addOneHome() {
    homeScore += 1
    homeScoreEl.textContent = homeScore
    
    checkLeader()

}

function addTwoHome() {
    homeScore += 2
    homeScoreEl.textContent = homeScore
    
    checkLeader()

}

function addThreeHome() {
    homeScore += 3
    homeScoreEl.textContent = homeScore
    
    checkLeader()

}


function addOneGuest() {
    guestScore += 1
    guestScoreEl.textContent = guestScore
    
    checkLeader()

}

function addTwoGuest() {
    guestScore += 2
    guestScoreEl.textContent = guestScore
    
    checkLeader()

}

function addThreeGuest() {
    guestScore += 3
    guestScoreEl.textContent = guestScore
    
    checkLeader()

}


function checkLeader() {
    if (homeScore > guestScore) {
        homeScoreEl.classList.add("leading")
        guestScoreEl.classList.remove("leading")
    } else if (guestScore > homeScore) {
        guestScoreEl.classList.add("leading")
        homeScoreEl.classList.remove("leading")
    } else {
        homeScoreEl.classList.remove("leading")
        guestScoreEl.classList.remove("leading")
    }
}






