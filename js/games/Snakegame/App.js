(function (window,document,drawModule,undefined) {

    var btnStart = document.getElementById('btnStart');
    btnStart.addEventListener("click",function (){
        drawModule.init();
    });

    document.onkeydown = function (event) {
        keyCode = window.event.keyCode;
        KeyCode = event.keyCode;

        switch (keyCode){
            case 87:
                if(direction !='down'){
                    direction = 'up';
                    console.log('up');
                }
            break;
            case 65:
                if(direction !='right'){
                    direction ='left';
                    console.log('left');
                }
            break;
            case 83:
                if(direction !="up"){
                    direction = 'down';
                    console.log('down');
                }
            break;
            case 68:
                if(direction !='left'){
                    direction ='right';
                    console.log('right');
                }
            break;
        }
    }
    
})(window,document,drawModule);