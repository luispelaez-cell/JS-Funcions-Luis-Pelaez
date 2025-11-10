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