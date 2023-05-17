let interval = setInterval(update, 17);
var tiempo = 0;
function update() {
    var id2 = document.getElementById("obj1");
    tiempo++;
    var chr = {
        ymove : function (velocity) {
            var y = parseInt(getComputedStyle(id2).top);
            var orientation = 1;
            /*
            if (document.onkeydown == 38) { //arriba
                orientation=-1;
            } else if (document.onkeydown == 40) { //abajo
                orientation=1;
            }*/
            return velocity+Math.ceil(Math.sin(tiempo*0.05)*velocity)//y + velocity * orientation;
        },
        xmove : function (velocity) {
            var y = parseInt(getComputedStyle(id2).left);
            var orientation = 1;
            /*
            if (document.onkeydown == 38) { //arriba
                orientation=-1;
            } else if (document.onkeydown == 40) { //abajo
                orientation=1;
            }*/
            return velocity+Math.ceil(Math.cos(tiempo*0.05)*velocity)//y + velocity * orientation;
        }
    };
    
    id2.style.top = (chr.ymove(300))+"px";
    id2.style.left = (chr.xmove(300))+"px";
}
