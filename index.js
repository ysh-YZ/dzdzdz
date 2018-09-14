window.onload=function () {
    let game = new Game();
    game.bg_box=document.querySelector(".bg_box");
    game.fenbox=document.querySelector("#fenbox")
    game.smbox=document.querySelector("#smbox")
    let num=5;
    for(let i=1;i<=num;i++){
        game.createletter();
    }

    let fontercon=document.querySelector(".bg_keyboard .con");
    let state1=true;
    fontercon.onclick=function (event) {
        if (state1){
            return;
        }
        if(event.target.className!="con"){
            let text=event.target.innerText;
            game.remove(text,1);
        }

    }
   let flag=document.querySelector(".play_box");
    let alertbox=document.querySelector(".alert_box")
    let btn =document.querySelector(".alert_box .btn")
    let state=true;
    flag.onclick=function () {
        if(state){
            this.className="end_box";
            state=false;
            state1=false;
            game.run();
        }else {
            this.className="play_box";
            state=true;
            state1=true;
            game.pause();

        }

    }

}