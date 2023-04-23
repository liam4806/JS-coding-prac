
function printForecast(arr){
    let str=''
    for(let rep=0; rep<arr.length;rep++){
        str=str+`${arr[rep]}°C in ${rep+1} days `    
    }
    return str
}
testd=[12,5,-5,0,4]
console.log(printForecast(testd))
