var mouse_event="empty";
var last_position_of_x , last_position_of_y ;
var canvas= document.getElementById("myCanvas");
ctx=canvas.getContext("2d");
color="0DFEFB";
width_of_line=1;

canvas.addEventListener("mousedown", my_mouse_down);

function my_mouse_down(e){

    mouse_event="mouseDown";

}

canvas.addEventListener("mouseup", my_mouse_up);

function my_mouse_up(e){

    mouse_event="mouseUp";

}

canvas.addEventListener("mouseleave", my_mouse_leave);

function my_mouse_leave(e){

    mouse_event="mouseLeave";

}

canvas.addEventListener("mousemove", my_mouse_move);

function my_mouse_move(e){

    current_position_of_x=e.clientX-canvas.offsetLeft;
    current_position_of_y=e.clientY-canvas.offsetTop;

    if(mouse_event == "mouseDown"){

        ctx.beginPath();
        ctx.strokeStyle=color;
        ctx.lineWidth = width_of_line;
        
        console.log("last position of x="+last_position_of_x+"last position of y="+last_position_of_y);
        ctx.moveTo(last_position_of_x , last_position_of_y);

        console.log("current position of x="+current_position_of_x+"current position of y="+current_position_of_y);
        ctx.lineTo(current_position_of_x , current_position_of_y);
        ctx.stroke();

    }

    last_position_of_x=current_position_of_x;
    last_position_of_y=current_position_of_y;

}



