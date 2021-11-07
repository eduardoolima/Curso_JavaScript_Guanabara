function tabuada(){
    let num = document.getElementById("txtNum");
    let tab = document.getElementById("selTab");

    if(num.value.length == 0)
    {
        alert("Digite um numero");
    }
    else
    {        
        let n = Number(num.value);
        tab.innerHTML='';
        for(let i = 1; i <= 10; i++)
        {
            let item = document.createElement('option');
            item.text = `${n} X ${i} = ${n*i}`;
            item.value = `tab${i}`;
            tab.appendChild(item);
        }           
        
    }
}