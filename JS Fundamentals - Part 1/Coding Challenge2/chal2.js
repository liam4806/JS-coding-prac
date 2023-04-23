const Markmass = 78;
const Johnmass = 92;
const Markheight=1.69;
const Johnheight=1.95;

let JohnBMI;
let MarkBMI;

MarkBMI=Markmass/Markheight**2
JohnBMI=Johnmass/Johnheight**2
if (MarkBMI>JohnBMI){
    console.log(`Mark's BMI(${MarkBMI}) is higher than John's(${JohnBMI})!`)
}
else if(JohnBMI > MarkBMI){
    console.log(`John's(${JohnBMI}) is higher than Mark's BMI(${MarkBMI})!`)
}
else{
    console.log("They are the same")
}
