class Bubbles_handler {
    constructor(canvas, ctx, min_bubble_size, max_bubble_size, min_bubble_speed, max_bubble_speed, bubbles_count){
        this.CANVAS = canvas;
        this.CONTEXT = ctx;
        this.bubbles = [];
        for (let i = 0; i < bubbles_count; i++)
            this.bubbles.push(new Bubble(canvas, ctx, min_bubble_size, max_bubble_size, min_bubble_speed, max_bubble_speed))
    }

    animate(){
        for (let i = 0; i < this.bubbles.length; i++)
            this.bubbles[i].animate();
    }
}


class Bubble {
    constructor(canvas, ctx, min_size, max_size, min_speed, max_speed){
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.radius = Math.random() * (max_size - min_size) + min_size;
        this.speed = Math.random() * (max_speed - min_speed) + min_speed;
        this.canvas = canvas;
        this.ctx = ctx;
    }

    _update(){
        if (this.y <= 70){
            this._reset_position();
            return;
        }
        this.y -= this.speed;
    }

    _draw(){
        this.ctx.strokeStyle = "#8bc9ee";
        this.ctx.lineWidth = 1;
        this.ctx.beginPath();
        this.ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
        this.ctx.stroke();
        //inner semi-circle
        this.ctx.beginPath();
        this.ctx.arc(this.x, this.y, this.radius/1.5, 0, Math.PI * 1.5, true);
        this.ctx.stroke();
    }

    _reset_position(){
        this.x = Math.random() * this.canvas.width;
        this.y = this.canvas.height;    
    }

    animate(){
        this._update();
        //draw updated bubble
        this._draw();
    }
}