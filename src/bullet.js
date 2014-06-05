function Bullet ()
{
    var position;
    var angle;
    var speed;
    
    this.init = function ()
    {
        position = {x:0, y:0};
        angle = 0;
        speed = {x:0, y:0};
    }
    
    this.set = function (iPosition, iAngle)
    {
        position = {x:iPosition.x, y:iPosition.y};
        angle = iAngle;
        speed.x = Math.cos(angle) * 64;
        speed.y = Math.sin(Math.PI + angle) * 64;
    }

    this.move = function (dt)
    {
        position.x += speed.x * dt;
        position.y += speed.y * dt;
    }
    
    this.print = function (ctx, w, h)
    {
        var iPosition = {x:position.x, y:position.y};
        
        iPosition.x = iPosition.x%w;
        iPosition.y = iPosition.y%h;
        
        if (iPosition.x < -w/2)
            iPosition.x += w;
        else if (iPosition.x > w/2)
            iPosition.x -= w;
        if (iPosition.y < -h/2)
            iPosition.y += h;
        else if (iPosition.y > h/2)
            iPosition.y -= h;
        iPosition.x += w/2;
        iPosition.y += h/2;

        ctx.strokeStyle="#FFFFFF";
        ctx.beginPath();
        ctx.arc(iPosition.x,iPosition.y,1,0,2*Math.PI);
        ctx.stroke();
    }

    this.init();
}








