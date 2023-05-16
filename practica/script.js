function move(event)
{
var key = event.keyCode;
var id = document.getElementById("chr")
var chr = {
ymove : function (velocity) {
    var y = parseInt(getComputedStyle(id).top);
    var orientation = 0;

    if (key == 38) { //arriba
        orientation=-1;
    } else if (key == 40) { //abajo
        orientation=1;
    }
    return y + velocity * orientation;
}
/*
updown : function (){
        var y=0;
        if (k==38) 
            {--y;
        }else if (k==40)
             {++y;}
        return y; 
    },

leftright : function (){
    var x=0;
    if (k==37) 
        {--x;
    }else if (k==39) 
        {++x;}
    return x; 
        }

*/
};

id.style.top = (chr.ymove(10))+"px";
//chrId.style.left = (chr.leftright())+"px";

}