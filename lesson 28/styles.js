let sonlar = [5, 10, 15, 20, 25];
for(son of sonlar){
    console.log(son * 2)
}sonlar.forEach((value,index) => {
    console.log(index + " idx " + value + " Value ")
})
let isimlar= ["Ali" , "Bexruz" , "Islom"]
let uzunlig = isimlar.map((ism) => ism.length)
console.log(uzunlig)