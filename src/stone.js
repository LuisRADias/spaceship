var c, ctx;

var bkg, npc;
var then, interval, move;

var n, b, p;

$(document).ready( function ()
{
    c = document.getElementById("canvas1");
    ctx = c.getContext("2d");

    initGame();
    
    c.onclick = play;
    //c.onmouseover = play;
    c.onmouseout = pause;
    document.onkeydown = attPos;
});

function initGame ()
{
    n = {x:0, y:0};
    p = 0;
    move = b = 1;
    
    bkg = new Image();
    bkg.onload = function ()
    {
        ctx.drawImage(bkg, 0, 0, 600, 700, 0, 0, 600, 700);
        
        npc = new Image();
        npc.onload = function ()
        {
            ctx.drawImage(npc, n.x, n.y);
        }
        npc.src = "rocket.png";
    }
    bkg.src = "space.png";
}

function play (e)
{
    then = Date.now();
    interval = setInterval(run, 10);
}

function pause (e)
{
    clearInterval(interval);
}

function attPos (e)
{
    if(e.keyCode == 40) // down
        move++;
    else if (e.keyCode == 38) // up
        move--;
    else if (e.keyCode == 39) // right
        b++;
    else if (e.keyCode == 37) // left
    {
        if (b != 1)
            b--;
    }
}

function run ()
{
    //ctx.clearRect(0,0,600,700);
    var now = Date.now();
    
    p += b * 64 * (now - then)/1000;
    p %= 3600;
    
    n.y += move * 64 * (now - then)/1000;
    if (n.y < 0)
        n.y += 700;
    n.y = n.y % 700;
    
    ctx.drawImage(bkg, p, 0, 600, 700, 0, 0, 600, 700);
    if (p > 3000)
        ctx.drawImage(bkg, 0, 0, p - 3000, 700, 3590 - p, 0, p - 3000, 700);
    ctx.drawImage(npc, n.x, n.y);
    
    then = now;
}









