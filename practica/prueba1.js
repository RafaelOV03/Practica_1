let interval = setInterval(update, 17);

function update() {
    var id2 = document.getElementById("obj1");

    var chr = {
        ymove : function (velocity) {
            var y = parseInt(getComputedStyle(id2).top);
            var orientation = 0;
        
            if (document.onkeydown == 38) { //arriba
                orientation=-1;
            } else if (document.onkeydown == 40) { //abajo
                orientation=1;
            }
            return y + velocity * orientation;
        }
    };
    
    id2.style.top = (chr.ymove(10))+"px";

}
