function check(){
    var date = new Date();
    var year = date.getFullYear();
    var byear = document.getElementById("txtYear");
    var res = document.getElementById("res");    
    if(byear.value.length == 0 || byear.value > year)
    {
        alert("ERROR! verify your data and try again");
    }
    else
    {
        var radSex = document.getElementsByName("radsex");
        var age = year - Number(byear.value);
        var sex = "";
        var img = document.createElement('img');
        img.setAttribute("id", "photo");
        if(radSex[0].checked)
        {
            sex="Man";
            if(age>=0 && age<=11)
            {
                img.setAttribute("src", "boy.png");
            }
            else if(age<18)
            {
                img.setAttribute("src", "man.png");
            }
            else if(age<60)
            {
                img.setAttribute("src", "man.png");
            }
            else
            {
                img.setAttribute("src", "velhote.png");
            }
        }
        else if(radSex[1].checked)
        {
            sex="Woman";
            if(age>=0 && age<=11)
            {
                img.setAttribute("src", "girl.png");
            }
            else if(age<18)
            {
                img.setAttribute("src", "woman.png");
            }
            else if(age<60)
            {
                img.setAttribute("src", "woman.png");
            }
            else
            {
                img.setAttribute("src", "idosa.png");
            }
        }
        res.style.textAlign = "center";
        res.innerHTML = `We detected a ${age} year old ${sex}.`;
        res.appendChild(img);
    }
}
