var last_position_of_x, last_position_of_y;
var mouseEvent = "empty";

    canvas = document.getElementById('myCanvas');
    ctx = canvas.getContext("2d");
    
    color = "black";
    width_of_line = 2;

    var screenwidth = screen.width;
    var new_width = screen.width-70;
    var new_height = screen.height - 300;
        if(screenwidth<992) {
            document.getElementById("myCanvas").width = new_width;
            document.getElementById("myCanvas").height = new_height;
            document.body.style.overflow = "hidden";
        }
    canvas.addEventListener("touchstart", mytouchstart);
    
    function mytouchstart(e)
    {
        color = document.getElementById("colortext").value;
        width_of_line = document.getElementById("colorwidth").value;
        console.log("mytouchstart");
        last_position_of_x = e.touches[0].clientX - canvas.offsetLeft;
        last_position_of_y = e.touches[0].clientY - canvas.offsetTop;
    }
    canvas.addEventListener("touchmove", mytouchmove);
    function mytouchmove(e)
    {

         current_position_of_touch_x = e.touches[0].clientX - canvas.offsetLeft;
         current_position_of_touch_y = e.touches[0].clientY - canvas.offsetTop;

        ctx.beginPath();
        ctx.strokeStyle = color;
        ctx.lineWidth = width_of_line;

        console.log("Last position of x and y coordinates = ");
        console.log("x = " + last_position_of_x + "y = " + last_position_of_y);
        ctx.moveTo(last_position_of_x, last_position_of_y);

        console.log("Current position of x and y coordinates = ");
        console.log("x  = " + current_position_of_touch_x + "y = " + current_position_of_touch_y);
        ctx.lineTo(current_position_of_touch_x, current_position_of_touch_y);
        ctx.stroke();

        last_position_of_x = current_position_of_touch_x; 
        last_position_of_y = current_position_of_touch_y;
    }
function clearcanvas() {
    ctx.clearRect(0,0, ctx.canvas.width, ctx.canvas.height);
    console.log("clear")
}
canvas.addEventListener("mousedown", mymousedown);
function mymousedown(e) {
    color = document.getElementById("colortext").value;
    width_of_line = document.getElementById("colorwidth").value;
    mouseEvent = "mouseDown";
}
canvas.addEventListener("mousemove", mymousemove);
function mymousemove(e) {
    current_x_position = e.clientX - canvas.offsetLeft;
    current_y_position = e.clientY - canvas.offsetTop;

    if (mouseEvent == "mouseDown") {
        canvas.getContext("2d").beginPath();
        canvas.getContext("2d").strokeStyle=color;
        canvas.getContext("2d").lineWidth = width_of_line;

        console.log("Last X position of mouse " + last_x_position +", Last Y position of mouse " + last_y_position);
        canvas.getContext("2d").moveTo(last_x_position, last_y_position);

        console.log("Current X position of mouse " + current_x_position +", Current Y position of mouse " + current_y_position);
        canvas.getContext("2d").lineTo(current_x_position, current_y_position);
        canvas.getContext("2d").stroke();
    }
    last_x_position = current_x_position;
    last_y_position = current_y_position;
}
canvas.addEventListener("mouseup", mymouseup);
function mymouseup(e) {
    mouseEvent = "mouseUp";
}
canvas.addEventListener("mouseleave", mymouseleave);
function mymouseleave(e) {
    mouseEvent = "mouseLeave";
}
function clearCanvas() {
    ctx.clearRect(0,0,canvas.width, canvas.height);
}


