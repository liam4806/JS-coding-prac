
const MarkMiller={
    name:"Mark",
    mass:78,
    height:1.69,
    calcBMI:function(){
        this.userBMI=(this.mass/this.height **2)
        return this.userBMI
    },
    
}

const JohnSmith={
    name:"John",
    mass:92,
    height:1.95,
    calcBMI:function(){
        this.userBMI=(this.mass/this.height **2)
        return this.userBMI
    },
}
MarkMiller.calcBMI()
JohnSmith.calcBMI()

if(MarkMiller.userBMI>JohnSmith.userBMI){
    console.log(`${MarkMiller['name']}'s BMI (${MarkMiller['userBMI']}) is higher than ${JohnSmith.name} (${JohnSmith.userBMI})`)
}else if(MarkMiller.userBMI<JohnSmith.userBMI){
    console.log(`${JohnSmith.name}'s BMI (${JohnSmith.userBMI}) is higher than ${MarkMiller.name}'s (${MarkMiller.userBMI})`)

    }
else{
console.log("DRAW!")}
