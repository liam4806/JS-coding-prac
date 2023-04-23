function calcTip (bill){
    if (bill>=50 && bill<=300){
        return bill*0.15;
    }
    else{
        return bill*0.2;
    }
}
const bill=100;
const bills=[125,555,44];
const tips=[calcTip(125),calcTip(555),calcTip(44)]
const total=[bills[0]+tips[0],bills[1]+tips[1],bills[2]+tips[2]]

console.log(bills)
console.log(tips)
console.log(total)
