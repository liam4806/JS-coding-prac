const bills=[22,295,176,440,37,105,10,1100,86,52]
const tips=[]
const totals=[]

function calcTip (bill){
    if (bill>=50 && bill<=300){
        return bill*0.15;
    }
    else{
        return bill*0.2;
    }
}
function calcAverage(arr){
    let sum=0;
    for (let i=0;i<arr.length;i++){
        sum=sum+arr[i]
    }
    return sum/arr.length
}
for(let i=0;i<bills.length;i++){
    tips[i]=calcTip(bills[i])
    totals[i]=tips[i]+bills[i]
}
console.log(tips)
console.log(totals)
console.log(calcAverage(totals))
