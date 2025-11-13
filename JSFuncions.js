function ex1(nom= "Luis",cognom="Pelaez"){
 console.log(nom+" "+cognom)
}
ex1()
function ex2(valor) {
    console.log(typeof valor)
}
ex2("pepino")

function ex3(data){
    data = "10/11/2025"
    console.log(data)
}
ex3()
function ex4(){
    x="nacho"
}
ex4()
console.log(x)
function ex5(string = "welow",vocal=0 ){

    for(i = 0; i< string.length; i++){
        if(string[i] === "a" || string[i] === "e" || string[i] === "i" || string[i] === "o" || string[i] === "u"){
            vocal++
        }
    }
    console.log(vocal)
}
ex5()
function ex6(enter, enter1, enter2=1){
    console.log(enter+enter1+enter2)
}
ex6(1,2)
function ex7(){
ex3()
    return(ex6)
}
ex7()
function ex8(ent1,ent2){
    if(ent1 === 30 || ent2 === 30|| ent1+ent2=== 30){
        console.log(true)
    }
}
ex8(30)
const ex9 = function(ent1,ent2){
    if(ent1 === 30 || ent2 === 30|| ent1+ent2=== 30){
        console.log(true)
    }
}
ex9(2,30)

const ex10 = (val1,val2) => {
    if(typeof val1 === typeof val2){
        console.log(true)
    }
    else{
        console.log(false)
    }
}
ex10(1,5)
const ex11 = (val1) =>{
    const raiz= Math.sqrt(val1)
    console.log( raiz.toFixed(2))
}
ex11(2)