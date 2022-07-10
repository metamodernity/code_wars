let arr = ["rock", "scissors", "paper"]
function arrayRandElement(arr) {
    var rand = Math.floor(Math.random() * arr.length);
    return arr[rand];
}
let p1 = arrayRandElement(arr)
let p2 = arrayRandElement(arr)
const rps = (p1, p2) => {
    if (p1 === "rock" && p2 === "rock"){ 
        return "Draw!"
    } else {
      if (p1 === "rock" && p2 === "scissors"){ 
        return "Player 1 won!"
    } else {
      if (p1 === "rock" && p2 === "paper"){ 
        return "Player 2 won!"
    } else {
      if (p1 === "scissors" && p2 === "rock"){ 
        return "Player 2 won!"
    } else {
      if (p1 === "scissors" && p2 === "paper"){ 
        return "Player 1 won!"
    } else {
      if (p1 === "scissors" && p2 === "scissors"){ 
        return "Draw!"
    } else{
      if (p1 === "paper" && p2 === "rock"){ 
        return "Player 1 won!"
    } else {
      if (p1 === "paper" && p2 === "scissors"){ 
        return "Player 2 won!"
    } else {
      if (p1 === "paper" && p2 === "paper"){ 
        return "Draw!"
    }
    }
}
    }
}
    }
}
    }
}
}
rps(p1, p2)
