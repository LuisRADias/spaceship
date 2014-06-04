var c, ctx;
var now, then;

var spaceship;
var bullets;

var pressed;

$(document).ready( function ()
{
    c = document.getElementById("canvas1");
    ctx = c.getContext("2d");
    
    pressed = new Array(0, 0, 0);
    bullets = new Bullet;
    bullets.set({x:0, y:0}, 0);
    
    //c.onclick = play;
    play();
    c.onkeydown = attPos;
    c.onkeyup = attPos2;
});

function attPos (e)
{
//    alert(e.keyCode);
    if (e.which == 32)
    {
        pressed[0] = 1;
        e.preventDefault();
    }
    
    if (e.keycode < 37 || e.keycode > 40)
        return true;
    
    e.preventDefault();

    if (e.keyCode == 38) // up
        pressed[1] = 1;
    else if (e.keyCode == 39) // right
        pressed[2] = 1;
    else if (e.keyCode == 37) // left
        pressed[2] = -1;

}

function attPos2 (e)
{
//    alert(e.keyCode);
    if (e.which == 32)
    {
        pressed[0] = 0;
        e.preventDefault();
    }
    
    if (e.keycode < 37 || e.keycode > 40)
        return true;
    
    e.preventDefault();

    if (e.keyCode == 38) // up
        pressed[1] = 0;
    else if (e.keyCode == 39) // right
        pressed[2] = 0;
    else if (e.keyCode == 37) // left
        pressed[2] = 0;

}

function play ()
{
    spaceship = new Spaceship ();
    then = Date.now();
    setInterval(run, 10);
}

function run ()
{
    now = Date.now();
    ctx.fillStyle = "#000000";
    ctx.fillRect(0,0,1366,728);
    
    spaceship.act(pressed[1], pressed[2], pressed[0], (now-then)/1000);
    spaceship.print(ctx, pressed[1], 1366, 728);

    if (bullets)
    {
 //       bullets.move((now-then)/1000)
        bullets.print(ctx, 1366, 728);
    }

    then = now;
}

/*
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

function play ()
{
    then = Date.now();
    interval = setInterval(run, 1);
}

function pause ()
{
    clearInterval(interval);
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
    
    
    if (p > 3000)
    {
        ctx.drawImage(bkg, p, 0, 600, 700, 0, 0, 600, 700);
        ctx.drawImage(bkg, 0, 0, p - 2990, 700, 3590 - p, 0, p - 2990, 700);
    }
    else
    {
        ctx.drawImage(bkg, p, 0, 600, 700, 0, 0, 600, 700);
    }
    
    ctx.drawImage(npc, n.x, n.y);
    
    then = now;
}
*/








