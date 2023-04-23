const calcAverage = (score1,score2,score3)=>{
    return (score1+score2+score3)/3
}

function checkWinner(avd,avk){
    if (avd>avk*2){
        return `Dolphin win (${avd} vs. ${avk})`
    }
    else if (avd*2<avk){
        return `Koalas win (${avk} vs. ${avd})`
    }else{
        return "draw"
    }
}

let dolscore=calcAverage(85,54,41)
let koalscore=calcAverage(23,34,27)

console.log(checkWinner(dolscore,koalscore))
