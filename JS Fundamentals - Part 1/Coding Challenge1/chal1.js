const Markmass = 78;
const Johnmass = 92;
const Markheight=1.69;
const Johnheight=1.95;

let JohnBMI;
let MarkBMI;

MarkBMI=Markmass/Markheight**2
JohnBMI=Johnmass/Johnheight**2

let markHigherBMI = MarkBMI>JohnBMI
console.log(MarkBMI, JohnBMI)
console.log(markHigherBMI)
