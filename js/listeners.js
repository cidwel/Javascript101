let click = 1;

function handleClick(){

    if(click == 5){
        console.log("Please Stop");
    }if(click == 10){
        console.log("Consider to stop please");
    }if(click == 15){
        console.log("I had enough of your bullshit");
        
    }
    click ++;
    document.getElementById("clicksDone").innerHTML = click;
    return false;
}

function showMouseEvent() {
    console.log(event.type);
}
function showKeyEvent() {
    console.log("Kind of event " + event.type);
    console.log("Keycode " + event.keyCode);
    console.log("Key char " + String.fromCharCode(event.charCode));
}


function load() {
    console.log("WINDOW LOADED");
    document.addEventListener("click",handleClick,false);
    document.addEventListener("key", showKeyEvent,false);
    document.onkeypress = showKeyEvent;

    document.addEventListener("mouse", showMouseEvent,false);
}

window.onload = load;

