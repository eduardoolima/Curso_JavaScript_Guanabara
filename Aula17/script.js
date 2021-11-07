let numbers = [];
let num = document.getElementById("number");
let list = document.getElementById("addNumber");
let res = document.getElementById("res");

function addNumbers()
{
    let n = Number(num.value);
    
    if(n == 0){
        alert("Insira um Número entre 1 e 100!");
        return;
    }
    if(numbers.indexOf(n) != -1){
        alert("Número já adicionado!");
        return;
    }
    if(n < 1 || n > 100){
        alert("Número inválido!");
    }
    else{
        numbers.push(n);           
        let item = document.createElement('option');
        item.text = `Valor ${n} adcionado`;
        list.appendChild(item);
        res.innerHTML = '';         
    }
    num.value = "";
}

function finsh()
{
    if(numbers.length == 0){
        alert("Adicione numeros antes de finalizar.");
    }
    else{
        res.innerHTML = '';
        res.innerHTML += `<p>Ao todo, temos ${numbers.length} numeros cadastrados.</p>`
        let bigger = 1;
        let smaller = 100;
        let total = 0;
        let average = 0;
        for(let i=0; i<numbers.length; i++){
            if(numbers[i] > bigger){
                bigger = numbers[i];
            }
            if(numbers[i] < smaller){
                smaller = numbers[i];
            }
            total += numbers[i];                        
        }
        average = total/numbers.length;
        res.innerHTML += `<p>O maior valor informado foi ${bigger}.</p>`
        res.innerHTML += `<p>O menor valor informado foi ${smaller}</p>`
        res.innerHTML += `<p>Somando todos os valores temos ${total}.</p>`
        res.innerHTML += `<p>A média de todos os valores é ${average}.</p>`
    }
} 
