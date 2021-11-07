let num = [5,8,2,9,3]
console.log(num)
//num.push(1)
console.log(`O vetor tem ${num.length} posições`)
console.log(num.sort())

//for(let i = 0;i<num.length;i++){
 //   console.log(num[i])
//}

for(let i in num){
    console.log(num[i])
}

let pos = num.indexOf(8)
if(pos == -1){
    console.log("Valor não encontrado")
}
else{
    console.log(`O valor está na posição ${pos}`)
}
