class Fish_handler{
    constructor (){
        this.fish = []
    }

    add_fish(info, canvas, ctx, isKing=false, isQueen=false){
        this.fish.push(new Fish(info, canvas, ctx, isKing, isQueen))
    }

    animate(){
        for (let i = 0; i < this.fish.length; i++)
            this.fish[i].animate();
    }
}


class Fish {
    constructor(info, canvas, context, isKing=false, isQueen=false) {
        this.CANVAS = canvas;
        this.CONTEXT = context;
        this.SPEED = info.speed;
        
        //sprite sheet
        this.SPRITE = new Image();
        this.SPRITE.src = info.src;
        //frames count
        this.SPRITE_COLS = info.sprite_cols;
        this.SPRITE_ROWS = info.sprite_rows;
        //frame size
        this.FRAME_WIDTH = info.frame_width;
        this.FRAME_HEIGHT = info.frame_height;
        //number of frames
        this.TOT_FRAMES = this.SPRITE_ROWS;

        //animation per second (speed of sprite sheet frame change)
        this.anim_p_s = 60 / (Math.random() * 3 + 1)  
        //position
        if (isKing){
            this.pos_x = canvas.width/2;
            this.pos_y = canvas.height / 2;
        }
        else if (isQueen){
            this.pos_x = canvas.width/2 - 15;
            this.pos_y = canvas.height / 2 + 25;
        }
        else{
            this.pos_x = Math.random() * canvas.width + 30;
            this.pos_y = Math.random() * (canvas.height - 50) + 10;
        }

        //index of current frame
        this.current_frame = 0;

        //crop the sprite
        this.src_x = 0;
        this.src_y = 0;

        //drawn frames
        this.drawn_frames = 0;
    }

    _update() {
        //move
        if (this.pos_x > this.CANVAS.width + 50 || this.pos_x < -100) {
            this.pos_y = Math.random() * (this.CANVAS.height - 50) + 10;
            this.SPEED *= -1;
        }
        this.pos_x += this.SPEED;
        //change frame (animate)
        this.current_frame = this.current_frame % this.TOT_FRAMES;
        this.src_x = this.current_frame * this.FRAME_WIDTH;
        if (this.SPEED < 0) {
            //first direction
            this.src_y = 0;
        } else {
            //inverse direction
            this.src_y = this.FRAME_HEIGHT;
        }

        this.drawn_frames++;
        //slow down
        if (this.drawn_frames > this.anim_p_s) {
            this.current_frame++;
            this.drawn_frames = 0;
        }
    }

    animate() {
        this._update();
        //draw updated image
        this.CONTEXT.drawImage(this.SPRITE, this.src_x, this.src_y, this.FRAME_WIDTH, this.FRAME_HEIGHT, this.pos_x, this.pos_y, this.FRAME_WIDTH, this.FRAME_HEIGHT);
    }
}
