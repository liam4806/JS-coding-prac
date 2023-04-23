const dolphins=(97+112+101)/3
const Koalas=(109+95+106)/3

if (dolphins<100 && Koalas<100){
    console.log("The score must be higher than 100")
}
else if (dolphins>Koalas && dolphins>99){
    console.log("Dolphins win")
}
else if (Koalas>dolphins && Koalas>99){
    console.log("Koalas win")
}
else{
    console.log("Draw")
}
