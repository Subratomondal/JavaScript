// event delegation = jab aap event listener se kai saare different elements ke events ko handle kar sake
// event listener ko parent par lagao and unke id, class ya fir tag ke basis par differentiate karke different task karo

var parent=document.querySelector("#parent");

parent.addEventListener("click",function(event){
    if(event.target.id==="play"){
        console.log("play song");
    }
    else if(event.target.id==="pause"){
        console.log("pause song");
    }
})