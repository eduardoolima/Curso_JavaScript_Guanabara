function count(){
    let begin = document.getElementById("txtBegin");
    let end = document.getElementById("txtEnd");
    let step = document.getElementById("txtStep");
    let res = document.getElementById("res");
    if(begin.value.length == 0 || end.value.length == 0 || step.value.length == 0)
    {
        alert("[ERROR] data is missing")
    }
    else
    {        
        res.innerHTML = "Counting: ";
        let b = Number(begin.value);
        let e = Number(end.value);
        let s = Number(step.value);
        if(s <= 0)
        {
            s = 1;
        }

        if(b<=e)
        {
            for(let i = b;i <= e;i += s)
            {
                res.innerHTML += `${i} \u{1F449}`;
            }            
        }
        else
        {
            for(let i = b; i >= e; i -= s)
            {
                res.innerHTML += `${i} \u{1F449}`;
            }            
        }
        res.innerHTML += `\u{1F3C1}`;
        
    }
}