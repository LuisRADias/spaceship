function Spaceship ()
{
    var position;
    var angle;
    
    var speed;
    
    var accel;
    var angAccel;
    
    var init = function ()
    {
        position = {x:0, y:0};
        angle = 0;
        speed = {x:0, y:0};
        accel = 128;
        angAccel = Math.PI;
    }
    
    var accelerate = function (dt)
    {
        speed.x += Math.cos(angle) * accel * dt;
        speed.y += Math.sin(Math.PI + angle) * accel * dt;
    }
    
    var turn = function (clockwise, dt)
    {
        if (clockwise == 1)
            dt *= -1;
        
        angle += angAccel * dt;
        while (angle > 2 * Math.PI)
            angle -= 2 * Math.PI;
    }

    var shoot = function ()
    {
        speed.x += Math.cos(Math.PI + angle) * accel * 0.005;
        speed.y += Math.sin(angle) * accel * 0.005;
/*        
        var bullet = new Bullet();
        bullet.set(position, angle);
        return bullet; */
    }

    var move = function (dt)
    {
        position.x += speed.x * dt;
        position.y += speed.y * dt;
    }
    
    this.act = function (iAccel, iTurn, iShoot, dt)
    {
        if (iTurn)
            turn(iTurn, dt);
        if (iAccel)
            accelerate(dt);
        if (iShoot)
            shoot();

        move(dt);
    }
/*
    this.getPosition = function ()
    {
        return {x:position.x, y:position.y};
    }
*/
    this.print = function (ctx, moving, w, h)
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
        
    
        if (moving)
            ctx.strokeStyle="#FFFF00";
        else
            ctx.strokeStyle="#FFFFFF";
        ctx.beginPath();
        ctx.moveTo(iPosition.x, iPosition.y);
        ctx.moveTo(iPosition.x + 15*Math.cos(angle), iPosition.y - 15*Math.sin(angle));
        ctx.lineTo(iPosition.x - 15*Math.cos(angle) - 10*Math.sin(angle), iPosition.y + 15*Math.sin(angle) - 10*Math.cos(angle));
        ctx.lineTo(iPosition.x - 15*Math.cos(angle) + 10*Math.sin(angle), iPosition.y + 15*Math.sin(angle) + 10*Math.cos(angle));
        ctx.closePath();
        ctx.stroke();
    }
    
    this.print2 = function (ctx, moving)
    {    
        if (moving)
            ctx.strokeStyle="#FFFF00";
        else
            ctx.strokeStyle="#FFFFFF";
        ctx.beginPath();
        ctx.moveTo(position.x, position.y);
        ctx.moveTo(position.x + 20*Math.cos(angle), position.y - 20*Math.sin(angle));
        ctx.lineTo(position.x - 20*Math.cos(angle) - 15*Math.sin(angle), position.y + 20*Math.sin(angle) - 15*Math.cos(angle));
        ctx.lineTo(position.x - 20*Math.cos(angle) + 15*Math.sin(angle), position.y + 20*Math.sin(angle) + 15*Math.cos(angle));
        ctx.closePath();
        ctx.stroke();
    }
    
    init();
}



