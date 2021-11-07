function tabuada(){
    let num = document.getElementById("txtNum");
    let tab = document.getElementById("selTab");

    if(num.value.length == 0)
    {
        window.alert("Digite um numero!")
    } 
    else
    {
        let n = Number(num.value);

        for(let i = 1;i<=10;i++)
        {
            let item = document.createElement("option");
            item.text = `${num} x ${i} = ${num*c}`;
            tab.appendChild(item);
        }
    }
    
}