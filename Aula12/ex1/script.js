function load(){
    var msg = document.getElementById("msg");
    var img = document.getElementById("image");
    var data = new Date();
    var hour = data.getHours()
    msg.innerHTML = `now it's ${hour} hours`
    if(hour >- 0 && hour <12 )
    {
        img.src="Manha.png";
        document.body.style.background  = "#e2cd9f"
    }
    else if(hour >= 12 && hour <18)
    {
        img.src="Tarde.png";
        document.body.style.background = "#b9846f";
    }
    else
    {
        img.src="Noite.png";
        document.body.style.background = "#515154";
    }
}
