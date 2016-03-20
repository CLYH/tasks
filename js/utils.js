var bottfir=document.getElementsByClassName("bottfir");
var mark = document.querySelectorAll("#outer>div>div:nth-child(2)");
console.log(mark);
function bindEvent(){
    for(var i=0;i<bottfir.length;i++){
        bottfir[i].zhu=i;
        bottfir[i].onmouseenter=function(){
            mark[this.zhu].style.display = "block";
        };

        bottfir[i].onmouseleave = function () {
            mark[this.zhu].style.display = "none";
        };
    }
}
bindEvent();






